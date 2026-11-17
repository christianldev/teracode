import { CheckIcon } from '@/icons';
import featureBg from '@public/images/ns-img-14.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

// Casos de uso y soluciones reales de TeraCode
const featureList = [
  {
    id: 1,
    text: 'Catálogos digitales y tiendas online listos para vender 24/7',
  },
  {
    id: 2,
    text: 'Pedidos estructurados directos a tu WhatsApp sin errores',
  },
  {
    id: 3,
    text: 'Sitios web ultrarrápidos y 100% adaptables a cualquier celular',
  },
  {
    id: 4,
    text: 'Posicionamiento local en Google y Google Maps para tu negocio',
  },
  {
    id: 5,
    text: 'Paneles autoadministrables y soporte técnico directo en Ecuador',
  },
];

const Feature = () => {
  return (
    <section className="pt-[80px] pb-24 md:pb-28 lg:pt-[100px] lg:pb-32 xl:pb-[200px]">
      <div className="main-container">
        <RevealAnimation delay={0.1}>
          <div className="relative z-10">
            {/* Fondo decorativo */}
            <div className="absolute top-0 right-0 bottom-0 left-0 -z-10 overflow-hidden rounded-[20px]">
              <Image
                src={featureBg}
                alt="Fondo decorativo de soluciones TeraCode"
                width={1200}
                height={600}
                quality={100}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="grid grid-cols-2 items-center gap-8 px-6 py-14 max-sm:grid-cols-1 max-sm:gap-10 md:px-11">
              {/* Columna Izquierda: Mensaje principal y CTA */}
              <div className="max-w-[500px]">
                <h2 className="text-accent text-heading-5 mb-8 leading-snug">
                  Estos son algunos de los resultados que logramos en cada proyecto: digitalizar
                  catálogos, automatizar pedidos y convertir visitas en clientes reales.
                </h2>
                <div>
                  <a
                    href="https://wa.link/ku5ww8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-md dark:btn-dark dark:hover:btn-white hover:!bg-[#1E62F5] hover:!text-white btn-white border-0 font-semibold"
                  >
                    <span>Cotizar mi proyecto →</span>
                  </a>
                </div>
              </div>

              {/* Columna Derecha: Lista de soluciones */}
              <div>
                <ul className="space-y-4">
                  {featureList.map((feature) => (
                    <li key={feature.id} className="flex items-start gap-3">
                      <span className="bg-accent/17 dark:bg-accent/10 mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full">
                        <CheckIcon className="fill-accent dark:fill-accent" />
                      </span>

                      <span className="text-accent dark:text-accent/85 leading-snug">
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default Feature;