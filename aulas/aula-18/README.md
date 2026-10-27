# Aula 18 — Todos os métodos do service de TODO

- Vídeo: https://www.youtube.com/watch?v=Xq_tuVW-uEA
- Código do instrutor: https://github.com/lvsouza/curso-base-de-react/blob/5c84c6a/src/shared/services/api/TodoAPI.ts

> Resumo montado a partir do título do vídeo e do repositório do instrutor. Confira com o vídeo e anote diferenças no final.

## O que a aula ensina

Completar o `TodoAPI` com `getAll`, `create`, `updateById` e `deleteById`, tipando entrada e saída.

## Conceitos

### O service completo

```ts
import axios from 'axios';

const axiosInstance = axios.create();

export interface ITodo {
  id: string;
  label: string;
  complete: boolean;
}

interface ITodoWithoutId {
  label: string;
  complete: boolean;
}

export const TodoAPI = {
  async getAll() {
    const response = await axiosInstance.get('/api/todos');
    return response.data.todos as ITodo[];
  },
  async create(data: ITodoWithoutId) {
    const response = await axiosInstance.post('/api/todos', data);
    return response.data.todos as ITodo;
  },
  async updateById(id: string, data: Partial<ITodoWithoutId>) {
    await axiosInstance.put(`/api/todos/${id}`, data);
  },
  async deleteById(id: string) {
    await axiosInstance.delete(`/api/todos/${id}`);
  },
};
```

### Pontos do código

- **`ITodoWithoutId`**: quem cria **não manda o id**, o backend gera.
- **`Partial<...>`**: no update, todos os campos viram opcionais (atualiza só o que mudou).
- **Template string** na URL (`` `/api/todos/${id}` ``) para colocar o id.
- `create` devolve o item criado, já com o `id`. O front usa para atualizar a lista.
- `updateById` e `deleteById` não precisam devolver nada.
- **`axiosInstance`**: instância única, pronta para configurar `baseURL` e cabeçalhos num lugar só (mais pra frente, o token de autenticação).

### Verbos HTTP

`GET` lê, `POST` cria, `PUT` atualiza, `DELETE` remove.

## Pontos de atenção

- Cada método devolve `Promise`. Quem chama precisa de `await` ou `.then`.
- Não esqueça de tratar erro (`.catch` ou `try/catch`) ao usar no componente.

## Minhas anotações

_Dúvidas, diferenças em relação ao resumo, aprendizados._

## Exercícios

[`exercicios/aula-18`](../../exercicios/aula-18/README.md)
