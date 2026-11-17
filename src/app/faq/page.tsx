import Contact from '@/components/faq/Contact';
import FaqTab from '@/components/faq/FaqTab';
import CTA from '@/components/shared/cta/CTA';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Preguntas Frecuentes | TeraCode Ecuador',
  description:
    'Resuelve tus dudas sobre tiempos de entrega, formas de pago, dominio, hosting y desarrollo de páginas web o tiendas online en Ecuador.',
};

const FAQ = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7">
      <FaqTab />
      <Contact />
      <CTA
        className="dark:bg-background-6 bg-white"
        badgeClass="!badge-cyan"
        badgeText="Empieza hoy"
        ctaHeading="Lleva tu negocio al"
        spanText="siguiente nivel digital"
        description="Si tienes alguna consulta adicional, escríbenos por WhatsApp o correo y te asesoramos sin compromiso."
        btnClass="hover:btn-secondary dark:hover:btn-accent"
        ctaBtnText="Solicitar asesoría"
      />
    </main>
  );
};

export default FAQ;