import CaseStudy from '@/components/case-study/CaseStudy';
import Feature from '@/components/case-study/Feature';
import Success from '@/components/case-study/Success';
import CTA from '@/components/shared/cta/CTA';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Case Study - Investment Management || TeraCode',
};

const CaseStudyPage = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7">
      <CaseStudy />
      <Success />
      <Feature />
      <CTA
       className="dark:bg-background-5 bg-white"
        badgeText="Empieza hoy"
        badgeClass="!badge-cyan-v2"
        ctaHeading="Lleva tu negocio al"
        spanText="siguiente nivel digital"
        description="Déjanos tu WhatsApp o correo y recibe una asesoría gratuita con propuesta a medida en menos de 24 horas."
        ctaBtnText="Solicitar asesoría"
        btnClass="hover:btn-secondary dark:hover:btn-accent"
      />
    </main>
  );
};
CaseStudyPage.displayName = 'CaseStudyPage';
export default CaseStudyPage;
