import { cn } from '@/utils/cn';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const data = [
  {
    id: '1',
    title: 'Desarrollo Web & Landing Pages',
    description:
      'Sitios web rápidos, responsivos y optimizados para Google que cargan en segundos y retienen a tus visitantes.',
    icon: 'ns-shape-34',
  },
  {
    id: '2',
    title: 'E-commerce & Catálogos',
    description:
      'Crea tu tienda online o catálogo conectado directo a WhatsApp para automatizar tus pedidos sin perder clientes.',
    icon: 'ns-shape-12',
  },
  {
    id: '3',
    title: 'Aplicaciones & Sistemas',
    description:
      'Desarrollamos soluciones personalizadas, plataformas y sistemas a medida que automatizan y escalan la operación de tu negocio.',
    icon: 'ns-shape-5',
  },
];

const Services = () => {
  return (
    <section className="py-16 md:py-20 lg:py-[90px] xl:py-[100px]">
      <div className="main-container">
        <div className="space-y-10 md:space-y-[70px]">
          <div className="space-y-5 text-center">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-cyan inline-block" id="services-badge">
                Nuestros servicios
              </span>
            </RevealAnimation>
            <div className="space-y-3">
              <RevealAnimation delay={0.2}>
                <h2>
                  Desarrollo y diseño,
                  <span className="text-primary-500"> brillantemente personalizado </span>
                </h2>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="md:w-ful mx-auto max-w-[628px]">
                  En TeraCode, impulsamos tu presencia digital con soluciones a medida que garantizan la velocidad, el
                  diseño moderno y la conversión de visitas en clientes.
                </p>
              </RevealAnimation>
            </div>
          </div>
          <div className="space-y-12 md:space-y-14">
            <div className="grid grid-cols-1 items-center justify-items-center gap-9 md:grid-cols-2 lg:grid-cols-3">
              {data.map((item, index) => (
                <RevealAnimation key={item.id} delay={0.4 + index * 0.1}>
                  <div className="dark:bg-background-6 max-w-[406px] space-y-2 rounded-[20px] bg-white p-8 md:space-y-6">
                    <div className="inline-block overflow-auto">
                      <span className={cn('text-secondary dark:text-accent text-[40px] md:text-[52px]', item.icon)} />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-heading-6 md:text-heading-5">{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </div>
                </RevealAnimation>
              ))}
            </div>
            <RevealAnimation delay={0.7}>
              <div className="text-center">
                <LinkButton
                  href="/contact-us"
                  rel="noopener noreferrer"
                  className="btn btn-md btn-secondary hover:btn-white dark:btn-transparent dark:hover:btn-accent mx-auto w-[85%] md:mx-0 md:w-auto"
                  aria-label="Conversar con un experto para cotizar un proyecto">
                  Conversar con un experto • Cotizar proyecto
                </LinkButton>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
