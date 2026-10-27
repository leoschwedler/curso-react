# Exercícios — Aula 12 (Componentizando)

Crie em `src/exercicios/aula-12/`.

## Exercício 1 — Extraia o `InputAdd`

Tire o input + botão do `App` e crie `InputAdd.tsx` com a prop `onAdd(value: string): void`. O estado do texto fica dentro do componente.

## Exercício 2 — Reutilize

Use `<InputAdd />` duas vezes na tela: uma para uma lista de **tarefas** e outra para uma lista de **compras**, cada uma com sua lista no estado do pai.

## Exercício 3 — Prop de texto

Adicione ao `InputAdd` as props `placeholder: string` e `textoBotao: string`. Cada uso do exercício 2 passa textos diferentes.

## Exercício 4 — Prop opcional

Torne `placeholder` e `textoBotao` **opcionais** (`placeholder?: string`) com valores padrão (`Digite aqui` e `Adicionar`). Use desestruturação com valor padrão.

## Exercício 5 — Validação dentro do componente

`InputAdd` não deve chamar `onAdd` com texto vazio. Onde a regra deve ficar: no filho ou no pai? Responda em comentário e implemente.

## Exercício 6 — Quem sabe o quê?

Desenhe (em comentário ou em um `.md`) o fluxo de dados do seu app: quais dados descem por props e quais eventos sobem por callback. Uma frase para cada seta.

## Desafio — `Contador` reutilizável

Crie `Contador` que recebe `inicial: number` e `onChange(valor: number): void`. Dentro dele, `+1` e `-1` com seu próprio estado. No pai, use 3 contadores e mostre a **soma total** deles.
