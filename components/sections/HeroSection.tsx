'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <motion.div
          className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-navy-100 blur-3xl"
          animate={{ x: [0, 24, 0], y: [0, 16, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -right-24 top-1/3 h-80 w-80 rounded-full bg-steel-200 blur-3xl"
          animate={{ x: [0, -20, 0], y: [0, 24, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <Container className="grid grid-cols-1 items-center gap-12 py-20 lg:grid-cols-2 lg:py-28">
        <div>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="inline-flex items-center rounded-full bg-navy-50 px-3 py-1 text-sm font-medium text-navy-800"
          >
            ERP Industrial
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.2 }}
            className="mt-5 text-4xl font-bold tracking-tight text-navy-950 sm:text-5xl"
          >
            Da bobina ao financeiro, <span className="text-navy-700">em um só sistema.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.3 }}
            className="mt-6 max-w-xl text-lg text-slate-600"
          >
            SIDERO conecta orçamento, pedido, estoque, produção, venda e financeiro em um ERP feito
            para o setor siderúrgico e metalúrgico — sem planilhas soltas, sem retrabalho.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1, delayChildren: 0.4 } },
            }}
            className="mt-8 flex flex-col flex-wrap gap-3 sm:flex-row"
          >
            <motion.div
              variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.2 }}
            >
              <Button href="#contato" size="lg">
                Solicitar demonstração
              </Button>
            </motion.div>
            <motion.div
              variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.2 }}
            >
              <Button href="#modulos" size="lg" variant="outline">
                Conhecer os módulos
              </Button>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2, delay: 0.5 }}
          className="relative px-4 py-6 sm:px-6 sm:py-8"
        >
          <div className="relative aspect-[2.478/1] w-full overflow-hidden">
            <Image
              src="/images/sidero-logo.png"
              alt="SIDERO — ERP Industrial"
              width={1254}
              height={1254}
              priority
              className="absolute left-[-6.7%] top-[-89%] h-[279.4%] w-auto max-w-none"
            />
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
