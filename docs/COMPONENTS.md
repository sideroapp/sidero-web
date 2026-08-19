# Componentes

## UI base (`components/ui`)

### `Button`

```tsx
<Button variant="primary" size="md">Enviar</Button>
<Button href="/contato" variant="outline" size="lg">Falar com a gente</Button>
```

- `variant`: `primary` | `secondary` | `outline` | `ghost`
- `size`: `sm` | `md` | `lg`
- Se `href` for passado, renderiza um `next/link` estilizado como botão; caso contrário,
  renderiza um `<button>` nativo (aceita todos os props HTML correspondentes).

### `Card`, `CardTitle`, `CardDescription`

```tsx
<Card>
  <CardTitle>Título</CardTitle>
  <CardDescription>Descrição curta.</CardDescription>
</Card>
```

### `Container`

Wrapper de largura máxima (`max-w-7xl`) com padding horizontal responsivo. Aceita `as`
para trocar a tag (`section`, `header`, `nav`, etc.).

### `Input`, `Textarea`

Campos de formulário com `forwardRef` (compatíveis com `react-hook-form`). Aceitam prop
`error` (boolean) para exibir estado de erro.

### `Icon`

Wrapper fino sobre `react-icons` para tamanho/cor consistentes:

```tsx
<Icon icon={HiOutlineCube} size={22} className="text-navy-800" />
```

## Layout (`components/layout`)

- **`Header`** — sticky, logo + navegação. A partir de `lg` (1024px) mostra o menu
  horizontal completo; abaixo disso, menu hamburger (evita overlap entre nav e CTA em
  telas de tablet — bug corrigido na Fase 1).
- **`Footer`** — logo reduzida, colunas de links, copyright.

## Seções da home (`components/sections`)

`HeroSection`, `ProductSection`, `ModulesSection`, `AboutSection`, `ContactSection` — cada
uma corresponde a um `id` usado pela navegação (`#produto`, `#modulos`, `#sobre`,
`#contato`).

## Animações (`components/animations`)

Todas usam `whileInView` + `viewport={{ once: true }}` (disparam uma vez, ao entrar na
viewport).

- **`FadeInOnScroll`** — fade + leve subida.
- **`SlideInOnScroll`** — entrada lateral/vertical (`direction`: `left` | `right` | `up` |
  `down`).
- **`StaggerContainer` + `StaggerItem`** — grid com entrada escalonada (usado em
  `ModulesSection`).

O respeito a `prefers-reduced-motion` é feito **globalmente** por `MotionProvider`
(`components/providers/MotionProvider.tsx`), que envolve toda a aplicação com
`<MotionConfig reducedMotion="user">` do Framer Motion. Isso neutraliza animações de
transform (translate/scale) automaticamente para quem tem a preferência ativada, sem
precisar de lógica condicional em cada componente — condicionar a _estrutura_ do DOM a
esse hook causa erro de hidratação (servidor não sabe a preferência do usuário; ver commit
`fix(a11y)`).

O hook `hooks/useReducedMotion.ts` continua disponível para casos que precisem do valor
booleano em JS puro, mas não deve ser usado para decidir se um elemento é renderizado ou
não (só para variar valores dentro de um elemento que já existe em ambos os lados).

## Formulário (`components/forms/ContactForm.tsx`)

- Validação com `react-hook-form` + `@hookform/resolvers/zod`, schema em
  `lib/validations/contact.ts`.
- Envia `POST /api/contact`; rota valida novamente no servidor (nunca confiar só no
  client) e retorna 200/422/500.
- Campos: nome, e-mail, telefone, empresa, segmento (select), mensagem.
- **Integração real de e-mail/CRM ainda não existe** — a rota apenas valida e loga o
  evento (sem PII). Ver `TODO` em `app/api/contact/route.ts`.
