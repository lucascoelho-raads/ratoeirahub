# Skills do Projeto — Ratoeira Hub

Este diretório contém skills especializadas para o Kimi Code CLI usar no projeto Ratoeira Hub.

## Como funciona

Skills são guias de instruções que o Kimi consulta automaticamente quando uma tarefa corresponde ao escopo da skill. Elas ficam no contexto do projeto e têm precedência sobre skills genéricas.

## Skills disponíveis

| Skill | Quando usar |
|-------|-------------|
| `brainstorming.md` | Antes de criar funcionalidades novas, arquiteturas ou mudanças de comportamento. Impede implementação prematura. |
| `frontend-design.md` | Ao criar ou refatorar interfaces. Garante design intencional, memorável e production-ready. |
| `test-driven-dev.md` | Ao implementar features, corrigir bugs ou refatorar. Exige teste falhando antes de qualquer código de produção. |
| `security-auditor.md` | Ao revisar autenticação, autorização, fluxo de dados ou fazer auditoria de segurança. |

## Adicionar uma nova skill

1. Copie `_template.md` para `minha-skill.md`
2. Preencha o frontmatter (nome e descrição são obrigatórios)
3. Escreva as instruções no corpo
4. Teste na prática e itere

## Referências

- Skills baseadas no repositório [antigravity-awesome-skills](https://github.com/sickn33/antigravity-awesome-skills)
- Formato segue a especificação do Kimi Code CLI (`SKILL.md` com frontmatter YAML)
