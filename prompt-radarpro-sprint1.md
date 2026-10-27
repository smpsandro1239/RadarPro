# 🎯 PROMPT DE CONTINUAÇÃO — Sprint 1 do RadarPro Portugal

> **Como usar:** cola TODO o texto abaixo (a partir de "INÍCIO DO PROMPT") no teu assistente IA em VSCode/OpenCode, dentro de `C:\Users\smpsa\REA\RadarPro`. Este prompt já traz toda a pesquisa necessária feita — não precisas de parar para pesquisar nada.

---

## INÍCIO DO PROMPT

# CONTEXTO — Estado atual do projeto

O repositório `https://github.com/smpsandro1239/RadarPro` já tem a fundação criada:
- ✅ Monorepo pnpm + turbo configurado
- ✅ `.gitignore`, `.env.example` (18 variáveis), `pnpm-workspace.yaml`, `turbo.json`, `package.json`
- ✅ `docs/reverse-engineering/radarpro-layout.md` (esqueleto)
- ✅ `scripts/seed-distritos.ts` (esqueleto a completar)
- ✅ `packages/types/scraper.ts` (interface comum)
- ✅ Pastas vazias: `apps/web/`, `apps/worker/`

## ⚠️ CORREÇÃO IMPORTANTE (fazer já antes de continuar)

A descrição atual do repo no GitHub diz *"Clone de radarpro.ai para Smart TVs LG"*. **Está errado** — o RadarPro é apenas uma plataforma web SaaS, sem qualquer componente Smart TV / webOS.

Executar:
```bash
gh repo edit smpsandro1239/RadarPro --description "RadarPro Portugal — SaaS agregador de oportunidades imobiliárias abaixo do valor de mercado (clone PT-PT de radarpro.ai). Score 0-100, análise IA, alertas, Stripe."
```

Não criar nenhum ficheiro, configuração ou pasta relacionada com webOS, LG Smart TV, Magic Remote ou empacotamento para TV. Toda a energia de desenvolvimento deve estar focada na plataforma web.

---

## PESQUISA JÁ FEITA (entregue — não precisas pesquisar)

### A. Estrutura oficial do radarpro.ai (referência visual)

Páginas mapeadas (todas em espanhol — replicar em PT-PT):
- `/` — landing
- `/precios` — preços (não carrega, está como modal/CMS — replicar diretamente na landing)
- `/como-funciona` — fluxo 3 passos
- `/faq` — acordeão
- `app.radarpro.ai/oportunidadesBanco` — listagem
- `app.radarpro.ai/analisis-ia` — análise IA
- Páginas cidade: Madrid, Barcelona, Valencia, Málaga, Alicante → **PT-PT equivalentes**: Lisboa, Porto, Setúbal, Faro, Braga, Coimbra, Aveiro, Leiria, Santarém, Vila Nova de Gaia, Funchal, Ponta Delgada
- Páginas temáticas: oportunidades banco, subastas judiciales, pisos baratos, valoración → **PT-PT**: oportunidades banco, oportunidades judiciais, imóveis baratos, valorização

### B. Componentes da landing (réplica visual 1:1)

Ordem de cima para baixo:
1. **Header sticky** — logo esquerda; nav centro (Como funciona / Preços / FAQ); direita ("Aceder" + "Contacta com vendas"). Botão "Aceder" outline, "Contacta com vendas" primário.
2. **Hero** — headline H1 grande tipo *"Encontra as melhores oportunidades imobiliárias"*; subheadline *"Analisamos os anúncios de bancos, portais tradicionais e leilões e selecionamos apenas os que merecem a pena."*; CTA primário *"Ver oportunidades agora →"*; CTA secundário *"Ver planos →"*; **carousel de cartões de imóvel em tempo real** (5 cartões com animação fade).
3. **Bloco estatísticas 24h** — texto *"389 oportunidades novas nas últimas 24 horas"* + gráfico de barras por hora (últimas 24h) com contadores a verde; legenda *"última detetada há 4 horas · 104.719 ativas"*. Slider horizontal com cursor "há 24 h ← → agora".
4. **Bloco "Configura o teu Radar"** — input de pesquisa com placeholder *"Diz-me o que procuras e diz-te quais imóveis da tua zona valem a pena, e porquê."* + botão *"Pesquisar"*. Links rápidos abaixo: *"Imóveis baratos"*, *"Oportunidades em Lisboa"*, *"Oportunidades no Porto"*, *"Oportunidades em Faro"*, *"Guias de Investimento"*.
5. **Carousel de cartões de imóvel** (pré-visualização) — 6 cartões com:
   - Foto de capa (16:10)
   - Badge score no canto (0-100) — verde/âmbar/vermelho conforme valor
   - Tipo + cidade + "há X h" em pequeno
   - "X m² · X hab · X banho"
   - Preço grande + valorização riscada
   - *"Preço muito por baixo da valorização."*
   - **Rentabilidade X,X %**
   - Badge fonte: Banco / Agência / Particular
6. **"Como funciona"** — 3 passos com ícones:
   - 1. Configura o teu radar (filtros: zona, tipo, orçamento)
   - 2. Recebe oportunidades (alerta quando um imóvel está abaixo do mercado)
   - 3. Compra com confiança (análise IA, valor, rentabilidade, riscos)
7. **Tabela comparativa vs. outros portais** — linhas: *"Deteta automaticamente oportunidades"*, *"Mostra valor real do imóvel"*, *"Calcula rentabilidade"*, *"Alertas personalizados"*, *"Análise IA"*. Colunas: RadarPro (✓) / Portais tradicionais (✗) / Bancos (alguns ✓).
8. **Bloco fundador** — foto à esquerda, bio à direita: nome, role, parágrafo de missão.
9. **Testemunhos** — carrossel 3 testemunhos com foto, nome, role (Investidor / Comprador / Mediador), citação em aspas.
10. **Preços** — 3 cards lado a lado:
    - **Free** — 0€ / para sempre: 25 créditos teste, acesso limitado, análise básica. CTA *"Regista-te grátis"*.
    - **Mensal** — 39€/mês: oportunidades ilimitadas, análise completa, alertas personalizados, 1.000 créditos/mês. CTA *"Escolher mensal"*. **Destacado** com badge "Mais popular".
    - **Anual** — 299€/ano (24,92€/mês): mesmo do mensal + 12.000 créditos/ano + economia 36%. CTA *"Escolher anual"*.
11. **FAQ** — acordeão 6-8 perguntas (ex.: *"Como calculais o score?"*, *"De onde vêm os imóveis?"*, *"Posso cancelar quando quiser?"*, *"A análise IA é fiável?"*, *"Há imóveis só do meu concelho?"*, *"Os imóveis são verificados?"*, *"Posso exportar relatórios?"*, *"Como funcionam os créditos?"*).
12. **CTA final** — fundo colorido, headline *"Regista-te grátis agora e encontra oportunidades verificadas"*, botão *"Começar agora →"*.
13. **Footer** — 4 colunas:
    - Produto: Como funciona / Preços / FAQ / Oportunidades / Blog
    - Recursos: Guias de investimento / Imóveis baratos / Subastas judiciais / Valorização
    - Empresa: Sobre nós / Contacto / Termos / Privacidade
    - Social: ícones X, Instagram, LinkedIn, YouTube
    - Linha inferior: © 2025 RadarPro Portugal · Feito com ❤ em Lisboa

### C. Paleta de cores recomendada (réplica fiel)

Inspecionei via DevTools quando possível. Tokens recomendados em `packages/config/design-tokens.ts`:

```ts
export const tokens = {
  colors: {
    // Primária — azul/violeta técnico
    primary: { 50:'#eef2ff', 100:'#e0e7ff', 500:'#6366f1', 600:'#4f46e5', 700:'#4338ca', 900:'#312e81' },
    // Acento — verde "oportunidade" (alinhado com score alto)
    accent: { 50:'#ecfdf5', 500:'#10b981', 600:'#059669', 700:'#047857' },
    // Score cores
    score: { high:'#10b981', medium:'#f59e0b', low:'#ef4444' },
    // Neutros
    bg: { DEFAULT:'#ffffff', subtle:'#f8fafc', muted:'#f1f5f9' },
    text: { DEFAULT:'#0f172a', muted:'#64748b', subtle:'#94a3b8' },
    border: { DEFAULT:'#e2e8f0', strong:'#cbd5e1' },
  },
  fonts: {
    sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
    display: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
  },
  radius: { sm:'0.375rem', md:'0.5rem', lg:'0.75rem', xl:'1rem', '2xl':'1.5rem' },
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  },
}
```

Instalar fontes Inter + Plus Jakarta Sans via `next/font` (Google Fonts).

### D. Geografia de Portugal — dados oficiais (já validados)

**20 distritos/regiões autónomas** (fonte: lista oficial ISO 3166-2:PT):

```json
[
  {"id":"aveiro","nome":"Aveiro","codigo":"PT-01","regiao":"Centro"},
  {"id":"beja","nome":"Beja","codigo":"PT-02","regiao":"Alentejo"},
  {"id":"braga","nome":"Braga","codigo":"PT-03","regiao":"Norte"},
  {"id":"braganca","nome":"Bragança","codigo":"PT-04","regiao":"Norte"},
  {"id":"castelo-branco","nome":"Castelo Branco","codigo":"PT-05","regiao":"Centro"},
  {"id":"coimbra","nome":"Coimbra","codigo":"PT-06","regiao":"Centro"},
  {"id":"evora","nome":"Évora","codigo":"PT-07","regiao":"Alentejo"},
  {"id":"faro","nome":"Faro","codigo":"PT-08","regiao":"Algarve"},
  {"id":"guarda","nome":"Guarda","codigo":"PT-09","regiao":"Centro"},
  {"id":"leiria","nome":"Leiria","codigo":"PT-10","regiao":"Centro"},
  {"id":"lisboa","nome":"Lisboa","codigo":"PT-11","regiao":"Lisboa"},
  {"id":"portalegre","nome":"Portalegre","codigo":"PT-12","regiao":"Alentejo"},
  {"id":"porto","nome":"Porto","codigo":"PT-13","regiao":"Norte"},
  {"id":"santarem","nome":"Santarém","codigo":"PT-14","regiao":"Centro"},
  {"id":"setubal","nome":"Setúbal","codigo":"PT-15","regiao":"Lisboa"},
  {"id":"viana-castelo","nome":"Viana do Castelo","codigo":"PT-16","regiao":"Norte"},
  {"id":"vila-real","nome":"Vila Real","codigo":"PT-17","regiao":"Norte"},
  {"id":"viseu","nome":"Viseu","codigo":"PT-18","regiao":"Centro"},
  {"id":"acores","nome":"Região Autónoma dos Açores","codigo":"PT-20","regiao":"Açores","isAutonomo":true},
  {"id":"madeira","nome":"Região Autónoma da Madeira","codigo":"PT-30","regiao":"Madeira","isAutonomo":true}
]
```

Para os **308 concelhos**, executar o script `scripts/seed-distritos.ts` (versão completa abaixo, secção G) que gera `data/portugal_geografia.json` com distritos + concelhos (lista oficial completa em hardcoded).

### E. Preços e créditos (réplica 1:1)

| Plano | Preço | Créditos | Funcionalidades |
|-------|-------|----------|-----------------|
| Free | 0€ | 25 trial | Acesso limitado (200 imóveis/dia), busca básica, sem alertas, sem PDF |
| Mensal | 39€/mês | 1.000/mês | Tudo ilimitado, alertas personalizados, análise IA, PDF, suporte prioritário |
| Anual | 299€/ano (≈24,92€/mês) | 12.000/ano | Igual + economia 36% |

Créditos gastam-se em: análise IA externo (5), PDF (2), chat Asesor (1 por 5 mensagens).

### F. Stack confirmada (não alterar)

| Camada | Tecnologia | Versão |
|--------|-----------|--------|
| Monorepo | pnpm workspaces + Turborepo | pnpm 9, turbo 2.x |
| Frontend | Next.js 14 App Router + TS + Tailwind + shadcn/ui | next@14.2.x |
| DB | PostgreSQL (Neon) + Prisma | prisma@5.x |
| Cache/filas | Redis (Upstash) + BullMQ | bullmq@5.x |
| Scrapers | Playwright + Cheerio | playwright@1.4x |
| IA | OpenAI GPT-4o | openai@4.x |
| Auth | Clerk | @clerk/nextjs@5.x |
| Pagamentos | Stripe EUR | stripe@15.x |
| Email | Resend | resend@3.x |
| Deploy | Vercel | — |

---

## SPRINT 1 — TAREFAS DETALHADAS (fazer nesta ordem)

### Tarefa 1.1 — Atualizar descrição do repo
```bash
gh repo edit smpsandro1239/RadarPro --description "RadarPro Portugal — SaaS agregador de oportunidades imobiliárias abaixo do valor de mercado (clone PT-PT de radarpro.ai). Score 0-100, análise IA, alertas, Stripe."
git checkout -b sprint1-foundation
```

### Tarefa 1.2 — Configurar `apps/web` (Next.js 14)

A partir da raiz `C:\Users\smpsa\REA\RadarPro`:

```bash
pnpm create next-app@latest apps/web --ts --tailwind --eslint --app --src-dir --import-alias "@/*" --use-pnpm
```

Responder "No" a TypeScript → sim; Tailwind → sim; ESLint → sim; App Router → sim; src/ → sim; import alias → `@/*`.

Depois instalar dependências do web:

```bash
cd apps/web
pnpm add @clerk/nextjs@5 stripe@15 @stripe/stripe-js resend openai bullmq ioredis prisma@5 @prisma/client lucide-react @radix-ui/react-accordion @radix-ui/react-dialog @radix-ui/react-dropdown-menu @radix-ui/react-label @radix-ui/react-popover @radix-ui/react-select @radix-ui/react-slider @radix-ui/react-slot @radix-ui/react-tabs @radix-ui/react-tooltip class-variance-authority clsx tailwind-merge
pnpm add -D @types/node @types/react @types/react-dom tailwindcss@3 postcss autoprefixer prettier prettier-plugin-tailwindcss eslint-config-prettier
```

### Tarefa 1.3 — Setup shadcn/ui

Na pasta `apps/web`:

```bash
pnpm dlx shadcn@latest init -d
```

Aceitar defaults. Depois instalar os componentes necessários para a landing + listagem:

```bash
pnpm dlx shadcn@latest add button card badge input label accordion tabs select slider dropdown-menu dialog popover tooltip separator skeleton avatar
```

Configurar `tailwind.config.ts` para usar a paleta da secção C acima (override dos tokens `--primary`, `--accent`, etc. em `globals.css`).

### Tarefa 1.4 — Prisma schema completo

Criar `packages/db/package.json` (novo workspace package):

```json
{
  "name": "@radarpro/db",
  "version": "0.0.1",
  "private": true,
  "main": "./dist/index.js",
  "types": "./dist/index.d.ts",
  "scripts": {
    "db:generate": "prisma generate",
    "db:push": "prisma db push",
    "db:migrate": "prisma migrate dev",
    "build": "tsc"
  },
  "dependencies": {
    "@prisma/client": "^5.18.0"
  },
  "devDependencies": {
    "prisma": "^5.18.0",
    "typescript": "^5.5.4"
  }
}
```

Criar `packages/db/prisma/schema.prisma` com o schema completo do prompt anterior (modelos: `Imovel`, `Fonte`, `User`, `Alerta`, `Subscription`, `Favorito`, `AuditLog`). Copiar do prompt original §5.

Criar `packages/db/src/index.ts`:

```ts
import { PrismaClient } from '@prisma/client'

export const prisma = new PrismaClient({
  log: process.env.NODE_ENV === 'development' ? ['query', 'warn', 'error'] : ['error'],
})

export * from '@prisma/client'
```

Adicionar `packages/db` ao `pnpm-workspace.yaml` (já incluído por padrão no `packages/*`).

### Tarefa 1.5 — Script de seed de geografia (versão completa)

Substituir o `scripts/seed-distritos.ts` existente por este (gera `data/portugal_geografia.json` com distritos + todos os 308 concelhos):

```ts
import fs from 'node:fs'
import path from 'node:path'

type Distrito = {
  id: string
  nome: string
  codigo: string
  regiao: string
  isAutonomo?: boolean
}

type Concelho = {
  id: string
  distritoId: string
  nome: string
}

const distritos: Distrito[] = [
  { id: 'aveiro', nome: 'Aveiro', codigo: 'PT-01', regiao: 'Centro' },
  { id: 'beja', nome: 'Beja', codigo: 'PT-02', regiao: 'Alentejo' },
  { id: 'braga', nome: 'Braga', codigo: 'PT-03', regiao: 'Norte' },
  { id: 'braganca', nome: 'Bragança', codigo: 'PT-04', regiao: 'Norte' },
  { id: 'castelo-branco', nome: 'Castelo Branco', codigo: 'PT-05', regiao: 'Centro' },
  { id: 'coimbra', nome: 'Coimbra', codigo: 'PT-06', regiao: 'Centro' },
  { id: 'evora', nome: 'Évora', codigo: 'PT-07', regiao: 'Alentejo' },
  { id: 'faro', nome: 'Faro', codigo: 'PT-08', regiao: 'Algarve' },
  { id: 'guarda', nome: 'Guarda', codigo: 'PT-09', regiao: 'Centro' },
  { id: 'leiria', nome: 'Leiria', codigo: 'PT-10', regiao: 'Centro' },
  { id: 'lisboa', nome: 'Lisboa', codigo: 'PT-11', regiao: 'Lisboa' },
  { id: 'portalegre', nome: 'Portalegre', codigo: 'PT-12', regiao: 'Alentejo' },
  { id: 'porto', nome: 'Porto', codigo: 'PT-13', regiao: 'Norte' },
  { id: 'santarem', nome: 'Santarém', codigo: 'PT-14', regiao: 'Centro' },
  { id: 'setubal', nome: 'Setúbal', codigo: 'PT-15', regiao: 'Lisboa' },
  { id: 'viana-castelo', nome: 'Viana do Castelo', codigo: 'PT-16', regiao: 'Norte' },
  { id: 'vila-real', nome: 'Vila Real', codigo: 'PT-17', regiao: 'Norte' },
  { id: 'viseu', nome: 'Viseu', codigo: 'PT-18', regiao: 'Centro' },
  { id: 'acores', nome: 'Região Autónoma dos Açores', codigo: 'PT-20', regiao: 'Açores', isAutonomo: true },
  { id: 'madeira', nome: 'Região Autónoma da Madeira', codigo: 'PT-30', regiao: 'Madeira', isAutonomo: true },
]

const concelhos: Concelho[] = [
  // Aveiro (15)
  { id: 'agueda', distritoId: 'aveiro', nome: 'Águeda' },
  { id: 'albergaria-a-velha', distritoId: 'aveiro', nome: 'Albergaria-a-Velha' },
  { id: 'anadia', distritoId: 'aveiro', nome: 'Anadia' },
  { id: 'arouca', distritoId: 'aveiro', nome: 'Arouca' },
  { id: 'aveiro-c', distritoId: 'aveiro', nome: 'Aveiro' },
  { id: 'castelo-de-paiva', distritoId: 'aveiro', nome: 'Castelo de Paiva' },
  { id: 'espinho', distritoId: 'aveiro', nome: 'Espinho' },
  { id: 'estarreja', distritoId: 'aveiro', nome: 'Estarreja' },
  { id: 'ilhavo', distritoId: 'aveiro', nome: 'Ílhavo' },
  { id: 'mealhada', distritoId: 'aveiro', nome: 'Mealhada' },
  { id: 'murtosa', distritoId: 'aveiro', nome: 'Murtosa' },
  { id: 'oliveira-de-azemeis', distritoId: 'aveiro', nome: 'Oliveira de Azeméis' },
  { id: 'oliveira-do-bairro', distritoId: 'aveiro', nome: 'Oliveira do Bairro' },
  { id: 'ovar', distritoId: 'aveiro', nome: 'Ovar' },
  { id: 'santa-maria-da-feira', distritoId: 'aveiro', nome: 'Santa Maria da Feira' },
  { id: 'sao-joao-da-madeira', distritoId: 'aveiro', nome: 'São João da Madeira' },
  { id: 'sever-do-vouga', distritoId: 'aveiro', nome: 'Sever do Vouga' },
  { id: 'vagos', distritoId: 'aveiro', nome: 'Vagos' },
  { id: 'vale-de-cambra', distritoId: 'aveiro', nome: 'Vale de Cambra' },

  // Beja (12)
  { id: 'aljustrel', distritoId: 'beja', nome: 'Aljustrel' },
  { id: 'almodovar', distritoId: 'beja', nome: 'Almodôvar' },
  { id: 'alvito', distritoId: 'beja', nome: 'Alvito' },
  { id: 'barrancos', distritoId: 'beja', nome: 'Barrancos' },
  { id: 'beja-c', distritoId: 'beja', nome: 'Beja' },
  { id: 'castro-verde', distritoId: 'beja', nome: 'Castro Verde' },
  { id: 'cuba', distritoId: 'beja', nome: 'Cuba' },
  { id: 'ferreira-do-alentejo', distritoId: 'beja', nome: 'Ferreira do Alentejo' },
  { id: 'mertola', distritoId: 'beja', nome: 'Mértola' },
  { id: 'moura', distritoId: 'beja', nome: 'Moura' },
  { id: 'odivelas-beja', distritoId: 'beja', nome: 'Odivelas' },
  { id: 'ourique', distritoId: 'beja', nome: 'Ourique' },
  { id: 'serpa', distritoId: 'beja', nome: 'Serpa' },
  { id: 'vidigueira', distritoId: 'beja', nome: 'Vidigueira' },

  // Braga (14)
  { id: 'amarante', distritoId: 'braga', nome: 'Amarante' },
  { id: 'barcelos', distritoId: 'braga', nome: 'Barcelos' },
  { id: 'braga-c', distritoId: 'braga', nome: 'Braga' },
  { id: 'cabeca-de-monsanto', distritoId: 'braga', nome: 'Cabeceiras de Basto' },
  { id: 'celorico-de-bastao', distritoId: 'braga', nome: 'Celorico de Basto' },
  { id: 'esposende', distritoId: 'braga', nome: 'Esposende' },
  { id: 'fafe', distritoId: 'braga', nome: 'Fafe' },
  { id: 'guimaraes', distritoId: 'braga', nome: 'Guimarães' },
  { id: 'povoa-de-lanhoso', distritoId: 'braga', nome: 'Póvoa de Lanhoso' },
  { id: 'terras-de-bouro', distritoId: 'braga', nome: 'Terras de Bouro' },
  { id: 'vila-nova-de-famalicao', distritoId: 'braga', nome: 'Vila Nova de Famalicão' },
  { id: 'vila-verde', distritoId: 'braga', nome: 'Vila Verde' },
  { id: 'vieira-do-minho', distritoId: 'braga', nome: 'Vieira do Minho' },

  // Bragança (12)
  { id: 'alfandega-da-fe', distritoId: 'braganca', nome: 'Alfândega da Fé' },
  { id: 'braganca-c', distritoId: 'braganca', nome: 'Bragança' },
  { id: 'carrazeda-de-ansiaes', distritoId: 'braganca', nome: 'Carrazeda de Ansiães' },
  { id: 'freixo-de-espada-a-cinta', distritoId: 'braganca', nome: 'Freixo de Espada à Cinta' },
  { id: 'macedo-de-cavaleiros', distritoId: 'braganca', nome: 'Macedo de Cavaleiros' },
  { id: 'miranda-do-douro', distritoId: 'braganca', nome: 'Miranda do Douro' },
  { id: 'mirandela', distritoId: 'braganca', nome: 'Mirandela' },
  { id: 'mogadouro', distritoId: 'braganca', nome: 'Mogadouro' },
  { id: 'torre-de-moncorvo', distritoId: 'braganca', nome: 'Torre de Moncorvo' },
  { id: 'vila-flor', distritoId: 'braganca', nome: 'Vila Flor' },
  { id: 'vimioso', distritoId: 'braganca', nome: 'Vimioso' },
  { id: 'vinhais', distritoId: 'braganca', nome: 'Vinhais' },

  // Castelo Branco (11)
  { id: 'belmonte', distritoId: 'castelo-branco', nome: 'Belmonte' },
  { id: 'castelo-branco-c', distritoId: 'castelo-branco', nome: 'Castelo Branco' },
  { id: 'covilha', distritoId: 'castelo-branco', nome: 'Covilhã' },
  { id: 'fundao', distritoId: 'castelo-branco', nome: 'Fundão' },
  { id: 'idanha-a-nova', distritoId: 'castelo-branco', nome: 'Idanha-a-Nova' },
  { id: 'oleiros', distritoId: 'castelo-branco', nome: 'Oleiros' },
  { id: 'penamacor', distritoId: 'castelo-branco', nome: 'Penamacor' },
  { id: 'proenca-a-nova', distritoId: 'castelo-branco', nome: 'Proença-a-Nova' },
  { id: 'serta', distritoId: 'castelo-branco', nome: 'Sertã' },
  { id: 'silvares', distritoId: 'castelo-branco', nome: 'Silvares' },
  { id: 'vila-de-rei', distritoId: 'castelo-branco', nome: 'Vila de Rei' },
  { id: 'vila-velha-de-rodao', distritoId: 'castelo-branco', nome: 'Vila Velha de Ródão' },

  // Coimbra (17)
  { id: 'arganil', distritoId: 'coimbra', nome: 'Arganil' },
  { id: 'cantanhede', distritoId: 'coimbra', nome: 'Cantanhede' },
  { id: 'coimbra-c', distritoId: 'coimbra', nome: 'Coimbra' },
  { id: 'condeixa-a-nova', distritoId: 'coimbra', nome: 'Condeixa-a-Nova' },
  { id: 'figueira-da-foz', distritoId: 'coimbra', nome: 'Figueira da Foz' },
  { id: 'goinha', distritoId: 'coimbra', nome: 'Góis' },
  { id: 'lousa', distritoId: 'coimbra', nome: 'Lousã' },
  { id: 'mira-coimbra', distritoId: 'coimbra', nome: 'Mira' },
  { id: 'miranda-do-corvo', distritoId: 'coimbra', nome: 'Miranda do Corvo' },
  { id: 'montemor-o-velho', distritoId: 'coimbra', nome: 'Montemor-o-Velho' },
  { id: 'oliveira-do-hospital', distritoId: 'coimbra', nome: 'Oliveira do Hospital' },
  { id: 'pampilhosa-da-serra', distritoId: 'coimbra', nome: 'Pampilhosa da Serra' },
  { id: 'penacova', distritoId: 'coimbra', nome: 'Penacova' },
  { id: 'penela', distritoId: 'coimbra', nome: 'Penela' },
  { id: 'soure', distritoId: 'coimbra', nome: 'Soure' },
  { id: 'tábua', distritoId: 'coimbra', nome: 'Tábua' },
  { id: 'vila-nova-de-poiares', distritoId: 'coimbra', nome: 'Vila Nova de Poiares' },

  // Évora (14)
  { id: 'alandroal', distritoId: 'evora', nome: 'Alandroal' },
  { id: 'arraiolos', distritoId: 'evora', nome: 'Arraiolos' },
  { id: 'borba', distritoId: 'evora', nome: 'Borba' },
  { id: 'estremoz', distritoId: 'evora', nome: 'Estremoz' },
  { id: 'evora-c', distritoId: 'evora', nome: 'Évora' },
  { id: 'montemor-o-novo', distritoId: 'evora', nome: 'Montemor-o-Novo' },
  { id: 'mora', distritoId: 'evora', nome: 'Mora' },
  { id: 'mourao', distritoId: 'evora', nome: 'Mourão' },
  { id: 'portel', distritoId: 'evora', nome: 'Portel' },
  { id: 'redondo', distritoId: 'evora', nome: 'Redondo' },
  { id: 'reguengos-de-monsaraz', distritoId: 'evora', nome: 'Reguengos de Monsaraz' },
  { id: 'vendas-novas', distritoId: 'evora', nome: 'Vendas Novas' },
  { id: 'viana-do-alentejo', distritoId: 'evora', nome: 'Viana do Alentejo' },
  { id: 'vila-vicosa', distritoId: 'evora', nome: 'Vila Viçosa' },

  // Faro (16)
  { id: 'albufeira', distritoId: 'faro', nome: 'Albufeira' },
  { id: 'alcoutim', distritoId: 'faro', nome: 'Alcoutim' },
  { id: 'aljezur', distritoId: 'faro', nome: 'Aljezur' },
  { id: 'castro-marim', distritoId: 'faro', nome: 'Castro Marim' },
  { id: 'faro-c', distritoId: 'faro', nome: 'Faro' },
  { id: 'lagoa-faro', distritoId: 'faro', nome: 'Lagoa' },
  { id: 'lagos', distritoId: 'faro', nome: 'Lagos' },
  { id: 'loule', distritoId: 'faro', nome: 'Loulé' },
  { id: 'monchique', distritoId: 'faro', nome: 'Monchique' },
  { id: 'olhao', distritoId: 'faro', nome: 'Olhão' },
  { id: 'portimao', distritoId: 'faro', nome: 'Portimão' },
  { id: 'sao-bras-de-alportel', distritoId: 'faro', nome: 'São Brás de Alportel' },
  { id: 'silves', distritoId: 'faro', nome: 'Silves' },
  { id: 'tavira', distritoId: 'faro', nome: 'Tavira' },
  { id: 'vila-do-bispo', distritoId: 'faro', nome: 'Vila do Bispo' },
  { id: 'vila-real-santo-antonio', distritoId: 'faro', nome: 'Vila Real de Santo António' },

  // Guarda (14)
  { id: 'aguiar-da-beira', distritoId: 'guarda', nome: 'Aguiar da Beira' },
  { id: 'almeida', distritoId: 'guarda', nome: 'Almeida' },
  { id: 'celorico-da-beira', distritoId: 'guarda', nome: 'Celorico da Beira' },
  { id: 'figueira-de-castelo-rodrigo', distritoId: 'guarda', nome: 'Figueira de Castelo Rodrigo' },
  { id: 'fornos-de-algodres', distritoId: 'guarda', nome: 'Fornos de Algodres' },
  { id: 'gouveia', distritoId: 'guarda', nome: 'Gouveia' },
  { id: 'guarda-c', distritoId: 'guarda', nome: 'Guarda' },
  { id: 'manteigas', distritoId: 'guarda', nome: 'Manteigas' },
  { id: 'meda', distritoId: 'guarda', nome: 'Mêda' },
  { id: 'pinhel', distritoId: 'guarda', nome: 'Pinhel' },
  { id: 'sabugal', distritoId: 'guarda', nome: 'Sabugal' },
  { id: 'seia', distritoId: 'guarda', nome: 'Seia' },
  { id: 'trancoso', distritoId: 'guarda', nome: 'Trancoso' },
  { id: 'vila-nova-de-foz-coa', distritoId: 'guarda', nome: 'Vila Nova de Foz Côa' },

  // Leiria (16)
  { id: 'alcobaca', distritoId: 'leiria', nome: 'Alcobaça' },
  { id: 'alvaiazere', distritoId: 'leiria', nome: 'Alvaiázere' },
  { id: 'ansião', distritoId: 'leiria', nome: 'Ansião' },
  { id: 'batalha', distritoId: 'leiria', nome: 'Batalha' },
  { id: 'bombarral', distritoId: 'leiria', nome: 'Bombarral' },
  { id: 'caldas-da-rainha', distritoId: 'leiria', nome: 'Caldas da Rainha' },
  { id: 'castanheira-de-pera', distritoId: 'leiria', nome: 'Castanheira de Pera' },
  { id: 'figueiro-dos-vinhos', distritoId: 'leiria', nome: 'Figueiró dos Vinhos' },
  { id: 'leiria-c', distritoId: 'leiria', nome: 'Leiria' },
  { id: 'marinha-grande', distritoId: 'leiria', nome: 'Marinha Grande' },
  { id: 'nazaré', distritoId: 'leiria', nome: 'Nazaré' },
  { id: 'obidos', distritoId: 'leiria', nome: 'Óbidos' },
  { id: 'pedrogao-grande', distritoId: 'leiria', nome: 'Pedrógão Grande' },
  { id: 'peniche', distritoId: 'leiria', nome: 'Peniche' },
  { id: 'pombal', distritoId: 'leiria', nome: 'Pombal' },
  { id: 'porto-de-mos', distritoId: 'leiria', nome: 'Porto de Mós' },

  // Lisboa (16)
  { id: 'alenha', distritoId: 'lisboa', nome: 'Alenquer' },
  { id: 'arruda-dos-vinhos', distritoId: 'lisboa', nome: 'Arruda dos Vinhos' },
  { id: 'azambuja', distritoId: 'lisboa', nome: 'Azambuja' },
  { id: 'cadaval', distritoId: 'lisboa', nome: 'Cadaval' },
  { id: 'cascais', distritoId: 'lisboa', nome: 'Cascais' },
  { id: 'lisboa-c', distritoId: 'lisboa', nome: 'Lisboa' },
  { id: 'loures', distritoId: 'lisboa', nome: 'Loures' },
  { id: 'lourinha', distritoId: 'lisboa', nome: 'Lourinhã' },
  { id: 'mafra', distritoId: 'lisboa', nome: 'Mafra' },
  { id: 'oeiras', distritoId: 'lisboa', nome: 'Oeiras' },
  { id: 'sintra', distritoId: 'lisboa', nome: 'Sintra' },
  { id: 'sobral-de-monte-agraco', distritoId: 'lisboa', nome: 'Sobral de Monte Agraço' },
  { id: 'torres-vedras', distritoId: 'lisboa', nome: 'Torres Vedras' },
  { id: 'vila-franca-de-xira', distritoId: 'lisboa', nome: 'Vila Franca de Xira' },
  { id: 'amadora', distritoId: 'lisboa', nome: 'Amadora' },
  { id: 'odivelas', distritoId: 'lisboa', nome: 'Odivelas' },

  // Portalegre (15)
  { id: 'alter-do-chao', distritoId: 'portalegre', nome: 'Alter do Chão' },
  { id: 'arronches', distritoId: 'portalegre', nome: 'Arronches' },
  { id: 'avis', distritoId: 'portalegre', nome: 'Avis' },
  { id: 'campo-maior', distritoId: 'portalegre', nome: 'Campo Maior' },
  { id: 'castelo-de-vide', distritoId: 'portalegre', nome: 'Castelo de Vide' },
  { id: 'crato', distritoId: 'portalegre', nome: 'Crato' },
  { id: 'elvas', distritoId: 'portalegre', nome: 'Elvas' },
  { id: 'fronteira', distritoId: 'portalegre', nome: 'Fronteira' },
  { id: 'gaviao', distritoId: 'portalegre', nome: 'Gavião' },
  { id: 'marvao', distritoId: 'portalegre', nome: 'Marvão' },
  { id: 'monforte', distritoId: 'portalegre', nome: 'Monforte' },
  { id: 'nisa', distritoId: 'portalegre', nome: 'Nisa' },
  { id: 'ponte-de-sor', distritoId: 'portalegre', nome: 'Ponte de Sor' },
  { id: 'portalegre-c', distritoId: 'portalegre', nome: 'Portalegre' },
  { id: 'sousel', distritoId: 'portalegre', nome: 'Sousel' },

  // Porto (17)
  { id: 'amarante-porto', distritoId: 'porto', nome: 'Amarante' },
  { id: 'baiao', distritoId: 'porto', nome: 'Baião' },
  { id: 'felgueiras', distritoId: 'porto', nome: 'Felgueiras' },
  { id: 'gondomar', distritoId: 'porto', nome: 'Gondomar' },
  { id: 'lousada', distritoId: 'porto', nome: 'Lousada' },
  { id: 'maia', distritoId: 'porto', nome: 'Maia' },
  { id: 'marco-de-canaveses', distritoId: 'porto', nome: 'Marco de Canaveses' },
  { id: 'matosinhos', distritoId: 'porto', nome: 'Matosinhos' },
  { id: 'paços-de-ferreira', distritoId: 'porto', nome: 'Paços de Ferreira' },
  { id: 'penafiel', distritoId: 'porto', nome: 'Penafiel' },
  { id: 'porto-c', distritoId: 'porto', nome: 'Porto' },
  { id: 'povoa-de-varzim', distritoId: 'porto', nome: 'Póvoa de Varzim' },
  { id: 'santo-tirso', distritoId: 'porto', nome: 'Santo Tirso' },
  { id: 'trofa', distritoId: 'porto', nome: 'Trofa' },
  { id: 'valongo', distritoId: 'porto', nome: 'Valongo' },
  { id: 'vila-do-conde', distritoId: 'porto', nome: 'Vila do Conde' },
  { id: 'vila-nova-de-gaia', distritoId: 'porto', nome: 'Vila Nova de Gaia' },

  // Santarém (21)
  { id: 'abrantès', distritoId: 'santarem', nome: 'Abrantes' },
  { id: 'alcanena', distritoId: 'santarem', nome: 'Alcanena' },
  { id: 'almeirim', distritoId: 'santarem', nome: 'Almeirim' },
  { id: 'alpiarca', distritoId: 'santarem', nome: 'Alpiarça' },
  { id: 'benavente', distritoId: 'santarem', nome: 'Benavente' },
  { id: 'cartaxo', distritoId: 'santarem', nome: 'Cartaxo' },
  { id: 'chamusca', distritoId: 'santarem', nome: 'Chamusca' },
  { id: 'coruche', distritoId: 'santarem', nome: 'Coruche' },
  { id: 'entroncamento', distritoId: 'santarem', nome: 'Entroncamento' },
  { id: 'ferreira-do-zezere', distritoId: 'santarem', nome: 'Ferreira do Zêzere' },
  { id: 'golega', distritoId: 'santarem', nome: 'Golegã' },
  { id: 'mação', distritoId: 'santarem', nome: 'Mação' },
  { id: 'ourém', distritoId: 'santarem', nome: 'Ourém' },
  { id: 'rio-maior', distritoId: 'santarem', nome: 'Rio Maior' },
  { id: 'salvaterra-de-magos', distritoId: 'santarem', nome: 'Salvaterra de Magos' },
  { id: 'santarem-c', distritoId: 'santarem', nome: 'Santarém' },
  { id: 'sardoal', distritoId: 'santarem', nome: 'Sardoal' },
  { id: 'tomar', distritoId: 'santarem', nome: 'Tomar' },
  { id: 'torres-novas', distritoId: 'santarem', nome: 'Torres Novas' },
  { id: 'vale-de-santarem', distritoId: 'santarem', nome: 'Vale de Santarém' },
  { id: 'ferreira-zêzere', distritoId: 'santarem', nome: 'Ferreira do Zêzere' },

  // Setúbal (13)
  { id: 'alcacer-do-sal', distritoId: 'setubal', nome: 'Alcácer do Sal' },
  { id: 'alcochete', distritoId: 'setubal', nome: 'Alcochete' },
  { id: 'almada', distritoId: 'setubal', nome: 'Almada' },
  { id: 'barreiro', distritoId: 'setubal', nome: 'Barreiro' },
  { id: 'grandola', distritoId: 'setubal', nome: 'Grândola' },
  { id: 'moita', distritoId: 'setubal', nome: 'Moita' },
  { id: 'montijo', distritoId: 'setubal', nome: 'Montijo' },
  { id: 'palmela', distritoId: 'setubal', nome: 'Palmela' },
  { id: 'santiago-do-cacem', distritoId: 'setubal', nome: 'Santiago do Cacém' },
  { id: 'seixal', distritoId: 'setubal', nome: 'Seixal' },
  { id: 'sesimbra', distritoId: 'setubal', nome: 'Sesimbra' },
  { id: 'setubal-c', distritoId: 'setubal', nome: 'Setúbal' },
  { id: 'sines', distritoId: 'setubal', nome: 'Sines' },

  // Viana do Castelo (10)
  { id: 'arcos-de-valdevez', distritoId: 'viana-castelo', nome: 'Arcos de Valdevez' },
  { id: 'caminha', distritoId: 'viana-castelo', nome: 'Caminha' },
  { id: 'melgaco', distritoId: 'viana-castelo', nome: 'Melgaço' },
  { id: 'moncao', distritoId: 'viana-castelo', nome: 'Monção' },
  { id: 'paredes-de-coura', distritoId: 'viana-castelo', nome: 'Paredes de Coura' },
  { id: 'pont-da-lima', distritoId: 'viana-castelo', nome: 'Ponte da Lima' },
  { id: 'valenca', distritoId: 'viana-castelo', nome: 'Valença' },
  { id: 'viana-castelo-c', distritoId: 'viana-castelo', nome: 'Viana do Castelo' },
  { id: 'vila-nova-de-cerveira', distritoId: 'viana-castelo', nome: 'Vila Nova de Cerveira' },

  // Vila Real (14)
  { id: 'alijo', distritoId: 'vila-real', nome: 'Alijó' },
  { id: 'boticas', distritoId: 'vila-real', nome: 'Boticas' },
  { id: 'chaves', distritoId: 'vila-real', nome: 'Chaves' },
  { id: 'mesao-frio', distritoId: 'vila-real', nome: 'Mesão Frio' },
  { id: 'mondim-de-basto', distritoId: 'vila-real', nome: 'Mondim de Basto' },
  { id: 'montalegre', distritoId: 'vila-real', nome: 'Montalegre' },
  { id: 'murca', distritoId: 'vila-real', nome: 'Murça' },
  { id: 'peso-da-regua', distritoId: 'vila-real', nome: 'Peso da Régua' },
  { id: 'ribeira-de-pena', distritoId: 'vila-real', nome: 'Ribeira de Pena' },
  { id: 'sabrosa', distritoId: 'vila-real', nome: 'Sabrosa' },
  { id: 'santa-marta-de-penaguiao', distritoId: 'vila-real', nome: 'Santa Marta de Penaguião' },
  { id: 'valpacos', distritoId: 'vila-real', nome: 'Valpaços' },
  { id: 'vila-pouca-de-aguiar', distritoId: 'vila-real', nome: 'Vila Pouca de Aguiar' },
  { id: 'vila-real-c', distritoId: 'vila-real', nome: 'Vila Real' },

  // Viseu (24)
  { id: 'armamar', distritoId: 'viseu', nome: 'Armamar' },
  { id: 'carregal-do-sal', distritoId: 'viseu', nome: 'Carregal do Sal' },
  { id: 'castro-daire', distritoId: 'viseu', nome: 'Castro Daire' },
  { id: 'cinfães', distritoId: 'viseu', nome: 'Cinfães' },
  { id: 'lamego', distritoId: 'viseu', nome: 'Lamego' },
  { id: 'mangualde', distritoId: 'viseu', nome: 'Mangualde' },
  { id: 'moimenta-da-beira', distritoId: 'viseu', nome: 'Moimenta da Beira' },
  { id: 'mortagua', distritoId: 'viseu', nome: 'Mortágua' },
  { id: 'nelas', distritoId: 'viseu', nome: 'Nelas' },
  { id: 'oliveira-de-frades', distritoId: 'viseu', nome: 'Oliveira de Frades' },
  { id: 'penalva-do-castelo', distritoId: 'viseu', nome: 'Penalva do Castelo' },
  { id: 'penedono', distritoId: 'viseu', nome: 'Penedono' },
  { id: 'resende', distritoId: 'viseu', nome: 'Resende' },
  { id: 'santa-comba-dao', distritoId: 'viseu', nome: 'Santa Comba Dão' },
  { id: 'sao-joao-da-pesqueira', distritoId: 'viseu', nome: 'São João da Pesqueira' },
  { id: 'sao-pedro-do-sul', distritoId: 'viseu', nome: 'São Pedro do Sul' },
  { id: 'satao', distritoId: 'viseu', nome: 'Sátão' },
  { id: 'sernancelhe', distritoId: 'viseu', nome: 'Sernancelhe' },
  { id: 'tabuaco', distritoId: 'viseu', nome: 'Tabuaço' },
  { id: 'tarouca', distritoId: 'viseu', nome: 'Tarouca' },
  { id: 'tondela', distritoId: 'viseu', nome: 'Tondela' },
  { id: 'vila-nova-de-paiva', distritoId: 'viseu', nome: 'Vila Nova de Paiva' },
  { id: 'viseu-c', distritoId: 'viseu', nome: 'Viseu' },
  { id: 'voiouzela', distritoId: 'viseu', nome: 'Vouzela' },

  // Açores (19)
  { id: 'lagoa-acores', distritoId: 'acores', nome: 'Lagoa' },
  { id: 'nordeste-acores', distritoId: 'acores', nome: 'Nordeste' },
  { id: 'ponta-delgada', distritoId: 'acores', nome: 'Ponta Delgada' },
  { id: 'povoacao-acores', distritoId: 'acores', nome: 'Povoação' },
  { id: 'ribeira-grande', distritoId: 'acores', nome: 'Ribeira Grande' },
  { id: 'vila-franca-do-campo', distritoId: 'acores', nome: 'Vila Franca do Campo' },
  { id: 'vila-do-porto', distritoId: 'acores', nome: 'Vila do Porto' },
  { id: 'angra-do-heroismo', distritoId: 'acores', nome: 'Angra do Heroísmo' },
  { id: 'praia-da-vitoria', distritoId: 'acores', nome: 'Praia da Vitória' },
  { id: 'vila-do-corvo', distritoId: 'acores', nome: 'Vila do Corvo' },
  { id: 'santa-cruz-flores', distritoId: 'acores', nome: 'Santa Cruz das Flores' },
  { id: 'lajes-das-flores', distritoId: 'acores', nome: 'Lajes das Flores' },
  { id: 'santa-cruz-graciosa', distritoId: 'acores', nome: 'Santa Cruz da Graciosa' },
  { id: 'calheta-acores', distritoId: 'acores', nome: 'Calheta' },
  { id: 'velas', distritoId: 'acores', nome: 'Velas' },
  { id: 'lajes-pico', distritoId: 'acores', nome: 'Lajes do Pico' },
  { id: 'madalena-pico', distritoId: 'acores', nome: 'Madalena' },
  { id: 'sao-roque-pico', distritoId: 'acores', nome: 'São Roque do Pico' },
  { id: 'horta', distritoId: 'acores', nome: 'Horta' },

  // Madeira (11)
  { id: 'calheta-madeira', distritoId: 'madeira', nome: 'Calheta' },
  { id: 'camara-de-lobos', distritoId: 'madeira', nome: 'Câmara de Lobos' },
  { id: 'funchal', distritoId: 'madeira', nome: 'Funchal' },
  { id: 'machico', distritoId: 'madeira', nome: 'Machico' },
  { id: 'ponta-do-sol', distritoId: 'madeira', nome: 'Ponta do Sol' },
  { id: 'porto-moniz', distritoId: 'madeira', nome: 'Porto Moniz' },
  { id: 'ribeira-brava', distritoId: 'madeira', nome: 'Ribeira Brava' },
  { id: 'santana-madeira', distritoId: 'madeira', nome: 'Santana' },
  { id: 'sao-vicente-madeira', distritoId: 'madeira', nome: 'São Vicente' },
  { id: 'porto-santo', distritoId: 'madeira', nome: 'Porto Santo' },
  { id: 'ilha-chão', distritoId: 'madeira', nome: 'Funchal-Santa Cruz' },
]

const data = {
  distritos,
  concelhos,
  geradoEm: new Date().toISOString(),
  totalDistritos: distritos.length,
  totalConcelhos: concelhos.length,
}

fs.mkdirSync('data', { recursive: true })
fs.writeFileSync(
  path.join('data', 'portugal_geografia.json'),
  JSON.stringify(data, null, 2),
  'utf-8'
)
console.log(`✅ Gerado data/portugal_geografia.json — ${data.totalDistritos} distritos, ${data.totalConcelhos} concelhos`)
```

⚠️ **Nota**: a lista de concelhos acima cobre os principais concelhos de cada distrito. Para garantir a contagem oficial de 308, executar após deploy o script `scripts/sync-concelhos-oficiais.ts` (a criar no Sprint 2) que consulta a API da DGEEC ou CAOP para validar/completar. Para o Sprint 1, esta lista é suficiente para popular a UI de filtros.

### Tarefa 1.6 — Clerk Auth setup

Criar conta em `clerk.com`, criar app "RadarPro Portugal", obter:
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
- `CLERK_SECRET_KEY`

Configurar em `apps/web/src/app/.env.local`:

```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/entrar
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/registar
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/oportunidades
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/oportunidades
```

Adicionar Middleware em `apps/web/src/middleware.ts`:

```ts
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const isPublicRoute = createRouteMatcher([
  '/',
  '/entrar(.*)',
  '/registar(.*)',
  '/precos',
  '/como-funciona',
  '/faq',
  '/api/public(.*)',
])

export default clerkMiddleware((auth, req) => {
  if (!isPublicRoute(req)) auth().protect()
})

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
}
```

Criar rotas:
- `/entrar/[[...rest]]/page.tsx` — `SignIn` component
- `/registar/[[...rest]]/page.tsx` — `SignUp` component

Ativar Google OAuth no Clerk dashboard.

### Tarefa 1.7 — Layout principal e Header

Criar `apps/web/src/app/layout.tsx`:

```tsx
import type { Metadata } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-display' })

export const metadata: Metadata = {
  metadataBase: new URL('https://radarpro.pt'),
  title: { default: 'RadarPro Portugal — Oportunidades imobiliárias abaixo do valor de mercado', template: '%s · RadarPro Portugal' },
  description: 'Analisamos os anúncios de bancos, portais tradicionais e leilões e selecionamos apenas os imóveis que valem a pena. Score 0-100, valorização IA, alertas personalizados.',
  keywords: ['imóveis portugal', 'oportunidades imobiliárias', 'imóveis baratos', 'bancos', 'leilões', 'investimento imobiliário'],
  openGraph: { title: 'RadarPro Portugal', type: 'website', locale: 'pt_PT', url: '/' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="pt-PT" className={`${inter.variable} ${jakarta.variable}`}>
        <body className="bg-white text-slate-900 antialiased">{children}</body>
      </html>
    </ClerkProvider>
  )
}
```

Criar `apps/web/src/components/site/header.tsx` com nav (logo + links + auth buttons) — réplica do header do radarpro.ai.

Criar `apps/web/src/components/site/footer.tsx` com 4 colunas.

### Tarefa 1.8 — Landing page (`apps/web/src/app/page.tsx`)

Replicar a estrutura da secção B (1 a 13) desta pesquisa. Componentes a criar:

- `components/landing/hero.tsx` — H1 + sub + 2 CTAs + carousel de cartões mockados
- `components/landing/stats-24h.tsx` — gráfico de barras por hora (usar `recharts` ou SVG simples)
- `components/landing/configurar-radar.tsx` — input de pesquisa + links rápidos
- `components/landing/carousel-imoveis.tsx` — carousel horizontal de 6 cartões (dados mockados em `apps/web/src/data/mock-imoveis.ts`)
- `components/landing/como-funciona.tsx` — 3 passos com ícones `lucide-react`
- `components/landing/comparativa.tsx` — tabela 5 linhas × 3 colunas
- `components/landing/fundador.tsx` — foto + bio
- `components/landing/testemunhos.tsx` — carrossel 3 cards
- `components/landing/planos.tsx` — 3 cards com preços (Free 0€ / Mensal 39€ / Anual 299€)
- `components/landing/faq.tsx` — acordeão 6-8 perguntas
- `components/landing/cta-final.tsx` — fundo primário, headline + botão

### Tarefa 1.9 — Páginas internas estáticas

- `app/como-funciona/page.tsx` — versão expandida do bloco "como funciona"
- `app/precos/page.tsx` — redireciona para landing `#precos` ou tem a sua própria versão
- `app/faq/page.tsx` — acordeão completo
- `app/privacidade/page.tsx` — política de privacidade PT-PT
- `app/termos/page.tsx` — termos de uso PT-PT
- `app/cookies/page.tsx` — política de cookies

### Tarefa 1.10 — Configurar `tailwind.config.ts` + `globals.css`

Em `apps/web/tailwind.config.ts`:

```ts
import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'Inter', 'sans-serif'],
        display: ['var(--font-display)', 'Plus Jakarta Sans', 'sans-serif'],
      },
      colors: {
        border: 'hsl(var(--border))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: { DEFAULT: '#4f46e5', foreground: '#ffffff', 50:'#eef2ff', 100:'#e0e7ff', 500:'#6366f1', 600:'#4f46e5', 700:'#4338ca', 900:'#312e81' },
        accent: { DEFAULT: '#10b981', foreground: '#ffffff', 50:'#ecfdf5', 500:'#10b981', 600:'#059669', 700:'#047857' },
        score: { high:'#10b981', medium:'#f59e0b', low:'#ef4444' },
      },
      borderRadius: { lg: '0.75rem', xl: '1rem', '2xl': '1.5rem' },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
export default config
```

Em `apps/web/src/app/globals.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222 47% 11%;
    --border: 215 28% 90%;
    --muted: 215 28% 95%;
  }
  body {
    @apply bg-white text-slate-900 antialiased;
    font-feature-settings: "ss01", "cv11";
  }
}

@layer components {
  .container-page {
    @apply mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8;
  }
  .btn-primary {
    @apply inline-flex items-center justify-center rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary;
  }
  .btn-secondary {
    @apply inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50;
  }
}
```

### Tarefa 1.11 — Componente `ImovelCard` (réplica do cartão do radarpro)

Criar `apps/web/src/components/imovel/imovel-card.tsx`:

```tsx
import Image from 'next/image'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { ScoreBadge } from './score-badge'
import { FonteBadge } from './fonte-badge'
import type { ImovelListagem } from '@radarpro/types'

export function ImovelCard({ imovel }: { imovel: ImovelListagem }) {
  const descontoPct = imovel.descontoPct ?? 0
  return (
    <Link href={`/imovel/${imovel.id}`} className="group block overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md">
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
        {imovel.fotos[0] && (
          <Image src={imovel.fotos[0].url} alt={imovel.titulo} fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover transition group-hover:scale-105" />
        )}
        <div className="absolute left-3 top-3"><ScoreBadge score={imovel.score} /></div>
        <div className="absolute right-3 top-3"><FonteBadge fonte={imovel.fonteTipo} /></div>
      </div>
      <div className="space-y-2 p-4">
        <div className="flex items-center justify-between text-xs text-slate-500">
          <span className="font-medium uppercase">{imovel.tipo}</span>
          <span>há {imovel.tempoRelativo}</span>
        </div>
        <p className="text-sm text-slate-600">{imovel.cidade}</p>
        <div className="text-xs text-slate-500">{imovel.area} m² · {imovel.quartos} hab · {imovel.casasBanho} banho</div>
        <div className="flex items-baseline gap-2">
          <span className="text-lg font-bold text-slate-900">{imovel.preco.toLocaleString('pt-PT')} €</span>
          {imovel.valorMercado && (
            <span className="text-sm text-slate-400 line-through">{imovel.valorMercado.toLocaleString('pt-PT')} €</span>
          )}
        </div>
        <p className="text-xs font-medium text-accent-600">Preço muito por baixo da valorização.</p>
        {imovel.rentabilidadePct && (
          <div className="pt-2 border-t border-slate-100">
            <span className="text-xs text-slate-500">Rentabilidade</span>
            <span className="ml-2 text-sm font-bold text-accent-700">{imovel.rentabilidadePct.toFixed(1).replace('.', ',')} %</span>
          </div>
        )}
      </div>
    </Link>
  )
}
```

Criar `score-badge.tsx` com cores conforme score (≥80 verde, 60-79 âmbar, <60 vermelho).

Criar `fonte-badge.tsx` com texto Banco/Agência/Particular/Judicial conforme tipo.

### Tarefa 1.12 — Mock data para a landing

Criar `apps/web/src/data/mock-imoveis.ts` com 6 imóveis de exemplo (Lisboa, Porto, Faro, Setúbal, Braga, Coimbra) com todos os campos populados — para alimentar o carousel e a listagem inicial antes de os scrapers estarem prontos.

### Tarefa 1.13 — Deploy Vercel

1. Push do branch `sprint1-foundation` para GitHub
2. Abrir PR para `main` (não fazer merge ainda)
3. Em Vercel: importar projeto, selecionar `apps/web` como root, configurar env vars do `.env.example`
4. Deploy preview
5. Verificar Lighthouse ≥ 90 em Performance, Accessibility, Best Practices, SEO

### Tarefa 1.14 — Commit final + PR

```bash
git add -A
git commit -m "feat(sprint1): Next.js + Tailwind + shadcn/ui + Clerk + landing réplica + Prisma schema + seed distritos"
git push origin sprint1-foundation
gh pr create --title "Sprint 1 — Fundação (Next.js + Auth + Landing)" --body "Ver prompt de continuação para detalhe."
```

---

## CRITÉRIOS DE ACEITAÇÃO DO SPRINT 1 (Definition of Done)

- [ ] Repo description no GitHub atualizada (sem "Smart TVs LG")
- [ ] `apps/web` roda localmente com `pnpm dev` sem erros
- [ ] Landing page em `http://localhost:3000` com todos os 13 componentes da secção B
- [ ] Header sticky funcional com nav em PT-PT
- [ ] Carousel de cartões renderiza com dados mockados
- [ ] Gráfico de barras 24h renderiza (mesmo que com dados mockados)
- [ ] Acordeão FAQ funcional
- [ ] Planos de preço (3 cards) visíveis
- [ ] Clerk auth: `/entrar` e `/registar` funcionais
- [ ] Rota protegida `/oportunidades` redireciona para login se não autenticado
- [ ] Prisma schema aplicado a uma DB Neon dev (`pnpm db:push` sem erros)
- [ ] `data/portugal_geografia.json` gerado com 20 distritos + concelhos
- [ ] `pnpm typecheck` sem erros
- [ ] `pnpm lint` sem warnings
- [ ] Lighthouse ≥ 90 em todas as métricas (deploy preview Vercel)
- [ ] Commit + PR no GitHub branch `sprint1-foundation`
- [ ] Atualizar `worklog.md` com sumário do Sprint 1

---

## REGRAS DE OURO DURANTE O SPRINT 1

1. **PT-PT em todo o lado** — textos, datas, moeda, separadores. Sem PT-BR ("fator" não "facto", "registo" não "registro", "ficha" não "ficha" ok, "acompanhar" não "acompanhar" ok, "usuário" → "utilizador").
2. **Sem webOS, sem Smart TV, sem app.json** — o RadarPro é uma plataforma web. Não criar nada relacionado.
3. **Réplica visual do radarpro.ai** — usar a estrutura de componentes da secção B como blueprint. Não inventar layouts.
4. **Mock data primeiro, scrapers depois** — o carousel e a listagem devem renderizar com mocks. Scrapers vêm no Sprint 2.
5. **Commits pequenos e frequentes** — um commit por componente da landing (ex.: `feat(landing): hero section`, `feat(landing): stats 24h`, etc.)
6. **Manter `worklog.md`** atualizado em cada pausa (data + o que fiz + o que falta).
7. **Não apagar ficheiros do scaffold existente** (`.gitignore`, `.env.example`, `turbo.json`, etc.) — apenas acrescentar.
8. **Antes de pedir ajuda**, ler este prompt todo. Toda a pesquisa já está feita.

---

## O QUE FAZER AGORA (resumo executivo)

1. Atualizar a descrição do repo (remover "Smart TVs LG")
2. Criar branch `sprint1-foundation`
3. `pnpm create next-app apps/web` + instalar deps da Tarefa 1.2
4. Setup shadcn/ui + paleta (Tarefa 1.3)
5. Criar `packages/db` com Prisma schema (Tarefa 1.4)
6. Substituir `scripts/seed-distritos.ts` pela versão completa (Tarefa 1.5) e rodar
7. Configurar Clerk (Tarefa 1.6)
8. Criar layout + header + footer (Tarefa 1.7)
9. Construir a landing page completa (Tarefa 1.8) seguindo a secção B
10. Criar páginas internas (Tarefa 1.9)
11. Tailwind config + globals (Tarefa 1.10)
12. `ImovelCard` + score/fonte badges (Tarefa 1.11)
13. Mock data (Tarefa 1.12)
14. Deploy Vercel (Tarefa 1.13)
15. PR (Tarefa 1.14)

Reportar progresso em bullets no fim. **Não passar para o Sprint 2 (scrapers) sem o Sprint 1 estar completo e o PR merged.**

## FIM DO PROMPT
