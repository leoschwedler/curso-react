# Aula 19 — useEffect: o guia definitivo

- Vídeo: https://www.youtube.com/watch?v=uGeO1dE9oKA
- Código do instrutor (uso na Home): https://github.com/lvsouza/curso-base-de-react/blob/5c84c6a/src/pages/Home.tsx

> Resumo montado a partir do título do vídeo e do repositório do instrutor. Confira com o vídeo e anote diferenças no final.

## O que a aula ensina

O `useEffect`: o hook para executar **efeitos colaterais** (buscar dados, assinar eventos, timers) depois que o componente é renderizado. Aqui ele busca a lista na API ao abrir a tela.

## Conceitos

### 1. O problema

Chamar a API direto no corpo do componente roda a **cada renderização** e cria loop (a resposta muda o estado, que re-renderiza, que chama a API...):

```tsx
// ERRADO
const Home = () => {
  const [list, setList] = useState<ITodo[]>([]);
  TodoAPI.getAll().then(setList); // loop infinito de requisições
```

### 2. A solução

```tsx
useEffect(() => {
  TodoAPI.getAll().then(data => setList(data));
}, []);
```

O React executa a função **depois de renderizar**, e o array decide **quando** repetir.

### 3. O array de dependências

| Dependências | Quando roda |
| --- | --- |
| `[]` | Só uma vez, ao montar o componente |
| `[a, b]` | Ao montar e sempre que `a` ou `b` mudarem |
| sem array | A cada renderização (quase nunca é o que você quer) |

```tsx
useEffect(() => {
  TodoAPI.getById(id).then(setTodo);
}, [id]); // busca de novo se o id mudar
```

### 4. Limpeza (`cleanup`)

A função devolvida roda antes do próximo efeito e quando o componente sai da tela:

```tsx
useEffect(() => {
  const timer = setInterval(() => console.log('tick'), 1000);

  return () => clearInterval(timer);
}, []);
```

### 5. `StrictMode` roda duas vezes

Em desenvolvimento, o `StrictMode` monta, desmonta e monta de novo para revelar efeitos sem limpeza. Se algo roda duas vezes em dev, não é bug do React, é seu efeito mostrando que precisa de cleanup. Em produção roda uma vez.

### 6. Quando **não** usar

Para dados que podem ser **calculados** durante a renderização (`const total = list.length`), ou para reagir a cliques (use o handler). `useEffect` é para sincronizar com algo **de fora** do React.

## Pontos de atenção

- Declare **todas** as variáveis usadas dentro do efeito como dependência (o ESLint avisa).
- A função do `useEffect` não pode ser `async` direto. Crie uma função `async` dentro dele ou use `.then`.
- Sempre use hooks no topo do componente (regra da aula 8).

## Minhas anotações

_Dúvidas, diferenças em relação ao resumo, aprendizados._

## Exercícios

[`exercicios/aula-19`](../../exercicios/aula-19/README.md)
