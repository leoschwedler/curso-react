# Aula 10 — Inserindo novos itens na lista dinâmica

- Vídeo: https://www.youtube.com/watch?v=8KPeOw34TIg
- Playlist: Curso base de React 2025 (Lucas Souza Dev)
- Código do instrutor: https://github.com/lvsouza/curso-base-de-react/tree/4a12c3ec5ddedf7a30b2166dde6c12995459ce25 (inclui também coisas das aulas seguintes)

> Resumo montado a partir da descrição do vídeo e do repositório do instrutor, não de uma transcrição. Confira com o vídeo e anote diferenças no final.

## O que a aula ensina

- Pegar o valor de um `input` e guardar em um `useState`.
- Adicionar um item **sem sobrescrever** os existentes.
- **Limpar o input** depois de adicionar.
- Gerar `id` com base no tamanho da lista.
- Por que **usar o `index` como `key` é má ideia**.

## Conceitos

### 1. Input controlado

O valor mostrado no `input` vem do estado, e cada digitação atualiza o estado:

```tsx
const [value, setValue] = useState('');

<input value={value} onChange={(e) => setValue(e.target.value)} />
```

O React é a "fonte da verdade": o que está na tela é sempre o que está no estado.

### 2. Adicionar sem sobrescrever

`setLista` **substitui** o valor inteiro. Para adicionar, copie os itens antigos com o spread e coloque o novo no final:

```tsx
setLista([...lista, { id: (lista.length + 1).toString(), label: value, complete: false }]);
```

Errado (substitui tudo): `setLista([novoItem])`.
Errado (muta o estado): `lista.push(novoItem)`. O React não percebe a mudança e não re-renderiza.

### 3. Limpar o input

Depois de adicionar, volte o estado do input para vazio. Como o `input` é controlado, o campo esvazia sozinho:

```tsx
onClick={() => {
  setLista([...lista, novoItem]);
  setValue('');
}}
```

### 4. Gerando o `id`

O instrutor usa o tamanho da lista (`lista.length + 1`) como `id`. É simples e funciona para o exemplo, mas tem limitação: **depois de remover itens, o id pode repetir** (lista com ids 1, 2, 3, remove o 2, `length + 1` = 3 de novo, e a `key` duplica). Na vida real use `crypto.randomUUID()` ou o id vindo do backend. Pense nisso quando chegar na aula de remoção.

### 5. Por que não usar `index` como `key`

```tsx
// Evite
{lista.map((item, index) => <li key={index}>{item.label}</li>)}
```

Funciona, mas o `index` muda quando itens são inseridos no começo, removidos ou reordenados. O React então associa a `key` ao item errado e atualiza mais do que precisa, o que prejudica a performance e pode misturar estados internos de cada item (um input dentro do item, por exemplo). Use o `id` do dado.

## Código do final da aula (referência)

```tsx
import { useState } from 'react'

export function App() {
  const [value, setValue] = useState('');
  const [list, setList] = useState([
    { id: '1', label: 'Fazer café', complete: false },
    { id: '2', label: 'Fazer almoço', complete: false },
  ]);

  return (
    <div>
      <input value={value} onChange={(e) => setValue(e.target.value)} />

      <button
        onClick={() => {
          setList([...list, { id: (list.length + 1).toString(), label: value, complete: false }]);
          setValue('');
        }}
      >
        Adicionar
      </button>

      <ol>
        {list.map((item) => (
          <li key={item.id}>{item.label}</li>
        ))}
      </ol>
    </div>
  )
}
```

## Minhas anotações

_Dúvidas, diferenças em relação ao resumo, aprendizados._

## Exercícios

[`exercicios/aula-10`](../../exercicios/aula-10/README.md)
