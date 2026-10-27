# Aula 17 — API de todos e início do service

- Vídeo: https://www.youtube.com/watch?v=zJfMHSQQ7rE
- Código do instrutor: https://github.com/lvsouza/curso-base-de-react/commit/308532c (commit "improve todos and server")

> Resumo montado a partir do título do vídeo e do repositório do instrutor. Confira com o vídeo e anote diferenças no final.

## O que a aula ensina

Completar a API de todos no servidor mock e criar a camada de **service** (`TodoAPI`) que o front usa para falar com ela.

## Conceitos

### 1. Rotas da API REST

| Método | Rota | O que faz |
| --- | --- | --- |
| `GET` | `/api/todos` | Lista todos |
| `POST` | `/api/todos` | Cria um |
| `PUT` | `/api/todos/:id` | Atualiza um |
| `DELETE` | `/api/todos/:id` | Remove um |

### 2. O que é um service

Um módulo que concentra **como** falar com o backend. Os componentes não conhecem URLs, `axios` ou formato de resposta, só chamam funções:

```ts
// src/shared/services/api/TodoAPI.ts
import axios from 'axios';

const axiosInstance = axios.create();

export interface ITodo {
  id: string;
  label: string;
  complete: boolean;
}

export const TodoAPI = {
  async getAll() {
    const response = await axiosInstance.get('/api/todos');
    return response.data.todos as ITodo[];
  },
};
```

### 3. Por que separar

- Se a URL mudar, muda em **um** lugar.
- Os componentes ficam limpos e testáveis (dá para trocar o service por um falso).
- A tipagem (`ITodo`) fica centralizada.

### 4. `axios`

```bash
npm install axios
```

`axios.get/post/put/delete` devolvem uma Promise. O corpo da resposta fica em `response.data`.

### 5. `async/await`

```ts
async getAll() {
  const response = await axiosInstance.get('/api/todos'); // espera
  return response.data.todos;                              // devolve Promise<ITodo[]>
}
```

Uma função `async` **sempre devolve uma Promise**.

## Pontos de atenção

- O Mirage devolve os dados dentro de uma chave com o nome do model: `{ todos: [...] }`.
- Tipar com `as ITodo[]` é uma promessa sua ao TypeScript, ele não valida o que vem da rede.

## Minhas anotações

_Dúvidas, diferenças em relação ao resumo, aprendizados._

## Exercícios

[`exercicios/aula-17`](../../exercicios/aula-17/README.md)
