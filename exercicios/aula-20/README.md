# Exercícios — Aula 20 (Persistência com localStorage)

## Exercício 1 — `localStorage` na mão

Sem Mirage: um input de nome que salva em `localStorage` ao clicar em `Salvar` e mostra o nome salvo ao recarregar a página. Use `useState` com inicializador (`useState(() => localStorage.getItem('nome') ?? '')`).

## Exercício 2 — JSON

Salve uma lista de objetos (`[{ id, label }]`). Mostre no DevTools (Application) como ficou e explique em comentário por que precisa de `JSON.stringify`/`JSON.parse`.

## Exercício 3 — Persistência no mock

Faça seu mock de frutas (aula 16/17) persistir no `localStorage` usando `seeds` e salvando depois de cada `POST`, `PUT` e `DELETE`. Teste recarregando a página.

## Exercício 4 — Reuse

A lógica de salvar se repete em 3 rotas. Extraia para uma função `persistir(schema)`.

## Exercício 5 — JSON quebrado

Edite o valor no `localStorage` à mão para um JSON inválido (`{`) e recarregue. O que acontece? Proteja o `seeds` com `try/catch` e comece vazio se falhar.

## Exercício 6 — Botão de reset

Na tela, um botão `Resetar dados` que apaga a chave do `localStorage` e recarrega a página (`location.reload()`).

## Desafio — Hook `useLocalStorage`

Crie o hook `useLocalStorage<T>(chave, valorInicial)` que funciona como `useState` mas persiste. Use dentro dele `useState` e `useEffect`. Teste com um tema (claro/escuro) e com um contador.
