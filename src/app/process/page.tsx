import ProcessOperation from '@/components/process/ProcessOperation';
import ProcessStep from '@/components/process/ProcessStep';
import CTA from '@/components/shared/cta/CTA';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Nuestro Proceso de Desarrollo Web | TeraCode Ecuador',
  description:
    'Conoce paso a paso cómo diseñamos, desarrollamos y lanzamos tu página web o tienda online conectada a WhatsApp en Guayaquil y todo Ecuador.',
};

const ProcessPage = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7">
      <ProcessStep />
      <ProcessOperation />
      <CTA
        className="dark:bg-background-5 bg-white"
        badgeText="Empieza hoy"
        badgeClass="!badge-cyan-v2"
        ctaHeading="Lleva tu negocio al"
        spanText="siguiente nivel digital"
        description="Déjanos tu WhatsApp o correo y recibe una asesoría gratuita con propuesta a medida para tu proyecto en menos de 24 horas."
        ctaBtnText="Solicitar asesoría"
        btnClass="hover:btn-secondary dark:hover:btn-accent"
      />
    </main>
  );
};

export default ProcessPage;