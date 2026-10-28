import { Queue, Worker } from 'bullmq'
import { PrismaClient } from '@prisma/client'
import { criarScraperIdealista } from '../scrapers/idealista'
import { criarScraperImovirtual } from '../scrapers/imovirtual'
import { criarScraperOlx } from '../scrapers/olx'
import { criarScraperBpi } from '../scrapers/bpi'
import { criarScraperEleiloes } from '../scrapers/eleiloes'
import { criarScraperCitius } from '../scrapers/citius'
import { Deduplicator } from '@radarpro/packages/db/deduplicator'

const prisma = new PrismaClient()

export const scrapingQueue = new Queue('scraping', {
  connection: { url: process.env.REDIS_URL || 'redis://localhost:6379' },
  defaultJobOptions: {
    removeOnComplete: { count: 100 },
    removeOnFail: { count: 500 },
    attempts: 3,
    backoff: { type: 'exponential', delay: 5000 },
  },
})

const scrapers: Record<string, () => any> = {
  'idealista': criarScraperIdealista,
  'imovirtual': criarScraperImovirtual,
  'olx': criarScraperOlx,
  'bpi': criarScraperBpi,
  'eleiloes': criarScraperEleiloes,
  'citius': criarScraperCitius,
}

export async function iniciarWorker() {
  const worker = new Worker('scraping', async (job) => {
    const { fonteId } = job.data
    console.log(`Job scraping iniciado: ${fonteId}`)

    const factory = scrapers[fonteId]
    if (!factory) {
      throw new Error(`Fonte não suportada: ${fonteId}`)
    }

    const scraper = factory()
    const resultado = await scraper.scrape()
    console.log(`Scraping ${fonteId}: ${resultado.length} imóveis`)

    // Persistir no DB real (Turso libsql)
    if (resultado.length > 0) {
      const data = resultado.map(im => ({
        externalId: im.externalId,
        fonteId: im.fonteId,
        url: im.url,
        titulo: im.titulo,
        descricao: im.descricao,
        tipo: im.tipo,
        operacao: im.operacao,
        preco: im.preco,
        area: im.area,
        quartos: im.quartos,
        casasBanho: im.casasBanho,
        distrito: im.distrito,
        concelho: im.concelho,
        freguesia: im.freguesia,
        morada: im.morada,
        lat: im.lat,
        lng: im.lng,
        photos: im.fotos,
        publicadoEm: im.publicadoEm,
        raw: im.raw,
      }))

      const resultadoPersistido = await prisma.imovel.createMany({
        data,
        skipDuplicates: true,
      })

      console.log(`Persistido ${resultadoPersistido.count} imóveis no Turso`)
    }

    return { fonteId, total: resultado.length, status: 'ok' }
  }, {
    connection: { url: process.env.REDIS_URL || 'redis://localhost:6379' },
    concurrency: 2,
  })

  worker.on('completed', (job) => {
    console.log(`Job ${job.id} concluído: ${JSON.stringify(job.returnvalue)}`)
  })
  worker.on('failed', (job, err) => {
    console.error(`Job ${job?.id} falhou:`, err.message)
  })

  return worker
}

// Função para adicionar jobs de scraping
export async function adicionarJobs(fontes: string[]) {
  for (const fonteId of fontes) {
    await scrapingQueue.add('scrape', { fonteId })
  }
}

// Função para rodar todos os scrapers imediatamente
export async function rodarTodos(fontes: string[] = ['imovirtual', 'olx', 'bpi', 'eleiloes', 'citius']) {
  console.log(`Iniciando scraping de ${fontes.length} fontes...`)
  for (const fonteId of fontes) {
    await adicionarJobs([fonteId])
  }
  console.log('Todos os jobs adicionados à fila!')
}