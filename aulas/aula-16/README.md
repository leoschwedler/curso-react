# Aula 16 — Servidor mockado para simular um backend

- Vídeo: https://www.youtube.com/watch?v=GnJxR2vXw6o
- Código do instrutor (commit "add mock and services for access mock"): https://github.com/lvsouza/curso-base-de-react/commit/14ba31e

> Resumo montado a partir do título do vídeo e do repositório do instrutor. Confira com o vídeo e anote diferenças no final.

## O que a aula ensina

Até aqui a lista vivia só na memória do navegador. Nesta aula começa a simular um **backend**: um servidor falso que responde a requisições HTTP (`GET /api/todos`, etc.) dentro do próprio navegador, para o front poder ser desenvolvido sem API pronta.

## Conceitos

### 1. Por que mockar

- O front pode ser desenvolvido antes (ou sem) o backend.
- Os dados são previsíveis e os erros podem ser simulados.
- O código do front já nasce usando HTTP de verdade, então trocar pelo backend real depois é só tirar o mock.

### 2. MirageJS

O projeto usa a biblioteca `miragejs`, que intercepta `fetch`/`XMLHttpRequest` no navegador e responde como se fosse um servidor.

```bash
npm install -D miragejs
```

```ts
// src/mocks/server.ts
import { createServer, Model } from 'miragejs';

createServer({
  models: { todos: Model },
  routes() {
    this.namespace = 'api';

    this.get('/todos', (schema) => schema.all('todos'));
  },
});
```

E importe o arquivo no `main.tsx` para o servidor falso subir junto com a aplicação:

```tsx
import './mocks/server';
```

### 3. Peças do Mirage

- **`models`**: as "tabelas" do banco falso.
- **`routes`**: as rotas HTTP (`get`, `post`, `put`, `delete`).
- **`namespace`**: prefixo comum (`/api`).
- **`schema`**: acesso aos models (`schema.all('todos')`, `schema.create(...)`).

### 4. Aprendendo o fluxo

```
Componente → TodoAPI (axios) → GET /api/todos → Mirage responde → componente mostra
```

## Pontos de atenção

- O mock só existe no navegador: se abrir a aba Network, você verá a requisição, mas nenhum servidor real recebeu.
- Mock é ferramenta de desenvolvimento. Em produção ele não deve subir.

## Minhas anotações

_Dúvidas, diferenças em relação ao resumo, aprendizados._

## Exercícios

[`exercicios/aula-16`](../../exercicios/aula-16/README.md)
