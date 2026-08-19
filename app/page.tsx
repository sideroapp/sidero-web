import { HeroSection } from '@/components/sections/HeroSection';
import { ProductSection } from '@/components/sections/ProductSection';
import { ModulesSection } from '@/components/sections/ModulesSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ContactSection } from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProductSection />
      <ModulesSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}
