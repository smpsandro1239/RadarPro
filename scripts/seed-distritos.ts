import fs from 'node:fs';

const GEO_JSON = {
  distritos: [
    { id: 'lisboa', nome: 'Lisboa' },
    { id: 'porto', nome: 'Porto' },
    { id: 'setubal', nome: 'Setúbal' },
    { id: 'aveiro', nome: 'Aveiro' },
    { id: 'braga', nome: 'Braga' },
    { id: 'leiria', nome: 'Leiria' },
    { id: 'faro', nome: 'Faro' },
    { id: 'coimbra', nome: 'Coimbra' },
    { id: 'santarém', nome: 'Santarém' },
    { id: 'vila-nova-de-gaia', nome: 'Vila Nova de Gaia' },
    { id: 'ponta-delgada', nome: 'Ponta Delgada' },
    { id: 'funchal', nome: 'Funchal' },
    // … completar até 18 distritos continentais + 2 regiões autónomas
  ],
  regioesAutonomas: [
    { id: 'acores', nome: 'Açores' },
    { id: 'madeira', nome: 'Madeira' },
  ],
  concelhosExemplo: [
    { id: 'lisboa-lisboa', distrito: 'lisboa', nome: 'Lisboa' },
    { id: 'porto-porto', distrito: 'porto', nome: 'Porto' },
    // … completar até 308 concelhos
  ],
};

fs.mkdirSync('data', { recursive: true });
fs.writeFileSync('data/portugal_geografia.json', JSON.stringify(GEO_JSON, null, 2));
console.log('data/portugal_geografia.json criado');