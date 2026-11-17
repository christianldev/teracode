'use client';

import dynamic from 'next/dynamic';
import RevealAnimation from '../animation/RevealAnimation';

const Map = dynamic(() => import('../shared/Map'), {
  ssr: false,
  loading: () => (
    <div className="bg-background-3 dark:bg-background-7 flex h-full w-full items-center justify-center text-sm text-gray-400">
      Cargando mapa...
    </div>
  ),
});

const ContactMap = () => {
  return (
    <section
      className="pt-[40px] pb-[100px] md:pt-[60px] md:pb-[150px] lg:pb-[180px]"
      aria-label="Ubicación y cobertura de TeraCode"
    >
      <div className="main-container space-y-8">
        <RevealAnimation delay={0.1}>
          <div className="mx-auto max-w-[640px] space-y-2 text-center">
            <h3 className="text-heading-5 md:text-heading-4 font-semibold">
              Operamos desde Guayaquil para todo el Ecuador
            </h3>
            <p className="text-secondary/75 dark:text-accent/75 text-sm md:text-base">
              Reuniones presenciales previa cita en Guayaquil y atención 100% digital por
              videollamada o WhatsApp para negocios en cualquier ciudad del país.
            </p>
          </div>
        </RevealAnimation>

        <RevealAnimation delay={0.2}>
          <div className="dark:bg-background-6 rounded-[20px] border border-gray-200/70 bg-white p-2.5 shadow-sm dark:border-gray-800">
            <div className="h-[300px] w-full overflow-hidden rounded-2xl lg:h-[460px]">
              <Map />
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default ContactMap;
