import { TrendingUp } from 'lucide-react'

const DADOS_24H = [
  { hora: '00h', count: 0 }, { hora: '01h', count: 0 }, { hora: '02h', count: 0 },
  { hora: '03h', count: 0 }, { hora: '04h', count: 29 }, { hora: '05h', count: 0 },
  { hora: '06h', count: 28 }, { hora: '07h', count: 160 }, { hora: '08h', count: 0 },
  { hora: '09h', count: 0 }, { hora: '10h', count: 0 }, { hora: '11h', count: 0 },
  { hora: '12h', count: 0 }, { hora: '13h', count: 0 }, { hora: '14h', count: 0 },
  { hora: '15h', count: 0 }, { hora: '16h', count: 38 }, { hora: '17h', count: 59 },
  { hora: '18h', count: 25 }, { hora: '19h', count: 21 }, { hora: '20h', count: 15 },
  { hora: '21h', count: 14 }, { hora: '22h', count: 0 }, { hora: '23h', count: 0 },
]
const MAX = Math.max(...DADOS_24H.map((d) => d.count))
const TOTAL = DADOS_24H.reduce((s, d) => s + d.count, 0)

export function Stats24h() {
  return (
    <section className="border-y border-slate-100 bg-white py-12">
      <div className="container-page">
        <div className="flex items-center gap-3">
          <TrendingUp className="h-6 w-6 text-emerald-600" />
          <h2 className="font-display text-2xl font-bold text-slate-900">
            <span className="text-emerald-600">{TOTAL.toLocaleString('pt-PT')}</span> oportunidades novas nas últimas 24 horas
          </h2>
        </div>
        <p className="mt-1 text-sm text-slate-500">última detetada há 4 horas · 104.719 imóveis ativos</p>

        <div className="mt-8">
          <div className="flex h-32 items-end gap-1">
            {DADOS_24H.map((d, i) => {
              const h = MAX > 0 ? (d.count / MAX) * 100 : 0
              return (
                <div key={i} className="group flex flex-1 flex-col items-center gap-1">
                  <div className="relative w-full">
                    <div
                      className={`w-full rounded-t-sm transition-all duration-300 ${d.count > 0 ? 'bg-emerald-400 group-hover:bg-emerald-600' : 'bg-slate-100'}`}
                    />
                  </div>
                  <span className="text-[10px] text-slate-400">{d.hora}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}