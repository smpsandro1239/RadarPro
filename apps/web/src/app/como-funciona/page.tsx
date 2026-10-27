import { ComoFunciona } from '@/components/landing/como-funciona'
import { CTAFinal } from '@/components/landing/cta-final'

export const metadata = { title: 'Como funciona' }

export default function Page() {
  return (
    <>
      <section className="bg-gradient-to-b from-primary-50 to-white py-16">
        <div className="container-page text-center">
          <h1 className="font-display text-4xl font-bold text-slate-900">Como funciona o RadarPro</h1>
          <p className="mt-4 text-slate-600">Da configuração à compra em 3 passos.</p>
        </div>
      </section>
      <ComoFunciona />
      <CTAFinal />
    </>
  )
}