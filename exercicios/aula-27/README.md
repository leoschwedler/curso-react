# Exercícios — Aula 27 (Rotas públicas e privadas)

## Exercício 1 — Login falso

Crie a página `Login` com `email` e `senha` (inputs controlados) e botão `Entrar`. Por enquanto, guarde `logado` em um `useState` no `AppRoutes` e passe para a tela por props.

## Exercício 2 — Duas árvores

Com `logado`:

- `false`: só a página `Login` (qualquer URL).
- `true`: `Home`, `Sobre` e coringa para `/`.

Adicione um botão `Sair` no layout. Teste digitando `/sobre` deslogado.

## Exercício 3 — Componente guardião

Reescreva com `RotaPrivada` (`children` ou `<Outlet />`), com `/login` como rota pública. Compare as duas versões: qual é melhor para 20 rotas?

## Exercício 4 — Validação do login

O botão `Entrar` só habilita se o email tiver `@` e a senha tiver pelo menos 6 caracteres. Mostre as mensagens de erro condicionalmente.

## Exercício 5 — Usuário e senha fixos

Só aceite `admin@teste.com` / `123456`. Se errar, mostre `Credenciais inválidas`. Responda em comentário: por que **nunca** fazer isso de verdade no front?

## Exercício 6 — Segurança

Abra o DevTools e, com o app deslogado, descubra um jeito de ver o código da página privada (aba Sources). Escreva em um `.md` por que esconder rota não é segurança e onde a verificação real deve acontecer.

## Desafio — Lembrar do login

Salve o token em `localStorage` no login e leia ao iniciar (`useState(() => localStorage.getItem('token'))`). O logout remove. Recarregue a página e confirme que continua logado.
