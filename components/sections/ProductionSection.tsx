'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

const SLIDES = [
  {
    src: 'https://images.unsplash.com/photo-1697698532634-ea59b636ccea?auto=format&fit=crop&w=1920&q=80',
    alt: 'Bobinas de aço empilhadas em galpão industrial',
  },
  {
    src: 'https://images.pexels.com/photos/18289258/pexels-photo-18289258.jpeg?auto=compress&cs=tinysrgb&w=1920',
    alt: 'Telhado e fachada de telhas de aço simples em galpão industrial',
  },
  {
    src: 'https://images.pexels.com/photos/20170984/pexels-photo-20170984.jpeg?auto=compress&cs=tinysrgb&w=1920',
    alt: 'Fachada de painéis de aço tipo sanduíche em edifício industrial',
  },
  {
    src: 'https://images.pexels.com/photos/9280923/pexels-photo-9280923.jpeg?auto=compress&cs=tinysrgb&w=1920',
    alt: 'Telhado de telhas de aço semi sanduíche em construção industrial',
  },
  {
    src: 'https://images.pexels.com/photos/31352672/pexels-photo-31352672.jpeg?auto=compress&cs=tinysrgb&w=1920',
    alt: 'Máquinas de formação industrial em linha de produção',
  },
  {
    src: 'https://images.unsplash.com/photo-1645754884968-a00b7ed62c43?auto=format&fit=crop&w=1920&q=80',
    alt: 'Linha de produção em ação durante processo de fabricação',
  },
  {
    src: 'https://images.pexels.com/photos/29454379/pexels-photo-29454379.jpeg?auto=compress&cs=tinysrgb&w=1920',
    alt: 'Produtos empacotados armazenados em estoque industrial',
  },
  {
    src: 'https://images.unsplash.com/photo-1765808376624-aba74b96859f?auto=format&fit=crop&w=1920&q=80',
    alt: 'Instalação de telha de aço em telhado real',
  },
];

const SLIDE_DURATION = 5000;
const FADE_DURATION = 1.5;

export function ProductionSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((index) => (index + 1) % SLIDES.length);
    }, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, [current]);

  return (
    <section className="relative h-[400px] overflow-hidden sm:h-[500px] lg:h-[600px]">
      {SLIDES.map((slide, index) => (
        <motion.div
          key={slide.src}
          animate={{ opacity: index === current ? 1 : 0 }}
          transition={{ duration: FADE_DURATION, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={index === 0}
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
      ))}

      <div className="absolute inset-0 bg-navy-950/60" aria-hidden="true" />

      <Container className="relative flex h-full items-center justify-center">
        <div className="max-w-2xl rounded-2xl bg-white/10 px-6 py-8 text-center backdrop-blur-sm sm:px-10 sm:py-10">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Nosso Processo de Produção
          </h2>
          <p className="mt-4 text-lg text-white/90">
            Transformação de bobinas em produtos de qualidade com controle rigoroso em cada etapa
          </p>
          <div className="mt-8">
            <Button href="#modulos" size="lg">
              Conhecer os módulos
            </Button>
          </div>
        </div>
      </Container>

      <div className="absolute inset-x-0 bottom-6 flex items-center justify-center gap-2">
        {SLIDES.map((slide, index) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => setCurrent(index)}
            aria-label={`Ver slide ${index + 1}`}
            aria-current={index === current}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              index === current ? 'w-6 bg-white' : 'w-2.5 bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
