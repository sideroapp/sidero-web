import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const title = 'SIDERO — ERP Industrial';
const description =
  'SIDERO é o ERP para o setor siderúrgico e metalúrgico: da cotação de bobinas ao financeiro, em um só lugar.';

export const metadata: Metadata = {
  metadataBase: new URL('https://sidero.app.br'),
  title: {
    default: title,
    template: '%s | SIDERO',
  },
  description,
  keywords: [
    'ERP industrial',
    'ERP siderúrgico',
    'ERP metalúrgico',
    'gestão de bobinas',
    'gestão de estoque industrial',
    'sistema para siderúrgicas',
  ],
  authors: [{ name: 'SIDERO' }],
  robots: { index: true, follow: true },
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://sidero.app.br',
    siteName: 'SIDERO',
    title,
    description,
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} flex min-h-screen flex-col font-sans antialiased`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
