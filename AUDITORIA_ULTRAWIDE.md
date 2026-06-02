# Relatório de Auditoria Ultrawide — Ratoeira Hub

## Visão Geral

O projeto possui **breakpoints customizados `3xl` (1920px) e `4xl` (2560px)`**, o que já é um excelente ponto de partida. A maioria dos containers principais (Header, Footer, Heros principais) já possui overrides para ultrawide.

**Contudo, existem 3 categorias de problemas que causam o efeito "comprimido/verticalizado" em monitores ultrawide:**

1. **Componentes "esquecidos"** — sem qualquer breakpoint `3xl`/`4xl`
2. **Bases max-w muito restritas** — `max-w-xl`/`max-w-2xl` que só aliviam em 2560px+
3. **Padrão "ilha de texto"** — `text-center + mx-auto + max-w-*` criando blocos flutuantes no centro

---

## 1. Breakpoints Existentes

| Breakpoint | Valor | Status |
|------------|-------|--------|
| `sm` | 640px | Default Tailwind |
| `md` | 768px | Default Tailwind |
| `lg` | 1024px | Default Tailwind |
| `xl` | 1280px | Default Tailwind |
| `2xl` | 1536px | Default Tailwind |
| **`3xl`** | **1920px** | ✅ Custom |
| **`4xl`** | **2560px** | ✅ Custom |
| `5xl` | — | ❌ **Não existe** |

> **Monitores 3440×1440, 3840×2160 (4K), 5120×1440 (super ultrawide 32:9) e 5K/6K/8K** não têm regras específicas — usam o mesmo layout do `4xl:` (2560px), deixando muito espaço vazio nas laterais.

---

## 2. Problemas por Categoria

### 🔴 CRÍTICO — Sem breakpoints ultrawide (presos em max-w-3xl/4xl)

| # | Arquivo | Componente | Linha | Problema | Impacto em Ultrawide | Sugestão |
|---|---------|------------|-------|----------|----------------------|----------|
| 1 | `components/ui/shape-landing-hero.tsx` | `HeroGeometric` | ~148–149 | `max-w-4xl mx-auto` no texto + `container` | Todo o conteúdo fica em ~896px no centro com oceano de espaço vazio nas laterais | `3xl:max-w-5xl 4xl:max-w-6xl` no texto. Formas `ElegantShape` com `vw` em vez de px fixos |
| 2 | `components/ui/floating-icons-hero-section.tsx` | `FloatingIconsHero` | ~155 | `max-w-3xl lg:max-w-4xl` no H1 | Título comprimido enquanto subtítulo já expande. Ícones flutuantes em posição absoluta percentual ficam nas extremidades distantes | `3xl:max-w-5xl 4xl:max-w-6xl` no H1. Limitar área de ícones a `max-w-[1600px] mx-auto` |
| 3 | `app/solucoes/ratoeira-ads/components/TutorialSection.tsx` | `TutorialSection` | ~25 | `max-w-4xl mx-auto` | Texto e conteúdo presos em ~896px | `3xl:max-w-[80rem] 4xl:max-w-[100rem]` |
| 4 | `app/parcerias/components/ExpandableCardDemo.tsx` | `ExpandableCardDemo` | ~569 | `max-w-5xl mx-auto` | Conteúdo do modal limitado a ~1024px | `3xl:max-w-[80rem] 4xl:max-w-[100rem]` |

---

### 🟡 ALTO — Base max-w restrita (só alivia em 4xl/2560px)

| # | Arquivo | Componente | Linha | Problema | Impacto | Sugestão |
|---|---------|------------|-------|----------|---------|----------|
| 5 | `components/sections/Pricing.tsx` | `Pricing` | ~87 | `max-w-4xl mx-auto` sem `3xl`/`4xl` | Título/descrição flutuando em ~896px | `3xl:max-w-[80rem] 4xl:max-w-[100rem]` |
| 6 | `components/sections/Contact.tsx` | `Contact` | ~55 | `max-w-4xl mx-auto` sem `3xl`/`4xl` | Mesmo padrão | `3xl:max-w-[80rem] 4xl:max-w-[100rem]` |
| 7 | `components/sections/Testimonials.tsx` | `Testimonials` | ~97 | `max-w-4xl mx-auto` sem `3xl`/`4xl` | Depoimentos centralizados e comprimidos | `3xl:max-w-[80rem] 4xl:max-w-[100rem]` |
| 8 | `components/sections/Metrics.tsx` | `Metrics` | ~154 | `max-w-4xl mx-auto` sem `3xl`/`4xl` | Métricas em coluna fina | `3xl:max-w-[80rem] 4xl:max-w-[100rem]` |
| 9 | `components/sections/CTA.tsx` | `CTA` | ~42 | `max-w-4xl mx-auto` sem `3xl`/`4xl` | CTA com texto flutuante | `3xl:max-w-[80rem] 4xl:max-w-[100rem]` |
| 10 | `app/fontes-de-trafego/google-ads/components/HeroGoogleAds.tsx` | `HeroGoogleAds` | ~21 | `max-w-3xl lg:max-w-4xl` | Hero comprimido | `2xl:max-w-5xl 3xl:max-w-[80rem] 4xl:max-w-[100rem]` |
| 11 | `app/fontes-de-trafego/meta-ads/components/HeroMetaAds.tsx` | `HeroMetaAds` | ~21 | `max-w-3xl lg:max-w-4xl` | Hero comprimido | `2xl:max-w-5xl 3xl:max-w-[80rem] 4xl:max-w-[100rem]` |
| 12 | `app/quem-somos/components/HeroAbout.tsx` | `HeroAbout` | ~29 | `max-w-3xl lg:max-w-4xl` | Hero comprimido | `2xl:max-w-5xl 3xl:max-w-[80rem] 4xl:max-w-[100rem]` |
| 13 | `app/solucoes/ratoeira-pages/components/HeroPages.tsx` | `HeroPages` | ~31 | `max-w-3xl lg:max-w-4xl` | Hero comprimido | `2xl:max-w-5xl 3xl:max-w-[80rem] 4xl:max-w-[100rem]` |
| 14 | `components/sections/Hero.tsx` | `Hero` (slide 1) | ~145 | `max-w-xl` base → só expande em 4xl | Parágrafo comprimido em 1440px–1920px | Subir base para `max-w-2xl` ou `max-w-3xl` |
| 15 | `components/sections/Hero.tsx` | `Hero` (slide 2) | ~332 | `max-w-2xl` base → só expande em 4xl | Mesmo problema no segundo slide | Subir base para `max-w-3xl` |
| 16 | `components/ui/spline-scene-basic.tsx` | `SplineSceneBasic` | ~18 | `max-w-lg` em subtítulo | ~512px limitado | `2xl:max-w-2xl 3xl:max-w-3xl 4xl:max-w-4xl` |

---

### 🟡 ALTO — Padrão "ilha de texto" (text-center + mx-auto + max-w)

| # | Arquivo | Componente | Linha | Problema | Impacto | Sugestão |
|---|---------|------------|-------|----------|---------|----------|
| 17 | `app/parcerias/components/CTAPartnerships.tsx` | `CTAPartnerships` | ~24–40 | `max-w-xl` → `4xl:max-w-[60rem] mx-auto text-center text-balance` | Texto flutuando no centro de card já limitado | `text-left` no card ou remover max-w interno |
| 18 | `app/solucoes/ratoeira-hub/page.tsx` | `RatoeiraHub` | ~77–81 | `max-w-3xl` → `4xl:max-w-[80rem] mx-auto text-center` | Hero como faixa fina no centro em 3440px | `4xl:max-w-[100rem]` ou remover `mx-auto` em 4xl |
| 19 | `app/parcerias/components/HeroBenefits.tsx` | `HeroBenefits` | ~28 | `max-w-3xl` → `4xl:max-w-[80rem] mx-auto text-balance` | Ilha centralizada | `4xl:max-w-[100rem]` ou layout assimétrico |
| 20 | `components/ui/ethereal-beams-hero.tsx` | `EtherealBeamsHero` | ~457–468 | `max-w-3xl` → `4xl:max-w-[80rem] mx-auto text-balance` | Subtítulo centralizado flutua | `4xl:max-w-[100rem]` ou `text-left` em 4xl |
| 21 | `components/ui/floating-icons-hero-section.tsx` | `FloatingIconsHero` | ~155–158 | `max-w-3xl lg:max-w-4xl mx-auto text-center` | Hero inteiro como coluna fina | `3xl:max-w-5xl 4xl:max-w-6xl` ou `lg:text-left lg:mx-0` |
| 22 | `app/faq/page.tsx` | `FAQPage` | ~31 | `max-w-2xl` base + `mx-auto text-balance` | Subtítulo flutuante em 1440px–1920px | Subir base para `max-w-3xl` |
| 23 | `app/fale-conosco/page.tsx` | `FaleConosco` | ~22 | `max-w-2xl` base + `mx-auto` | Mesmo padrão | Subir base para `max-w-3xl` |

---

### 🟡 MÉDIO — Elementos com dimensões fixas (pixels)

| # | Arquivo | Componente | Linha | Problema | Impacto | Sugestão |
|---|---------|------------|-------|----------|---------|----------|
| 24 | `components/sections/Hero.tsx` | `Hero` (decorativo) | ~123 | `w-[800px]` glow radial | Pode ficar pequeno em 4K+ | `w-[min(800px,50vw)]` ou `w-[50vw]` |
| 25 | `components/sections/Metrics.tsx` | `Metrics` | ~120 | `w-[300px]` SVG decorativo | Pequeno em ultrawide | `w-[min(300px,20vw)]` |
| 26 | `components/ui/spotlight-background.tsx` | `SpotlightBackground` | CSS | `w-[600px]`, `w-[500px]`, `w-[550px]` blobs | Não escalam com tela | Converter para `vw` ou `clamp()` |
| 27 | `components/ui/radar-effect.tsx` | `RadarEffect` | ~54 | `w-[400px]` efeito radar | Fixo | `w-[min(400px,25vw)]` |
| 28 | `components/sections/DetailedPricing.tsx` | `DetailedPricing` | ~50 | `w-[800px]` blur decorativo | Pode ficar pequeno | `w-[50vw]` |
| 29 | `components/sections/Testimonials.tsx` | `Testimonials` | ~113 | `h-[480px] w-[480px]` glow gradiente | Fixo | `w-[min(480px,30vw)]` |
| 30 | `app/parcerias/components/ExpandableCardDemo.tsx` | `ExpandableCardDemo` | ~513 | `<img width={520} height={340}>` | Imagem fixa no modal | Usar `next/image` com `fill` e `sizes` |
| 31 | `app/solucoes/ratoeira-ads/components/AppSection.tsx` | `AppSection` | ~62 | `w-[280px] sm:w-[320px]` phone frame | Pequeno em ultrawide | `lg:w-[380px] 3xl:w-[440px]` |
| 32 | `components/sections/Benefits.tsx` | `Benefits` | ~170 | `max-w-[260px] sm:max-w-[300px]` vídeo mobile | Post-it no centro | `lg:max-w-[360px] 3xl:max-w-[440px]` |

---

### 🟡 MÉDIO — Grids com colunas fixas

| # | Arquivo | Componente | Linha | Problema | Impacto | Sugestão |
|---|---------|------------|-------|----------|---------|----------|
| 33 | `app/quem-somos/components/GalleryAbout.tsx` | `GalleryAbout` | ~39 | `grid-cols-2 md:grid-cols-3` | Em 1920px+, 3 colunas fazem imagens enormes | `lg:grid-cols-4 3xl:grid-cols-5 4xl:grid-cols-6` |

---

### 🟢 BAIXO — Aspect ratio / proporções

| # | Arquivo | Componente | Linha | Problema | Impacto | Sugestão |
|---|---------|------------|-------|----------|---------|----------|
| 34 | `app/quem-somos/components/HeroAbout.tsx` | `HeroAbout` | ~60 | `aspect-square` em container de imagens | Fica muito alto em ultrawide, imagens absolutas parecem pequenas | `aspect-[4/3]` ou `max-h-[800px]` |
| 35 | `components/ui/ethereal-beams-hero.tsx` | `EtherealBeamsHero` | ~502 | `h-[clamp(14rem,30vw,28rem)]` + largura até 1600px | Imagem larga mas baixa (letterbox extremo) | `4xl:h-[clamp(16rem,25vw,40rem)]` ou `aspect-video` |
| 36 | `components/sections/Hero.tsx` | `Hero` (mockup) | ~178 | `2xl:h-[clamp(520px,22vw,820px)] 3xl:h-[clamp(600px,24vw,900px)]` | Pode dominar a viewport em 21:9/32:9 | Adicionar `max-h-[70vh]` |
| 37 | `components/ui/chain-carousel.tsx` | `ChainCarousel` | ~151 | `visibleItemCount = 9` fixo | Containers expandem mas itens continuam em 9 | Aumentar dinamicamente via `window.innerWidth` |

---

### 🟢 BAIXO — Leading apertado em títulos grandes

| # | Arquivo | Componente | Linha | Problema | Impacto | Sugestão |
|---|---------|------------|-------|----------|---------|----------|
| 38 | `components/sections/Hero.tsx` | `Hero` | ~145 | `leading-[1.04]` em H1 >5rem | Linhas coladas em ultrawide | `3xl:leading-[1.08]` |
| 39 | `components/ui/ethereal-beams-hero.tsx` | `EtherealBeamsHero` | ~457 | `leading-[1.04]` em H1 >5rem | Mesmo problema | `3xl:leading-[1.08]` |
| 40 | `components/Footer.tsx` | `Footer` | ~79 | `leading-[0.98]` em H2 `text-7xl` | Pode sobrepor descendentes | `leading-[1.0]` ou `leading-tight` |
| 41 | `app/quem-somos/components/HeroAbout.tsx` | `HeroAbout` | ~29 | `leading-[1.04]` em H1 >5rem | Linhas coladas | `3xl:leading-[1.08]` |

---

### 🟢 BAIXO — Clamp com máximo insuficiente

| # | Arquivo | Componente | Linha | Problema | Impacto | Sugestão |
|---|---------|------------|-------|----------|---------|----------|
| 42 | `components/sections/Hero.tsx` | `Hero` | ~145 | `clamp(...,5.5rem)` no 3xl | 88px pode ser pequeno para ultrawide | `4xl:text-[clamp(4rem,3vw,7rem)]` |
| 43 | `components/sections/Hero.tsx` | `Hero` | ~326 | `clamp(...,5.5rem)` no 3xl | Mesmo no slide 2 | `4xl:text-[clamp(4rem,3vw,7rem)]` |
| 44 | `app/solucoes/ratoeira-hub/page.tsx` | `RatoeiraHub` | ~77 | `clamp(...,6rem)` em H1 | 96px pode parecer pequeno em 32:9 | `4xl:text-[clamp(2rem,3.5vw,8rem)]` |

---

## 3. Componentes BEM adaptados para Ultrawide ✅

| Componente | O que está correto |
|------------|-------------------|
| `Header` (`header.tsx`) | `max-w-7xl` → `4xl:max-w-[120rem]` |
| `Footer` (`Footer.tsx`) | `max-w-7xl` → `4xl:max-w-[120rem]` |
| `PricingHero` (`PricingHero.tsx`) | `max-w-4xl` → `4xl:max-w-[90rem]` |
| `HeroPages` (`HeroPages.tsx`) | `max-w-6xl` → `4xl:max-w-[110rem]` |
| `SplineSceneBasic` (`spline-scene-basic.tsx`) | `max-w-7xl` → `4xl:max-w-[120rem]` |
| `CaseClientView` (`CaseClientView.tsx`) | `max-w-5xl` → `4xl:max-w-[100rem]` |
| `ProblemSolution` (`ProblemSolution.tsx`) | `max-w-6xl` → `4xl:max-w-[110rem]` |

---

## 4. Problemas Arquiteturais

### Ausência de breakpoint `5xl` (3840px+)
Monitores 4K (3840×2160), super ultrawide 32:9 (5120×1440), 5K e 8K não têm regras específicas. O layout estica até 2560px e depois para de crescer, criando espaços vazios enormes.

### Nenhuma media query CSS customizada
O `globals.css` tem apenas `prefers-reduced-motion`. Não há media queries `@media (min-width: 3840px)` ou similares para ajustes finos em telas gigantes.

### Duplicação de classes
Vários arquivos têm classes duplicadas (ex: `3xl:max-w-[100rem] 4xl:max-w-[120rem] 3xl:max-w-[100rem] 4xl:max-w-[120rem]`), o que não quebra o layout mas polui o CSS.

---

## 5. Tabela de Prioridades

| Prioridade | Arquivo | Problema | Solução Recomendada |
|---|---|---|---|
| 🔴 **Alta** | `components/ui/shape-landing-hero.tsx` | Texto preso em `max-w-4xl` sem ultrawide | `3xl:max-w-5xl 4xl:max-w-6xl`. Formas com `vw` |
| 🔴 **Alta** | `components/ui/floating-icons-hero-section.tsx` | Título sem expansão + ícones espalhados | `3xl:max-w-5xl 4xl:max-w-6xl` no H1. Limitar área ícones |
| 🔴 **Alta** | `app/solucoes/ratoeira-ads/components/TutorialSection.tsx` | `max-w-4xl mx-auto` sem ultrawide | `3xl:max-w-[80rem] 4xl:max-w-[100rem]` |
| 🔴 **Alta** | `components/sections/Pricing.tsx` | `max-w-4xl mx-auto` sem ultrawide | `3xl:max-w-[80rem] 4xl:max-w-[100rem]` |
| 🔴 **Alta** | `components/sections/Contact.tsx` | `max-w-4xl mx-auto` sem ultrawide | `3xl:max-w-[80rem] 4xl:max-w-[100rem]` |
| 🔴 **Alta** | `components/sections/Testimonials.tsx` | `max-w-4xl mx-auto` sem ultrawide | `3xl:max-w-[80rem] 4xl:max-w-[100rem]` |
| 🔴 **Alta** | `components/sections/Metrics.tsx` | `max-w-4xl mx-auto` sem ultrawide | `3xl:max-w-[80rem] 4xl:max-w-[100rem]` |
| 🔴 **Alta** | `components/sections/CTA.tsx` | `max-w-4xl mx-auto` sem ultrawide | `3xl:max-w-[80rem] 4xl:max-w-[100rem]` |
| 🔴 **Alta** | `app/parcerias/components/ExpandableCardDemo.tsx` | `max-w-5xl mx-auto` sem ultrawide | `3xl:max-w-[80rem] 4xl:max-w-[100rem]` |
| 🟡 **Alta** | `components/sections/Hero.tsx` | Parágrafos com base `max-w-xl`/`max-w-2xl` | Subir base para `max-w-3xl` |
| 🟡 **Alta** | `app/fontes-de-trafego/*/Hero*.tsx` | Heros secundários com `max-w-3xl lg:max-w-4xl` | `2xl:max-w-5xl 3xl:max-w-[80rem] 4xl:max-w-[100rem]` |
| 🟡 **Alta** | `app/quem-somos/components/HeroAbout.tsx` | Hero com `max-w-3xl lg:max-w-4xl` | `2xl:max-w-5xl 3xl:max-w-[80rem] 4xl:max-w-[100rem]` |
| 🟡 **Alta** | `app/solucoes/ratoeira-pages/components/HeroPages.tsx` | Hero com `max-w-3xl lg:max-w-4xl` | `2xl:max-w-5xl 3xl:max-w-[80rem] 4xl:max-w-[100rem]` |
| 🟡 **Média** | `app/parcerias/components/CTAPartnerships.tsx` | "Ilha de texto" centralizada | `text-left` no card ou remover max-w interno |
| 🟡 **Média** | `app/solucoes/ratoeira-hub/page.tsx` | Hero centralizado `mx-auto text-center` | `4xl:max-w-[100rem]` ou `text-left` |
| 🟡 **Média** | `components/ui/ethereal-beams-hero.tsx` | Imagem letterbox + texto ilha | `4xl:h-[40rem]` ou `aspect-video` |
| 🟡 **Média** | `app/quem-somos/components/GalleryAbout.tsx` | Grid fixo em 3 colunas | `lg:grid-cols-4 3xl:grid-cols-5 4xl:grid-cols-6` |
| 🟡 **Média** | `components/ui/spotlight-background.tsx` | Blobs com `w-[600px/500px/550px]` | Converter para `vw` ou `clamp()` |
| 🟡 **Média** | `app/quem-somos/components/HeroAbout.tsx` | `aspect-square` + imagens absolutas | `aspect-[4/3]` ou `max-h-[800px]` |
| 🟢 **Baixa** | `components/sections/Hero.tsx` | Glow decorativo `w-[800px]` | `w-[50vw]` |
| 🟢 **Baixa** | `components/sections/Hero.tsx` | Mockup pode ficar muito alto | `max-h-[70vh]` |
| 🟢 **Baixa** | `components/ui/spline-scene-basic.tsx` | `max-w-lg` em subtítulo | `2xl:max-w-2xl 3xl:max-w-3xl 4xl:max-w-4xl` |
| 🟢 **Baixa** | `app/faq/page.tsx` | Subtítulo `max-w-2xl` base | Subir para `max-w-3xl` |
| 🟢 **Baixa** | `app/fale-conosco/page.tsx` | Subtítulo `max-w-2xl` base | Subir para `max-w-3xl` |
| 🟢 **Baixa** | `tailwind.config.js` | Sem breakpoint `5xl` | Adicionar `5xl: '3840px'` |
| 🟢 **Baixa** | Múltiplos heros | `leading-[1.04]` em títulos >5rem | `3xl:leading-[1.08]` |
| 🟢 **Baixa** | `components/Footer.tsx` | `leading-[0.98]` em `text-7xl` | `leading-[1.0]` |

---

## 6. Causas Raiz do Efeito "Comprimido/Verticalizado"

### Em 2560px (4K):
1. **14 componentes** ainda usam `max-w-4xl` (~896px) sem overrides `3xl`/`4xl` → blocos flutuam no centro
2. **9 componentes** têm base `max-w-xl`/`max-w-2xl` que só expande em 2560px → comprimidos em 1440px–1920px
3. **7 heros** usam `text-center + mx-auto` → ilhas de texto no centro

### Em 3440px+ (ultrawide 21:9) e 5120px+ (super ultrawide 32:9):
1. **Não existe breakpoint `5xl`** → layout para de crescer em 2560px
2. **Todos os containers com `4xl:max-w-[120rem]`** (1920px) ficam como ilhas no centro
3. **Elementos decorativos fixos** (`w-[800px]`, `w-[600px]`) parecem selos postais
4. **Grids com 3 colunas** esticam cards desproporcionalmente

---

## 7. Recomendações Estratégicas

### Curto prazo (maior impacto, menor esforço):
1. Aplicar `3xl:max-w-[80rem] 4xl:max-w-[100rem]` nos 8 componentes sem ultrawide
2. Subir bases de `max-w-xl` → `max-w-3xl` em textos de heros e seções

### Médio prazo:
3. Adicionar breakpoint `5xl: 3840px` no `tailwind.config.js`
4. Converter elementos decorativos fixos para `vw`/`clamp()`
5. Aumentar colunas de grids em telas grandes

### Longo prazo:
6. Revisar o padrão `text-center + mx-auto` em heros — considerar layouts assimétricos ou alinhados à esquerda em ultrawide
7. Considerar `container-queries` para cards e componentes internos em vez de depender só de viewport width
