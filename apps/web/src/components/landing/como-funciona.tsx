import { Sliders, BellRing, ShieldCheck } from 'lucide-react'

const PASSOS = [
  {
    icon: <Sliders className="h-7 w-7 text-primary-600" />,
    titulo: '1. Configura o teu radar',
    desc: 'Define zona, tipo de imóvel e orçamento. Recebes apenas oportunidades que te interessam.',
  },
  {
    icon: <BellRing className="h-7 w-7 text-primary-600" />,
    titulo: '2. Recebe oportunidades',
    desc: 'Assim que um imóvel aparece abaixo do valor de mercado, enviamos alerta por email e push.',
  },
  {
    icon: <ShieldCheck className="h-7 w-7 text-primary-600" />,
    titulo: '3. Compra com confiança',
    desc: 'Análise IA com valor, rentabilidade, riscos e gastos. Decisão informada em minutos.',
  },
]

export function ComoFunciona() {
  return (
    <section id="como-funciona" className="bg-white py-16">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-slate-900">Como funciona</h2>
          <p className="mt-3 text-slate-600">Em 3 passos, do alerta à compra.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {PASSOS.map((p, i) => (
            <div key={i} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary-50">
                {p.icon}
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-slate-900">{p.titulo}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}