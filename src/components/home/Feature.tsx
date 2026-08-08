import { cn } from '@/utils/cn';
import holdMobile from '@public/images/ns-img-206.png';
import gradient31 from '@public/images/ns-img-519.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const featureList = [
  {
    id: '1',
    title: 'Visibilidad las 24 horas',
    icon: 'ns-shape-15',
    description: 'Su escaparate digital siempre abierto para atraer nuevos clientes desde cualquier lugar del mundo.',
  },
  {
    id: '2',
    title: 'Diseño 100% responsivo',
    icon: 'ns-shape-24',
    description: 'Nuestros desarrollos se adaptan perfectamente a dispositivos móviles, tablets y computadoras.',
  },
  {
    id: '3',
    title: 'Posicionamiento SEO',
    icon: 'ns-shape-21',
    description: 'Optimizamos su web para que destaque en Google y aumente el tráfico orgánico de calidad.',
  },
  {
    id: '4',
    title: 'Alta velocidad y seguridad',
    icon: 'ns-shape-7',
    description: 'Garantizamos tiempos de carga rápidos y cifrado SSL para proteger los datos de sus visitantes.',
  },
  {
    id: '5',
    title: 'Diseño enfocado a ventas',
    icon: 'ns-shape-34',
    description: 'Estructuramos su sitio con llamados a la acción efectivos para aumentar sus tasas de conversión.',
  },
  {
    id: '6',
    title: 'Soporte y evolución',
    icon: 'ns-shape-36',
    description: 'Le acompañamos tras el lanzamiento para mantener su plataforma segura, actualizada y escalable.',
  },
];

const Feature = () => {
  return (
    <section className="py-16 md:py-20 lg:py-[90px] xl:py-[100px]">
      <div className="main-container">
        <div className="dark:bg-background-6 relative overflow-hidden rounded-4xl bg-white px-3.5 pt-10 md:pt-16 lg:px-14 lg:pt-20 xl:pt-[100px]">
          {/* bg-gradient-img  */}
          <RevealAnimation delay={0.1} direction="right" offset={200} start="top top">
            <figure className="pointer-events-none absolute top-[-800px] right-[-729px] size-[1200px] rotate-[-1deg] overflow-hidden select-none lg:top-[-720px]">
              <Image src={gradient31} alt="gradient" className="size-full object-cover" />
            </figure>
          </RevealAnimation>
          <div className="relative z-10 space-y-10 lg:space-y-[70px]">
            {/* heading and btn  */}
            <div className="space-y-8 md:space-y-14">
              <div className="max-w-[681px] space-y-3 text-center md:text-left">
                <RevealAnimation delay={0.1}>
                  <h2>
                    ¿Por qué tener un <span className="text-primary-500"> sitio web </span> te ayuda a tener más
                    <span className="text-primary-500"> clientes? </span>
                  </h2>
                </RevealAnimation>
                <RevealAnimation delay={0.2}>
                  <p className="mx-auto max-w-[448px] md:mx-0">
                    Hoy, si tu negocio no está en internet,
                    <span className="text-primary-500"> tus clientes están buscando a tu competencia. </span>
                  </p>
                </RevealAnimation>
              </div>
              <RevealAnimation delay={0.3}>
                <div className="text-center md:text-left">
                  <LinkButton
                    href="/features"
                    className="btn btn-secondary btn-md hover:btn-white dark:btn-transparent dark:hover:btn-accent mx-auto w-[85%] md:mx-0 md:w-auto"
                    aria-label="Explorar todas las características">
                    Ver nuestros servicios
                  </LinkButton>
                </div>
              </RevealAnimation>
            </div>
            {/* feature list with img  */}
            <div className="mx-auto flex max-w-[1056px] max-h-[600px] flex-col items-center gap-10 lg:flex-row lg:gap-0 relative bottom-10">
              {/* left side features  */}
              <div className="mt-4 flex w-full flex-col gap-8 px-2 sm:mt-0 sm:px-0 md:flex-row lg:flex-col">
                {featureList.slice(0, 3).map((feature, index) => (
                  <RevealAnimation key={feature.id} delay={0.4 + index * 0.1} direction="left">
                    <div className="w-full space-y-3 md:max-w-[300px]">
                      <div className="inline-block overflow-hidden">
                        <span className={cn('text-secondary dark:text-accent text-[36px]', feature.icon)} />
                      </div>
                      <div>
                        <h3 id="passcode-policy-heading" className="text-heading-6 md:text-tagline-1 md:font-medium">
                          {feature.title}
                        </h3>
                        <p className="text-tagline-2">{feature.description}</p>
                      </div>
                    </div>
                  </RevealAnimation>
                ))}
              </div>
              {/* feature img  */}
              <RevealAnimation delay={0.5}>
                <figure className="order-last w-full flex-shrink-0 lg:order-none lg:mt-[66px] lg:mr-6 lg:h-[700px] lg:w-[610px] xl:mt-5 xl:mr-0 animate-float drop-shadow-[0_30px_50px_rgba(0,0,0,0.18)]">
                  <Image
                    src={holdMobile}
                    alt="Diseño web responsivo adaptado a dispositivos móviles para aumentar clientes"
                    className="size-full object-cover"
                  />
                </figure>
              </RevealAnimation>
              {/* right side feature  */}
              <div className="flex w-full flex-col gap-8 px-2 sm:px-0 md:flex-row lg:ml-4 lg:flex-col xl:ml-0">
                {featureList.slice(3).map((feature, index) => (
                  <RevealAnimation key={feature.id} delay={0.4 + index * 0.1} direction="right">
                    <div className="w-full space-y-3 md:max-w-[300px]">
                      <div className="inline-block overflow-hidden">
                        <span className={cn('text-secondary dark:text-accent text-[36px]', feature.icon)} />
                      </div>
                      <div>
                        <h3 id="passcode-policy-heading" className="text-heading-6 md:text-tagline-1 md:font-medium">
                          {feature.title}
                        </h3>
                        <p className="text-tagline-2">{feature.description}</p>
                      </div>
                    </div>
                  </RevealAnimation>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
