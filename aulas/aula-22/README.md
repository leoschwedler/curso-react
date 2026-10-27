# Aula 22 — Layout de aplicação, CSS base e outros conceitos

- Vídeo: https://www.youtube.com/watch?v=c3DKeGkJIvE
- Código do instrutor (commit "add app base layout"): https://github.com/lvsouza/curso-base-de-react/commit/8527e68

> Resumo montado a partir do título do vídeo e do repositório do instrutor. Confira com o vídeo e anote diferenças no final.

## O que a aula ensina

Criar o **layout base** da aplicação (cabeçalho + conteúdo) como componente `AppLayout`, com CSS próprio, e organizar as pastas.

## Conceitos

### 1. `AppLayout`

```tsx
export const AppLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <div className='layout-base'>
      <div className='layout-header'>
        {/* links de navegação */}
      </div>

      <div className='layout-content'>
        {children}
      </div>
    </div>
  );
};
```

Usa `children` (aula 15): o layout é a moldura e cada página é o conteúdo.

### 2. CSS comum (`.css`)

Um arquivo `AppLayout.css` importado no componente (`import './AppLayout.css'`). Classes globais com `className`. Em React o atributo é **`className`**, não `class`.

Pontos úteis do CSS de layout:

- `height: 100vh` e `display: flex; flex-direction: column` para o cabeçalho ficar no topo e o conteúdo ocupar o resto.
- `flex: 1` e `overflow: auto` no conteúdo para ele rolar sozinho.
- Reset básico (`* { box-sizing: border-box; margin: 0 }`).

### 3. CSS Modules (`.module.css`)

Quando o arquivo termina em `.module.css`, as classes ficam **locais ao componente** (o nome é transformado para ser único):

```tsx
import styles from './Card.module.css';

<div className={styles.Container} />
```

Resolve conflito de nomes entre componentes. É o que o instrutor usa em `InputAdd`, `List` e `TodoItem`.

### 4. Estrutura de pastas

```
src/
  components/       componentes reutilizáveis
  pages/            uma pasta/arquivo por tela
  shared/
    layout/         AppLayout, PageLayout
    services/api/   TodoAPI
    contexts/       AuthContext
  mocks/            servidor falso
```

## Pontos de atenção

- CSS global (`.css` comum) vaza para a aplicação inteira. Prefira módulo, e reserve o global para layout e reset.
- Estilos inline (`style={{...}}`) usam objeto e `camelCase`: `{ backgroundColor: 'red' }`.

## Minhas anotações

_Dúvidas, diferenças em relação ao resumo, aprendizados._

## Exercícios

[`exercicios/aula-22`](../../exercicios/aula-22/README.md)
