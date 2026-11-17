import RevealAnimation from '../animation/RevealAnimation';
import CaseStudyPaginationWrapper, { TeraCodeProject } from './CaseStudyPaginationWrapper';

const teracodeProjects: TeraCodeProject[] = [
  {
    slug: 'mochirolleria-by-ivette',
    title: 'Mochirollería by Ivette — Catálogo & Pedidos',
    description:
      'Catálogo digital interactivo para repostería artesanal en Guayaquil con carrito rápido y envío automático de pedidos a WhatsApp.',
    result: '70% menos tiempo respondiendo precios por chat y pedidos sin errores.',
    thumbnail: '/images/ns-img-380.png', // Reemplazar con captura real de Mochirollería
    href: '/case-study',
    ctaLabel: 'Ver caso de éxito',
  },
  {
    slug: 'lms-academy',
    title: 'LMS Academy — Web Institucional & Captación',
    description:
      'Sitio web moderno y ultrarrápido en Next.js diseñado para presentar programas de formación artística y captar alumnos interesados.',
    result: 'Presencia profesional en Google y registro directo de prospectos.',
    thumbnail: '/images/ns-img-380.png', // Reemplazar con captura real de LMS Academy
    href: 'https://wa.link/ku5ww8',
    ctaLabel: 'Solicitar demo similar',
    isExternal: true,
  },
  {
    slug: 'tu-proximo-proyecto',
    title: 'Tu Próximo Proyecto Web o Tienda Online',
    description:
      '¿Quieres digitalizar tu catálogo, automatizar pedidos por WhatsApp o renovar la imagen de tu empresa en Ecuador?',
    result: 'Propuesta visual y cotización personalizada en menos de 24 horas.',
    thumbnail: '/images/ns-img-380.png', // Reemplazar con mockup comercial de TeraCode
    href: 'https://wa.link/ku5ww8',
    ctaLabel: 'Cotizar mi proyecto',
    isExternal: true,
  },
];

const Success = () => {
  return (
    <section className="py-[50px] lg:py-[100px]">
      <div className="main-container">
        <div className="space-y-[70px]">
          {/* Encabezado */}
          <div className="space-y-3 text-center">
            <RevealAnimation delay={0.1}>
              <h2 className="text-heading-3">Más proyectos desarrollados</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <p className="mx-auto max-w-[738px]">
                Conoce cómo ayudamos a marcas, academias y comercios locales a digitalizar sus
                servicios, proyectar confianza y cerrar más ventas por internet.
              </p>
            </RevealAnimation>
          </div>

          {/* Grilla de proyectos */}
          <div className="space-y-14">
            <CaseStudyPaginationWrapper caseStudies={teracodeProjects} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Success;