export interface ImovelCru {
  externalId: string
  fonteId: string
  url: string
  titulo: string
  descricao: string
  tipo: string
  operacao: string
  preco: number
  area?: number
  quartos?: number
  casasBanho?: number
  distrito: string
  concelho: string
  freguesia?: string
  morada?: string
  lat?: number
  lng?: number
  fotos: { url: string; alt?: string; ordem: number }[]
  publicadoEm?: Date
  raw: any
}

export interface ScraperConfig {
  fonteId: string
  nome: string
  urlBase: string
  tipo: 'playwright' | 'cheerio' | 'api'
  headers?: Record<string, string>
  rateLimitMs?: number
  maxPaginas?: number
}

export interface Scraper {
  config: ScraperConfig
  scrape(): Promise<ImovelCru[]>
  getUrlListagem(pagina?: number): string
  parseListagem(html: string): ImovelCru[]
  parseDetalhe(html: string, imovel: ImovelCru): ImovelCru
}

export interface ScraperResultado {
  imoveis: ImovelCru[]
  totalPaginas: number
  erros: string[]
  duracaoMs: number
}