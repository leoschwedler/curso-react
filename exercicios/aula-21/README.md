# Exercícios — Aula 21 (DELETE e UPDATE no mock)

## Exercício 1 — Rotas

Implemente `PUT /todos/:id` e `DELETE /todos/:id` no seu mock, com persistência.

## Exercício 2 — Ligue os botões

`Concluir` e `Remover` chamam o `TodoAPI` e só mexem no estado depois da resposta. Recarregue a página para confirmar que a mudança persistiu.

## Exercício 3 — Estado funcional

Troque `setList(list.filter(...))` por `setList(old => old.filter(...))`. Escreva em comentário em que situação a versão com `list` pode dar errado (dica: clique rápido em 2 botões com a API lenta, `this.timing = 2000`).

## Exercício 4 — Erro na API

Faça o `DELETE` do mock falhar para um id específico (`new Response(500)`). Mostre uma mensagem `Não foi possível remover` e **mantenha** o item na lista.

## Exercício 5 — Loading por item

Enquanto um item está sendo removido, desabilite os botões **dele** e mostre `Removendo...`. Use um estado `idsEmAcao: string[]`.

## Exercício 6 — Atualização otimista

Reescreva `handleComplete` para atualizar a tela **antes** e reverter se a API falhar. Compare a sensação de velocidade com `timing = 2000`.

## Desafio — Alternar e editar

Implemente `Reabrir` (complete → false) e edição do texto (`PUT` com `{ label }`). Garanta que o mock rejeite `label` vazio com status 422.
