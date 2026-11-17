import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const services = [
  {
    title: 'Páginas Web & Landing Pages',
    description:
      'Sitios rápidos, modernos y optimizados para celulares. Ideal para captar clientes, posicionar tu marca en Google y mostrar tus servicios.',
    icon: 'ns-shape-34',
    href: '/services/automated-background-replacement',
  },
  {
    title: 'Tiendas Online & Catálogos',
    description:
      'Tu catálogo de productos conectado directo a WhatsApp. Permite a tus clientes armar sus pedidos y enviártelos listos para cotizar.',
    icon: 'ns-shape-12',
    href: '/services/batch-image-processing',
  },
  {
    title: 'Sistemas & Desarrollo a Medida',
    description:
      'Aplicaciones web y plataformas personalizadas para automatizar tus procesos, gestionar clientes o escalar la operación de tu empresa.',
    icon: 'ns-shape-5',
    href: '/services/big-data-consulting',
  },
];

const Services = () => {
  return (
    <section className="py-20 sm:py-24 lg:py-28 xl:py-[140px]">
      <div className="main-container">
        <div className="mb-12 space-y-5 text-center md:mb-14">
          <RevealAnimation delay={0.2}>
            <span className="badge badge-cyan inline-block">Nuestros servicios</span>
          </RevealAnimation>
          <div className="space-y-3">
            <RevealAnimation delay={0.3}>
              <h2 className="mx-auto max-w-[760px] text-heading-4 md:text-heading-3">
                Sitios web y soluciones digitales que impulsan tu negocio.
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <p className="mx-auto max-w-[650px]">
                Diseñamos y desarrollamos plataformas rápidas, optimizadas y enfocadas en convertir tus visitas en
                clientes y automatizar tus ventas.
              </p>
            </RevealAnimation>
          </div>
        </div>
        <div className="mx-auto grid max-w-[900px] grid-cols-1 gap-5 md:grid-cols-3">
          {services.map((service, index) => (
            <RevealAnimation key={service.title} delay={0.5 + index * 0.1}>
              <article className="flex h-full min-h-[306px] flex-col items-center rounded-[20px] border border-secondary/15 bg-background-2 px-6 py-7 text-center shadow-[0_10px_24px_rgba(20,31,53,0.10)] transition-transform duration-300 hover:-translate-y-2 dark:bg-background-7">
                <span className={`${service.icon} mb-5 text-[52px] text-primary`} aria-hidden="true" />
                <h3 className="text-heading-6 mb-3 md:text-heading-5">{service.title}</h3>
                <p className="text-tagline-2 text-secondary/80 dark:text-accent/80">{service.description}</p>
                <LinkButton
                  href={service.href}
                  className="btn-sm btn-white hover:btn-primary dark:btn-transparent dark:hover:btn-accent mt-auto">
                  Saber más
                </LinkButton>
              </article>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
