import { Container } from '@/components/ui/Container';
import { FadeInOnScroll } from '@/components/animations/FadeInOnScroll';

export function AboutSection() {
  return (
    <section id="sobre" className="bg-navy-950 py-20 text-white sm:py-28">
      <Container>
        <FadeInOnScroll className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Feito para o setor siderúrgico e metalúrgico
          </h2>
          <p className="mt-4 text-lg text-navy-100">
            SIDERO é um ERP multi-tenant desenhado para bobinas, telhas, perfis e estruturas
            metálicas — não uma adaptação genérica de sistema de gestão.
          </p>
        </FadeInOnScroll>
      </Container>
    </section>
  );
}
