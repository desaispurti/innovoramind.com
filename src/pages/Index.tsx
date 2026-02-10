import { Layout } from '@/components/layout/Layout';
import { HeroSection } from '@/components/home/HeroSection';
import { ServicesSection } from '@/components/home/ServicesSection';
import { UpcomingEventsSection } from '@/components/home/UpcomingEventsSection';
import { SpeakersPreview } from '@/components/home/SpeakersPreview';
import { CTASection } from '@/components/home/CTASection';
import { CertificatesSection } from '@/components/home/CertificatesSection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <UpcomingEventsSection />
      <SpeakersPreview />
      <div className="bg-background py-10">
        <CertificatesSection />
      </div>
      <CTASection />
    </Layout>
  );
};

export default Index;
