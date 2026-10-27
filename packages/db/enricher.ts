import type { ImovelCru } from '@radarpro/types/scraper'

export interface EnriquecedorIA {
  enriquecer(imovel: ImovelCru): Promise<ImovelCru>
}

export class EnriquecedorGPT4o implements EnriquecedorIA {
  private openai?: any

  constructor(apiKey: string) {
    try {
      this.openai = require('openai').OpenAI({ apiKey })
    } catch (e) {
      console.warn('OpenAI não configurado:', (e as Error).message)
    }
  }

  async enriquecer(imovel: ImovelCru): Promise<ImovelCru> {
    if (!this.openai) {
      return { ...imovel, raw: { ...imovel.raw, enriquecido: false } }
    }

    const prompt = `Analisa este imóvel e calcula:
- Score 0-100 (justificado)
- Valor de mercado aproximado
- Rentabilidade bruta estimada
- Riscos principais
- Classificação (excelente, bom, regular, baixo)

Dados do imóvel:
- Título: ${imovel.titulo}
- Tipo: ${imovel.tipo}
- Operação: ${imovel.operacao}
- Preço: ${imovel.preco} EUR
- Área: ${imovel.area || 'N/A'} m²
- Quartos: ${imovel.quartos || 'N/A'}
- Distrito: ${imovel.distrito}
- Concelho: ${imovel.concelho}
- Fonte: ${imovel.fonteId}

Responde apenas em JSON com as chaves: score, valorMercado, rentabilidadePct, risco, classificacao.`

    try {
      const response = await this.openai.chat.completions.create({
        model: 'gpt-4o',
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.2,
        max_tokens: 800,
      })
      const resposta = JSON.parse(response.choices[0].message.content || '{}')
      return {
        ...imovel,
        score: resposta.score || imovel.score || 50,
        valorMercado: resposta.valorMercado || imovel.valorMercado,
        descontoPct: resposta.descontoPct,
        rentabilidadePct: resposta.rentabilidadePct || imovel.rentabilidadePct,
        raw: { ...imovel.raw, enriquecido: true, ia: resposta },
      }
    } catch (e) {
      console.error('Erro enriquecimento IA:', (e as Error).message)
      return { ...imovel, raw: { ...imovel.raw, enriquecido: false, erro: (e as Error).message } }
    }
  }
}