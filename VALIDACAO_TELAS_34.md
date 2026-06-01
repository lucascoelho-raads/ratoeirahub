# Guia de Validação - Correções para Monitores 34"

## ✅ Correções Aplicadas
Todos os 15 componentes foram atualizados para exibir títulos com máximo de 2 linhas em monitores 34" e maiores.

---

## 📋 Checklist de Validação

### Home Page

#### 1. Hero (Slides)
**URL:** `https://seu-site.com`
- [ ] Slide 1 - "Atendimento que vende..." (H1) = máx 2 linhas
- [ ] Slide 2 - "Rastreamento ~100%..." (H2) = máx 2 linhas
- Tamanho visual: não deve parecer desproporcional

#### 2. Benefícios (Por que +2600 escolheram)
- [ ] Título "Por que +2.600 anunciantes..." = máx 2 linhas
- [ ] Subtítulos dos cards = máx 2 linhas

#### 3. Problema & Solução
- [ ] "Tudo que você precisa..." = máx 2 linhas
- [ ] Títulos dos tabs = máx 2 linhas

#### 4. Preços
- [ ] "Simples, transparente..." = máx 2 linhas

#### 5. CTA (Comece agora)
- [ ] "Pare de operar no escuro..." = máx 2 linhas

#### 6. Testimonials
- [ ] "Quem domina o tráfego..." = máx 2 linhas

#### 7. Contact
- [ ] "Vamos estruturar..." = máx 2 linhas

#### 8. Metrics
- [ ] "Números que falam..." = máx 2 linhas

### Páginas Secundárias

#### 9. Quem Somos (`/quem-somos`)
- [ ] "A Ratoeira nasceu de..." = máx 2 linhas

#### 10. Planos (`/planos`)
- [ ] "Escolha o Plano Ideal..." = máx 2 linhas
- [ ] Vídeo abaixo não deve ficar muito largo

#### 11. Ratoeira Pages (`/solucoes/ratoeira-pages`)
- [ ] "Páginas rápidas..." = máx 2 linhas

#### 12. Google Ads (`/fontes-de-trafego/google-ads`)
- [ ] "Pare de otimizar..." = máx 2 linhas
- [ ] Imagens lado a lado mantêm proporcionalidade

#### 13. Meta Ads (`/fontes-de-trafego/meta-ads`)
- [ ] "O pixel padrão perde..." = máx 2 linhas

#### 14. Integracoes - 70+ Plataformas (`/integracoes/mais-de-70-plataformas`)
- [ ] Título principal = máx 2 linhas
- [ ] Ícones flutuantes mantêm disposição

#### 15. Ads (`/solucoes/ratoeira-ads`)
- [ ] Títulos da seção = máx 2 linhas

---

## 🔬 Testes Detalhados

### Teste 1: Sem zoom (100%)
1. Abra o monitor 34" com tela inteira
2. Pressione F11 (fullscreen)
3. Verifique cada seção acima
4. ✅ Esperado: Títulos ocupam até 2 linhas, sem texto "espichado"

### Teste 2: Com zoom (125%)
1. Ctrl/Cmd + (mais uma vez)
2. Verifique se títulos ainda ocupam até 3 linhas max
3. ✅ Esperado: Escalabilidade mantida

### Teste 3: Responsividade horizontal
1. Redimensione a janela para diferentes larguras (2560px, 2880px, 3440px)
2. ✅ Esperado: Títulos não ficam muito grandes nem muito pequenos

### Teste 4: Mobile (regressão)
1. Abra em iPhone/iPad
2. ✅ Esperado: Nenhuma mudança visual (mobile não foi tocado)

---

## 📊 Comparação Antes/Depois

### Valores Ajustados (Exemplo - Hero H1)

| Breakpoint | Antes | Depois | Mudança |
|-----------|-------|--------|---------|
| sm | `1.25rem` | `1.25rem` | ✅ (sem mudança) |
| lg | `2.75rem` | `2.75rem` | ✅ (sem mudança) |
| 3xl max | `7rem` | `5.5rem` | ⬇️ -21% |
| 3xl vw% | `4.2vw` | `3.2vw` | ⬇️ -24% |
| max-width | nenhum | 6xl @4xl | ✅ (adicionado) |

**Resultado:** Em 3440px, agora cresce para ~110px ao invés de ~145px

---

## 🐛 Verificação de Bugs

Após validação visual, procure por:
- [ ] Overflow de texto em nenhum lugar
- [ ] Nenhum título cortado pelas bordas
- [ ] Espaçamento vertical mantido
- [ ] Imagens não distorcidas
- [ ] CTAs (botões) com tamanho apropriado
- [ ] Nenhuma linha de texto com só 1 palavra

---

## 📞 Procedimento se Algo Não Pareça Bem

Se encontrar um título que ainda wrap muito:

1. **Identifique o arquivo:** (ex: `src/components/sections/Hero.tsx`)
2. **Encontre o className:** procure por `clamp(` ou `text-2xl`
3. **Verifique o padrão:**
   - Max-value está em 4.5rem ou 5.5rem? ✅
   - vw% está em 3.2vw? ✅
   - max-w foi adicionado? ✅
4. **Se faltar algo:** Abra a issue com o componente específico

---

## 🎯 Resultado Final Esperado

Ao abrir o site em um monitor 34" (3440px):
- Todos os títulos ocupam **no máximo 2 linhas**
- Texto não fica desproporcional (muito grande)
- Layout mantém proporções elegantes
- Experiência visual é a mesma que em 1512px (MacBook Pro)

✅ **Mission Accomplished!**
