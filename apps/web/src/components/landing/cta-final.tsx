import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function CTAFinal() {
  return (
    <section className="bg-gradient-to-br from-primary-700 to-primary-900 py-16">
      <div className="container-page text-center">
        <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
          Regista-te grátis agora e encontra oportunidades verificadas
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-primary-100">
          Mais de 100.000 imóveis analisados. Score 0-100. Alertas personalizados. Sem compromisso.
        </p>
        <div className="mt-8">
          <Button size="lg" variant="secondary" asChild>
            <Link href="/registar">Começar agora <ArrowRight className="ml-1.5 h-4 w-4" /></Link>
          </Button>
        </div>
      </div>
    </section>
  )
}