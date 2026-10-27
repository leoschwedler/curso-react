# Aula 30 — useMemo e useCallback

- Vídeo: https://www.youtube.com/watch?v=vhqHDiatRuc
- Código do instrutor (commit "add useCallback for performance"): https://github.com/lvsouza/curso-base-de-react/commit/5c84c6a

> Resumo montado a partir do título do vídeo e do repositório do instrutor. Confira com o vídeo e anote diferenças no final.

## O que a aula ensina

Dois hooks de **otimização**: `useMemo` guarda um **valor calculado** e `useCallback` guarda uma **função**, entre renderizações, enquanto as dependências não mudarem. No projeto, aplicados ao `AuthContext`.

## Conceitos

### 1. O problema: tudo é recriado a cada renderização

Em um componente, funções e objetos são **novos** a cada render:

```tsx
const login = () => {...};   // outra função a cada render
const value = { login };     // outro objeto a cada render
```

Para o React, "novo objeto" ≠ "mesmo objeto" (compara por referência). Isso importa quando esse valor é passado a um `Provider`, a um componente com `React.memo` ou ao array de dependências de um `useEffect`.

### 2. `useCallback`: memoriza função

```tsx
const logout = useCallback(() => {
  setEmail(undefined);
  setAccessToken(undefined);
}, []);

const login = useCallback((email: string, _password: string) => {
  setEmail(email);
  setAccessToken(crypto.randomUUID());
}, []);
```

Com `[]`, a função é criada **uma vez** e a referência nunca muda. As funções `setX` do `useState` são estáveis, então não precisam entrar nas dependências.

### 3. `useMemo`: memoriza valor

```tsx
const value = useMemo(
  () => ({ login, logout, accessToken, email }),
  [login, logout, accessToken, email],
);

<AuthContext.Provider value={value}>
```

Recalcula só quando `accessToken` ou `email` mudam. Sem isso, o objeto do `value` seria novo em todo render do provider, e **todos os consumidores** re-renderizariam à toa. (No instrutor, o `useCallback` já entrou; o `useMemo` no `value` é o passo seguinte natural.)

Também serve para cálculos caros:

```tsx
const pendentes = useMemo(() => lista.filter(i => !i.complete), [lista]);
```

### 4. Diferença

| | `useMemo` | `useCallback` |
| --- | --- | --- |
| Guarda | O **resultado** da função | A **própria função** |
| Equivalência | `useCallback(fn, deps)` = `useMemo(() => fn, deps)` | |

### 5. Quando usar (e quando não)

**Use** quando: o valor vai para um `Provider`, para um filho com `React.memo`, para dependência de `useEffect`, ou o cálculo é realmente caro.

**Não use** por padrão, "para otimizar". Memoizar tem custo (memória e comparação de dependências) e deixa o código mais difícil de ler. **Meça antes** (React DevTools Profiler).

### 6. `React.memo`

`useCallback` sozinho não evita nada: ele só dá referência estável. Quem aproveita é o componente embrulhado em `React.memo(Componente)`, que pula a renderização se as props forem iguais.

## Pontos de atenção

- Dependências esquecidas causam bugs de valor "velho". O ESLint (`react-hooks/exhaustive-deps`) avisa.
- Em versões recentes do React existe o **React Compiler**, que memoriza automaticamente na maioria dos casos.

## Minhas anotações

_Dúvidas, diferenças em relação ao resumo, aprendizados._

## Exercícios

[`exercicios/aula-30`](../../exercicios/aula-30/README.md)
