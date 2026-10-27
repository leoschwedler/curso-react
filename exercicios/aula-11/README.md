# Exercícios — Aula 11 (Remover e concluir)

Crie os exercícios em `src/exercicios/aula-11/`. Parta do TODO que você fez na aula 10.

## Exercício 1 — Remover

Cada item tem um botão `Remover`. Ao clicar, o item some. Use `.filter()`.

## Exercício 2 — Concluir

Botão `Concluir` que marca o item como feito. Itens concluídos aparecem riscados (`textDecoration: 'line-through'`) e **sem** o botão Concluir.

## Exercício 3 — Alternar

Troque `Concluir` por um botão que **alterna**: `Concluir` ↔ `Reabrir`. Dica: `complete: !item.complete`.

## Exercício 4 — Contadores

Mostre `Pendentes: X | Concluídas: Y`, calculados a partir da lista (não crie outro `useState` para isso). Use `.filter().length`.

Responda em comentário: por que é melhor **calcular** esses valores do que guardá-los em estado?

## Exercício 5 — Remover concluídas

Botão `Limpar concluídas` que remove de uma vez todos os itens concluídos. Só aparece se houver pelo menos uma concluída.

## Exercício 6 — Provoque o bug da mutação

Em uma cópia do exercício 2, escreva a conclusão **mutando**:

```tsx
const item = list.find(i => i.id === id);
item.complete = true;
setList(list);
```

O que acontece na tela? Escreva em comentário por que o React não atualizou e depois corrija.

## Desafio — Desfazer remoção

Ao remover um item, guarde-o em outro estado `removidos`. Mostre um botão `Desfazer última remoção` (só quando houver algum removido) que devolve o item para a lista. Nada de mutar estado.
