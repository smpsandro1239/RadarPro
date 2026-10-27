import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ImovelCard } from '@/components/imovel/imovel-card'
import { MOCK_IMOVEIS } from '@/data/mock-imoveis'

export function Hero() {
  const destaques = MOCK_IMOVEIS.slice(0, 3)
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary-50 via-white to-white">
      <div className="container-page py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-100 px-3 py-1 text-xs font-semibold text-primary-700">
            <Sparkles className="h-3.5 w-3.5" /> Novo · IA integrada
          </span>
          <h1 className="mt-6 font-display text-4xl font-bold tracking-tight text-slate-900 md:text-6xl">
            Encontra as melhores <span className="text-primary-600">oportunidades imobiliárias</span> em Portugal
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Analisamos os anúncios de bancos, portais tradicionais e leilões e selecionamos apenas os que merecem a pena.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button size="lg" asChild>
              <Link href="/oportunidades">Ver oportunidades agora <ArrowRight className="ml-1.5 h-4 w-4" /></Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/#precos">Ver planos</Link>
            </Button>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {destaques.map((im) => (
            <ImovelCard key={im.id} imovel={im} />
          ))}
        </div>
      </div>
    </section>
  )
}