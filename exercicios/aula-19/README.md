# Exercícios — Aula 19 (useEffect)

## Exercício 1 — Carregar ao abrir

Na página do TODO, carregue a lista com `TodoAPI.getAll()` dentro de `useEffect(..., [])`. Mostre `Carregando...` enquanto espera (estado `carregando`).

## Exercício 2 — O loop

Em uma cópia, tire o `useEffect` e chame `TodoAPI.getAll().then(setList)` direto no corpo. Olhe a aba Network por 3 segundos. Escreva em comentário o que aconteceu e por quê.

## Exercício 3 — Dependências

Crie um `<select>` de filtro (`todas`, `pendentes`, `concluidas`). Use `useEffect` com `[filtro]` para fazer `console.log('filtro mudou', filtro)`. Teste trocando o valor e depois mude as dependências para `[]` e para sem array. Descreva as 3 diferenças.

## Exercício 4 — Relógio com cleanup

Crie `Relogio` que mostra a hora atual atualizando a cada segundo com `setInterval`. Use cleanup com `clearInterval`. Esconda e mostre o componente com um botão (aula 8). Tire o cleanup e veja o que acontece com o console (`setState` de componente desmontado e timers acumulando).

## Exercício 5 — Título da aba

Use `useEffect` para trocar `document.title` para `X pendentes` sempre que a quantidade de pendentes mudar.

## Exercício 6 — `async` dentro do `useEffect`

Escreva o carregamento com `async/await` do jeito correto (função interna chamada no efeito). Adicione `try/catch` e `finally` para desligar o `carregando`.

## Exercício 7 — Efeito ou cálculo?

Para cada caso, diga em comentário se precisa de `useEffect` ou não, e por quê:

1. Mostrar `Total: N` (length da lista).
2. Buscar dados quando o usuário muda o `id` na URL.
3. Salvar algo no `localStorage` quando um estado mudar.
4. Focar um input quando um modal abre.

## Desafio — Debounce de busca

Um input de busca que só chama a API **500 ms depois** que o usuário parar de digitar. Use `setTimeout` no efeito e limpe no cleanup. Mostre quantas requisições foram feitas.
