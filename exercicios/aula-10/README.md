# Exercícios — Aula 10 (Inserindo itens na lista)

Use `src/exercicios/aula-10/` e renderize um por vez no `App.tsx`. Cada exercício parte do que você fez na aula (input + botão + lista).

## Exercício 1 — Espelho do input

Um `input` controlado e, logo abaixo, um parágrafo `Você digitou: ...` que mostra o texto em tempo real.

## Exercício 2 — Adicionar nome

Input + botão `Adicionar` + lista de nomes (`useState<string[]>`).

- Ao clicar, o nome entra no **final** da lista.
- O input é limpo depois.
- Os nomes anteriores nunca somem.

Use `key` com `id`: a lista deve guardar objetos `{ id, nome }`.

## Exercício 3 — Não adicione vazio

Melhore o exercício 2:

- Se o input estiver vazio (ou só com espaços), o botão não adiciona.
- Desabilite o botão com `disabled` nesses casos.
- Mostre uma mensagem `Digite um nome` só enquanto o campo estiver vazio (renderização condicional).

Dica: `value.trim()`.

## Exercício 4 — Enter para adicionar

Além do botão, pressionar **Enter** no input também adiciona. Use o evento `onKeyDown` e `e.key === 'Enter'`. Evite duplicar código: crie uma função `adicionar` e chame nos dois lugares.

## Exercício 5 — Adicionar no começo

Um segundo botão `Adicionar no início`, que coloca o item no topo da lista.

Depois responda em comentário: se você tivesse usado o `index` como `key`, o que mudaria para o React quando o item entra no começo? Por que isso é um problema?

## Exercício 6 — O bug do `id` por tamanho

Use `(lista.length + 1).toString()` como `id`, como o instrutor fez, e adicione também um botão `Remover último`.

1. Adicione 3 itens, remova o último e adicione outro. Isso repete algum `id`? Olhe o console.
2. Corrija com `crypto.randomUUID()`.
3. Escreva em comentário por que o `id` baseado no tamanho é frágil.

## Exercício 7 — Contador de itens

Mostre `X itens na lista` (use `item` no singular quando for 1) e `Lista vazia` quando não houver nenhum.

## Desafio — Lista de compras

Cada item tem `{ id, nome, quantidade }`. Adicione dois inputs (nome e quantidade, `type="number"`) e um botão.

- Não aceite nome vazio nem quantidade menor que 1.
- Se o nome já existir na lista, **some** a quantidade no item existente em vez de criar outro (sem mutar o estado).
- Mostre `Total de unidades: X` somando as quantidades (`reduce`).
