
import { Header } from '@/components/layout/Header';
import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { BeforeAfter } from '@/components/sections/BeforeAfter';
import { Features } from '@/components/sections/Features';
import { BrandSlider } from '@/components/sections/BrandSlider';
import { SEODirectory } from '@/components/sections/SEODirectory';
import { Footer } from '@/components/layout/Footer';
import { FloatingContact } from '@/components/ui/FloatingContact';

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Header />
      <Hero />
      <BrandSlider />
      <Services />
      <BeforeAfter />
      <Features />
      <SEODirectory />
      <Footer />
      <FloatingContact />
    </main>
  );
}
