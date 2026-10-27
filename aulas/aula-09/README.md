# Aula 09 — Listas, `key` e performance

- Vídeo: https://www.youtube.com/watch?v=nZ1jeoPHxDw
- Playlist: Curso base de React 2025 (Lucas Souza Dev)
- Código do instrutor: https://github.com/lvsouza/curso-base-de-react/tree/4a12c3ec5ddedf7a30b2166dde6c12995459ce25 (esse commit já traz o todo completo das aulas 9 a 11, então ele tem mais do que foi feito nesta aula)

> Resumo montado a partir da descrição do vídeo e do repositório do instrutor, não de uma transcrição. Confira com o vídeo e anote diferenças no final.

## O que a aula ensina

- Renderizar uma lista com `.map()`.
- Transformar uma lista estática em **dinâmica** com `useState`.
- Por que a `key` é obrigatória e o problema de **chaves duplicadas**.
- Refatorar os dados de `string[]` para **objetos com `id` e `label`**.
- Primeiro contato com input + botão para adicionar itens.

## Conceitos

### 1. `.map()` no JSX

JSX aceita arrays de elementos. Para listar, você transforma cada dado em um elemento:

```tsx
const tarefas = ['Fazer café', 'Fazer almoço'];

<ol>
  {tarefas.map((tarefa) => (
    <li key={tarefa}>{tarefa}</li>
  ))}
</ol>
```

### 2. Lista dinâmica com `useState`

Uma lista fixa fora do estado nunca atualiza a tela. Guardando no `useState`, qualquer mudança dispara nova renderização:

```tsx
const [lista, setLista] = useState(['Fazer café', 'Fazer almoço']);
```

### 3. Para que serve a `key`

A `key` é como o React **identifica cada item** entre uma renderização e outra. Com ela, o React sabe qual item foi adicionado, removido ou movido, e atualiza só o necessário, em vez de recriar a lista inteira.

Regras:

- Deve ser **única entre os irmãos** (na mesma lista).
- Deve ser **estável**: o mesmo item tem sempre a mesma `key`.
- Vai no elemento mais externo dentro do `map`.
- `key` não chega ao componente como prop.

Se duas chaves forem iguais, o React avisa no console (`Encountered two children with the same key`) e pode se comportar de forma estranha. Foi o que o instrutor mostrou com `'Fazer café'` repetido.

### 4. Objetos com `id` e `label`

Usar o texto como `key` quebra quando há itens repetidos. A solução é dar um identificador a cada item:

```tsx
const [lista, setLista] = useState([
  { id: '1', label: 'Fazer café' },
  { id: '2', label: 'Fazer café' }, // texto repetido, id diferente: OK
  { id: '3', label: 'Fazer almoço' },
]);

{lista.map((item) => (
  <li key={item.id}>{item.label}</li>
))}
```

### 5. Input + botão

A base para a aula seguinte: um `input` controlado (`value` + `onChange`) e um botão que adiciona na lista.

## Pontos de atenção

- Sem `key`, o React mostra um aviso no console. Abra o DevTools e fique de olho.
- `key` repetida é bug, mesmo que a tela pareça certa.
- Não altere o array do estado diretamente (`lista.push(...)`). Crie um novo array (`[...lista, novo]`). Isso aparece na próxima aula.

## Minhas anotações

_Dúvidas, diferenças em relação ao resumo, aprendizados._

## Exercícios

[`exercicios/aula-09`](../../exercicios/aula-09/README.md)
