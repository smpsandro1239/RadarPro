import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function RegistarPage() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4 py-12">
      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 shadow-lg text-center">
        <h1 className="font-display text-2xl font-bold text-slate-900">Criar conta</h1>
        <p className="mt-2 text-sm text-slate-600">
          O registo vai estar disponível em breve. Enquanto isso, explora as oportunidades disponíveis.
        </p>
        <div className="mt-6 flex flex-col gap-3">
          <Button asChild>
            <Link href="/oportunidades">Ver oportunidades</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/entrar">Já tenho conta</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
