# Aula 23 — Layout de página que facilita a manutenção

- Vídeo: https://www.youtube.com/watch?v=GNkWGoOLvwU
- Código do instrutor (commits "add page layout component" e "refactor: improve TODO css"): https://github.com/lvsouza/curso-base-de-react/commit/49d0bcd

> Resumo montado a partir do título do vídeo e do repositório do instrutor. Confira com o vídeo e anote diferenças no final.

## O que a aula ensina

Criar o `PageLayout`, um componente que padroniza **título e conteúdo** de cada página, e reorganizar o CSS do TODO.

## Conceitos

### 1. `AppLayout` x `PageLayout`

- **`AppLayout`**: a casca do app inteiro (cabeçalho, menu). Aparece em todas as telas.
- **`PageLayout`**: o interior de **uma página** (título, espaçamento, área de conteúdo).

### 2. O componente

```tsx
interface IPageLayoutProps {
  title: string;
  children: React.ReactNode;
}
export const PageLayout = ({ children, title }: IPageLayoutProps) => (
  <div className={styles.PageLayoutContainer}>
    <div className={styles.PageContent}>
      <h1 className={styles.PageTitle}>{title}</h1>

      <div>{children}</div>
    </div>
  </div>
);
```

Uso:

```tsx
<PageLayout title='TODO List'>
  <InputAdd onAdd={handleAdd} />
  <List>...</List>
</PageLayout>
```

### 3. Por que isso ajuda a manter

- Mudou a largura máxima das páginas? Muda **um** arquivo.
- Todas as páginas ficam com título e espaçamento iguais.
- A página só se preocupa com o conteúdo dela.

### 4. Princípio

> Se você copiou o mesmo bloco de JSX/CSS para duas telas, ele quer ser um componente.

### 5. `PropsWithChildren` x `ReactNode`

`children: React.ReactNode` e `React.PropsWithChildren<{ title: string }>` são equivalentes aqui. Escolha um padrão e use sempre o mesmo.

## Pontos de atenção

- Props obrigatórias (`title`) ajudam a não esquecer de preencher.
- Evite decidir regras de negócio no layout. Ele só organiza visual.

## Minhas anotações

_Dúvidas, diferenças em relação ao resumo, aprendizados._

## Exercícios

[`exercicios/aula-23`](../../exercicios/aula-23/README.md)
