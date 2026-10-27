import Link from 'next/link'
import { Radar } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="container-page py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <Radar className="h-6 w-6 text-primary-600" />
              <span className="font-display text-lg font-bold">RadarPro</span>
            </Link>
            <p className="mt-2 text-xs text-slate-500">Oportunidades imobiliárias abaixo do valor de mercado em Portugal.</p>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold text-slate-900">Produto</h4>
            <ul className="space-y-2 text-xs text-slate-600">
              <li><Link href="/como-funciona" className="hover:text-primary-700">Como funciona</Link></li>
              <li><Link href="/#precos" className="hover:text-primary-700">Preços</Link></li>
              <li><Link href="/faq" className="hover:text-primary-700">FAQ</Link></li>
              <li><Link href="/oportunidades" className="hover:text-primary-700">Oportunidades</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold text-slate-900">Recursos</h4>
            <ul className="space-y-2 text-xs text-slate-600">
              <li><Link href="/guias" className="hover:text-primary-700">Guias de investimento</Link></li>
              <li><Link href="/imoveis-baratos" className="hover:text-primary-700">Imóveis baratos</Link></li>
              <li><Link href="/oportunidades-judiciais" className="hover:text-primary-700">Oportunidades judiciais</Link></li>
              <li><Link href="/valorizacao" className="hover:text-primary-700">Valorização IA</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold text-slate-900">Empresa</h4>
            <ul className="space-y-2 text-xs text-slate-600">
              <li><Link href="/privacidade" className="hover:text-primary-700">Política de privacidade</Link></li>
              <li><Link href="/termos" className="hover:text-primary-700">Termos de serviço</Link></li>
              <li><Link href="/cookies" className="hover:text-primary-700">Política de cookies</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-slate-200 pt-6 text-center text-xs text-slate-500">
          © 2025 RadarPro Portugal. Todos os direitos reservados. Feito em PT-PT.
        </div>
      </div>
    </footer>
  )
}