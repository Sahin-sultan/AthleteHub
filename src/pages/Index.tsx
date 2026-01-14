import { Layout } from '@/components/layout/Layout';
import { HeroSection } from '@/components/sections/HeroSection';
import { TrustBadgesSection } from '@/components/sections/TrustBadgesSection';
import { BrandRevealSection } from '@/components/sections/BrandRevealSection';
import { ShopBySportSection } from '@/components/sections/ShopBySportSection';
import { FeaturedProductsSection } from '@/components/sections/FeaturedProductsSection';
import { WhyChooseUsSection } from '@/components/sections/WhyChooseUsSection';
import { CommunitySupportSection } from '@/components/sections/CommunitySupportSection';
import { NewArrivalsSection } from '@/components/sections/NewArrivalsSection';
import { CTASection } from '@/components/sections/CTASection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <TrustBadgesSection />
      <BrandRevealSection />
      <ShopBySportSection />
      <FeaturedProductsSection />
      <WhyChooseUsSection />
      <CommunitySupportSection />
      <NewArrivalsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
