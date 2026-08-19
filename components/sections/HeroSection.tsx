'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-white">
      {!prefersReducedMotion && (
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
      )}

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
            className="mt-8 flex flex-col gap-3 sm:flex-row"
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
          className="relative"
        >
          <HeroMockup />
        </motion.div>
      </Container>
    </section>
  );
}

function HeroMockup() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-xl sm:p-6">
      <div className="flex items-center gap-2 border-b border-slate-100 pb-4">
        <span className="h-3 w-3 rounded-full bg-slate-200" />
        <span className="h-3 w-3 rounded-full bg-slate-200" />
        <span className="h-3 w-3 rounded-full bg-slate-200" />
        <div className="ml-2 h-3 w-32 rounded bg-slate-100" />
      </div>

      <div className="mt-5 grid grid-cols-3 gap-3">
        {['Estoque', 'Produção', 'Vendas'].map((label) => (
          <div key={label} className="rounded-lg bg-slate-50 p-3">
            <div className="text-xs font-medium text-slate-400">{label}</div>
            <div className="mt-2 h-6 w-16 rounded bg-navy-800/90" />
          </div>
        ))}
      </div>

      <div className="mt-4 space-y-2.5">
        {[100, 80, 90, 65].map((width, index) => (
          <div key={index} className="h-2.5 rounded-full bg-slate-100">
            <div className="h-2.5 rounded-full bg-navy-200" style={{ width: `${width}%` }} />
          </div>
        ))}
      </div>
    </div>
  );
}
