import { cn } from '@/lib/utils'

interface ScoreBadgeProps {
  score: number
  className?: string
}

export function ScoreBadge({ score, className }: ScoreBadgeProps) {
  const color =
    score >= 80
      ? 'bg-emerald-500 text-white'
      : score >= 60
      ? 'bg-amber-500 text-white'
      : 'bg-red-500 text-white'

  return (
    <span
      className={cn(
        'inline-flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold shadow-sm',
        color,
        className
      )}
      title={`Score ${score}/100`}
    >
      {score}
    </span>
  )
}