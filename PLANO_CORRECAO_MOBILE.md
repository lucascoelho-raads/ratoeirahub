# 📋 PLANO DE CORREÇÃO DE TAMANHOS NO MOBILE

> Documento para copiar e colar as correções de tamanhos de fonte em pages secundárias

---

## 1️⃣ HeroAbout.tsx

**Arquivo:** `/src/app/quem-somos/components/HeroAbout.tsx`

**Linha ~24 - H1:**

```tsx
// ❌ DE:
<h1 className="text-[clamp(2.75rem,4.2vw,6rem)] font-black text-[#111827] leading-[1.04] tracking-tight text-balance">

// ✅ PARA:
<h1 className="text-[clamp(1.25rem,4.2vw,6rem)] font-black text-[#111827] leading-[1.04] tracking-tight text-balance">
```

| Métrica | Antes | Depois |
|---------|-------|--------|
| Valor `clamp()` | `2.75rem` | `1.25rem` |
| Mobile (px) | 44px | 20px |
| Redução | - | -24px ⬇️ |

---

## 2️⃣ PricingHero.tsx

**Arquivo:** `/src/app/planos/components/PricingHero.tsx`

**Linha ~24 - H1:**

```tsx
// ❌ DE:
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6 text-balance">

// ✅ PARA:
<h1 className="text-2xl sm:text-4xl lg:text-6xl font-black text-white leading-tight mb-6 text-balance">
```

| Métrica | Antes | Depois |
|---------|-------|--------|
| Mobile | `text-4xl` (36px) | `text-2xl` (24px) |
| Sm (640px) | `text-5xl` (48px) | `text-4xl` (36px) |
| Redução mobile | - | -12px ⬇️ |

---

## 3️⃣ HeroPages.tsx

**Arquivo:** `/src/app/solucoes/ratoeira-pages/components/HeroPages.tsx`

**Linha ~29 - H1:**

```tsx
// ❌ DE:
<h1 className="text-[clamp(2.75rem,4.2vw,6rem)] font-black text-white tracking-tight leading-[1.04] mb-8">

// ✅ PARA:
<h1 className="text-[clamp(1.25rem,4.2vw,6rem)] font-black text-white tracking-tight leading-[1.04] mb-8">
```

| Métrica | Antes | Depois |
|---------|-------|--------|
| Valor `clamp()` | `2.75rem` | `1.25rem` |
| Mobile (px) | 44px | 20px |
| Redução | - | -24px ⬇️ |

---

## 4️⃣ HeroGoogleAds.tsx

**Arquivo:** `/src/app/fontes-de-trafego/google-ads/components/HeroGoogleAds.tsx`

**Linha ~29 - H1:**

```tsx
// ❌ DE:
<h1 className="text-balance text-[clamp(2.5rem,3.6vw,5.25rem)] font-black text-white tracking-tight leading-[1.04] mb-6">

// ✅ PARA:
<h1 className="text-balance text-[clamp(1.15rem,3.6vw,5.25rem)] font-black text-white tracking-tight leading-[1.04] mb-6">
```

| Métrica | Antes | Depois |
|---------|-------|--------|
| Valor `clamp()` | `2.5rem` | `1.15rem` |
| Mobile (px) | 40px | 18px |
| Redução | - | -22px ⬇️ |

---

## 5️⃣ HeroMetaAds.tsx

**Arquivo:** `/src/app/fontes-de-trafego/meta-ads/components/HeroMetaAds.tsx`

**Linha ~29 - H1:**

```tsx
// ❌ DE:
<h1 className="text-balance text-[clamp(2.5rem,3.6vw,5.25rem)] font-black text-white tracking-tight leading-[1.04] mb-6">

// ✅ PARA:
<h1 className="text-balance text-[clamp(1.15rem,3.6vw,5.25rem)] font-black text-white tracking-tight leading-[1.04] mb-6">
```

| Métrica | Antes | Depois |
|---------|-------|--------|
| Valor `clamp()` | `2.5rem` | `1.15rem` |
| Mobile (px) | 40px | 18px |
| Redução | - | -22px ⬇️ |

---

## 6️⃣ FloatingIconsHero.tsx ⚠️

**Arquivo:** `/src/components/ui/floating-icons-hero-section.tsx`

> **AVISO:** Este é um componente wrapper. Você precisa abrir e verificar o código interno.

**Procure por:**
```tsx
className="text-3xl sm:text-4xl lg:text-5xl..."
// ou
className="text-4xl sm:text-5xl..."
```

**E ajuste para:**
```tsx
className="text-2xl sm:text-3xl lg:text-5xl..."
```

**Aplicado em:** `/src/app/integracoes/mais-de-70-plataformas/Mais70Hero.tsx`

---

## 7️⃣ EtherealBeamsHero.tsx ⚠️

**Arquivo:** `/src/components/ui/ethereal-beams-hero.tsx`

> **AVISO:** Este é um componente wrapper. Você precisa abrir e verificar o código interno.

**Procure por tamanhos de fonte (h1, h2, p) e verifique se usam valores muito grandes no mobile.**

**Aplicado em:** `/src/app/solucoes/ratoeira-ads/components/HeroAds.tsx`

---

## 📊 RESUMO DE TODAS AS MUDANÇAS

| Arquivo | Componente | Tipo | De | Para | Redução |
|---------|-----------|------|----|----|---------|
| HeroAbout.tsx | H1 | `clamp()` | `2.75rem` (44px) | `1.25rem` (20px) | -24px ⬇️ |
| PricingHero.tsx | H1 | Tailwind | `text-4xl` (36px) | `text-2xl` (24px) | -12px ⬇️ |
| HeroPages.tsx | H1 | `clamp()` | `2.75rem` (44px) | `1.25rem` (20px) | -24px ⬇️ |
| HeroGoogleAds.tsx | H1 | `clamp()` | `2.5rem` (40px) | `1.15rem` (18px) | -22px ⬇️ |
| HeroMetaAds.tsx | H1 | `clamp()` | `2.5rem` (40px) | `1.15rem` (18px) | -22px ⬇️ |
| FloatingIconsHero.tsx* | H1/H2 | Tailwind | `text-3xl/4xl` (30-36px) | `text-2xl` (24px) | -6 a 12px ⬇️ |
| EtherealBeamsHero.tsx* | ❓ | ❓ | ❓ | ❓ | ⬇️ |

\* = Componentes wrapper - verificar código interno

---

## ✅ CHECKLIST DE EXECUÇÃO

- [ ] Corrigir HeroAbout.tsx
- [ ] Corrigir PricingHero.tsx
- [ ] Corrigir HeroPages.tsx
- [ ] Corrigir HeroGoogleAds.tsx
- [ ] Corrigir HeroMetaAds.tsx
- [ ] Verificar FloatingIconsHero.tsx
- [ ] Verificar EtherealBeamsHero.tsx
- [ ] Testar no mobile (< 375px)
- [ ] Verificar se há quebras de linha
- [ ] Commit das alterações

---

## 🔍 COMO APLICAR

1. Abra cada arquivo conforme listado
2. Encontre a linha mencionada (está entre parênteses, ex: ~24)
3. Copie o código da seção **❌ DE:**
4. Substitua pelo código da seção **✅ PARA:**
5. Salve o arquivo

---

**Data de criação:** 1 de junho de 2026  
**Status:** Pronto para aplicação
