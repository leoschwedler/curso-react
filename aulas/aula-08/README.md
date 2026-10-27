# Aula 08 — Renderização condicional no React

- Vídeo: https://www.youtube.com/watch?v=sqhXpFMbRK8
- Playlist: Curso base de React 2025 (Lucas Souza Dev)
- Código do instrutor no começo da aula: https://github.com/lvsouza/curso-base-de-react/tree/d4a85073d4eb77912f6f65e96247b85c7f5a9ae8

> Este resumo foi montado a partir da descrição do vídeo e do repositório do instrutor, não de uma transcrição. Se algo divergir do que ele mostrou, vale o vídeo. Anote as diferenças na seção "Minhas anotações" no final.

## O que a aula ensina

Como **mostrar ou esconder** elementos na tela de acordo com um valor, em geral um `state`. As formas mostradas:

1. Esconder com `style` (CSS).
2. Operador `&&`.
3. Operador ternário.
4. `return null` dentro de um componente.
5. O que **não pode** ser feito: colocar um hook dentro de um `if`.

Também explica por que esconder com CSS nem sempre é uma boa ideia.

## Conceitos

### 1. Esconder com `style`

```tsx
const [mostrar, setMostrar] = useState(true);

<p style={{ display: mostrar ? 'block' : 'none' }}>Olá</p>
```

O elemento **continua existindo no DOM**, só fica invisível. O React ainda renderiza o componente e o navegador ainda carrega o conteúdo. Para um parágrafo isso não pesa, mas para um componente grande (ou que faz chamadas à API) é desperdício.

### 2. Operador `&&`

```tsx
{mostrar && <p>Olá</p>}
```

Se `mostrar` for `false`, o React não renderiza nada e o elemento **nem entra no DOM**. É a forma mais usada quando só existe o caso "mostrar ou não mostrar".

### 3. Operador ternário

```tsx
{mostrar ? <p>Olá</p> : <p>Tchau</p>}
```

Use quando há **duas opções** de conteúdo. Se o "else" for vazio, prefira o `&&`.

### 4. `return null`

```tsx
function Aviso({ visivel }: { visivel: boolean }) {
  if (!visivel) return null;

  return <p>Atenção!</p>;
}
```

Um componente pode decidir sozinho não renderizar nada. Útil quando a regra de exibição pertence ao componente, e não a quem o chama.

### 5. Hook dentro de `if` não pode

```tsx
// ERRADO
if (mostrar) {
  const [x, setX] = useState(0);
}
```

Os hooks precisam ser chamados **sempre, na mesma ordem**, a cada renderização. O React identifica cada hook pela ordem da chamada. Dentro de um `if`, essa ordem pode mudar entre renderizações e o estado se mistura. Regra: hooks sempre no **topo** do componente, antes de qualquer `return` condicional.

```tsx
// ERRADO: o return vem antes do hook
function Comp({ ok }: { ok: boolean }) {
  if (!ok) return null;
  const [x, setX] = useState(0); // hook chamado só às vezes
  ...
}
```

## Esconder com CSS ou não renderizar?

| | `style` / CSS | `&&` / ternário / `return null` |
| --- | --- | --- |
| Elemento no DOM | Sim | Não |
| Componente é executado | Sim | Não |
| `state` interno ao reaparecer | Mantido | **Perdido** (o componente é desmontado e criado de novo) |
| Quando usar | Alternar muitas vezes, ou manter o estado | Conteúdo pesado ou que não precisa existir |

## Pontos de atenção

- `contador && <p>...</p>` com `contador = 0` mostra o **`0`** na tela. Use `contador > 0 && ...`.
- `false`, `null` e `undefined` não aparecem na tela. Por isso o `&&` funciona.
- Mudar o estado chama o componente de novo. É assim que a tela reage à condição.

## Minhas anotações

_Escreva aqui o que ele fez de diferente do resumo, dúvidas e coisas novas._

## Exercícios

[`exercicios/aula-08`](../../exercicios/aula-08/README.md)
