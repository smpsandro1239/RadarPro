import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const PERGUNTAS = [
  {
    q: 'Como calculais o score de cada imóvel?',
    a: 'O score 0-100 combina 7 fatores ponderados: desconto vs valor de mercado (35%), rentabilidade bruta (20%), localização (15%), liquidez (10%), qualidade do anúncio (10%), tipo de fonte (10%) e atualidade (5%). O detalhe da pontuação está disponível em cada ficha de imóvel.',
  },
  {
    q: 'De onde vêm os imóveis?',
    a: 'Recolhemos anúncios de bancos (BCP, Bankinter, Novo Banco, Santander), portais tradicionais (Idealista, Imovirtual, OLX, Standvirtual), franquias (RE/MAX, ERA, Century 21, Zome) e leilões judiciais (Citius, Portal das Execuções).',
  },
  {
    q: 'A análise IA é fiável?',
    a: 'Usamos GPT-4o com dados do INE, Banco de Portugal e EnergyCert. A estimativa tem margem típica de ±5-8%. Para compras grandes, recomendamos validação com avaliador certificado.',
  },
  {
    q: 'Posso cancelar quando quiser?',
    a: 'Sim, sem penalização. Cancelas a qualquer momento e manténs acesso até ao fim do período pago.',
  },
  {
    q: 'Há imóveis só do meu concelho?',
    a: 'Sim. Os alertas permitem filtrar por distrito, concelho, freguesia, tipo de imóvel, orçamento e score mínimo.',
  },
  {
    q: 'Os imóveis são verificados?',
    a: 'Verificamos a fonte original e validamos o preço. Não garantimos dados do anunciante — recomendamos sempre validação notarial.',
  },
  {
    q: 'Como funcionam os créditos?',
    a: 'Cada análise IA consome créditos: imóvel externo (5), relatório PDF (2), chat Asesor (1 por 5 mensagens). Free: 25, Mensal: 1.000/mês, Anual: 12.000/ano.',
  },
  {
    q: 'Posso exportar relatórios?',
    a: 'Sim, no plano Mensal e Anual. Cada PDF inclui ficha completa, comparáveis, score justificado e riscos. Custa 2 créditos.',
  },
]

export function FAQ() {
  return (
    <section id="faq" className="bg-slate-50 py-16">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-slate-900">Perguntas frequentes</h2>
          <p className="mt-3 text-slate-600">Tudo o que precisas de saber.</p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl">
          <Accordion type="single" collapsible>
            {PERGUNTAS.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger>{item.q}</AccordionTrigger>
                <AccordionContent>{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}