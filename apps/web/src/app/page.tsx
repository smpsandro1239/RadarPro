import { Hero } from '@/components/landing/hero'
import { Stats24h } from '@/components/landing/stats-24h'
import { ConfigurarRadar } from '@/components/landing/configurar-radar'
import { CarouselImoveis } from '@/components/landing/carousel-imoveis'
import { ComoFunciona } from '@/components/landing/como-funciona'
import { Comparativa } from '@/components/landing/comparativa'
import { Planos } from '@/components/landing/planos'
import { FAQ } from '@/components/landing/faq'
import { CTAFinal } from '@/components/landing/cta-final'

export default function Home() {
  return (
    <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
      <Hero />
      <Stats24h />
      <ConfigurarRadar />
      <CarouselImoveis />
      <ComoFunciona />
      <Comparativa />
      <Planos />
      <FAQ />
      <CTAFinal />
    </main>
  )
}