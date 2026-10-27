# Aula 24 — Navegação entre páginas com React Router

- Vídeo: https://www.youtube.com/watch?v=nZdfqj5b6Yw
- Código do instrutor (commit "add react router"): https://github.com/lvsouza/curso-base-de-react/commit/212420f

> Resumo montado a partir do título do vídeo e do repositório do instrutor. Confira com o vídeo e anote diferenças no final.

## O que a aula ensina

Fazer um app de várias páginas (Home, Sobre...) **sem recarregar** o navegador, usando o `react-router`.

## Conceitos

### 1. Instalação

```bash
npm install react-router
```

### 2. Rotas

```tsx
import { BrowserRouter, Routes, Route, Navigate } from 'react-router';

export const AppRoutes = () => (
  <BrowserRouter>
    <AppLayout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sobre' element={<About />} />

        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </AppLayout>
  </BrowserRouter>
);
```

- **`BrowserRouter`**: usa a URL do navegador. Fica por fora de tudo que usa rotas.
- **`Routes`**: escolhe **uma** rota que combine com a URL.
- **`Route`**: liga um `path` a um componente (`element`).
- **`path='*'`**: coringa, pega qualquer URL desconhecida (útil para "página não encontrada" ou redirecionar).
- **`Navigate`**: redireciona.

### 3. Links

```tsx
import { Link, NavLink } from 'react-router';

<Link to='/sobre'>Sobre</Link>
<NavLink to='/'>Página inicial</NavLink>
```

Nunca use `<a href>` para navegação interna: ele recarrega a página e perde o estado. `Link` troca só o que muda.

`NavLink` é um `Link` que sabe se está **ativo** (ganha a classe `active`, ideal para menu).

### 4. Como funciona a ideia

A URL vira um **estado**: o Router lê a URL e decide qual componente mostrar. Trocar de página é trocar de estado, sem pedir HTML novo ao servidor (**SPA**, Single Page Application).

### 5. Layout fora das rotas

O `AppLayout` envolve as `Routes`, então o cabeçalho **não é recriado** ao navegar. Só o conteúdo muda.

## Pontos de atenção

- Em versões antigas, os imports vinham de `react-router-dom`. Na v7 é `react-router`.
- Em produção, o servidor precisa devolver o `index.html` para qualquer rota (senão dá 404 ao recarregar em `/sobre`). O Vite dev server já faz isso.

## Minhas anotações

_Dúvidas, diferenças em relação ao resumo, aprendizados._

## Exercícios

[`exercicios/aula-24`](../../exercicios/aula-24/README.md)
