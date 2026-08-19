import { Container } from '@/components/ui/Container';
import { FadeInOnScroll } from '@/components/animations/FadeInOnScroll';
import { SlideInOnScroll } from '@/components/animations/SlideInOnScroll';

const STEPS = [
  'Cliente',
  'Orçamento',
  'Pedido',
  'Estoque / Bobina',
  'Produção',
  'Venda',
  'Financeiro',
];

export function ProductSection() {
  return (
    <section id="produto" className="py-20 sm:py-28">
      <Container>
        <FadeInOnScroll className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-navy-950 sm:text-4xl">
            Um único fluxo, do início ao fim
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Cada etapa da operação alimenta a próxima automaticamente — sem reentrada manual de
            dados entre planilhas e sistemas soltos.
          </p>
        </FadeInOnScroll>

        <SlideInOnScroll direction="up" className="mt-14">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {STEPS.map((step, index) => (
              <div key={step} className="flex items-center gap-2">
                <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-navy-900 shadow-sm">
                  {step}
                </span>
                {index < STEPS.length - 1 && <span className="text-slate-300">→</span>}
              </div>
            ))}
          </div>
        </SlideInOnScroll>
      </Container>
    </section>
  );
}
