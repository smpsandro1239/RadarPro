import { Queue, Worker } from 'bullmq'
import { criarScraperIdealista } from '../scrapers/idealista'

export const scrapingQueue = new Queue('scraping', {
  connection: { url: process.env.REDIS_URL || 'redis://localhost:6379' },
  defaultJobOptions: {
    removeOnComplete: { count: 100 },
    removeOnFail: { count: 500 },
    attempts: 3,
    backoff: { type: 'exponential', delay: 5000 },
  },
})

export async function iniciarWorker() {
  const worker = new Worker('scraping', async (job) => {
    const { fonteId } = job.data
    console.log(`Job scraping iniciado: ${fonteId}`)

    const scraper = fonteId === 'idealista-pt' ? criarScraperIdealista() : null
    if (!scraper) {
      throw new Error(`Fonte não suportada: ${fonteId}`)
    }

    const resultado = await scraper.scrape()
    console.log(`Scraping ${fonteId}: ${resultado.length} imóveis`)

    // Aqui: inserir no PostgreSQL via Prisma
    // await prisma.imovel.createMany({ data: resultado.map(...) })

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