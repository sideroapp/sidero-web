import { HeroSection } from '@/components/sections/HeroSection';
import { ProductionSection } from '@/components/sections/ProductionSection';
import { ProductSection } from '@/components/sections/ProductSection';
import { ModulesSection } from '@/components/sections/ModulesSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ContactSection } from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProductionSection />
      <ProductSection />
      <ModulesSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}
