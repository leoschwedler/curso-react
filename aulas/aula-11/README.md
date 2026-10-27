# Aula 11 — Removendo itens e marcando como concluídos

- Vídeo: https://www.youtube.com/watch?v=XKsCaDJ3XaI
- Código do instrutor (commit "add basic todo"): https://github.com/lvsouza/curso-base-de-react/commit/4a12c3e

> Resumo montado a partir do título do vídeo e do repositório do instrutor. Confira com o vídeo e anote diferenças no final.

## O que a aula ensina

- Remover um item da lista com `.filter()`.
- Marcar um item como concluído com `.map()`.
- Atualizar **um** item de uma lista no estado sem mutar o array.
- Exibir algo diferente conforme `complete` (renderização condicional da aula 8).

## Conceitos

### 1. Remover com `.filter()`

`.filter()` devolve um **novo array** só com os itens que passam no teste. Para remover, mantenha todos menos o item com aquele `id`:

```tsx
setList(list.filter(item => item.id !== idParaRemover));
```

### 2. Concluir com `.map()`

`.map()` devolve um novo array do mesmo tamanho. Para alterar um item, devolva uma **cópia** dele com a mudança e os outros intactos:

```tsx
setList(list.map(item => ({
  ...item,
  complete: item.id === id ? true : item.complete,
})));
```

Variação comum:

```tsx
setList(list.map(item => item.id === id ? { ...item, complete: true } : item));
```

### 3. Por que não mutar

`list[0].complete = true` altera o objeto existente. O React compara a **referência** do estado, vê o mesmo array e não re-renderiza. Sempre crie um novo array (e novo objeto, quando alterar o item).

### 4. Mostrar o status

```tsx
{item.complete ? 'Concluído' : ''}
{!item.complete && <button>Concluir</button>}
```

## Pontos de atenção

- `.map` e `.filter` não alteram o array original, `.push`, `.splice`, `.sort` e `.reverse` alteram.
- Uma função que usa `list` dentro de um `onClick` enxerga o valor da renderização atual. Isso importa quando você chama o setter várias vezes seguidas (veremos com `useEffect` e `useCallback`).

## Minhas anotações

_Dúvidas, diferenças em relação ao resumo, aprendizados._

## Exercícios

[`exercicios/aula-11`](../../exercicios/aula-11/README.md)
