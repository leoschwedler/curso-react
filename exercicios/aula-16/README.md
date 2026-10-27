# Exercícios — Aula 16 (Servidor mockado)

Crie em `src/mocks/` e `src/exercicios/aula-16/`. Instale: `npm install -D miragejs`.

## Exercício 1 — Primeira rota

Suba um Mirage server com a rota `GET /api/frutas` que devolve 3 frutas fixas. Importe o servidor no `main.tsx`.

Abra o navegador em `/api/frutas`: funciona? Por que sim ou por que não? (Pense: quem está respondendo?)

## Exercício 2 — Consumindo

Em um componente, use `fetch('/api/frutas')` dentro de um botão `Carregar` e mostre o resultado em uma lista. Abra a aba **Network** do DevTools e veja a requisição.

## Exercício 3 — Model e schema

Troque as frutas fixas por um `Model` com `seeds` que cria 5 frutas. A rota passa a devolver `schema.all('fruta')`. Veja como o formato da resposta muda (`{ frutas: [...] }`) e ajuste seu componente.

## Exercício 4 — Simule erro

Crie `GET /api/erro` que responde `new Response(500, {}, { mensagem: 'Deu ruim' })`. No componente, trate o erro e mostre a mensagem.

## Exercício 5 — Simule lentidão

Em uma rota, use `this.timing = 1500` (ou o `timing` da rota) para simular resposta lenta. Mostre `Carregando...` enquanto espera (use um `useState` booleano e renderização condicional).

## Exercício 6 — Perguntas

Responda em um `.md`:

1. Quais são as 3 vantagens de usar mock durante o desenvolvimento?
2. Que problema pode aparecer se o mock responder diferente do backend real?
3. Como garantir que o mock não vá para produção?

## Desafio — CRUD completo no Mirage

Implemente `GET`, `POST`, `PUT /:id` e `DELETE /:id` para um model `tarefas` e teste cada rota com botões na tela.
