import Features from '@/components/services/Features';
import Pricing from '@/components/services/Pricing';
import Services from '@/components/services/Services';
import Solutions from '@/components/services/Solutions';
import CTA from '@/components/shared/cta/CTA';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Services - Investment Management || TeraCode',
};

const page = () => {
  return (
    <main className="bg-background-1 dark:bg-background-6">
      <Services />
      <Features />
      <Pricing />
      <CTA
        className="dark:bg-background-6 bg-white"
        badgeClass="hidden"
        ctaHeading="Lleva tu negocio al"
        spanText="siguiente nivel digital"
        description="Déjanos tu WhatsApp o correo y recibe una asesoría gratuita con propuesta a medida en menos de 24 horas."
        btnClass="hover:btn-secondary dark:hover:btn-accent"
        ctaBtnText="Solicitar asesoría"
      />
    </main>
  );
};

export default page;
