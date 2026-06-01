---
name: ui-design
description: "Use ao criar, refatorar ou revisar componentes, layouts, micro-interações e estados visuais no projeto Ratoeira Hub. Foco em design de interface acessível, consistente e alinhado ao design system existente."
---

# UI Design — Ratoeira Hub

Você é um especialista em design de interfaces para aplicações web modernas, com foco em **consistência, acessibilidade e clareza visual**.

## Quando Usar

- Ao criar novos componentes ou layouts
- Ao refatorar interfaces existentes
- Ao definir estados visuais (default, hover, active, disabled, loading, error, empty)
- Ao trabalhar com micro-interações e feedback visual
- Ao revisar contraste, hierarquia visual e alinhamento

## Quando NÃO Usar

- Quando a tarefa é puramente de arquitetura de fluxo (use `ux-design.md`)
- Quando não há interface visual envolvida

## Fundamentos de UI

### Hierarquia Visual
- **Tamanho:** elementos maiores atraem mais atenção
- **Peso:** negrito e cor definem importância
- **Espaçamento:** proximidade agrupa informações relacionadas
- **Contraste:** diferenças de cor/tonalidade criam foco

### Consistência
- Use o design system existente (`design-system.md`)
- Mantenha padrões de espaçamento, tipografia e cores
- Reutilize componentes em vez de recriar variações

### Feedback Visual
- Todo input do usuário precisa de feedback
- Estados de loading devem ser claros e não bloqueantes
- Erros devem ser comunicados próximo ao campo afetado
- Sucesso deve ser confirmado de forma visível

## Estados Obrigatórios por Componente

Todo componente interativo deve definir:
- [ ] **Default** — estado normal
- [ ] **Hover** — cursor sobre o elemento
- [ ] **Active / Pressed** — clique/toque em andamento
- [ ] **Focus** — navegação por teclado (ring/outline visível)
- [ ] **Disabled** — não interativo, visualmente atenuado
- [ ] **Loading** — processando ação
- [ ] **Error** — validação falhou ou erro ocorreu
- [ ] **Empty** — sem conteúdo para exibir

## Checklist de Acessibilidade (WCAG 2.1 AA)

- [ ] Contraste mínimo 4.5:1 para texto normal
- [ ] Contraste mínimo 3:1 para texto grande (18pt+ ou 14pt+ bold)
- [ ] Todos os elementos interativos são focáveis por teclado
- [ ] Ordem de tabulação lógica e visível
- [ ] Estados de foco claramente visíveis
- [ ] Labels associadas a todos os inputs
- [ ] Mensagens de erro associadas a inputs via aria-describedby
- [ ] Não depende apenas de cor para comunicar informação
- [ ] Textos redimensionam até 200% sem perda de funcionalidade
- [ ] Áreas de clique/toque mínimo 44x44px

## Padrões de Componente

### Botões
- **Primário:** ação principal da tela
- **Secundário:** ação alternativa
- **Terciário/Ghost:** ação de baixa prioridade
- **Danger:** ações destrutivas
- **Icon:** ações compactas com ícone

### Formulários
- Um label por campo
- Placeholder como hint, não como substituto de label
- Validação em tempo real quando apropriado
- Agrupe campos relacionados
- CTA primário alinhado à esquerda ou à direita (consistente)

### Cards
- Shadow sutil para elevação
- Padding consistente interno
- Borda ou background para separação visual
- Ação principal destacada

### Modais/Dialogs
- Overlay com backdrop-blur ou opacidade
- Título claro indicando o propósito
- CTA primário + opção de cancelar
- Fechável por ESC, clique no backdrop e botão de fechar
- Foco preso dentro do modal enquanto aberto

### Tabelas
- Headers com background diferenciado
- Zebra striping ou hover para linhas
- Ações agrupadas em dropdown se muitas
- Paginação ou scroll virtual para grandes datasets
- Colunas ordenáveis quando relevante

### Feedback (Toasts/Notifications)
- Tipos: success, error, warning, info
- Posição consistente (top-right, bottom-center, etc.)
- Auto-dismiss com progresso visual
- Ação de dismiss manual
- Empilhamento com limite máximo

## Responsividade

- Mobile-first: projete para 320px antes de escalar
- Breakpoints do projeto: `sm`, `md`, `lg`, `xl`, `2xl`
- Touch targets mínimos em mobile: 44x44px
- Evite hover-only interactions em touch
- Teste leitura em telas pequenas (máx 40-60 caracteres por linha)

## Micro-interações

- **Duração:** 150-300ms para feedback instantâneo, 300-500ms para transições
- **Easing:** ease-out para entrada, ease-in para saída
- **Props animáveis:** opacity, transform (translate, scale), height
- **Evite animar:** width, margin, padding, top/left (causa reflow)

## Anti-Padrões de UI

❌ Texto truncado sem tooltip ou ellipsis
❌ Botões desabilitados sem explicação
❌ Modais sem título ou CTA claro
❌ Formulários sem validação visual
❌ Links que parecem texto normal
❌ Cores usadas apenas para comunicar estado (sem ícone ou texto)
❌ Scroll horizontal em containers
❌ Z-index arbitrários altos

## Integração com Outras Skills

- `ux-design.md` → Fluxo e navegação antes de detalhar componentes
- `frontend-design.md` → Direção estética e diferenciação visual
- `design-system.md` → Tokens, componentes base e padrões reutilizáveis
- `test-driven-dev.md` → Testes de acessibilidade e interação
