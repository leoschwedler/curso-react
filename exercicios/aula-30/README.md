# Exercícios — Aula 30 (useMemo e useCallback)

## Exercício 1 — Veja a referência mudar

Em um componente, guarde uma função em um `useRef` na primeira renderização e compare `ref.current === minhaFuncao` nas renderizações seguintes (com um botão que força re-render). Resultado sem `useCallback` e com `useCallback`.

## Exercício 2 — `React.memo` sem ajuda

Crie `Filho` embrulhado em `React.memo`, com `console.log('render Filho')`, recebendo `onClick`. O pai tem um contador. Clique no contador: o filho re-renderiza? Por quê?

## Exercício 3 — Com `useCallback`

Embrulhe o `onClick` do pai em `useCallback` com `[]`. O filho para de re-renderizar? Agora faça o `onClick` usar o contador e ajuste as dependências. O que muda?

## Exercício 4 — `useMemo` em cálculo caro

Gere uma lista de 20 000 números e calcule a soma dos pares com um loop propositalmente lento. Um input de texto (sem relação) re-renderiza o componente. Meça o tempo (`console.time`) com e sem `useMemo` e anote.

## Exercício 5 — Otimize o `AuthProvider`

Aplique `useCallback` em `login`/`logout` e `useMemo` no `value`. Coloque `console.log` em 3 consumidores e confira que **não** re-renderizam quando o pai do provider re-renderiza por outro motivo (veja o exercício 6 da aula 29).

## Exercício 6 — Quando NÃO usar

Pegue 3 trechos do seu projeto e decida, justificando em comentário, se `useMemo`/`useCallback` valem a pena. Um deles deve ser `não vale`.

## Exercício 7 — Dependências erradas

Escreva um `useCallback(() => console.log(contador), [])` e clique no contador várias vezes antes de chamá-lo. O que imprime? Corrija e explique o valor "velho" (stale closure).

## Desafio — Profiler

Instale a extensão React DevTools, grave uma sessão no **Profiler** clicando no contador do pai e compare as renderizações do app com e sem as otimizações dos exercícios 3 e 5.
