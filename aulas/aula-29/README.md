# Aula 29 — Erro comum ao utilizar os providers

- Vídeo: https://www.youtube.com/watch?v=JRFh6fGMos8

> Resumo montado **apenas a partir do título** (a descrição do vídeo não foi lida e o repositório não tem commit próprio desta aula). Os erros abaixo são os mais comuns com providers. Confira com o vídeo qual deles o instrutor mostrou e anote na seção final.

## O que a aula ensina (provável)

Os erros mais frequentes ao usar `Context` e `Provider`, e como evitá-los.

## Erros comuns

### 1. Usar o contexto fora do provider

```tsx
const AuthContext = createContext({} as IAuthContextProps);
```

Fora do provider, `useContext` devolve o valor padrão (`{}`), e `login()` quebra com `login is not a function`, sem erro claro de tipo.

**Correção:** criar o contexto sem valor e proteger o hook:

```tsx
const AuthContext = createContext<IAuthContextProps | undefined>(undefined);

export const useAuthContext = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuthContext deve ser usado dentro de <AuthProvider>');
  return ctx;
};
```

### 2. Provider colocado no lugar errado

O componente que **usa** o contexto precisa estar **dentro** do provider. Um erro típico é chamar `useAuthContext()` no mesmo componente que renderiza o `<AuthProvider>`:

```tsx
// ERRADO: App usa o contexto, mas está acima do provider
const App = () => {
  const { email } = useAuthContext(); // vazio!
  return <AuthProvider>...</AuthProvider>;
};
```

**Correção:** coloque o provider em um nível acima (no `main.tsx`) ou mova o consumo para um filho.

### 3. Ordem dos providers

Se o `B` usa dados do `A`, `A` precisa envolver `B`:

```tsx
<AuthProvider>
  <PermissoesProvider>  {/* pode usar useAuthContext */}
    <App />
  </PermissoesProvider>
</AuthProvider>
```

### 4. "Provider hell"

Muitos providers aninhados ficam ilegíveis. Solução: componha em um único `AppProviders`:

```tsx
export const AppProviders = ({ children }: React.PropsWithChildren) => (
  <AuthProvider>
    <ThemeProvider>{children}</ThemeProvider>
  </AuthProvider>
);
```

### 5. `value` recriado a cada render

```tsx
<AuthContext.Provider value={{ login, logout, accessToken }}>
```

O objeto é novo em toda renderização do provider, então **todos os consumidores** re-renderizam, mesmo se nada mudou. A aula 30 mostra como resolver com `useMemo` e `useCallback`.

## Minhas anotações

_Qual erro o instrutor mostrou? Dúvidas e aprendizados._

## Exercícios

[`exercicios/aula-29`](../../exercicios/aula-29/README.md)
