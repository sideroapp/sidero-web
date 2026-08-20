'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';

const NAV_LINKS = [
  { label: 'Produto', href: '#produto' },
  { label: 'Módulos', href: '#modulos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <Container className="flex h-20 items-center justify-between">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Link href="/" className="flex items-center gap-2.5" aria-label="SIDERO — Página inicial">
            <span className="relative block h-9 w-9 shrink-0 overflow-hidden sm:h-10 sm:w-10 lg:h-11 lg:w-11">
              <Image
                src="/images/sidero-logo-web.png"
                alt=""
                width={1254}
                height={1254}
                priority
                className="absolute left-[-30.4%] top-[-22.3%] h-[156.4%] w-auto max-w-none"
              />
            </span>
            <span className="text-lg font-bold tracking-tight text-navy-950 sm:text-xl">
              SIDERO
            </span>
          </Link>
        </motion.div>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Navegação principal">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition-colors duration-200 hover:text-navy-800"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="#contato" size="sm">
            Solicitar demonstração
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-navy-900 lg:hidden"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          <Icon icon={isMenuOpen ? HiX : HiMenu} size={26} />
        </button>
      </Container>

      {isMenuOpen && (
        <motion.nav
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.2 }}
          className="border-t border-slate-200 bg-white lg:hidden"
          aria-label="Navegação móvel"
        >
          <Container className="flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-md px-2 py-2.5 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-navy-800"
              >
                {link.label}
              </a>
            ))}
            <Button href="#contato" size="sm" className="mt-2 w-full">
              Solicitar demonstração
            </Button>
          </Container>
        </motion.nav>
      )}
    </header>
  );
}
