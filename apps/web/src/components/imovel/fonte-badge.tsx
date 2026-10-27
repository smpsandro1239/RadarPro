import { Building2, Home, Scale } from 'lucide-react'
import { cn } from '@/lib/utils'

type FonteTipo = 'banco' | 'agencia' | 'particular' | 'judicial'

interface FonteBadgeProps {
  fonte: FonteTipo
  className?: string
}

const CONFIG: Record<FonteTipo, { label: string; icon: React.ReactNode; className: string }> = {
  banco: { label: 'Banco', icon: <Building2 className="h-3 w-3" />, className: 'bg-blue-50 text-blue-700 border-blue-200' },
  agencia: { label: 'Agência', icon: <Home className="h-3 w-3" />, className: 'bg-purple-50 text-purple-700 border-purple-200' },
  particular: { label: 'Particular', icon: <Home className="h-3 w-3" />, className: 'bg-slate-50 text-slate-700 border-slate-300' },
  judicial: { label: 'Judicial', icon: <Scale className="h-3 w-3" />, className: 'bg-amber-50 text-amber-700 border-amber-200' },
}

export function FonteBadge({ fonte, className }: FonteBadgeProps) {
  const c = CONFIG[fonte]
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs font-medium',
        c.className,
        className
      )}
    >
      {c.icon}
      {c.label}
    </span>
  )
}