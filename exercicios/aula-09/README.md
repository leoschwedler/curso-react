# Exercícios — Aula 09 (Listas e `key`)

Use `src/exercicios/aula-09/` (um arquivo por exercício) e renderize um por vez no `App.tsx`.

## Exercício 1 — Lista simples

Dado `const frutas = ['Maçã', 'Banana', 'Uva', 'Manga']`, mostre em uma `<ul>` usando `.map()`, com `key`.

## Exercício 2 — Provoque o aviso da `key`

1. Remova a `key` do exercício 1 e olhe o console do navegador. Copie a mensagem em um comentário.
2. Coloque a `key` de volta.
3. Agora troque a lista para `['Maçã', 'Maçã', 'Uva']`, usando o texto como `key`. O que o console diz?

## Exercício 3 — Lista de objetos

Troque as frutas por objetos `{ id: string, nome: string, preco: number }` (5 itens, com um nome repetido de propósito).

- Mostre `Nome — R$ preço` em cada `<li>`.
- Use `id` como `key`. O aviso sumiu mesmo com nome repetido?

Tipe o objeto com uma `interface Fruta`.

## Exercício 4 — Lista dinâmica

Coloque a lista de frutas dentro de um `useState`. Adicione um botão `Inverter ordem` que inverte a lista.

Cuidado: `.reverse()` **muta** o array. Faça uma cópia antes (`[...lista].reverse()`) e explique em um comentário por que a cópia é necessária.

## Exercício 5 — Contagem e lista vazia

Acima da lista, mostre `Total: X frutas`. Se a lista estiver vazia, mostre `Nenhuma fruta cadastrada` no lugar da `<ul>` (renderização condicional da aula 8).

Para testar, adicione um botão `Limpar lista` que faz `setLista([])`.

## Exercício 6 — Lista de componentes

Crie um componente `FrutaItem` que recebe `fruta: Fruta` e mostra os dados. No pai, use `<FrutaItem key={fruta.id} fruta={fruta} />`.

Pergunta (responda em comentário): por que a `key` fica no `<FrutaItem>` no pai e não dentro do `<li>` do `FrutaItem`?

## Desafio — Tabela de produtos

Uma lista de 6 produtos `{ id, nome, preco, estoque }`.

- Renderize em uma `<table>`.
- Produtos com `estoque === 0` ganham o texto `Esgotado` na célula de estoque (e não um `0`).
- Um botão `Ordenar por preço` ordena de forma crescente (sem mutar o estado original).
