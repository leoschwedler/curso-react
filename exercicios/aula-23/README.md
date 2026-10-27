# Exercícios — Aula 23 (PageLayout)

## Exercício 1 — `PageLayout`

Crie `PageLayout` com `title` e `children`, CSS module com largura máxima de 800 px, centralizado. Use em duas páginas diferentes.

## Exercício 2 — Ação no título

Adicione a prop opcional `acoes?: React.ReactNode` que aparece à direita do título. Exemplo: botão `Novo`. Só renderiza a área se `acoes` existir.

## Exercício 3 — Voltar

Adicione a prop opcional `onVoltar?: () => void`. Quando existir, mostra uma seta `←` antes do título que chama a função.

## Exercício 4 — Carregando

Adicione a prop `carregando?: boolean`. Se for `true`, mostra `Carregando...` no lugar dos `children`.

## Exercício 5 — Sem repetição

Pegue três telas suas (Home, Sobre, Detalhe). Antes da refatoração, copie para um comentário o JSX repetido. Depois da refatoração, conte quantas linhas você economizou.

## Exercício 6 — Quem decide?

Em comentário, classifique cada item como pertencente ao `AppLayout`, ao `PageLayout` ou à página: menu de navegação, título da página, botão de logout, tabela de dados, largura máxima do conteúdo.

## Desafio — Slots

Troque `acoes` por **slots nomeados** (`cabecalho`, `rodape`, `lateral`) como props de `ReactNode`. Monte uma página com os três preenchidos e outra com só um.
