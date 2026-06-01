---
name: test-driven-development
description: "Use ao implementar qualquer feature, bugfix ou refatoração no projeto Ratoeira Hub. Exige teste falhando antes de qualquer código de produção. Aplica a todas as camadas: frontend, backend, API e integrações."
---

# Test-Driven Development (TDD)

## Visão Geral

Escreva o teste primeiro. Veja falhar. Escreva o código mínimo para passar.

**Princípio central:** Se você não viu o teste falhar, você não sabe se ele testa a coisa certa.

**Violar a letra das regras é violar o espírito das regras.**

## Quando Usar

**Sempre:**
- Novas features
- Correções de bugs
- Refatorações
- Mudanças de comportamento

**Exceções (pergunte ao usuário):**
- Protótipos descartáveis
- Código gerado
- Arquivos de configuração

Pensando "pular TDD só dessa vez"? Pare. Isso é racionalização.

## A Lei de Ferro

```
NENHUM CÓDIGO DE PRODUÇÃO SEM UM TESTE FALHANDO PRIMEIRO
```

Escreveu código antes do teste? Delete. Comece de novo.

**Sem exceções:**
- Não mantenha como "referência"
- Não "adapte" enquanto escreve os testes
- Não olhe para ele
- Delete significa delete

Implemente a partir dos testes. Ponto final.

## Red-Green-Refactor

### RED — Escreva o Teste Falhando

Escreva um teste mínimo mostrando o que deveria acontecer.

**Bom:**
```typescript
test('retries failed operations 3 times', async () => {
  let attempts = 0;
  const operation = () => {
    attempts++;
    if (attempts < 3) throw new Error('fail');
    return 'success';
  };

  const result = await retryOperation(operation);

  expect(result).toBe('success');
  expect(attempts).toBe(3);
});
```
Nome claro, testa comportamento real, uma coisa só

**Ruim:**
```typescript
test('retry works', async () => {
  const mock = jest.fn()
    .mockRejectedValueOnce(new Error())
    .mockRejectedValueOnce(new Error())
    .mockResolvedValueOnce('success');
  await retryOperation(mock);
  expect(mock).toHaveBeenCalledTimes(3);
});
```
Nome vago, testa mock em vez de código

**Requisitos:**
- Um comportamento
- Nome claro
- Código real (sem mocks a menos que inevitáveis)

### Verify RED — Veja Falhar

**OBRIGATÓRIO. Nunca pule.**

```bash
npm test path/to/test.test.ts
```

Confirme:
- Teste falha (não dá erro)
- Mensagem de falha é a esperada
- Falha porque a feature está faltando (não por typos)

**Teste passou?** Você está testando comportamento existente. Corrija o teste.

**Teste deu erro?** Corrija o erro, re-execute até falhar corretamente.

### GREEN — Código Mínimo

Escreva o código mais simples para passar o teste.

**Bom:**
```typescript
async function retryOperation<T>(fn: () => Promise<T>): Promise<T> {
  for (let i = 0; i < 3; i++) {
    try {
      return await fn();
    } catch (e) {
      if (i === 2) throw e;
    }
  }
  throw new Error('unreachable');
}
```
Só o suficiente para passar

**Ruim:**
```typescript
async function retryOperation<T>(
  fn: () => Promise<T>,
  options?: {
    maxRetries?: number;
    backoff?: 'linear' | 'exponential';
    onRetry?: (attempt: number) => void;
  }
): Promise<T> {
  // YAGNI
}
```
Super-engenharia

Não adicione features, refatore outro código, ou "melhore" além do teste.

### Verify GREEN — Veja Passar

**OBRIGATÓRIO.**

```bash
npm test path/to/test.test.ts
```

Confirme:
- Teste passa
- Outros testes ainda passam
- Saída impecável (sem erros, warnings)

**Teste falhou?** Corrija o código, não o teste.

**Outros testes falharam?** Corrija agora.

### REFACTOR — Limpe

Após green apenas:
- Remova duplicação
- Melhore nomes
- Extraia helpers

Mantenha testes verdes. Não adicione comportamento.

### Repita

Próximo teste falhando para a próxima feature.

## Bons Testes

| Qualidade | Bom | Ruim |
|-----------|-----|------|
| **Minimal** | Uma coisa. "e" no nome? Divida. | `test('validates email and domain and whitespace')` |
| **Claro** | Nome descreve comportamento | `test('test1')` |
| **Mostra intenção** | Demonstra API desejada | Ofusca o que o código deve fazer |

## Por que a Ordem Importa

**"Vou escrever testes depois para verificar se funciona"**

Testes escritos após o código passam imediatamente. Passar imediatamente não prova nada:
- Pode testar coisa errada
- Pode testar implementação, não comportamento
- Pode perder edge cases que você esqueceu
- Você nunca viu ele pegar o bug

Test-first força você a ver o teste falhar, provando que ele realmente testa algo.

**"Já testei manualmente todos os edge cases"**

Teste manual é ad-hoc. Você acha que testou tudo mas:
- Sem registro do que testou
- Não pode re-executar quando o código muda
- Fácil esquecer casos sob pressão
- "Funcionou quando eu tentei" ≠ compreensivo

Testes automatizados são sistemáticos. Executam da mesma forma sempre.

**"Deletar X horas de trabalho é desperdício"**

Falácia do custo irrecuperável. O tempo já se foi. Sua escolha agora:
- Delete e reescreva com TDD (X horas a mais, alta confiança)
- Mantenha e adicione testes depois (30 min, baixa confiança, provavelmente bugs)

O "desperdício" é manter código que você não pode confiar. Código funcionando sem testes reais é dívida técnica.

## Racionalizações Comuns

| Desculpa | Realidade |
|----------|-----------|
| "Muito simples para testar" | Código simples quebra. Teste leva 30 segundos. |
| "Vou testar depois" | Testes passando imediatamente não provam nada. |
| "Testes depois alcançam os mesmos objetivos" | Testes-depois = "o que isso faz?" Testes-primeiro = "o que isso deveria fazer?" |
| "Já testei manualmente" | Ad-hoc ≠ sistemático. Sem registro, não pode re-executar. |
| "Deletar X horas é desperdício" | Falácia do custo irrecuperável. Manter código não verificado é dívida técnica. |
| "Mantenho como referência, escrevo testes primeiro" | Você vai adaptar. Isso é testar depois. Delete significa delete. |
| "Preciso explorar primeiro" | Tudo bem. Jogue fora a exploração, comece com TDD. |
| "Teste difícil = design confuso" | Ouça o teste. Difícil de testar = difícil de usar. |
| "TDD vai me atrasar" | TDD é mais rápido que debugar. Pragmático = test-first. |
| "Teste manual é mais rápido" | Manual não prova edge cases. Você vai re-testar a cada mudança. |
| "Código existente não tem testes" | Você está melhorando. Adicione testes para código existente. |

## Bandeiras Vermelhas — PARE e Comece de Novo

- Código antes do teste
- Teste após implementação
- Teste passa imediatamente
- Não consegue explicar por que o teste falhou
- Testes adicionados "depois"
- Racionalizando "só dessa vez"
- "Já testei manualmente"
- "Testes depois alcançam o mesmo propósito"
- "É sobre espírito não ritual"
- "Mantenho como referência" ou "adapto código existente"
| "Já gastei X horas, deletar é desperdício"
| "TDD é dogmático, eu sou pragmático"
| "Isso é diferente porque..."

**Tudo isso significa: Delete o código. Comece de novo com TDD.**

## Exemplo: Correção de Bug

**Bug:** Email vazio sendo aceito

**RED**
```typescript
test('rejects empty email', async () => {
  const result = await submitForm({ email: '' });
  expect(result.error).toBe('Email required');
});
```

**Verify RED**
```bash
$ npm test
FAIL: expected 'Email required', got undefined
```

**GREEN**
```typescript
function submitForm(data: FormData) {
  if (!data.email?.trim()) {
    return { error: 'Email required' };
  }
  // ...
}
```

**Verify GREEN**
```bash
$ npm test
PASS
```

**REFACTOR**
Extraia validação para múltiplos campos se necessário.

## Checklist de Verificação

Antes de marcar trabalho como completo:

- [ ] Toda função/método novo tem um teste
- [ ] Viu cada teste falhar antes de implementar
- [ ] Cada teste falhou pelo motivo esperado (feature faltando, não typo)
- [ ] Escreveu código mínimo para passar cada teste
- [ ] Todos os testes passam
- [ ] Saída impecável (sem erros, warnings)
- [ ] Testes usam código real (mocks apenas se inevitáveis)
- [ ] Edge cases e erros cobertos

Não consegue marcar todas as caixas? Você pulou TDD. Comece de novo.

## Quando Travar

| Problema | Solução |
|----------|---------|
| Não sabe como testar | Escreva a API desejada. Escreva a asserção primeiro. Pergunte ao usuário. |
| Teste muito complicado | Design muito complicado. Simplifique a interface. |
| Precisa mockar tudo | Código muito acoplado. Use injeção de dependência. |
| Setup de teste enorme | Extraia helpers. Ainda complexo? Simplifique o design. |

## Integração com Outras Skills

- `brainstorming.md` → Definir estratégia de testes no design
- `frontend-design.md` → Testes visuais e de interação (Storybook, Testing Library)
- `security-auditor.md` → Testes de segurança (autenticação, autorização, inputs maliciosos)
