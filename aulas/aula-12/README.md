# Aula 12 — Componentizando a interface

- Vídeo: https://www.youtube.com/watch?v=4eijEh6H7XI
- Código do instrutor (commit "add input add component"): https://github.com/lvsouza/curso-base-de-react/commit/2484cc5

> Resumo montado a partir do título do vídeo e do repositório do instrutor. Confira com o vídeo e anote diferenças no final.

## O que a aula ensina

Como quebrar o `App` gigante em componentes menores. O primeiro a sair é o `InputAdd` (input + botão de adicionar), com o seu próprio estado e uma **prop de callback** para avisar o pai.

## Conceitos

### 1. Por que componentizar

- Cada componente tem **uma responsabilidade**.
- Fica fácil de ler, testar e reutilizar.
- O estado fica **perto de quem usa**: o texto do input só interessa ao `InputAdd`, então o `useState` dele mora lá.

### 2. Props

Dados descem do pai para o filho por props. Em TypeScript, descreva-as com uma `interface`:

```tsx
interface IInputAddProps {
  onAdd(value: string): void;
}

export const InputAdd = (props: IInputAddProps) => { ... }
```

### 3. Callback para o pai

O filho **não conhece** a lista. Quando o usuário clica em adicionar, ele só avisa:

```tsx
const handleAdd = () => {
  props.onAdd(value);
  setValue('');
};
```

O pai decide o que fazer:

```tsx
<InputAdd onAdd={(value) => setList([...list, { id: crypto.randomUUID(), label: value, complete: false }])} />
```

Fluxo: **dados descem (props), eventos sobem (callbacks)**.

### 4. Elevar o estado

O estado que mais de um componente precisa fica no ancestral comum. A lista fica no pai (usada por vários), o texto do input fica no filho (só ele usa).

## Pontos de atenção

- Nome de componente começa com letra **maiúscula**.
- Um componente por arquivo ajuda a manter a organização (`src/components/InputAdd.tsx`).
- Não passe o `setState` inteiro se um callback com nome claro resolve (`onAdd` diz mais do que `setList`).

## Minhas anotações

_Dúvidas, diferenças em relação ao resumo, aprendizados._

## Exercícios

[`exercicios/aula-12`](../../exercicios/aula-12/README.md)
