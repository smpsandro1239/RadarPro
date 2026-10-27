# RadarPro Reverse Engineering — RadarPro.ai (referência espanhola)

Este ficheiro regista as especificações extraídas de `radarpro.ai` via MCP CDT + REA,
para construir a versão portuguesa (RadarPro Portugal) com engenharia reversa fiel.

## Páginas mapeadas

- https://radarpro.ai/ — landing page
- https://radarpro.ai/precios — tabelas de preços (Free 0€ / Mensal 39€ / Anual 299€)
- https://radarpro.ai/como-funciona — fluxo 3 passos
- https://radarpro.ai/faq — acordeão
- https://app.radarpro.ai/oportunidadesBanco — listagem com filtros
- https://app.radarpro.ai/analisis-ia — análise IA de imóvel externo
- Páginas cidade: Madrid, Barcelona, Valencia, Málaga, Alicante
- Páginas temáticas: oportunidades banco, subastas judiciales, pisos baratos, valoración

## Componentes extraídos (radarpro-layout.md)

1. **Header**: nav (Como funciona / Preços / FAQ / Aceder / Contacta com vendas)
2. **Hero**: headline + sub + CTA + carousel de cartões em tempo real
3. **Estatísticas 24h**: "oportunidades detetadas nas últimas 24h" + gráfico barras por hora
4. **Configura o teu Radar**: pesquisa rápida por província → distrito
5. **Cartão de imóvel**: foto capa, badge score 0-100, localização, "há X h", área m², quartos, casas de banho, preço, valorização, % abaixo mercado, rentabilidade, badge fonte
6. **Como funciona**: 3 passos
7. **Comparativa vs outros portais**
8. **Fundador**: foto + bio
9. **Testemunhos**: carrossel
10. **Planos**: 3 cards (Free / Mensal / Anual)
11. **FAQ**: acordeão
12. **Footer**: recursos, redes sociais, idioma

## Design tokens (a preencher via DevTools)

- Paleta de cores: primária, secundária, backgrounds, texto
- Tipografia: heading / body
- Espaçamentos, raio, sombras, breakpoints

## Adaptação Portugal (necessária)

| Elemento | radarpro.ai (ES) | RadarPro Portugal (PT) |
|----------|------------------|------------------------|
| Moeda | EUR | EUR (separador milhar, decimal vírgula) |
| Idioma | Espanhol | PT-PT |
| Data | dd/mm/aaaa | dd/mm/aaaa |
| Geografia | Províncias + municípios | 18 distritos + 2 regiões autónomas + 308 concelhos |
| Fontes | Idealista ES, etc. | Idealista PT, Imovirtual, OLX, RE/MAX, ERA, Century 21, Zome, BCP, Bankinter, Novo Banco, Santander, Citius, Portal das Execuções, IGCP |

## Registo de estudos pendentes

Por fonte (documentar em `docs/reverse-engineering/<fonte>.md`):
- URL listagem + URL detalhe
- Seletores CSS chave
- Endpoints de API (HAR)
- Headers necessários
- Anti-bot (Cloudflare, hCaptcha)
- Frequência recomendada