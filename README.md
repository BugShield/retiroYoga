# 🧘‍♀️ Yoga Retreat Landing • React + Tailwind + Mobile‑First
Uma landing page de alta conversão para um retiro de yoga, construída com React e Tailwind CSS, seguindo boas práticas de mobile‑first, design atômico, acessibilidade e conteúdo em funil. Ícones com React Lucide, layout 100% responsivo e adaptativo, estilizada a partir de um arquivo no Figma. ✨

## Colaboradores
- 👨‍💻 Gabriel Volponi — Dev
- 🎨 Lara Campos — UIX/UX

## ✨ Sobre o projeto
O objetivo desta landing é maximizar conversões (inscrições/contatos) com narrativa em funil: hero claro, benefícios, prova social, detalhes do retiro, FAQs e CTA persistente. O app é mobile‑first, com breakpoints progressivos, cores e tipografia guiadas por tokens do Figma e componentes reutilizáveis seguindo o Design Atômico.

## 📸 Preview
- Deploy: https://seu-deploy-aqui.com
- Figma: https://figma.com/file/SEU-FIGMA
- Screenshot: docs/preview.png

## 🔧 Stack
⚛️ React (CRA/Vite/Next — adapte conforme seu setup)
🎯 Tailwind CSS com tokens de design (cores, spacing, tipografia)
🧩 React Lucide Icons (ícones consistentes e leves)
♿ Boas práticas de A11y (ARIA, contraste, navegação por teclado)
🔍 SEO on‑page (metas, OG/Twitter, sitemap opcional)

## 🧩 Arquitetura (Design Atômico)
Átomos: Button, Heading, Icon, Input, Tag
Moléculas: Card, Feature, Testimonial, PricingItem
Organismos: Hero, FAQ, Benefits, Schedule, CTA Sticky
Templates/Pages: Landing (Home), Obrigado, Termos/Políticas
Estrutura sugerida:
```bash
src/
  assets/
  components/
    atoms/
    molecules/
    organisms/
  features/
    landing/
      sections/
      hooks/
  pages/
  styles/
  utils/
```
## 📈 Conteúdo em funil e conversão
A página segue uma jornada clara: proposta de valor no hero, benefícios concretos, instruções e o que levar, depoimentos, cronograma, FAQs e CTAs estratégicos. Práticas usadas: CTA acima da dobra e repetido ao final, microcopy orientado a ação, prova social, escassez/urgência responsável, e formulário simples com validação acessível.

## ♿ Acessibilidade
Semântica: header, main, section, footer, h1‑h2 coerentes
ARIA: rótulos para ícones, status e mensagens de erro
Contraste: AA/AAA onde possível (Tailwind + tokens)
Teclado: foco visível, ordem lógica, skip‑to‑content
Formulários: labels vinculados, aria‑describedby em erros, feedback em voz (aria‑live)
Checklist recomendado: Lighthouse A11y ≥ 95.

## 🔍 SEO e Performance
Metatags: title único por página, description, OG/Twitter
Estrutura: headings hierárquicos e links descritivos
Imagens: next‑gen, lazy loading e dimensões definidas
Performance: Tailwind JIT, purge/treeshake de ícones, code‑splitting de seções pesadas

```bash
    Feito com carinho ❤️
```
