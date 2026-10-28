# RadarPro

Monorepo Turborepo com apps/web (Next.js 16 + Tailwind 4) e apps/worker (scrapers). DB com Prisma + Turso (libSQL).

## Configuração

```bash
cp .env.example .env.local
pnpm install
pnpm dev
```

## Deploy Vercel

Definir `DATABASE_URL` com Turso authToken nas variáveis de ambiente da Vercel. `apps/web` é o app Next.js.
