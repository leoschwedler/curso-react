# Aula 15 — Componente `List` e `children`

- Vídeo: https://www.youtube.com/watch?v=drZm6BpU7Sk
- Código do instrutor (commit "refactor: improve code"): https://github.com/lvsouza/curso-base-de-react/commit/505f271

> Resumo montado a partir do título do vídeo e do repositório do instrutor. Confira com o vídeo e anote diferenças no final.

## O que a aula ensina

Criar um componente `List` que **embrulha** os itens, usando a prop especial `children`. É a base para componentes de layout e de composição.

## Conceitos

### 1. `children`

Tudo que você coloca **entre** as tags de um componente chega nele como `props.children`:

```tsx
export const List = ({ children }: React.PropsWithChildren) => {
  return <ol className={styles.List}>{children}</ol>;
};

<List>
  <TodoItem ... />
  <TodoItem ... />
</List>
```

`React.PropsWithChildren` já tipa a prop `children` para você.

### 2. Composição em vez de configuração

Em vez de o `List` receber `itens=[...]` e decidir como mostrar, ele só fornece a **moldura** (a `<ol>` e o estilo) e quem usa decide o conteúdo. É a mesma ideia de `<div>`, `<ul>` e `<button>`.

### 3. Para que serve

- Padronizar visual (um lugar só para mudar o estilo da lista).
- Esconder detalhes da estrutura HTML.
- Reaproveitar a moldura com conteúdos diferentes.

### 4. Tipando props + children

```tsx
interface ICardProps {
  titulo: string;
}
const Card = ({ titulo, children }: React.PropsWithChildren<ICardProps>) => ( ... )
```

## Pontos de atenção

- `children` pode ser texto, um elemento, um array ou `undefined`.
- Um componente de moldura não deve conhecer o domínio (`List` não sabe o que é um TODO).

## Minhas anotações

_Dúvidas, diferenças em relação ao resumo, aprendizados._

## Exercícios

[`exercicios/aula-15`](../../exercicios/aula-15/README.md)
