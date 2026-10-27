# Exercícios — Aula 25 (Parâmetros da URL)

## Exercício 1 — Página de detalhe

Crie a rota `/detalhe/:id` e a página `Detail` mostrando `Detalhe do item {id}`. Na lista do TODO, faça o texto de cada item virar um `Link` para o detalhe.

## Exercício 2 — Detalhe de verdade

Na página de detalhe, busque o TODO pelo id (`TodoAPI.getById`, crie no service e no mock) e mostre `label` e status. Se não existir, mostre `Item não encontrado`.

## Exercício 3 — Navegar entre itens

Adicione botões `Anterior` e `Próximo` no detalhe que levam ao item vizinho da lista. Confirme que os dados atualizam sem sair da página (o `useEffect` precisa de `[id]`). Se você esquecer o `[id]`, o que acontece?

## Exercício 4 — Query string como filtro

Na Home, adicione um `<select>` (`todas`, `pendentes`, `concluidas`) que guarda a escolha na URL (`?status=pendentes`) com `useSearchParams`. Recarregue a página: o filtro persiste? Compare com guardar em `useState`.

## Exercício 5 — Valores inválidos

Digite na mão `?status=banana`. O que sua tela faz? Trate o caso e use `todas` como padrão.

## Exercício 6 — Vários parâmetros

Adicione `busca` (texto) e `pagina` (número) à query string. Mostre `Página X` e botões para mudar de página sem perder o parâmetro `busca` (cuidado ao atualizar: copie os parâmetros atuais).

## Desafio — Link compartilhável

Faça um botão `Copiar link` que copia a URL atual (com filtros) para a área de transferência (`navigator.clipboard.writeText`). Abra o link em uma aba anônima e confira se a mesma tela aparece.
