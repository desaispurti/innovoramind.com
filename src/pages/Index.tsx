import { Layout } from '@/components/layout/Layout';
import { HeroSection } from '@/components/home/HeroSection';
import { ServicesSection } from '@/components/home/ServicesSection';
import { UpcomingEventsSection } from '@/components/home/UpcomingEventsSection';
import { TechInnovationShowcase } from '@/components/home/TechInnovationShowcase';
import { CTASection } from '@/components/home/CTASection';
import { EvolutionSection } from '@/components/home/EvolutionSection';
import { VideoShowcase } from '@/components/home/VideoShowcase';
import { ProcessFlow } from '@/components/home/ProcessFlow';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <EvolutionSection />
      <VideoShowcase />
      <ProcessFlow />
      <ServicesSection />
      <UpcomingEventsSection />
      <TechInnovationShowcase />
      <CTASection />
    </Layout>
  );
};

export default Index;
