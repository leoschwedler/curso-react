# Aula 13 — Clean code: funções isoladas

- Vídeo: https://www.youtube.com/watch?v=ZyyZGM1kAuk
- Código do instrutor (commit "improve functions"): https://github.com/lvsouza/curso-base-de-react/commit/b4e31f2

> Resumo montado a partir do título do vídeo e do repositório do instrutor. Confira com o vídeo e anote diferenças no final.

## O que a aula ensina

Tirar a lógica de dentro do JSX e deixá-la em **funções com nome**, para o `return` ficar só descrevendo a interface.

## Conceitos

### 1. Antes e depois

Antes, a lógica fica escondida em `onClick`:

```tsx
<button onClick={() => {
  setList([...list, { id: (list.length + 1).toString(), label: value, complete: false }]);
  setValue('');
}}>
```

Depois, o JSX só chama uma função com nome claro:

```tsx
const handleAdd = () => {
  setList([...list, { id: crypto.randomUUID(), label: value, complete: false }]);
  setValue('');
};

<button onClick={handleAdd}>Adicionar</button>
```

### 2. Convenção de nomes

- `handleX`: função que **trata um evento** (`handleAdd`, `handleRemove`, `handleComplete`).
- `onX`: prop de callback (`onAdd`, `onRemove`).

### 3. Funções que recebem o `id`

```tsx
const handleRemove = (id: string) => {
  setList(list.filter(item => item.id !== id));
};

<button onClick={() => handleRemove(item.id)}>Remover</button>
```

Atenção: `onClick={handleRemove(item.id)}` **chama a função na renderização**. Use `() => handleRemove(item.id)`.

### 4. Benefícios

- JSX curto e legível.
- Lógica fácil de testar e de reaproveitar.
- Um lugar só para mudar uma regra.

## Pontos de atenção

- Isolar não é criar 50 funções de uma linha. Faça quando o trecho tem nome e propósito.
- Funções que não usam estado nem props podem ficar **fora** do componente (não são recriadas a cada renderização).

## Minhas anotações

_Dúvidas, diferenças em relação ao resumo, aprendizados._

## Exercícios

[`exercicios/aula-13`](../../exercicios/aula-13/README.md)
