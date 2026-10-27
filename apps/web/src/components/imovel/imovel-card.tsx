import Image from 'next/image'
import Link from 'next/link'
import { Bath, Bed, Maximize } from 'lucide-react'
import { ScoreBadge } from './score-badge'
import { FonteBadge } from './fonte-badge'
import { formatCurrencyEUR, formatPercent } from '@/lib/utils'
import type { ImovelListagem } from '@/types/imovel'

export function ImovelCard({ imovel }: { imovel: ImovelListagem }) {
  return (
    <Link
      href={`/imovel/${imovel.id}`}
      className="group block overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition:hover:shadow-md"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
        {imovel.fotos[0] && (
          <Image
            src={imovel.fotos[0].url}
            alt={imovel.titulo}
            fill
            sizes="(max-width:768px) 100vw, 33vw"
            className="object-cover transition duration-300 group-hover:scale-105"
          />
        )}
        <div className="absolute left-3 top-3 z-10">
          <ScoreBadge score={imovel.score} />
        </div>
        <div className="absolute right-3 top-3 z-10">
          <FonteBadge fonte={imovel.fonteTipo} />
        </div>
      </div>

      <div className="space-y-2 p-4">
        <div className="flex items-center justify-between text-xs text-slate-500">
          <span className="font-medium uppercase tracking-wide">{imovel.tipo}</span>
          <span>há {imovel.tempoRelativo}</span>
        </div>
        <h3 className="font-semibold text-slate-900 line-clamp-1">{imovel.titulo}</h3>
        <div className="flex items-center gap-2 text-slate-500 text-xs">
          <span>{imovel.cidade} - {imovel.distrito}</span>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-slate-400">
          <span>{imovel.area} m²</span>
          <span>{imovel.quartos} quartos</span>
          <span>{imovel.casasBanho} casas de banho</span>
        </div>
        <div className="mt-2 flex items-end gap-1">
          <div className="text-primary-600 font-medium">{formatCurrencyEUR(imovel.preco)}</div>
          {imovel.descontoPct !== undefined && (
            <span className="text-xs text-red-600">-{imovel.descontoPct}% vs mercado</span>
          )}
        </div>
      </div>
    </Link>
  )
}