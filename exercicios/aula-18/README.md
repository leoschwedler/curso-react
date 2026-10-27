# Exercícios — Aula 18 (TodoAPI completo)

## Exercício 1 — Digite o `TodoAPI`

Escreva o `TodoAPI` completo, de cabeça ou com o mínimo de consulta. Depois compare com o da aula.

## Exercício 2 — Teste cada método

Em uma página de teste, crie 4 botões (`Listar`, `Criar`, `Atualizar`, `Remover`) que chamam cada método e imprimem o resultado em um `<pre>{JSON.stringify(resultado, null, 2)}</pre>`.

## Exercício 3 — Por que `ITodoWithoutId`?

Em comentário, responda:

1. Por que `create` não recebe `id`?
2. O que acontece se tentar `TodoAPI.create({ id: '1', label: 'x', complete: false })`? O TypeScript reclama? Por quê?

## Exercício 4 — `baseURL`

Configure `axios.create({ baseURL: '/api' })` e ajuste as rotas dos métodos (`'/todos'`). O que muda na aba Network?

## Exercício 5 — Método novo

Adicione `getById(id)` ao service e a rota correspondente no Mirage. Trate o caso de `id` inexistente (o Mirage devolve 404; como o `axios` reage?).

## Exercício 6 — Interceptador

Crie um interceptor do axios que faz `console.log('[API]', método, url)` em toda requisição. Descubra como em `axiosInstance.interceptors.request.use(...)`.

## Desafio — Lista de usuários

Crie `UserAPI` com os mesmos 4 métodos (e o model `users` no Mirage). Compare com `TodoAPI`: o que se repete? Escreva em comentário como eliminaria a repetição.
