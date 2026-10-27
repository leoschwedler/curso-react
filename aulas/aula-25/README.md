# Aula 25 — Parâmetros da URL

- Vídeo: https://www.youtube.com/watch?v=EsGSuiIAH0E
- Código do instrutor (commit "add params between routes"): https://github.com/lvsouza/curso-base-de-react/commit/dc02d73

> Resumo montado a partir do título do vídeo e do repositório do instrutor. Confira com o vídeo e anote diferenças no final.

## O que a aula ensina

Passar informação pela URL: o **id** de um item (`/detalhe/3`) e **filtros** (`?filter=abc`), lendo-os com hooks do Router "tão simples quanto um `useState`".

## Conceitos

### 1. Parâmetro de rota (`:id`)

```tsx
<Route path='/detalhe/:id' element={<Detail />} />
```

```tsx
import { useParams } from 'react-router';

const Detail = () => {
  const { id } = useParams(); // string | undefined
  return <p>Detalhe do item {id}</p>;
};
```

Ir até lá:

```tsx
<Link to={`/detalhe/${id}`}>{label}</Link>
```

(É o que o `TodoItem` faz.)

### 2. Query string (`?filter=...`)

```tsx
import { useSearchParams } from 'react-router';

const [searchParams] = useSearchParams();
const filter = searchParams.get('filter'); // string | null
```

URL: `/detalhe/3?filter=abc`.

`useSearchParams` também devolve o setter, e funciona **como um `useState`**, mas guardando na URL:

```tsx
const [searchParams, setSearchParams] = useSearchParams();
setSearchParams({ filter: 'pendentes' });
```

### 3. Quando usar cada um

| | Parâmetro de rota | Query string |
| --- | --- | --- |
| Para quê | Identificar **qual recurso** | Filtros, ordenação, paginação |
| Exemplo | `/detalhe/3` | `/lista?status=pendente&pagina=2` |
| Obrigatório | Sim (a rota depende dele) | Opcional |

### 4. A URL como estado compartilhável

O estado que vive na URL pode ser **copiado, favoritado e enviado** a outra pessoa, e sobrevive ao recarregar a página. Um `useState` não faz isso.

### 5. Buscar dados pelo id

```tsx
useEffect(() => {
  if (!id) return;
  TodoAPI.getById(id).then(setTodo);
}, [id]);
```

Importante o `[id]`: navegar de `/detalhe/1` para `/detalhe/2` **não desmonta** o componente, só muda o parâmetro.

## Pontos de atenção

- Os valores são sempre **string** (ou `undefined`/`null`). Converta (`Number(id)`) se precisar.
- Valide o parâmetro: o usuário pode digitar qualquer coisa na URL.

## Minhas anotações

_Dúvidas, diferenças em relação ao resumo, aprendizados._

## Exercícios

[`exercicios/aula-25`](../../exercicios/aula-25/README.md)
