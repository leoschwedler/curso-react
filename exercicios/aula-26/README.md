# Exercícios — Aula 26 (useRef)

## Exercício 1 — Foco

No `InputAdd`, depois de adicionar, devolva o foco ao input com `useRef`.

## Exercício 2 — Foco ao abrir

Um input que ganha foco **automaticamente** quando a página abre (`useEffect` + `ref`). Pesquise por que o `autoFocus` também serviria e quando preferir `ref`.

## Exercício 3 — `useRef` x `useState`

Crie um botão `Clique` que incrementa:

- um contador em `useState` e mostra na tela;
- um contador em `useRef` e mostra na tela.

O que aparece? Depois force uma renderização (outro botão que muda outro estado). O que mostra agora? Explique.

## Exercício 4 — Contar renderizações

Use um `useRef` para contar quantas vezes um componente foi renderizado e mostre no console. (Dica: incremente no corpo do componente. Em modo dev, o `StrictMode` conta em dobro: explique.)

## Exercício 5 — Timer com ref

Crie um cronômetro com botões `Iniciar` e `Parar`. O id do `setInterval` fica em um `useRef` (por que não em `useState`?). Limpe no desmonte.

## Exercício 6 — Rolar até o fim

Uma lista com 30 itens e um botão `Ir para o último` que usa `ref` + `scrollIntoView({ behavior: 'smooth' })`.

## Desafio — Valor anterior

Crie o hook `usePrevious<T>(valor: T)` que devolve o valor da renderização anterior, usando `useRef` e `useEffect`. Teste com um contador exibindo `Agora: 5, antes: 4`.
