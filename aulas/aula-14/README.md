# Aula 14 — Componentizando o item do TODO

- Vídeo: https://www.youtube.com/watch?v=ZX7uWopdcb8
- Código do instrutor (commit "add component of todo item"): https://github.com/lvsouza/curso-base-de-react/commit/578995b

> Resumo montado a partir do título do vídeo e do repositório do instrutor. Confira com o vídeo e anote diferenças no final.

## O que a aula ensina

Extrair o `<li>` da lista para o componente `TodoItem` e entender onde fica a **`key`** quando o item vira um componente próprio.

## Conceitos

### 1. O componente

```tsx
interface ITodoItemProps {
  id: string;
  label: string;
  complete: boolean;

  onRemove(): void;
  onComplete(): void;
}

export const TodoItem = ({ label, complete, onComplete, onRemove }: ITodoItemProps) => (
  <li data-complete={complete}>
    {label}
    {!complete && <button onClick={onComplete}>Concluir</button>}
    <button onClick={onRemove}>Remover</button>
  </li>
);
```

### 2. Usando no pai

```tsx
{list.map(item => (
  <TodoItem
    key={item.id}
    id={item.id}
    label={item.label}
    complete={item.complete}
    onRemove={() => handleRemove(item.id)}
    onComplete={() => handleComplete(item.id)}
  />
))}
```

### 3. Onde fica a `key`

A `key` vai **no elemento mais externo dentro do `map`**, que agora é `<TodoItem />`. Colocar a `key` só no `<li>` dentro do `TodoItem` não funciona: o React olha para o que o `map` devolveu. Também lembre que `key` **não chega** como prop, por isso o `id` é passado separado.

### 4. Callbacks sem argumento

O `TodoItem` não precisa saber o `id` para avisar. O pai já "fecha" o id na função (`() => handleRemove(item.id)`) e o filho só chama `onRemove()`.

### 5. Estilo por dado

`data-complete={complete}` permite estilizar com CSS (`[data-complete="true"] { text-decoration: line-through }`) sem lógica extra no JSX.

## Pontos de atenção

- Passar muitas props soltas é aceitável aqui. Se crescer, considere passar o objeto inteiro (`todo={item}`).
- Componentes de lista devem ser baratos de renderizar: ficam aparecendo 100 vezes.

## Minhas anotações

_Dúvidas, diferenças em relação ao resumo, aprendizados._

## Exercícios

[`exercicios/aula-14`](../../exercicios/aula-14/README.md)
