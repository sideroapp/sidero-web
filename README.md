# SIDERO Web

Website institucional do [SIDERO](https://sidero.app.br) — ERP industrial para o setor
siderúrgico e metalúrgico.

> Este repositório é o site de marketing/institucional, separado do produto SIDERO ERP
> (que vive em `sidero-erp`, stack Flutter + .NET). Aqui a stack é Next.js/React porque o
> objetivo é um site público otimizado para SEO — não é o software do produto.

## Stack

| Camada      | Tecnologia              |
| ----------- | ----------------------- |
| Framework   | Next.js 14 (App Router) |
| Linguagem   | TypeScript              |
| Estilo      | Tailwind CSS            |
| Animações   | Framer Motion           |
| Formulários | React Hook Form + Zod   |
| Ícones      | react-icons             |

## Getting started

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Scripts

| Comando                | O que faz                                |
| ---------------------- | ---------------------------------------- |
| `npm run dev`          | Servidor de desenvolvimento              |
| `npm run build`        | Build de produção                        |
| `npm run start`        | Serve o build de produção                |
| `npm run lint`         | ESLint                                   |
| `npm run format`       | Formata o projeto com Prettier           |
| `npm run format:check` | Verifica formatação sem alterar arquivos |

## Estrutura do projeto

```
app/                  Rotas (App Router), layout raiz, SEO (sitemap, robots, OG image)
components/
  ui/                 Componentes base (Button, Card, Container, Input, Textarea, Icon)
  layout/             Header, Footer
  sections/           Seções da home (Hero, Produto, Módulos, Sobre, Contato)
  animations/         Componentes de animação de scroll (FadeIn/SlideIn/Stagger)
  forms/              ContactForm
  providers/          MotionProvider (respeito global a prefers-reduced-motion)
hooks/                Hooks compartilhados (useReducedMotion)
lib/                  Utilitários (cn) e validações Zod
public/images/        Assets estáticos (logo — placeholder até asset definitivo)
docs/                 Documentação de componentes e design system
```

Mais detalhes em [docs/COMPONENTS.md](docs/COMPONENTS.md) e [docs/DESIGN.md](docs/DESIGN.md).

## Branding

A logo atual (`public/images/logo.svg`, `logo-mark.svg`, `app/icon.svg`,
`app/opengraph-image.tsx`) é um **placeholder** — um lettermark "S" em Navy
(`#1a3a5c`). Quando o asset definitivo da marca for fornecido, substituir esses arquivos
mantendo os mesmos nomes/caminhos (nenhum outro componente precisa mudar).

## Deploy

Ainda não configurado. Domínio alvo: `sidero.app.br`.
