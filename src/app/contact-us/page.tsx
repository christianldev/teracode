import ContactInfo from '@/components/contact-page/ContactInfo';
import ContactMap from '@/components/contact-page/ContactMap';
import CTA from '@/components/shared/cta/CTA';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Contacto y Cotizaciones | TeraCode Ecuador',
  description:
    'Escríbenos por WhatsApp o correo para cotizar tu página web, catálogo digital o tienda online en Guayaquil y todo el Ecuador.',
};

const ContactUs = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7">
      <ContactInfo />
      <ContactMap />
      <CTA
        className="dark:bg-background-5 bg-white"
        badgeClass="badge-yellow-v2"
        badgeText="Atención inmediata"
        ctaHeading="¿Prefieres hablar"
        spanText="directo por WhatsApp?"
        description="Cuéntanos qué necesita tu negocio y recibe una propuesta clara con tiempos y precios en menos de 24 horas."
        ctaBtnText="Escribir por WhatsApp"
      />
    </main>
  );
};

export default ContactUs;