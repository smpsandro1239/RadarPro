import { scrapingQueue } from '../jobs/scrape-all'

async function start() {
  console.log('Iniciando worker RadarPro...')
  const worker = await import('./scrape-all').then(m => m.iniciarWorker())
  console.log('Worker iniciado!')
}

start().catch((err) => {
  console.error('Erro ao iniciar worker:', err)
  process.exit(1)
})