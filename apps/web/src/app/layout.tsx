import type { Metadata, Viewport } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'
import { Header } from '@/components/site/header'
import { Footer } from '@/components/site/footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' })
const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-display', display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL('https://radarpro.pt'),
  title: {
    default: 'RadarPro Portugal — Oportunidades imobiliárias abaixo do valor de mercado',
    template: '%s · RadarPro Portugal',
  },
  description: 'Analisamos os anúncios de bancos, portais tradicionais e leilões e selecionamos apenas os imóveis que valem a pena. Score 0-100, valorização IA, alertas personalizados.',
  keywords: ['imóveis portugal', 'oportunidades imobiliárias', 'imóveis baratos', 'bancos', 'leilões', 'investimento imobiliário'],
  openGraph: {
    title: 'RadarPro Portugal',
    type: 'website',
    locale: 'pt_PT',
    url: '/',
    siteName: 'RadarPro Portugal',
  },
}

export const viewport: Viewport = {
  themeColor: '#4f46e5',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const hasKey = !!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY

  if (!hasKey) {
    return (
      <html lang="pt-PT" className={`${inter.variable} ${jakarta.variable}`}>
        <body className="bg-white text-slate-900 antialiased min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </body>
      </html>
    )
  }

  return (
    <ClerkProvider>
      <html lang="pt-PT" className={`${inter.variable} ${jakarta.variable}`}>
        <body className="bg-white text-slate-900 antialiased min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  )
}