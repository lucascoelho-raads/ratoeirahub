---
name: ux-design
description: "Use ao planejar flows, jornadas de usuário, arquitetura de informação ou estrutura de navegação no projeto Ratoeira Hub. Define entry points, exit points e estados de edge case antes de qualquer componente ser construído."
---

# UX Design — Ratoeira Hub

## Visão Geral

Esta skill projeta **fluxos antes de telas**. Usa padrões de UX comprovados para definir entry points, exits, inventário de telas e estrutura de navegação, para que a implementação tenha uma jornada de usuário coerente em vez de uma pilha de páginas desconectadas.

## Quando Usar

- Ao planejar onboarding, checkout, gerenciamento de conta, dashboards ou flows de drill-down
- Quando uma nova feature abrange múltiplas telas ou estados de modal
- Quando usuários precisam de um caminho claro através de uma tarefa em vez de uma página isolada
- Quando a UI precisa de lógica de navegação antes que componentes sejam construídos

## Quando NÃO Usar

- Quando a tarefa é apenas ajuste visual de um componente isolado (use `ui-design.md`)
- Quando não há decisões de fluxo ou navegação envolvidas

## Princípios de Arquitetura de Informação

- **Progressive disclosure:** revele complexidade apenas quando necessário
- **Lei de Miller:** agrupe conteúdo em grupos gerenciáveis (7±2 itens)
- **Lei de Hick:** minimize a sobrecarga de decisão em cada tela

## Modelos de Navegação Comuns

- **Hub and spoke** para dashboards e views de detalhe
- **Fluxo linear** para onboarding, formulários e checkout
- **Navegação por tabs** para 3 a 5 áreas de top-level

## Regras de Fluxo

- Todo fluxo tem um entry point claro
- Todo fluxo tem um exit ou condição de sucesso clara
- Features-chave devem estar normalmente acessíveis em até 3 toques/cliques da home
- Telas non-root precisam de navegação de volta
- Estados de loading, empty e error precisam de caminhos de recovery explícitos

## O Processo

### 1️⃣ Mapear a Jornada Atual

Antes de propor qualquer mudança:
- Liste todas as telas/estados envolvidos
- Identifique onde o usuário entra e onde sai
- Mapeie decisões que o usuário precisa tomar em cada passo

### 2️⃣ Definir Entry Points

- De onde o usuário chega a este fluxo?
- Quais são os triggers (botão, link, notificação, redirecionamento)?
- O que o usuário espera encontrar ao entrar?

### 3️⃣ Definir Exit Points

- Quais são as condições de sucesso?
- O que acontece após o sucesso (redirect, toast, modal de confirmação)?
- Como o usuário cancela ou abandona o fluxo?
- Existe um caminho de "voltar" em cada etapa?

### 4️⃣ Inventário de Telas e Estados

Para cada tela/estado no fluxo, documente:
- **Propósito:** qual pergunta esta tela responde?
- **Conteúdo:** quais dados/informações são exibidos?
- **Ações:** quais ações o usuário pode tomar?
- **Próximo passo:** para onde o fluxo segue?

### 5️⃣ Edge Cases Obrigatórios

Todo fluxo deve considerar:
- **Loading:** o que o usuário vê enquanto carrega?
- **Empty:** o que aparece quando não há dados?
- **Error:** como o erro é comunicado e qual a ação de recovery?
- **Offline:** o que acontece sem conexão?
- **Timeout:** qual o comportamento após timeout?

### 6️⃣ Validação de Navegação

Verifique:
- [ ] O usuário pode completar o fluxo sem se perder?
- [ ] Cada tela responde a uma pergunta primária única?
- [ ] Escape hatches estão visíveis para passos arriscados ou destrutivos?
- [ ] O usuário pode voltar sem perder progresso?
- [ ] Ações de undo/redo estão disponíveis onde apropriado?

## Saída Esperada

Forneça:
1. Um diagrama de fluxo (ASCII ou descrição textual estruturada)
2. Um inventário de telas com o propósito de cada uma
3. Edge cases para loading, empty e error states
4. Padrões reutilizáveis recomendados e scaffolds de página para implementar em seguida

## Exemplo de Diagrama de Fluxo

```
[Home/Dashboard] ──► [Escolher Plano]
                          │
              ┌───────────┼───────────┐
              ▼           ▼           ▼
        [Gratuito]   [Pro]       [Enterprise]
              │           │           │
              ▼           ▼           ▼
        [Onboarding]  [Checkout]   [Contato Vendas]
              │           │           │
              └───────────┴───────────┘
                          │
                          ▼
                    [Dashboard]
```

## Integração com Outras Skills

- `brainstorming.md` → Antes de mapear fluxos, valide o entendimento do problema
- `frontend-design.md` → Após o fluxo definido, aplique direção estética
- `ui-design.md` → Detalhe componentes e interações de cada tela do fluxo
- `design-system.md` → Use tokens e componentes existentes para manter consistência
