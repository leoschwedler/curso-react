# Exercícios — Aula 15 (`children` e composição)

Crie em `src/exercicios/aula-15/`.

## Exercício 1 — `List`

Crie `List.tsx` que renderiza uma `<ol>` com estilo (CSS module) e mostra os `children`. Use no seu TODO envolvendo os `TodoItem`.

## Exercício 2 — `Card`

Crie `Card` com a prop `titulo: string` e `children`. Ele desenha uma caixa com borda, o título em negrito e o conteúdo dentro. Use 3 vezes com conteúdos diferentes (texto, lista, botão).

## Exercício 3 — Lista vazia

No `List`, se não houver `children`, mostre `Nenhum item`. Dica: `React.Children.count(children)`.

Responda: por que `children &&` não resolve bem quando `children` é um array vazio?

## Exercício 4 — Modal simples

Crie `Modal` com as props `aberto: boolean`, `titulo: string`, `onFechar()` e `children`.

- Se `aberto` for `false`, retorna `null`.
- Tem um fundo escurecido e um botão `Fechar`.

No pai, um botão abre o modal com qualquer conteúdo.

## Exercício 5 — Sem `children`

Crie um `CardSemChildren` que recebe o conteúdo por uma prop `conteudo: React.ReactNode`. Compare com o `Card` do exercício 2 e escreva em comentário qual é mais flexível e por quê.

## Desafio — Moldura com cabeçalho e rodapé

Crie `Painel` com três props de `ReactNode`: `cabecalho`, `rodape` e os `children` como corpo. Se `rodape` não vier, a área do rodapé nem existe no DOM.
