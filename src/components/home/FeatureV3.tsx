import featureImage from '@public/images/home-services-devices.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const FeatureV3 = () => {
  return (
    <section className="overflow-hidden py-16 md:py-20 xl:py-24">
      <div className="main-container">
        <div className="dark:bg-background-6 relative overflow-hidden rounded-[20px] bg-white">
          <div className="pointer-events-none absolute -top-28 -left-24 size-80 rounded-full bg-[radial-gradient(circle,_rgba(31,147,255,0.7),rgba(130,48,255,0.55)_45%,transparent_70%)] blur-2xl" />
          <div className="relative grid items-center gap-2 px-6 py-8 sm:px-10 md:grid-cols-[1fr_1.1fr] md:gap-6 md:py-7 lg:px-14">
            <RevealAnimation delay={0.3} direction="right" offset={100} className="order-2 md:order-1">
              <figure className="mx-auto max-w-[460px] md:-mb-5 md:-ml-10 md:max-w-[520px] lg:-mb-8 lg:-ml-14">
                <Image
                  src={featureImage}
                  alt="Laptop y dispositivos con paneles de analítica"
                  className="h-auto w-full"
                  loading="lazy"
                />
              </figure>
            </RevealAnimation>
            <div className="order-1 py-3 text-center md:order-2 md:py-0 md:text-left">
              <div className="space-y-4 md:space-y-5">
                <div className="space-y-3">
                  <RevealAnimation delay={0.1}>
                    <h2 id="services-feature-heading">
                      Creamos el sitio que tu <span className="text-primary-500">negocio</span> necesita para{' '}
                      <span className="text-primary-500">crecer</span>
                    </h2>
                  </RevealAnimation>
                  <RevealAnimation delay={0.2}>
                    <p className="mx-auto max-w-[540px] md:mx-0">
                      No solo programamos: diseñamos y optimizamos tu presencia digital para que atraigas clientes en
                      automático, sin complicaciones técnicas.
                    </p>
                  </RevealAnimation>
                </div>
                <RevealAnimation delay={0.3}>
                  <LinkButton
                    href="/services"
                    className="btn btn-primary hover:btn-secondary btn-md mx-auto w-[85%] md:mx-0 md:w-auto"
                    aria-label="Conocer nuestros servicios">
                    Saber más
                  </LinkButton>
                </RevealAnimation>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureV3;
