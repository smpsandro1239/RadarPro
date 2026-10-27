import { ImovelCard } from '@/components/imovel/imovel-card'
import { MOCK_IMOVEIS } from '@/data/mock-imoveis'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function CarouselImoveis() {
  return (
    <section className="bg-slate-50 py-16">
      <div className="container-page">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="font-display text-3xl font-bold text-slate-900">Oportunidades em destaque</h2>
            <p className="mt-2 text-sm text-slate-600">Imóveis abaixo do valor de mercado, atualizados em tempo real</p>
          </div>
          <Button variant="ghost" asChild>
            <Link href="/oportunidades">Ver todas <ArrowRight className="ml-1 h-4 w-4" /></Link>
          </Button>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {MOCK_IMOVEIS.map((im) => (
            <ImovelCard key={im.id} imovel={im} />
          ))}
        </div>
      </div>
    </section>
  )
}