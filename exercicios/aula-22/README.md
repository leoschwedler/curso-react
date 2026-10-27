# Exercícios — Aula 22 (Layout e CSS)

## Exercício 1 — `AppLayout`

Crie `AppLayout` com cabeçalho fixo no topo (título do app) e conteúdo que ocupa o resto da tela e rola sozinho. Use CSS comum (`AppLayout.css`) com flexbox.

## Exercício 2 — CSS Module

Crie `Botao.tsx` + `Botao.module.css` com uma classe `.Primario`. Use o componente em dois lugares e confirme no DevTools que o nome da classe foi transformado. Crie outra classe `.Primario` em outro módulo: há conflito?

## Exercício 3 — Global vs módulo

Escreva em comentário quando usar cada um e dê um exemplo do que acontece de ruim se você criar `.title { color: red }` no CSS global.

## Exercício 4 — Rodapé

Adicione um rodapé ao layout. Ele deve ficar no fim da tela quando o conteúdo é curto e rolar com o conteúdo quando é longo (teste com muitos itens).

## Exercício 5 — Tema por prop

`AppLayout` recebe `tema: 'claro' | 'escuro'` e troca as cores via `data-tema` + seletores CSS (`[data-tema="escuro"]`). Um botão no cabeçalho alterna o tema.

## Exercício 6 — Organize as pastas

Reorganize seu projeto na estrutura `components/`, `pages/`, `shared/layout/`, `shared/services/` e `mocks/`. Corrija os imports e rode `npm run build` para provar que nada quebrou.

## Desafio — Responsivo

Em telas menores que 600 px, esconda o texto dos links do cabeçalho e mostre só ícones/emoji (`@media (max-width: 600px)`). Teste com o DevTools em modo celular.
