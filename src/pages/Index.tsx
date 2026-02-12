import { Layout } from '@/components/layout/Layout';
import { HeroSection } from '@/components/home/HeroSection';
import { ServicesSection } from '@/components/home/ServicesSection';
import { UpcomingEventsSection } from '@/components/home/UpcomingEventsSection';
import { TechInnovationShowcase } from '@/components/home/TechInnovationShowcase';
import { CTASection } from '@/components/home/CTASection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <UpcomingEventsSection />
      <TechInnovationShowcase />
      <CTASection />
    </Layout>
  );
};

export default Index;
