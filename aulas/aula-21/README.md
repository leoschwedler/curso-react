# Aula 21 — TodoAPI mockada: DELETE e UPDATE

- Vídeo: https://www.youtube.com/watch?v=lWPNO3h664w
- Código do instrutor: https://github.com/lvsouza/curso-base-de-react/blob/5c84c6a/src/mocks/server.ts

> Resumo montado a partir do título do vídeo e do repositório do instrutor. Confira com o vídeo e anote diferenças no final.

## O que a aula ensina

Implementar no mock as rotas `PUT /todos/:id` e `DELETE /todos/:id`, e ligar os botões **Concluir** e **Remover** da tela à API (em vez de só mexer no estado local).

## Conceitos

### 1. Parâmetro de rota no Mirage

```ts
this.put('/todos/:id', (schema, request) => {
  const id = request.params.id;
  const newAttrs = JSON.parse(request.requestBody);

  const todo = schema.find('todos', id);
  todo?.update(newAttrs);

  persistir(schema);
  return {};
});

this.delete('/todos/:id', (schema, request) => {
  schema.find('todos', request.params.id)?.destroy();

  persistir(schema);
  return {};
});
```

- `request.params.id`: o `:id` da URL.
- `request.requestBody`: o corpo enviado, em texto (daí o `JSON.parse`).
- `schema.find(...)` pode devolver `null`, por isso o `?.`.

### 2. Ligando a tela à API

A regra: **atualize o backend primeiro, e só depois o estado**, quando a API confirmar.

```tsx
const handleRemove = (id: string) => {
  TodoAPI.deleteById(id).then(() => {
    setList(list.filter(item => item.id !== id));
  });
};

const handleComplete = (id: string) => {
  TodoAPI.updateById(id, { complete: true }).then(() => {
    setList(list.map(item => item.id === id ? { ...item, complete: true } : item));
  });
};
```

Assim a tela nunca mostra algo que o servidor não aceitou.

### 3. Alternativa: otimista

Atualiza a tela na hora e desfaz se a API falhar. Mais rápido para o usuário, mas mais complexo. A aula usa a forma simples.

### 4. Armadilha do estado "velho"

`list` dentro do `.then` é o valor da renderização em que a função foi criada. Se duas ações terminarem em ordem diferente você pode perder uma atualização. A forma segura é o **setState funcional**:

```tsx
setList(old => old.filter(item => item.id !== id));
```

## Pontos de atenção

- Em `PUT`, o corpo é parcial (só o que mudou).
- Trate erro (`.catch`) para o usuário saber que falhou.

## Minhas anotações

_Dúvidas, diferenças em relação ao resumo, aprendizados._

## Exercícios

[`exercicios/aula-21`](../../exercicios/aula-21/README.md)
