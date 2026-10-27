# Aula 28 — Contexto de autenticação (Context API)

- Vídeo: https://www.youtube.com/watch?v=MUoOdUiyyMo
- Código do instrutor (commits "add auth context" e "add hook for is authenticated"): https://github.com/lvsouza/curso-base-de-react/blob/5c84c6a/src/shared/contexts/AuthContext.tsx

> Resumo montado a partir do título do vídeo e do repositório do instrutor. Confira com o vídeo e anote diferenças no final.

## O que a aula ensina

Compartilhar dados (usuário logado, token, `login`, `logout`) com **qualquer componente** sem passar por props em todos os níveis, usando a **Context API**.

## Conceitos

### 1. O problema: prop drilling

Passar `accessToken` do topo até um componente 6 níveis abaixo, por todos os intermediários que nem usam. O contexto é um "canal" que pula os intermediários.

### 2. As 3 partes

```tsx
import { createContext, useContext, useState } from 'react';

interface IAuthContextProps {
  email: string | undefined;
  accessToken: string | undefined;

  logout(): void;
  login(email: string, password: string): void;
}

// 1. Criar o contexto
const AuthContext = createContext({} as IAuthContextProps);

// 2. Provider: guarda o estado e o oferece aos filhos
export const AuthProvider = ({ children }: React.PropsWithChildren) => {
  const [accessToken, setAccessToken] = useState<string>();
  const [email, setEmail] = useState<string>();

  const logout = () => {
    setEmail(undefined);
    setAccessToken(undefined);
  };

  const login = (email: string, _password: string) => {
    // aqui chamaria o backend para obter o token
    setEmail(email);
    setAccessToken(crypto.randomUUID());
  };

  return (
    <AuthContext.Provider value={{ login, logout, accessToken, email }}>
      {children}
    </AuthContext.Provider>
  );
};

// 3. Hook para consumir
export const useAuthContext = () => useContext(AuthContext);
```

### 3. Colocando o provider

Envolva a parte da árvore que precisa do contexto (normalmente o app todo):

```tsx
<AuthProvider>
  <AppRoutes />
</AuthProvider>
```

### 4. Consumindo

```tsx
const { login } = useAuthContext();
```

Qualquer componente **dentro** do `AuthProvider` pode usar.

### 5. Hook derivado

```tsx
export const useIsAuthenticated = () => {
  const { accessToken } = useAuthContext();
  return !!accessToken;
};
```

`!!valor` converte para booleano. Esconde o detalhe (token) e expõe só a pergunta que o componente quer responder.

### 6. Quando usar

Dados **globais** e que mudam pouco: usuário, tema, idioma, permissões. Para estado que muda o tempo todo e vários componentes leem (ex.: contador de digitação), contexto pode causar renderizações demais.

## Pontos de atenção

- Todo componente que **consome** o contexto re-renderiza quando o `value` muda.
- O `createContext({} as IAuthContextProps)` engana o TypeScript: fora do provider o valor é `{}` e `login` seria `undefined`. A aula 29 trata isso.

## Minhas anotações

_Dúvidas, diferenças em relação ao resumo, aprendizados._

## Exercícios

[`exercicios/aula-28`](../../exercicios/aula-28/README.md)
