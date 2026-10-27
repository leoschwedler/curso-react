# Aula 26 — useRef

- Vídeo: https://www.youtube.com/watch?v=qgTssGejgCU
- Código do instrutor (commit "add useRef in InputAdd"): https://github.com/lvsouza/curso-base-de-react/commit/abf7193

> Resumo montado a partir do título do vídeo e do repositório do instrutor. Confira com o vídeo e anote diferenças no final.

## O que a aula ensina

O `useRef`, que serve para duas coisas: **acessar um elemento do DOM** e **guardar um valor** que sobrevive às renderizações **sem causar nova renderização**. No projeto, usado para focar o input depois de adicionar um item.

## Conceitos

### 1. Referência a um elemento

```tsx
const inputRef = useRef<HTMLInputElement>(null);

const handleAdd = () => {
  props.onAdd(value);
  setValue('');
  inputRef.current?.focus();
};

<input ref={inputRef} value={value} onChange={(e) => setValue(e.target.value)} />
```

- `useRef` devolve um objeto `{ current: ... }`.
- O React preenche `current` com o elemento depois de montar. Antes disso é `null`, daí o `?.`.
- O tipo (`HTMLInputElement`) diz qual elemento é, e libera `.focus()`, `.value`, etc.

### 2. Guardar valor sem re-renderizar

```tsx
const contagem = useRef(0);
contagem.current += 1; // não dispara render
```

### 3. `useState` x `useRef`

| | `useState` | `useRef` |
| --- | --- | --- |
| Mudar causa nova renderização | Sim | **Não** |
| Valor sobrevive às renderizações | Sim | Sim |
| Quando usar | Dados que aparecem na tela | Elementos do DOM, timers, valores "de bastidor" |

Regra prática: se a tela precisa mudar quando o valor muda, use `useState`.

### 4. Quando mexer no DOM é aceitável

Foco, rolagem (`scrollIntoView`), medir tamanho, tocar um vídeo. Para mudar **conteúdo**, use estado.

### 5. Não leia `ref.current` durante a renderização

Leia em eventos ou `useEffect`. Durante o render ele pode ainda ser `null` ou desatualizado.

## Pontos de atenção

- Mudar `ref.current` não avisa o React.
- No React 19, `ref` pode ser passada como prop normal para componentes. Em versões antigas era preciso `forwardRef`.

## Minhas anotações

_Dúvidas, diferenças em relação ao resumo, aprendizados._

## Exercícios

[`exercicios/aula-26`](../../exercicios/aula-26/README.md)
