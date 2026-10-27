export interface ScoreInput {
  preco: number
  valorMercado?: number
  area?: number
  quartos?: number
  casasBanho?: number
  distrito?: string
  concelho?: string
  tipo?: string
  fonteTipo: 'banco' | 'agencia' | 'particular' | 'judicial'
  publicadoEm?: Date
}

export interface ScoreOutput {
  score: number
  breakdown: Record<string, { peso: number; pontos: number; justificacao: string }>
  classificacao: string
}

const DESCONTO_PESO = 0.35
const RENTABILIDADE_PESO = 0.20
const LOCALIZACAO_PESO = 0.15
const LIQUIDEZ_PESO = 0.10
const QUALIDADE_PESO = 0.10
const FONTE_PESO = 0.10
const ATUALIDADE_PESO = 0.05

export function calcularScore(input: ScoreInput): ScoreOutput {
  const {
    preco,
    valorMercado,
    area,
    quartos,
    casasBanho,
    fonteTipo,
    publicadoEm,
  } = input

  // 1. Desconto vs valor de mercado (35%)
  let descontoPct = 0
  if (valorMercado && valorMercado > 0) {
    descontoPct = ((valorMercado - preco) / valorMercado) * 100
  }
  let pontosDesconto = 0
  if (descontoPct >= 30) pontosDesconto = 35
  else if (descontoPct >= 20) pontosDesconto = 30
  else if (descontoPct >= 10) pontosDesconto = 20
  else if (descontoPct > 0) pontosDesconto = 10
  else pontosDesconto = 0

  // 2. Rentabilidade bruta (20%)
  let rentabilidadePct = 0
  if (area && quartos && valorMercado) {
    // Aluguel mensal estimado: valorMercado * 0.5% (rentabilidade bruta 6% ao ano)
    const aluguelMensalEstimado = valorMercado * 0.005
    rentabilidadePct = (aluguelMensalEstimado * 12) / valorMercado * 100
  }
  let pontosRentabilidade = 0
  if (rentabilidadePct >= 8) pontosRentabilidade = 20
  else if (rentabilidadePct >= 6) pontosRentabilidade = 16
  else if (rentabilidadePct >= 4) pontosRentabilidade = 12
  else if (rentabilidadePct >= 2) pontosRentabilidade = 8
  else pontosRentabilidade = 0

  // 3. Localização (15%)
  const distritosPremium = ['lisboa', 'porto', 'cascais', 'faro']
  let pontosLocalizacao = 0
  if (distritosPremium.includes(input.distrito?.toLowerCase())) {
    pontosLocalizacao = 15
  } else if (input.distrito) {
    pontosLocalizacao = 10
  } else {
    pontosLocalizacao = 5
  }

  // 4. Liquidez (10%) - baseada no tipo e área
  let pontosLiquidez = 0
  if (input.tipo === 'Apartamento') {
    pontosLiquidez = 10
  } else if (input.tipo === 'T0' || input.tipo === 'T1') {
    pontosLiquidez = 9
  } else if (input.tipo === 'Moradia') {
    pontosLiquidez = 7
  } else {
    pontosLiquidez = 5
  }

  // 5. Qualidade do anúncio (10%) - baseada em fotos, descricao, etc.
  let pontosQualidade = 0
  // Se tem area, quartos, casasBanho preenchidos = anúncio completo
  let camposPreenchidos = 0
  if (area) camposPreenchidos++
  if (quartos) camposPreenchidos++
  if (casasBanho) camposPreenchidos++
  if (input.morada) camposPreenchidos++
  pontosQualidade = Math.min(camposPreenchidos * 2.5, 10)

  // 6. Tipo de fonte (10%)
  const fontePontos: Record<'banco' | 'agencia' | 'particular' | 'judicial', number> = {
    banco: 10,
    agencia: 8,
    judicial: 7,
    particular: 5,
  }
  const pontosFonte = fontePontos[fonteTipo]

  // 7. Atualidade (5%) - mais recente = mais pontos
  let pontosAtualidade = 0
  if (publicadoEm) {
    const dias = (Date.now() - publicadoEm.getTime()) / (1000 * 60 * 60 * 24)
    if (dias < 1) pontosAtualidade = 5
    else if (dias < 3) pontosAtualidade = 4
    else if (dias < 7) pontosAtualidade = 3
    else if (dias < 14) pontosAtualidade = 2
    else if (dias < 30) pontosAtualidade = 1
  }

  const scoreTotal = pontosDesconto + pontosRentabilidade + pontosLocalizacao +
    pontosLiquidez + pontosQualidade + pontosFonte + pontosAtualidade

  const classificacao = scoreTotal >= 80 ? 'excelente'
    : scoreTotal >= 60 ? 'bom'
    : scoreTotal >= 40 ? 'regular'
    : 'baixo'

  return {
    score: Math.round(scoreTotal),
    breakdown: {
      desconto: { peso: 35, pontos: pontosDesconto, justificacao: `Desconto de ${descontoPct.toFixed(1)}% vs valor de mercado` },
      rentabilidade: { peso: 20, pontos: pontosRentabilidade, justificacao: `Rentabilidade bruta estimada de ${rentabilidadePct.toFixed(1)}% a.a.` },
      localizacao: { peso: 15, pontos: pontosLocalizacao, justificacao: `Distrito ${input.distrito || 'não informado'}` },
      liquidez: { peso: 10, pontos: pontosLiquidez, justificacao: `Tipo ${input.tipo || 'não informado'}` },
      qualidade: { peso: 10, pontos: pontosQualidade, justificacao: 'Completude do anúncio' },
      fonte: { peso: 10, pontos: pontosFonte, justificacao: `Fonte ${fonteTipo}` },
      atualidade: { peso: 5, pontos: pontosAtualidade, justificacao: 'Idade do anúncio' },
    },
    classificacao,
  }
}

export function classificarScore(score: number): string {
  if (score >= 80) return 'excelente'
  if (score >= 60) return 'bom'
  if (score >= 40) return 'regular'
  return 'baixo'
}