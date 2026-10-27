# Exercícios — Aula 28 (Context API)

## Exercício 1 — Sinta o prop drilling

Monte 4 componentes aninhados (`A > B > C > D`). Passe um `nome` do `A` até o `D` só por props. Depois refaça com contexto. Compare e escreva em comentário o que mudou em B e C.

## Exercício 2 — `AuthContext`

Implemente `AuthContext`, `AuthProvider`, `useAuthContext` e `useIsAuthenticated` de cabeça. Use no `AppRoutes` (aula 27) no lugar do `useState`.

## Exercício 3 — Cabeçalho com usuário

Mostre `Olá, {email}` e um botão `Sair` no `AppLayout`, usando `useAuthContext`. O layout não recebe nenhuma prop para isso.

## Exercício 4 — Contexto de tema

Crie `ThemeContext` com `tema: 'claro' | 'escuro'` e `alternarTema()`. Aplique `data-tema` no `<body>` ou num contêiner e estilize com CSS. Persista no `localStorage`.

## Exercício 5 — Fora do provider

Use `useAuthContext()` em um componente **fora** do `AuthProvider`. O que vem em `login`? O que acontece ao chamar? Escreva o resultado em comentário.

## Exercício 6 — Quem renderiza?

Coloque `console.log('render X')` em 3 componentes que consomem o contexto e em 1 que não consome. Faça login/logout. Quais renderizam? Explique.

## Desafio — Permissões

Adicione `permissoes: string[]` ao contexto e crie o hook `useTemPermissao('admin')`. Mostre o botão `Excluir tudo` só para quem tem a permissão (renderização condicional).
