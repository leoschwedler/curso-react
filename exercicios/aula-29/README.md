# Exercícios — Aula 29 (Erros com providers)

## Exercício 1 — Reproduza o erro 1

Use `createContext({} as Props)` e chame o hook **fora** do provider. Veja a mensagem de erro e copie em comentário.

## Exercício 2 — Hook seguro

Reescreva com `createContext<Props | undefined>(undefined)` e o hook que lança um erro claro quando está fora do provider. Teste de novo: a mensagem ficou melhor?

## Exercício 3 — Consumidor no lugar errado

Escreva um `App` que chama `useAuthContext()` e também renderiza o `<AuthProvider>`. O que vem no `email`? Conserte movendo o provider para o `main.tsx`.

## Exercício 4 — Ordem dos providers

Crie `PermissoesProvider` que lê o `email` do `AuthContext` para decidir as permissões. Teste com os providers **na ordem certa e na ordem trocada**. O que acontece na trocada?

## Exercício 5 — `AppProviders`

Junte `AuthProvider`, `ThemeProvider` e `PermissoesProvider` em um único componente `AppProviders` e use no `main.tsx`.

## Exercício 6 — Conte as renderizações

Coloque `console.log` em 3 consumidores do contexto. Faça um componente pai que re-renderiza por outro motivo (um contador) e que contém o `AuthProvider`. Os consumidores re-renderizam mesmo sem mudança de dados? Anote o resultado: ele será útil na aula 30.

## Desafio — Contexto + reducer

Troque os vários `useState` do `AuthProvider` por um único `useReducer` com ações `login` e `logout`. Mantenha a mesma interface do hook `useAuthContext`.
