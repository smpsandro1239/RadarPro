import Link from 'next/link'
import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'

const PLANOS = [
  {
    nome: 'Free',
    preco: '0€',
    periodo: 'para sempre',
    descricao: 'Para experimentar',
    cta: 'Regista-te grátis',
    href: '/registar',
    destaque: false,
    features: [
      '25 créditos de teste',
      'Acesso limitado a oportunidades',
      'Análise básica de imóvel',
      'Sem alertas personalizados',
      'Sem exportar PDF',
    ],
  },
  {
    nome: 'Mensal',
    preco: '39€',
    periodo: '/ mês',
    descricao: 'Para investir a sério',
    cta: 'Escolher mensal',
    href: '/registar?plano=mensal',
    destaque: true,
    features: [
      'Oportunidades ilimitadas',
      'Análise completa (IA)',
      'Alertas personalizados',
      '1.000 créditos por mês',
      'Exportar PDF',
      'Suporte prioritário 24/7',
    ],
  },
  {
    nome: 'Anual',
    preco: '299€',
    periodo: '/ ano',
    descricao: 'Oferta especial',
    cta: 'Escolher anual',
    href: '/registar?plano=anual',
    destaque: false,
    features: [
      'Tudo do Mensal',
      'Oportunidades ilimitadas',
      'Análise completa (IA)',
      'Alertas personalizados',
      '12.000 créditos por ano',
      'Suporte prioritário 24/7',
    ],
  },
]

export function Planos() {
  return (
    <section id="precos" className="bg-white py-16">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-slate-900">Preços simples</h2>
          <p className="mt-3 text-slate-600">
            Sem letra pequena. Cancelas quando quiseres.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {PLANOS.map((p) => (
            <div
              key={p.nome}
              className={`rounded-2xl border p-6 shadow-sm ${
                p.destaque ? 'border-primary-600 bg-primary-50 shadow-lg' : 'border-slate-200 bg-white'
              }`}
            >
              <div className="mb-6">
                <div className="text-sm font-semibold text-slate-500 uppercase">{p.nome}</div>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="font-display text-4xl font-bold text-slate-900">{p.preco}</span>
                  <span className="text-xs text-slate-500">{p.periodo}</span>
                </div>
                <p className="mt-2 text-xs text-slate-600">{p.descricao}</p>
              </div>
              <ul className="space-y-3 mb-8 text-xs text-slate-600">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                size="lg"
                variant={p.destaque ? 'outline' : 'secondary'}
                className="w-full"
                asChild
              >
                <Link href={p.href}>{p.cta}</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}