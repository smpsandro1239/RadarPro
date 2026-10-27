import { Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const LINKS_RAPIDOS = [
  { label: 'Imóveis baratos', href: '/oportunidades?precoMax=150000' },
  { label: 'Oportunidades em Lisboa', href: '/oportunidades?distrito=lisboa' },
  { label: 'Oportunidades no Porto', href: '/oportunidades?distrito=porto' },
  { label: 'Oportunidades em Faro', href: '/oportunidades?distrito=faro' },
  { label: 'Guias de investimento', href: '/guias' },
]

export function ConfigurarRadar() {
  return (
    <section className="bg-white py-16">
      <div className="container-page">
        <div className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-slate-50 p-6 md:p-8">
          <h2 className="font-display text-2xl font-bold text-slate-900">Configura o teu Radar</h2>
          <p className="mt-2 text-sm text-slate-600">
            Diz-me o que procuras e digo-te quais os imóveis da tua zona que valem a pena, e porquê.
          </p>

          <form action="/oportunidades" className="mt-5 flex flex-col gap-3 sm:flex-row" method="GET">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                name="q"
                placeholder="Ex.: T2 em Lisboa até 300.000 € com score ≥ 80"
                className="h-11 w-full rounded-lg border border-slate-300 bg-white pl-10 pr-4 text-sm text-slate-900 placeholder:text-slate-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200"
              />
            </div>
            <Button type="submit" size="lg">Pesquisar</Button>
          </form>

          <div className="mt-4 flex flex-wrap gap-2">
            {LINKS_RAPIDOS.map((l) => (
              <Link key={l.label} href={l.href} className="inline-block text-xs px-3 py-1.5 rounded-full border border-slate-200 bg-white text-slate-600 hover:bg-primary-50 hover:text-primary-700 transition">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}