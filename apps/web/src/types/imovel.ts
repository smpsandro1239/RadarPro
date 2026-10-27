export interface ImovelFoto {
  url: string
  alt?: string
  ordem: number
}

export type FonteTipo = 'banco' | 'agencia' | 'particular' | 'judicial'

export interface ImovelListagem {
  id: string
  tipo: string
  titulo: string
  cidade: string
  distrito: string
  concelho: string
  tempoRelativo: string
  publicadoEm: string
  area: number
  quartos: number
  casasBanho: number
  preco: number
  valorMercado?: number
  descontoPct?: number
  rentabilidadePct?: number
  score: number
  fonteTipo: FonteTipo
  fotos: ImovelFoto[]
  url: string
}