# Exercícios — Aula 24 (React Router)

Instale: `npm install react-router`.

## Exercício 1 — Três páginas

Crie as páginas `Home`, `Sobre` e `Contato`, cada uma com um título. Configure as rotas `/`, `/sobre` e `/contato`.

## Exercício 2 — Menu

No `AppLayout`, crie o menu com `NavLink`. O link da página atual deve ficar destacado (use a classe `active` que o `NavLink` coloca, ou `className={({ isActive }) => ...}`).

## Exercício 3 — `Link` x `<a>`

Crie dois links para `/sobre`: um `<Link>` e um `<a href>`. Escreva um contador em estado na Home e incremente algumas vezes antes de clicar em cada um. Qual preserva o contador ao voltar? Por quê? (Olhe também a aba Network.)

## Exercício 4 — Página 404

Crie a página `NaoEncontrada` na rota `*`, com um link para voltar à Home. Teste digitando uma URL inexistente.

## Exercício 5 — Redirecionamento

Faça `/inicio` redirecionar para `/` com `<Navigate to='/' replace />`. Pergunta: o que o `replace` muda no botão Voltar do navegador?

## Exercício 6 — Rota aninhada simples

Crie `/produtos` com duas subrotas (`/produtos/lista` e `/produtos/novo`) usando `<Outlet />`. Pesquise na documentação como funciona e escreva em comentário o que o `Outlet` faz.

## Desafio — Navegação programática

Crie um botão `Ir para Sobre` que usa `useNavigate()` e navega via código. Depois faça um formulário de contato que, ao enviar, navega para `/` e mostra `Mensagem enviada!` (pense em como passar essa informação: `state` da navegação ou parâmetro).
