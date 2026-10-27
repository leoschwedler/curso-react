# Exercícios — Aula 14 (TodoItem)

Crie em `src/exercicios/aula-14/`.

## Exercício 1 — Extraia o `TodoItem`

Crie `TodoItem.tsx` com as props `id`, `label`, `complete`, `onRemove()` e `onComplete()`. Use no pai com `key` correta.

## Exercício 2 — Esqueça a `key` no lugar errado

Coloque a `key` só no `<li>` dentro do `TodoItem` (e tire do pai). O que o console diz? Copie a mensagem em comentário e conserte.

## Exercício 3 — Passando o objeto

Troque as 3 props de dados por uma só: `todo: ITodo`. Compare as duas versões e escreva em comentário uma vantagem e uma desvantagem de cada.

## Exercício 4 — Estilo com `data-*`

Crie `TodoItem.module.css` e estilize o item concluído usando `[data-complete="true"]` (riscado e cinza). Sem `if` no JSX para o estilo.

## Exercício 5 — Edição

Adicione um botão `Editar` no `TodoItem` que troca o texto por um `input` (estado **local** `editando`). Botão `Salvar` chama `onEdit(novoLabel)` no pai. No pai, implemente `handleEdit(id, label)`.

## Exercício 6 — Estado local x pai

Em qual componente cada estado mora? Responda em comentário: `list`, `editando`, texto do input de edição. Justifique cada um.

## Desafio — Prioridade

Adicione `prioridade: 'baixa' | 'media' | 'alta'` ao `ITodo`. O `TodoItem` mostra uma bolinha colorida conforme o valor (use um objeto de mapeamento `{ baixa: 'green', ... }`, sem cadeia de ifs) e um `<select>` para mudar a prioridade (`onChangePrioridade`).
