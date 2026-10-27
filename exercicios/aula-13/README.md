# Exercícios — Aula 13 (Funções isoladas)

Crie em `src/exercicios/aula-13/`.

## Exercício 1 — Refatore o TODO

Pegue seu TODO da aula 11 e tire toda a lógica dos `onClick` para `handleAdd`, `handleRemove(id)` e `handleComplete(id)`. O JSX não pode ter nenhuma lógica além de chamar essas funções.

## Exercício 2 — O erro clássico

Em uma cópia, escreva `onClick={handleRemove(item.id)}` e veja o que acontece (aviso de loop de renderização / itens sumindo). Explique em comentário e corrija.

## Exercício 3 — Função pura fora do componente

Crie `criarTodo(label: string): ITodo` **fora** do componente, que devolve `{ id: crypto.randomUUID(), label, complete: false }`. Use no `handleAdd`. Por que ela pode ficar fora?

## Exercício 4 — Nomes

Revise todos os nomes do seu código: eventos com `handle`, props de callback com `on`. Liste em comentário 3 nomes que você renomeou e por quê.

## Exercício 5 — Funções utilitárias

Crie `src/utils/todo.ts` com as funções puras:

- `removerPorId(lista, id)`
- `concluirPorId(lista, id)`
- `contarPendentes(lista)`

Use-as no componente. Elas não podem mutar a lista recebida.

## Desafio — Teste manual das puras

Em um arquivo `testes.ts` (rode com `npx tsx testes.ts` ou pelo console), chame cada função utilitária com uma lista de exemplo e use `console.assert` para verificar o resultado e que a lista original não mudou.
