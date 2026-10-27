# Aula 20 — Mock com persistência (Mirage + localStorage)

- Vídeo: https://www.youtube.com/watch?v=e0_ld6wo0JM
- Código do instrutor: https://github.com/lvsouza/curso-base-de-react/blob/5c84c6a/src/mocks/server.ts

> Resumo montado a partir do título do vídeo e do repositório do instrutor. Confira com o vídeo e anote diferenças no final.

## O que a aula ensina

O Mirage perde tudo ao recarregar a página. Para o mock se comportar como um backend de verdade, os dados são salvos no **`localStorage`** do navegador e carregados de novo ao iniciar.

## Conceitos

### 1. `localStorage`

Armazenamento do navegador, chave → texto, que **sobrevive** ao recarregar e fechar a aba.

```ts
localStorage.setItem('MOCK_TODOS', JSON.stringify(todos));
const texto = localStorage.getItem('MOCK_TODOS'); // string | null
const todos = JSON.parse(texto);
```

Só guarda **string**, por isso `JSON.stringify` e `JSON.parse`.

### 2. Carregando na partida: `seeds`

```ts
seeds(server) {
  const todosAsString = localStorage.getItem('MOCK_TODOS');
  if (todosAsString === null) return;

  const todos = JSON.parse(todosAsString);
  todos.models.forEach((todo: {}) => server.schema.create('todos', todo));
},
```

`seeds` roda quando o servidor sobe. Se há dados salvos, recria os registros.

### 3. Salvando a cada mudança

Depois de cada `POST`, `PUT` e `DELETE`:

```ts
const todos = schema.all('todos');
localStorage.setItem('MOCK_TODOS', JSON.stringify(todos));
```

### 4. Fluxo completo

```
POST /api/todos → Mirage cria → grava no localStorage
(recarrega a página)
seeds → lê o localStorage → recria os todos → GET /api/todos devolve tudo
```

### 5. Para limpar

DevTools → Application → Local Storage → apague `MOCK_TODOS`.

## Pontos de atenção

- `localStorage` é por origem (`localhost:5173`) e tem limite (~5 MB).
- Nunca guarde senha ou dados sensíveis lá.
- O parse pode falhar se o JSON estiver corrompido, por isso um `try/catch` seria uma boa melhoria.

## Minhas anotações

_Dúvidas, diferenças em relação ao resumo, aprendizados._

## Exercícios

[`exercicios/aula-20`](../../exercicios/aula-20/README.md)
