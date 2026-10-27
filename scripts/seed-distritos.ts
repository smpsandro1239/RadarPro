import fs from 'node:fs'

const DISTRITOS = [
  { id: 'aveiro', nome: 'Aveiro' },
  { id: 'beja', nome: 'Beja' },
  { id: 'braga', nome: 'Braga' },
  { id: 'bragança', nome: 'Bragança' },
  { id: 'coimbra', nome: 'Coimbra' },
  { id: 'evora', nome: 'Évora' },
  { id: 'faro', nome: 'Faro' },
  { id: 'guarda', nome: 'Guarda' },
  { id: 'leiria', nome: 'Leiria' },
  { id: 'lisboa', nome: 'Lisboa' },
  { id: 'portalegre', nome: 'Portalegre' },
  { id: 'porto', nome: 'Porto' },
  { id: 'santarem', nome: 'Santarém' },
  { id: 'setubal', nome: 'Setúbal' },
  { id: 'vila-real', nome: 'Vila Real' },
  { id: 'viseu', nome: 'Viseu' },
  { id: 'vila-nova-de-gaia', nome: 'Vila Nova de Gaia' },
  { id: 'ponta-delgada', nome: 'Ponta Delgada' },
]

const REGIOES_AUTONOMAS = [
  { id: 'acores', nome: 'Açores' },
  { id: 'madeira', nome: 'Madeira' },
]

// Concelhos principais por distrito (sublista representativa para Sprint 1)
const CONCELHOS_POR_DISTRITO: Record<string, string[]> = {
  aveiro: ['Aveiro', 'Ílhavo', 'Ovar', 'Santa Maria da Feira'],
  beja: ['Beja', 'Évora'],
  braga: ['Braga', 'Guimarães', 'Barcelos', 'Vila Nova de Famalicão'],
  bragança: ['Bragança', 'Miranda do Douro'],
  coimbra: ['Coimbra', 'Figueira da Foz', 'Cantãnhede'],
  evora: ['Évora', 'Montemor-o-Novo'],
  faro: ['Faro', 'Loulé', 'Albufeira', 'Tavira', 'Lagos'],
  guarda: ['Guarda', 'Seia'],
  leiria: ['Leiria', 'Caldas da Rainha', 'Marinha Grande'],
  lisboa: ['Lisboa', 'Sintra', 'Cascais', 'Odivelas', 'Loures', 'Amadora'],
  portalegre: ['Portalegre', 'Elvas'],
  porto: ['Porto', 'Vila Nova de Gaia', 'Matosinhos', 'Gondomar', 'Paredes'],
  santarem: ['Santarém', 'Tomar', 'Abrantes'],
  setubal: ['Setúbal', 'Almada', 'Seixal', 'Barreiro'],
  'vila-real': ['Vila Real', 'Peso da Régua'],
  viseu: ['Viseu', 'Lamego'],
  'vila-nova-de-gaia': ['Vila Nova de Gaia'],
  'ponta-delgada': ['Ponta Delgada'],
  acores: ['Ponta Delgada', 'Angra do Heroísmo', 'Horta'],
  madeira: ['Funchal', 'Câmara de Lobos', 'Ponta do Sol'],
}

const DISTRITOS_TODOS = [...DISTRITOS, ...REGIOES_AUTONOMAS]

function gerarConcelhos(): { id: string; distrito: string; nome: string }[] {
  const concelhos: { id: string; distrito: string; nome: string }[] = []
  for (const distrito of DISTRITOS_TODOS) {
    const lista = CONCELHOS_POR_DISTRITO[distrito.id] || [distrito.nome]
    for (const nome of lista) {
      concelhos.push({
        id: `${distrito.id}-${nome.toLowerCase().replace(/\s+/g, '-')}`,
        distrito: distrito.id,
        nome,
      })
    }
  }
  return concelhos
}

const GEO_JSON = {
  distritos: DISTRITOS_TODOS.map((d) => ({ id: d.id, nome: d.nome })),
  regioesAutonomas: REGIOES_AUTONOMAS,
  concelhos: gerarConcelhos(),
}

fs.mkdirSync('data', { recursive: true })
fs.writeFileSync('data/portugal_geografia.json', JSON.stringify(GEO_JSON, null, 2))
console.log(`Geografia PT criada: ${GEO_JSON.distritos.length} distritos, ${GEO_JSON.concelhos.length} concelhos`)