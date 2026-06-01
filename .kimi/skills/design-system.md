---
name: design-system
description: "Use ao criar, estender ou manter o design system do Ratoeira Hub. Abrange tokens de design, componentes reutilizáveis, variantes, theming, dark mode e documentação de padrões UI/UX."
---

# Design System — Ratoeira Hub

## Visão Geral

O design system do Ratoeira Hub é a **fonte única da verdade** para todos os aspectos visuais e de interação da plataforma. Ele garante consistência, escalabilidade e eficiência no desenvolvimento de interfaces.

## Quando Usar

- Ao criar novos componentes reutilizáveis
- Ao definir ou atualizar tokens de design (cores, tipografia, espaçamento)
- Ao implementar theming ou dark mode
- Ao padronizar padrões UI em toda a codebase
- Ao migrar, estender ou refatorar o Tailwind CSS
- Ao documentar padrões de uso de componentes

## Quando NÃO Usar

- Para componentes one-off que não serão reutilizados
- Quando a tarefa é puramente de lógica de negócio sem impacto visual

## Arquitetura de Tokens

### Cores

As cores são definidas via CSS variables e mapeadas no Tailwind config:

```css
:root {
  /* Brand */
  --color-brand-primary: #FFB800;
  --color-brand-primary-hover: #E6A600;
  --color-brand-secondary: #FF8C00;
  
  /* Semantic */
  --color-success: #10B981;
  --color-warning: #F59E0B;
  --color-error: #EF4444;
  --color-info: #3B82F6;
  
  /* Neutrals */
  --color-background: #050505;
  --color-surface: #0D0D0D;
  --color-surface-elevated: #161616;
  --color-border: rgba(255, 255, 255, 0.05);
  
  /* Text */
  --color-text-primary: #FFFFFF;
  --color-text-secondary: rgba(255, 255, 255, 0.7);
  --color-text-muted: rgba(255, 255, 255, 0.4);
}
```

### Tipografia

| Token | Fonte | Peso | Uso |
|-------|-------|------|-----|
| `font-display` | System bold | 800 | Headlines, hero text |
| `font-heading` | System | 700 | Section headings |
| `font-body` | System | 400 | Body text |
| `font-mono` | Mono | 400 | Code, badges, labels |

Tamanhos via `clamp()` para fluid type:
- `text-xs`: 0.75rem
- `text-sm`: 0.875rem
- `text-base`: 1rem
- `text-lg`: 1.125rem
- `text-xl`: 1.25rem
- `text-2xl`: 1.5rem
- `text-3xl`: 1.875rem
- `text-4xl`: 2.25rem
- `text-5xl`: clamp(2rem, 5vw, 3rem)

### Espaçamento

Base: 4px (0.25rem)

| Token | Valor |
|-------|-------|
| `space-1` | 0.25rem (4px) |
| `space-2` | 0.5rem (8px) |
| `space-3` | 0.75rem (12px) |
| `space-4` | 1rem (16px) |
| `space-6` | 1.5rem (24px) |
| `space-8` | 2rem (32px) |
| `space-10` | 2.5rem (40px) |
| `space-12` | 3rem (48px) |
| `space-16` | 4rem (64px) |

### Bordas e Radii

| Token | Valor |
|-------|-------|
| `radius-sm` | 0.375rem (6px) |
| `radius-md` | 0.5rem (8px) |
| `radius-lg` | 0.75rem (12px) |
| `radius-xl` | 1rem (16px) |
| `radius-2xl` | 1.5rem (24px) |
| `radius-button` | 0.5rem (8px) |
| `radius-card` | 1rem (16px) |
| `radius-full` | 9999px |

### Sombras

```css
--shadow-card-resting: 0 1px 3px rgba(0, 0, 0, 0.3);
--shadow-card-hover: 0 8px 30px rgba(0, 0, 0, 0.5);
--shadow-dropdown: 0 10px 40px rgba(0, 0, 0, 0.6);
--shadow-focus: 0 0 0 2px rgba(255, 184, 0, 0.4);
```

## Componentes Base

### Button

Variantes:
- `primary` — bg-brand-primary, text-white
- `secondary` — bg-transparent, border border-white/20, text-white
- `ghost` — bg-transparent, text-white/70, hover:text-white
- `danger` — bg-error, text-white

Tamanhos:
- `sm` — px-3 py-1.5 text-sm
- `md` — px-4 py-2 text-base
- `lg` — px-6 py-3 text-base

Estados: default, hover, active, focus, disabled, loading

### Card

```tsx
<div className="rounded-card bg-surface border border-border p-6 shadow-card-resting hover:shadow-card-hover transition-shadow">
  {/* content */}
</div>
```

Variantes:
- `default` — surface com borda sutil
- `elevated` — surface-elevated com shadow mais pronunciada
- `outlined` — transparent bg com borda visível

### Input

```tsx
<input 
  className="w-full px-4 py-2.5 bg-surface border border-border rounded-md text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary transition-all"
/>
```

Estados: default, focus, error, disabled, filled

### Badge

```tsx
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-brand-primary/10 text-brand-primary">
  Label
</span>
```

Variantes: default, success, warning, error, info

### Modal/Dialog

Estrutura:
- Overlay com `bg-black/60 backdrop-blur-sm`
- Container com `bg-surface rounded-xl shadow-dropdown max-w-lg w-full mx-4`
- Header com título e botão de fechar
- Body com padding
- Footer com ações (primary + secondary)

## Padrões de Layout

### Container

```tsx
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
  {/* content */}
</div>
```

### Grid de Cards

```tsx
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* cards */}
</div>
```

### Hero Section

```tsx
<section className="relative min-h-[100svh] bg-background pt-20 lg:pt-24">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 lg:py-24">
    <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
      {/* text */}
      {/* visual */}
    </div>
  </div>
</section>
```

## Dark Mode

O projeto usa dark mode por padrão. Tokens são definidos para o tema escuro.
Se futuramente suportar light mode, usar:

```css
@media (prefers-color-scheme: light) {
  :root {
    --color-background: #FFFFFF;
    --color-surface: #F9FAFB;
    /* ... */
  }
}
```

## Documentação de Componentes

Todo componente do design system deve ter:
1. **Prop interface** — tipagem TypeScript clara
2. **Variantes** — quais variações existem e quando usar
3. **Estados** — todos os estados visuais documentados
4. **Exemplos de uso** — pelo menos 2 exemplos práticos
5. **Acessibilidade** — atributos ARIA e comportamento de teclado
6. **Dependências** — quais tokens/componentes ele usa

## Checklist de Manutenção

Ao adicionar ou modificar o design system:
- [ ] Novo token/documentação atualizada
- [ ] Componente testado visualmente
- [ ] Acessibilidade verificada (constraste, foco, aria)
- [ ] Responsividade testada
- [ ] Documentação de uso atualizada
- [ ] Não quebra componentes existentes

## Integração com Outras Skills

- `frontend-design.md` → Direção estética e criatividade visual
- `ui-design.md` → Detalhamento de estados e micro-interações
- `ux-design.md` → Fluxos e navegação que usam os componentes
- `test-driven-dev.md` → Testes visuais e de acessibilidade
