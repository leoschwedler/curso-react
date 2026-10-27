# Exercícios — Aula 08 (Renderização condicional)

Faça cada exercício em um componente separado dentro de `src/exercicios/aula-08/` (ex.: `Ex1.tsx`) e renderize um por vez no `App.tsx`. Rode com `npm run dev`.

## Exercício 1 — Mensagem de login (ternário)

Crie um componente `Saudacao` com a prop `estaLogado: boolean`.

- `true`: mostre `Bem-vindo de volta!`.
- `false`: mostre `Faça login para continuar`.

No `App`, coloque um botão que alterna o valor passado para `Saudacao`.

## Exercício 2 — Mostrar e esconder (`&&`)

Um botão alterna um `useState` booleano `mostrar`. Quando `true`, aparece um parágrafo. O texto do botão muda (`Mostrar` / `Esconder`).

## Exercício 3 — CSS ou não renderizar? (o mais importante da aula)

Crie dois blocos lado a lado, cada um com um `input` e um botão `Esconder/Mostrar`:

- Bloco A esconde com `style={{ display: 'none' }}`.
- Bloco B esconde com `&&`.

Digite algo no input de cada bloco, esconda e mostre de novo.

Responda em um comentário no código:

1. O texto digitado continuou no bloco A? E no B?
2. Abra o DevTools (aba Elements). O que mudou no DOM em cada caso?
3. Em qual situação você escolheria cada um?

> Dica: para o bloco B ter estado próprio, crie um componente `CampoComEstado` com seu `useState` e use `&&` para renderizá-lo.

## Exercício 4 — `return null`

Crie um componente `Aviso` com as props `visivel: boolean` e `texto: string`.

- Se `visivel` for `false`, o componente retorna `null`.
- Se for `true`, mostra o texto em um `<p>`.

Use `if` com `return null`, sem ternário. No `App`, controle `visivel` com um botão.

## Exercício 5 — Contador sem o `0` fantasma

Contador com `+1` e `-1` (nunca abaixo de `0`).

- Quando for `0`: `Nenhum item`.
- Quando for maior que `0`: `Você tem X item(ns)`.
- Quando chegar a `5`: mostre `Limite atingido!`.

Atenção: nenhum `0` solto pode aparecer na tela. Teste primeiro com `{contador && <p>...</p>}` para ver o problema acontecer, depois conserte com `contador > 0 &&`.

## Exercício 6 — Quebre a regra (e leia o erro)

De propósito, escreva um componente que chama `useState` dentro de um `if`, ou depois de um `return` condicional.

1. Rode e leia o aviso do ESLint (`npm run lint`) e o erro do console.
2. Escreva em um comentário, com suas palavras, por que o React reclama.
3. Conserte movendo o hook para o topo.

## Desafio — Lista filtrada

Uma lista de 5 tarefas `{ id, titulo, concluida }` dentro do componente.

- Um botão alterna `Mostrar todas` e `Mostrar só pendentes`.
- No modo "pendentes", só aparecem as com `concluida: false`.
- Se não houver nenhuma para mostrar, exiba `Nenhuma tarefa aqui`.

Use `.filter()` antes do `.map()` e não esqueça a `key`.

---

Marque os exercícios feitos em [`aulas/README.md`](../../aulas/README.md) e compare com o vídeo se ficar com dúvida.
