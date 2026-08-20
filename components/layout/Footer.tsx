'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';

const FOOTER_LINKS = {
  Produto: [
    { label: 'Módulos', href: '#modulos' },
    { label: 'Como funciona', href: '#produto' },
  ],
  Empresa: [
    { label: 'Sobre', href: '#sobre' },
    { label: 'Contato', href: '#contato' },
  ],
  Legal: [
    { label: 'Termos de uso', href: '/termos' },
    { label: 'Privacidade', href: '/privacidade' },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <Container className="py-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <Link
              href="/"
              className="relative block h-6 w-[103px] overflow-hidden sm:h-7 sm:w-[120px]"
              aria-label="SIDERO — Página inicial"
            >
              <Image
                src="/images/sidero-logo.png"
                alt="SIDERO"
                width={1254}
                height={1254}
                className="absolute left-[-8.8%] top-[-181.1%] h-[499.9%] w-auto max-w-none"
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm text-slate-500">
              ERP industrial para o setor siderúrgico e metalúrgico.
            </p>
          </motion.div>

          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold text-navy-900">{title}</h3>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-500 transition-colors duration-200 hover:text-navy-800"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-slate-200 pt-6 text-sm text-slate-400">
          © {new Date().getFullYear()} SIDERO. Todos os direitos reservados.
        </div>
      </Container>
    </footer>
  );
}
