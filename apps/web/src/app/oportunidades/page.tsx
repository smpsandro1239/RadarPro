import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ImovelCard } from '@/components/imovel/imovel-card'
import { MOCK_IMOVEIS } from '@/data/mock-imoveis'

export default function OportunidadesPage() {
  return (
    <div className="container-page py-12">
      <div className="flex items-center justify-between">
        <h1 className="font-display text-3xl font-bold text-slate-900">Oportunidades</h1>
        <span className="text-sm text-slate-500">{MOCK_IMOVEIS.length} imóveis abaixo do valor</span>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {MOCK_IMOVEIS.map((im) => (
          <ImovelCard key={im.id} imovel={im} />
        ))}
      </div>
    </div>
  )
}