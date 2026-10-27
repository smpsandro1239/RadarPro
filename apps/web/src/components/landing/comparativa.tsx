import { Check, X } from 'lucide-react'

const LINHAS = [
  'Deteta automaticamente oportunidades abaixo do valor',
  'Mostra valor real do imóvel (IA)',
  'Calcula rentabilidade bruta',
  'Alertas personalizados por zona',
  'Análise IA completa (PDF + chat)',
  'Score 0-100 justificado',
]

const COLUNAS = [
  { nome: 'RadarPro', valores: [true, true, true, true, true, true] },
  { nome: 'Portais tradicionais', valores: [false, false, false, false, false, false] },
  { nome: 'Sites de bancos', valores: [true, false, true, false, false, false] },
]

export function Comparativa() {
  return (
    <section className="bg-slate-50 py-16">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-slate-900">Porquê o RadarPro?</h2>
          <p className="mt-3 text-slate-600">O que nos distingue dos outros portais.</p>
        </div>
        <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-4 text-left font-semibold text-slate-700">Funcionalidade</th>
                {COLUNAS.map((c) => (
                  <th key={c.nome} className="px-4 py-4 text-center font-semibold text-slate-700">
                    {c.nome}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {LINHAS.map((linha, i) => (
                <tr key={i} className="border-b border-slate-100 last:border-0">
                  <td className="px-4 py-3 text-slate-800">{linha}</td>
                  {COLUNAS.map((c) => (
                    <td key={c.nome} className="py-3 text-center">
                      {c.valores[i] ? (
                        <Check className="mx-auto h-5 w-5 text-emerald-600" />
                      ) : (
                        <X className="mx-auto h-5 w-5 text-red-600" />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}