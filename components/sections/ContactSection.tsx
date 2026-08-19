import { Container } from '@/components/ui/Container';
import { FadeInOnScroll } from '@/components/animations/FadeInOnScroll';
import { ContactForm } from '@/components/forms/ContactForm';

export function ContactSection() {
  return (
    <section id="contato" className="bg-slate-50 py-20 sm:py-28">
      <Container className="mx-auto max-w-2xl">
        <FadeInOnScroll className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-navy-950 sm:text-4xl">
            Fale com a gente
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Conte sobre a sua operação e mostramos como o SIDERO se encaixa nela.
          </p>
        </FadeInOnScroll>

        <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
