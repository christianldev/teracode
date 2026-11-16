import { FooterData } from '@/interface';

export const footerLinks: FooterData[] = [
  {
    title: 'Empresa',
    links: [
      { label: 'Nosotros', href: '/about' },
      { label: 'Servicios', href: '/services' },
      { label: 'Portafolio', href: '/case-study' },
      { label: 'Contacto', href: '/contact-us' },
    ],
  },
  {
    title: 'Soluciones',
    links: [
      { label: 'Landing Pages', href: '/services' },
      { label: 'Tiendas Online', href: '/services' },
      { label: 'Catálogos WhatsApp', href: '/services' },
      { label: 'Sistemas a Medida', href: '/services' },
    ],
  },
  {
    title: 'Soporte y Legal',
    links: [
      { label: 'Preguntas Frecuentes', href: '/faq' },
      { label: 'Términos y Condiciones', href: '/terms-conditions' },
      { label: 'Política de Privacidad', href: '/privacy-policy' },
    ],
  },
];
