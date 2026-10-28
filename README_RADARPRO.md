# RadarPro Portugal

Clone português do **radarpro.ai** — SaaS agregador de oportunidades imobiliárias abaixo do valor de mercado com score 0-100, valorização, rentabilidade e análise IA.

## Objetivo

Replicar em PT-PT:
- **Search instantâneo** (< 200ms p95) com filtros combináveis
- **Score 0-100** justificado (desconto vs mercado, rentabilidade, localização, liquidez, qualidade, fonte, atualidade)
- **Análise IA** (PDF + chat Asesor)
- **Alertas** por email/push (< 5 min após recolha compatível)
- **Subscrição Stripe** (Free / Mensal / Anual)
- **18 distritos + 2 regiões autónomas + 308 concelhos**, EUR, formato PT-PT

## Fontes de imóveis

| Tipo | Fonte | Notas |
|------|-------|-------|
| Portal líder | Idealista Portugal | SPA pesado (Playwright + CDT) |
| Portal forte | Imovirtual | HTML server-side (Cheerio OK) |
| Classificados | OLX Portugal | SPA + anti-bot |
| Stand | Standvirtual | Mesma plataforma OLX |
| Franquia | RE/MAX Portugal | API interna possível |
| Franquia | ERA Portugal | HTML estável |
| Franquia | Century 21 Portugal | HTML estável |
| Franquia | Zome | SPA |
| Banco | Millennium BCP | Imóveis próprios |
| Banco | Bankinter | |
| Banco | Novo Banco | |
| Banco | Santander Portugal | |
| Subastas | Citius | Execuções judiciais |
| Subastas | Portal das Execuções | Venda judicial |
| Estado | IGCP | Leilões do Estado |

## Stack

| Camada | Tecnologia |
|--------|-----------|
| Monorepo | pnpm workspaces + Turborepo |
| Frontend | Next.js 14 App Router + TypeScript + Tailwind + shadcn/ui |
| Base de dados | PostgreSQL + Prisma |
| Cache + filas | Redis + BullMQ |
| Scrapers | Node 20 + Playwright + Cheerio |
| Busca | PostgreSQL GIN full-text + B-tree |
| IA | OpenAI GPT-4o |
| Auth | Clerk |
| Pagamentos | Stripe |
| Email | Resend |
| Deploy | Vercel (web) + Fly.io/Railway (worker) |

## Estrutura

```
RadarPro/
├── apps/web/         # Next.js (frontend + API)
├── apps/worker/      # Scrapers + jobs BullMQ
├── packages/db/      # Prisma schema + client
├── packages/ui/      # Design system partilhado
├── packages/types/   # Tipos TS
├── packages/config/  # Design tokens
├── docs/             # Reverse engineering + playbooks
├── scripts/          # Seed distritos, health-check
└── samples/          # Outputs de scrapers (testes de regressão)
```

## Começar (developer)

1. Clonar: `git clone https://github.com/smpsandro1239/RadarPro.git`
2. `cp .env.example .env.local` → preencher secrets
3. `pnpm install`
4. `pnpm db:push` (Prisma)
5. `pnpm dev` (Next.js)

## Repositório

Público: https://github.com/smpsandro1239/RadarPro

Pronto para receber todas as versões. Empurrar branches/tags livremente.