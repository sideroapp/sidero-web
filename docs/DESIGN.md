# Design System

## Cores (`tailwind.config.ts`)

| Token   | Papel                         | Base                                                           |
| ------- | ----------------------------- | -------------------------------------------------------------- |
| `navy`  | Cor principal (marca)         | `navy-800` = `#1a3a5c`                                         |
| `slate` | Cinza industrial (secundária) | alias de `tailwindcss/colors` `gray` (`slate-500` = `#6b7280`) |
| `steel` | Neutro (aço)                  | alias de `tailwindcss/colors` `zinc`                           |

Cada token tem escala completa (`50`–`950`). Uso típico:

- Texto principal: `text-navy-900` / `text-navy-950`
- Texto secundário: `text-slate-600`
- Fundos neutros: `bg-slate-50`, bordas `border-slate-200`
- Seções de destaque (contraste): `bg-navy-950` + `text-white`

## Tipografia

Fonte: **Inter** (`next/font/google`, variável `--font-inter`, `display: swap`).
Configurada como `font-sans` padrão do Tailwind — não é necessário aplicar classe extra.

## Espaçamento e layout

- Container: `max-w-7xl` com padding responsivo (`px-4 sm:px-6 lg:px-8`) via componente
  `Container`.
- Seções: `py-20 sm:py-28` como padrão vertical.
- Grid de módulos: 1 coluna (mobile) → 2 (`sm`) → 3 (`lg`).

## Breakpoints relevantes

O nav do Header muda de mobile (hamburger) para desktop (links + CTA) em `lg` (1024px),
não em `md` (768px) — em 768px o menu horizontal completo não cabe ao lado do botão de
CTA sem quebrar linha. Qualquer novo elemento no Header deve testar esse intervalo
(768–1023px) antes de assumir `md` como breakpoint de "desktop".

## Animações

Ver [COMPONENTS.md](COMPONENTS.md#animações-componentsanimations) para os componentes.
Princípios:

- Só anima `opacity` e `transform` (GPU-friendly).
- Duração: 200–500ms para entradas; 200ms para hover.
- Stagger em grids: 50–100ms entre itens.
- `prefers-reduced-motion` é respeitado globalmente via `MotionProvider` — não duplicar
  essa lógica em componentes individuais.

## Branding (placeholder)

A identidade visual definitiva (logo, favicon, paleta exata) ainda não foi entregue. O
que existe hoje (`public/images/logo.svg`, `app/icon.svg`, `app/opengraph-image.tsx`) é um
lettermark "S" simples em `#1a3a5c`, criado apenas para viabilizar o layout e as
animações. Ver seção "Branding" do [README](../README.md).
