import type { ImovelCru } from '@radarpro/types/scraper'

export class Deduplicator {
  private cache: Map<string, ImovelCru>
  private keys: Set<string>

  constructor() {
    this.cache = new Map()
    this.keys = new Set()
  }

  private gerarChave(imovel: ImovelCru): string {
    const moradaNormalizada = imovel.morada ? imovel.morada.toLowerCase().trim() : ''
    const chave = `${imovel.preco}-${imovel.tipo}-${imovel.cidade || ''}-${moradaNormalizada}`
    return chave
  }

  existe(imovel: ImovelCru): boolean {
    const chave = this.gerarChave(imovel)
    return this.keys.has(chave)
  }

  adicionar(imovel: ImovelCru): boolean {
    const chave = this.gerarChave(imovel)
    if (this.keys.has(chave)) return false
    this.keys.add(chave)
    this.cache.set(chave, imovel)
    return true
  }

  getTodos(): ImovelCru[] {
    return Array.from(this.cache.values())
  }

  tamanho(): number {
    return this.cache.size
  }
}