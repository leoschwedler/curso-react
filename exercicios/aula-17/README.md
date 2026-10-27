# Exercícios — Aula 17 (Service e axios)

Instale: `npm install axios`. Use o Mirage da aula 16.

## Exercício 1 — Service de frutas

Crie `src/shared/services/api/FrutaAPI.ts` com `getAll()` tipado (`IFruta`). Nenhum componente pode usar `axios` ou escrever `/api/...` diretamente.

## Exercício 2 — Promises na unha

Chame `FrutaAPI.getAll()` com `.then(...)` e depois reescreva com `async/await` dentro de uma função. Escreva em comentário o que é uma Promise com suas palavras.

## Exercício 3 — Rotas faltando

No Mirage, crie `POST /api/frutas` (cria), `PUT /api/frutas/:id` (atualiza) e `DELETE /api/frutas/:id` (remove). Implemente `create`, `updateById` e `deleteById` no service.

## Exercício 4 — Teste no console

Exponha o service no `window` só durante o desenvolvimento (`window.FrutaAPI = FrutaAPI`) e teste cada método pelo console do navegador. Veja os resultados na aba Network.

## Exercício 5 — Tipos `Partial`

`updateById` deve aceitar só os campos que mudaram. Tipe o segundo parâmetro com `Partial<Omit<IFruta, 'id'>>`. Explique em comentário o que `Partial` e `Omit` fazem.

## Exercício 6 — Erro

Faça `getAll` falhar (rota inexistente). O que o `await` faz quando a requisição dá erro? Capture com `try/catch` e mostre uma mensagem.

## Desafio — Service genérico

Crie uma função `criarCrudAPI<T>(recurso: string)` que devolve `getAll/create/updateById/deleteById` tipados para qualquer recurso. Use para `frutas` e `tarefas`.
