import Link from 'next/link'
import { Radar } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="container-page flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Radar className="h-7 w-7 text-primary-600" />
          <span className="font-display text-xl font-bold tracking-tight text-slate-900">
            Radar<span className="text-primary-600">Pro</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link href="/como-funciona" className="text-sm font-medium text-slate-700 hover:text-primary-700">Como funciona</Link>
          <Link href="/#precos" className="text-sm font-medium text-slate-700 hover:text-primary-700">Preços</Link>
          <Link href="/faq" className="text-sm font-medium text-slate-700 hover:text-primary-700">FAQ</Link>
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/entrar">Aceder</Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/registar">Começar grátis</Link>
          </Button>
          <Button variant="secondary" size="sm" asChild className="hidden md:inline-flex">
            <Link href="/oportunidades">Ver oportunidades</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
