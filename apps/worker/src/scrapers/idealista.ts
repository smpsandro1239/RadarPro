import type { Scraper, ScraperConfig, ScraperResultado, ImovelCru } from '@radarpro/types/scraper'
import { Deduplicator } from '@radarpro/packages/db/deduplicator'

export interface IdealistaConfig extends ScraperConfig {}

export class IdealistaScraper implements Scraper {
  config: ScraperConfig = {
    fonteId: 'idealista-pt',
    nome: 'Idealista Portugal',
    urlBase: 'https://www.idealista.com/pt/vendas-imoveis/',
    tipo: 'playwright',
    rateLimitMs: 3000,
    maxPaginas: 5,
  }

  async scrape(): Promise<ImovelCru[]> {
    const resultados: ImovelCru[] = []
    const dedup = new Deduplicator()

    for (let pagina = 1; pagina <= (this.config.maxPaginas || 5); pagina++) {
      try {
        const html = await this.simularFetch(pagina)
        const imoveis = this.parseListagem(html)
        for (const im of imoveis) {
          if (!dedup.existe(im)) {
            dedup.adicionar(im)
            resultados.push(im)
          }
        }
      } catch (e) {
        console.error('Erro pagina', pagina, (e as Error).message)
      }
      // Rate limit entre páginas
      await new Promise((r) => setTimeout(r, this.config.rateLimitMs || 3000))
    }

    return resultados
  }

  getUrlListagem(pagina = 1): string {
    return `${this.config.urlBase}?pag=${pagina}`
  }

  parseListagem(html: string): ImovelCru[] {
    // Simulação de parsing — em produção: Playwright + Cheerio com seletor CSS do site
    // Exemplo de seletores reais do Idealista PT: .item[data-id], .item-info-container, .price-container-price-tag-mod
    const mock = [
      {
        externalId: `idealista-${Date.now()}-1`,
        fonteId: this.config.fonteId,
        url: 'https://www.idealista.com/pt/imovel-exemplo-1',
        titulo: 'T3 Apartamento Lisboa - Avenidas Novas',
        descricao: 'Apartamento T3 com varanda em excelente estado.',
        tipo: 'Apartamento',
        operacao: 'Venda',
        preco: 285000,
        area: 95,
        quartos: 3,
        casasBanho: 2,
        distrito: 'lisboa',
        concelho: 'lisboa',
        fotos: [{ url: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d48f76?w=800&q=80', ordem: 0 }],
        publicadoEm: new Date('2025-10-27'),
        raw: { htmlSnippet: html.substring(0, 500) },
      },
    ]
    return mock
  }

  parseDetalhe(html: string, imovel: ImovelCru): ImovelCru {
    return { ...imovel, raw: { ...imovel.raw, detalheHtml: html.substring(0, 1000) } }
  }

  private async simularFetch(pagina: number): Promise<string> {
    // Em produção: usar Playwright para navegar e capturar HTML real
    // Para Sprint 2: integrar Playwright + selecionar elementos via CSS
    return `<html><body>Mock Idealista PT página ${pagina}</body></html>`
  }
}

export function criarScraperIdealista(): Scraper {
  return new IdealistaScraper()
}