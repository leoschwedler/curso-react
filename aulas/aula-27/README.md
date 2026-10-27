# Aula 27 — Rotas públicas e privadas

- Vídeo: https://www.youtube.com/watch?v=mzXMIMH0M70
- Código do instrutor (commit "add login page"): https://github.com/lvsouza/curso-base-de-react/commit/fb51977

> Resumo montado a partir do título do vídeo e do repositório do instrutor. Confira com o vídeo e anote diferenças no final.

## O que a aula ensina

Separar as páginas que qualquer um acessa (**públicas**, como o login) das que exigem usuário logado (**privadas**), usando o React Router e renderização condicional.

## Conceitos

### 1. A ideia

```tsx
export const AppRoutes = () => {
  const isAuthenticated = useIsAuthenticated();

  return (
    <BrowserRouter>
      {isAuthenticated && (
        <AppLayout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/sobre' element={<About />} />
            <Route path='/detalhe/:id' element={<Detail />} />

            <Route path='*' element={<Navigate to='/' />} />
          </Routes>
        </AppLayout>
      )}

      {!isAuthenticated && (
        <Routes>
          <Route path='*' element={<Login />} />
        </Routes>
      )}
    </BrowserRouter>
  );
};
```

É a **renderização condicional da aula 8** aplicada a rotas. O usuário deslogado só tem **uma** rota (`*`, o login), então qualquer URL leva a ele.

### 2. Página de login

Dois inputs controlados (`email` e `senha`) e um botão `Entrar` que chama `login(email, senha)`. Nesta aula a "autenticação" só liga uma flag. Na próxima aula ela vem de um **contexto**.

### 3. Por que isso é seguro (e o que não é)

Esconder rotas no front **não protege dados**. Qualquer um pode alterar o JavaScript no navegador. A proteção real é o **backend** recusando requisições sem token válido. O front só melhora a experiência.

### 4. Alternativa: componente guardião

```tsx
const RotaPrivada = ({ children }: React.PropsWithChildren) => {
  const isAuthenticated = useIsAuthenticated();
  return isAuthenticated ? children : <Navigate to='/login' />;
};
```

Ideal quando há **muitas rotas mistas**. O instrutor usa a versão simples, com duas árvores de rotas.

### 5. Redirecionar depois do login

Quando o estado de autenticação muda, o componente re-renderiza e o `AppRoutes` troca a árvore sozinho. Não precisa chamar `navigate`.

## Pontos de atenção

- O `Navigate to='/'` no coringa evita 404 para o logado.
- Recarregar a página perde o login se ele só estiver em memória (`useState`). Persistência fica como melhoria (veja o exercício desafio).

## Minhas anotações

_Dúvidas, diferenças em relação ao resumo, aprendizados._

## Exercícios

[`exercicios/aula-27`](../../exercicios/aula-27/README.md)
