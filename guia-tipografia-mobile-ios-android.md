# Guia de Tipografia Mobile para iOS e Android

## 📱 Escala Tipográfica Recomendada para Mobile

| Elemento | Android (sp/px) | iOS (pt/px) | Peso | Uso |
|----------|-----------------|-------------|------|-----|
| **Título Principal (H1)** | 28–30px | 30–34px | Bold (700) | Títulos de página, hero text |
| **Subtítulo (H2)** | 22–24px | 24–28px | Medium (600) | Seções, cards principais |
| **Subtítulo 2 (H3)** | 18–20px | 20–22px | Medium (500) | Títulos de listas, subtítulos internos |
| **Corpo (Body)** | **16px** | **17px** | Regular (400) | Texto principal, parágrafos |
| **Texto Auxiliar (Callout)** | 13–14px | 13–14px | Regular | Destaques curtos, labels de formulário |
| **Legenda/Caption** | 11–12px | 11–12px | Regular | Metadados, timestamps, créditos |

---

## 🎯 Regras Essenciais de UX/UI

### 1. Corpo: Nunca menos que 16px
O tamanho mínimo para texto de leitura é **16px** (ou 16sp no Android). Menor que isso compromete a legibilidade e acessibilidade. Para apps de leitura longa (notícias, blogs), prefira **17–18px**.

> **Dica crítica:** Inputs de formulário devem ter **no mínimo 16px**. No iOS, tamanhos menores disparam o zoom automático do navegador, quebrando a experiência.

### 2. Hierarquia Visual Clara
Use uma escala modular (proporção de ~1.25x a 1.5x entre níveis):
- Se o body é **16px**, o H3 deve ser ~**20px**, H2 ~**24px**, H1 ~**30px**
- Isso cria contraste suficiente para scanabilidade

### 3. Altura de Linha (Line Height)
- **Body text:** 1.5x (ex: 16px → 24px de line-height)
- **Títulos:** 1.1–1.2x (ex: 30px → 34px)
- Espaçamento adequado reduz fadiga de leitura em até 25%

### 4. Comprimento de Linha
No mobile, mantenha entre **35–50 caracteres por linha**. Mais que isso força o olho a percorrer distâncias excessivas; menos que 30 caracteres quebra o ritmo de leitura.

### 5. Acessibilidade (WCAG)
- Contraste mínimo de **4.5:1** para textos normais
- Suporte a **Dynamic Type** (iOS) e fontes escaláveis (Android)
- Teste com usuários usando zoom de acessibilidade

---

## 🍎 iOS vs 🤖 Android

| Contexto | iOS (pt) | Android (sp) |
|----------|----------|--------------|
| Body padrão | 17pt | 16sp |
| Título grande | 34pt | 28sp |
| Legenda | 11pt | 12sp |
| Fonte nativa | SF Pro | Roboto |

Ambos os sistemas usam fontes otimizadas para leitura em tela. Sempre que possível, use as fontes nativas — elas são cacheadas no nível do sistema e oferecem melhor performance.

---

## ⚠️ Erros Comuns a Evitar

- **Muitos tamanhos:** Limite-se a 4–5 tamanhos no máximo
- **Texto justificado:** No mobile, sempre alinhe à esquerda. Justificado cria "rios de espaço branco" que dificultam a leitura
- **Fontes decorativas para UI:** Use sans-serifs geométricas (Inter, Roboto, SF Pro) para interface. Fontes decorativas reduzem a velocidade de leitura em 12%

---

## 📐 Resumo Prático (Cheat Sheet)

```
H1 (Título):     28-34px  | Bold    | Line-height 1.1-1.2
H2 (Subtítulo):  22-28px  | Medium  | Line-height 1.2
H3 (Seção):      18-22px  | Medium  | Line-height 1.3
Body:            16-18px  | Regular | Line-height 1.5
Callout:         13-14px  | Regular | Line-height 1.4
Caption:         11-12px  | Regular | Line-height 1.3
```

A consistência é mais importante que os números exatos — defina sua escala no início do projeto e aplique-a rigidamente em todos os componentes.

---

# 🍎🤖 Otimização para iOS e Android

## 1. Tipografia Adaptativa

Use **unidades relativas** e **media queries** para ajustar automaticamente:

```css
/* Base: Android (16px) como padrão */
:root {
  --font-body: 16px;
  --font-h1: 28px;
  --font-h2: 22px;
  --font-caption: 12px;
  --line-body: 1.5;
}

/* iOS: Aumenta 1px no body (17px padrão do iOS) */
@supports (-webkit-touch-callout: none) {
  :root {
    --font-body: 17px;
    --font-h1: 30px;
    --font-h2: 24px;
  }
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-size: var(--font-body);
  line-height: var(--line-body);
}

/* Inputs: SEMPRE 16px+ para evitar zoom no iOS */
input, textarea, select {
  font-size: 16px !important;
}
```

**Por que funciona:** O `@supports (-webkit-touch-callout: none)` detecta exclusivamente iOS (Safari/WebKit). No Android, essa regra é ignorada.

---

## 2. Fontes Nativas por Plataforma

```css
body {
  /* iOS: SF Pro | Android: Roboto | Fallback: Segoe UI */
  font-family: -apple-system, BlinkMacSystemFont, 
               'Segoe UI', Roboto, Oxygen, 
               Ubuntu, Cantarell, sans-serif;
}
```

| Plataforma | Fonte Renderizada | Benefício |
|------------|-------------------|-----------|
| iOS | SF Pro | Otimizada para leitura retina, cacheada no sistema |
| Android | Roboto | Fonte padrão do Material Design, zero download |
| Desktop | Segoe UI | Windows nativa |

**Dica:** Nunca carregue fontes customizadas para UI básica. Use Google Fonts *apenas* para títulos decorativos (e com `font-display: swap`).

---

## 3. Safe Areas e Notches

```css
/* Respeita notch, Dynamic Island e barras de navegação */
header {
  padding-top: env(safe-area-inset-top);
  padding-left: env(safe-area-inset-left);
  padding-right: env(safe-area-inset-right);
}

/* Footer fixo: evita sobreposição com barra de gestos */
footer {
  padding-bottom: env(safe-area-inset-bottom);
  padding-bottom: max(16px, env(safe-area-inset-bottom));
}
```

**Meta tag essencial no `<head>`:**
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
```

---

## 4. Touch Targets (Áreas de Toque)

| Elemento | Tamanho Mínimo | Regra |
|----------|----------------|-------|
| Botões | 44×44px (iOS) / 48×48dp (Android) | Use `min-height: 48px` para ambos |
| Links em texto | 44px de altura | Aumente `line-height` ou padding |
| Checkbox/Radio | 44×44px | Área invisível de toque maior que o visual |

```css
button, a, input[type="checkbox"], input[type="radio"] {
  min-height: 48px;
  min-width: 48px;
}

/* Espaçamento entre elementos clicáveis */
.nav-item {
  padding: 12px 16px; /* 48px total com fonte 16px */
}
```

---

## 5. Temas e Cores (Dark Mode)

```css
:root {
  --bg: #ffffff;
  --text: #1a1a1a;
  --accent: #007aff; /* iOS blue */
}

@media (prefers-color-scheme: dark) {
  :root {
    --bg: #000000;
    --text: #ffffff;
    --accent: #0a84ff; /* iOS blue no dark */
  }
}

/* Android: Respeita Material You (Android 12+) */
@media (prefers-color-scheme: dark) {
  :root {
    --bg: #121212; /* Material dark surface */
    --text: #e0e0e0;
  }
}
```

---

## 6. Scroll e Gestos

```css
/* Scroll suave em ambos (mas respeita preferência do usuário) */
@media (prefers-reduced-motion: no-preference) {
  html {
    scroll-behavior: smooth;
  }
}

/* Scroll horizontal em carrosséis */
.carousel {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch; /* iOS: scroll com inércia */
  scrollbar-width: none; /* Android: esconde scrollbar */
}

.carousel::-webkit-scrollbar {
  display: none; /* iOS/Android WebKit */
}
```

---

## 7. Inputs e Formulários (Crítico!)

| Problema | Solução |
|----------|---------|
| Zoom automático no iOS | `font-size: 16px` mínimo em inputs |
| Teclado numérico para telefone | `<input type="tel" inputmode="numeric">` |
| Data/calendário nativo | `<input type="date">` (renderiza picker nativo de cada OS) |
| Select dropdown | `<select>` abre picker nativo (iOS: roda inferior / Android: modal) |

```html
<!-- Telefone: Teclado numérico nativo -->
<input type="tel" inputmode="numeric" pattern="[0-9]*">

<!-- Email: Teclado com @ e .com -->
<input type="email" autocomplete="email">

<!-- Evita zoom no iOS -->
<input type="text" style="font-size: 16px;">
```

---

## 8. Teste Real (Checklist)

| Teste | iOS | Android |
|-------|-----|---------|
| **Safari/Chrome** | Simulação no Xcode | Simulação no Android Studio |
| **Tamanho de fonte do sistema** | Ajuste em Acessibilidade → Tamanho do texto | Ajuste em Acessibilidade → Tamanho da fonte |
| **Zoom 200%** | Verifica se layout quebra | Verifica se touch targets ainda funcionam |
| **Dark Mode** | Ativa em Configurações | Ativa em Configurações |
| **VoiceOver/TalkBack** | Navegação por gestos | Navegação por gestos |

---

## 📦 Arquitetura CSS Completa Recomendada

```css
/* === 1. RESET E VARIÁVEIS === */
:root {
  --font-body: 16px;
  --font-h1: 28px;
  --space: 16px;
  --touch: 48px;
}

@supports (-webkit-touch-callout: none) {
  :root { --font-body: 17px; --font-h1: 30px; }
}

/* === 2. BASE === */
* { box-sizing: border-box; margin: 0; }
html { -webkit-text-size-adjust: 100%; }

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-size: var(--font-body);
  line-height: 1.5;
  color: var(--text);
  background: var(--bg);
  padding: env(safe-area-inset-top) env(safe-area-inset-right) 
           env(safe-area-inset-bottom) env(safe-area-inset-left);
}

/* === 3. TIPOGRAFIA === */
h1 { font-size: var(--font-h1); line-height: 1.2; }
h2 { font-size: calc(var(--font-h1) * 0.8); }
p  { font-size: var(--font-body); max-width: 65ch; }

/* === 4. INTERATIVOS === */
button, a, input {
  min-height: var(--touch);
  font-size: 16px; /* Evita zoom iOS */
}

/* === 5. UTILITÁRIOS === */
.sr-only { /* Screen reader only */ }
@media (prefers-reduced-motion: reduce) {
  * { animation: none !important; transition: none !important; }
}
```

---

> **Nota:** A chave é usar o que o sistema já oferece (fontes nativas, pickers de data, scroll behavior) em vez de recriar com JavaScript. Isso garante que seu site se "sinta" nativo em ambas as plataformas sem duplicar código.
