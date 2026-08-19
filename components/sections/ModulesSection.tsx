import {
  HiOutlineDocumentText,
  HiOutlineShoppingCart,
  HiOutlineCube,
  HiOutlineCog,
  HiOutlineChartBar,
  HiOutlineCurrencyDollar,
} from 'react-icons/hi';
import { Container } from '@/components/ui/Container';
import { Card, CardTitle, CardDescription } from '@/components/ui/Card';
import { Icon } from '@/components/ui/Icon';
import { FadeInOnScroll } from '@/components/animations/FadeInOnScroll';
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerContainer';

const MODULES = [
  {
    icon: HiOutlineDocumentText,
    title: 'Orçamentos',
    description: 'Monte cotações rápidas com preços e condições sempre atualizados.',
  },
  {
    icon: HiOutlineShoppingCart,
    title: 'Pedidos',
    description: 'Converta orçamentos em pedidos sem perder histórico ou retrabalhar dados.',
  },
  {
    icon: HiOutlineCube,
    title: 'Estoque & Bobinas',
    description:
      'Saldo real por lançamento, com reserva e consumo tratados como eventos distintos.',
  },
  {
    icon: HiOutlineCog,
    title: 'Produção',
    description: 'Acompanhe ordens de produção do corte à expedição.',
  },
  {
    icon: HiOutlineChartBar,
    title: 'Vendas',
    description: 'Visão completa do funil, da cotação ao faturamento.',
  },
  {
    icon: HiOutlineCurrencyDollar,
    title: 'Financeiro',
    description: 'Contas a pagar, a receber e fluxo de caixa integrados à operação.',
  },
];

export function ModulesSection() {
  return (
    <section id="modulos" className="bg-slate-50 py-20 sm:py-28">
      <Container>
        <FadeInOnScroll className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-navy-950 sm:text-4xl">
            Um módulo para cada etapa da operação
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Cliente, orçamento, pedido, estoque, produção, venda e financeiro — conectados, sem
            planilhas paralelas.
          </p>
        </FadeInOnScroll>

        <StaggerContainer className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {MODULES.map((module) => (
            <StaggerItem key={module.title}>
              <Card className="h-full hover:-translate-y-1 hover:shadow-md">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-navy-50 text-navy-800">
                  <Icon icon={module.icon} size={22} />
                </div>
                <CardTitle className="mt-4">{module.title}</CardTitle>
                <CardDescription>{module.description}</CardDescription>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
