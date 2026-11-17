import caseStudyImg from '@public/images/ns-img-380.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const CaseStudy = () => {
  return (
    <section
      id="portafolio"
      className="pt-32 pb-[20px] sm:pt-36 md:pt-42 lg:pb-[100px] xl:pt-[180px]"
    >
      <div className="main-container">
        <div className="space-y-[70px]">
          {/* Encabezado principal */}
          <div className="max-w-[900px] space-y-3">
            <RevealAnimation delay={0.2}>
              <h1 className="text-heading-3 md:text-heading-2 font-normal">
                Cómo marcas y negocios crecen con TeraCode
              </h1>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p>
                Desde emprendimientos locales hasta empresas consolidadas en Ecuador, diseñamos
                soluciones web que ordenan sus ventas, ahorran tiempo en atención al cliente y
                aceleran su crecimiento digital.
              </p>
            </RevealAnimation>
          </div>

          {/* Ficha técnica del caso destacado */}
          <div className="space-y-4">
            <RevealAnimation delay={0.4}>
              <h2 className="text-heading-4">Caso de éxito destacado</h2>
            </RevealAnimation>
            <ul className="max-w-[540px] space-y-2">
              <RevealAnimation delay={0.5}>
                <li className="text-secondary dark:text-accent text-lg leading-[150%] font-medium">
                  Cliente:{' '}
                  <span className="text-tagline-1 text-secondary/70 dark:text-accent/70 font-normal">
                    Mochirollería by Ivette (Guayaquil, Ecuador)
                  </span>
                </li>
              </RevealAnimation>
              <RevealAnimation delay={0.6}>
                <li className="text-secondary dark:text-accent text-lg leading-[150%] font-medium">
                  Industria:{' '}
                  <span className="text-tagline-1 text-secondary/70 dark:text-accent/70 font-normal">
                    Repostería artesanal y comercio local
                  </span>
                </li>
              </RevealAnimation>
              <RevealAnimation delay={0.7}>
                <li className="text-secondary dark:text-accent text-lg leading-[150%] font-medium">
                  Solución:{' '}
                  <span className="text-tagline-1 text-secondary/70 dark:text-accent/70 font-normal">
                    Catálogo digital interactivo y pedidos automatizados a WhatsApp
                  </span>
                </li>
              </RevealAnimation>
            </ul>
          </div>

          {/* Imagen panorámica del proyecto */}
          <RevealAnimation delay={0.8}>
            <figure className="max-w-[1288px] overflow-hidden rounded-4xl border border-gray-200/70 dark:border-gray-800">
              <Image
                src={caseStudyImg}
                alt="Catálogo digital y tienda online de Mochirollería desarrollada por TeraCode"
                width={1290}
                height={800}
                className="h-full w-full object-cover"
              />
            </figure>
          </RevealAnimation>

          {/* El desafío */}
          <div className="space-y-2">
            <RevealAnimation delay={0.1}>
              <h3 className="text-heading-4">El desafío</h3>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <p className="max-w-[760px]">
                Mochirollería gestionaba todos sus pedidos manualmente a través de mensajes directos
                en Instagram y WhatsApp. Responder precios, sabores disponibles y coordinar entregas
                uno por uno consumía horas diarias y frenaba el cierre de ventas en momentos de alta
                demanda.
              </p>
            </RevealAnimation>
          </div>

          {/* La solución y Los resultados */}
          <div className="flex flex-col items-start justify-between gap-12 md:flex-row md:gap-16">
            <div className="flex-1 space-y-6">
              <div>
                <RevealAnimation delay={0.3}>
                  <h4 className="text-heading-4">La solución</h4>
                </RevealAnimation>
                <RevealAnimation delay={0.4}>
                  <p>TeraCode desarrolló una plataforma enfocada en conversión:</p>
                </RevealAnimation>
              </div>
              <ul className="space-y-2.5">
                <RevealAnimation delay={0.3}>
                  <li>
                    <p className="before:bg-[#1E62F5] before:mr-3 before:inline-block before:size-2 before:rounded-full before:content-['']">
                      Catálogo visual ultrarrápido y 100% adaptable a cualquier celular
                    </p>
                  </li>
                </RevealAnimation>
                <RevealAnimation delay={0.4}>
                  <li>
                    <p className="before:bg-[#1E62F5] before:mr-3 before:inline-block before:size-2 before:rounded-full before:content-['']">
                      Carrito interactivo donde el cliente arma su pedido en segundos
                    </p>
                  </li>
                </RevealAnimation>
                <RevealAnimation delay={0.5}>
                  <li>
                    <p className="before:bg-[#1E62F5] before:mr-3 before:inline-block before:size-2 before:rounded-full before:content-['']">
                      Envío automático del detalle del pedido estructurado directo a WhatsApp
                    </p>
                  </li>
                </RevealAnimation>
              </ul>
            </div>

            <div className="flex-1 space-y-6">
              <div>
                <RevealAnimation delay={0.3}>
                  <h4 className="text-heading-4">Los resultados</h4>
                </RevealAnimation>
                <RevealAnimation delay={0.4}>
                  <p>Impacto logrado tras el lanzamiento del sitio:</p>
                </RevealAnimation>
              </div>
              <ul className="space-y-2.5">
                <RevealAnimation delay={0.3}>
                  <li>
                    <p className="before:bg-[#1E62F5] before:mr-3 before:inline-block before:size-2 before:rounded-full before:content-['']">
                      70% menos tiempo invertido respondiendo precios y disponibilidad por chat
                    </p>
                  </li>
                </RevealAnimation>
                <RevealAnimation delay={0.4}>
                  <li>
                    <p className="before:bg-[#1E62F5] before:mr-3 before:inline-block before:size-2 before:rounded-full before:content-['']">
                      Pedidos sin errores gracias al resumen automático con cantidades y sabores
                    </p>
                  </li>
                </RevealAnimation>
                <RevealAnimation delay={0.5}>
                  <li>
                    <p className="before:bg-[#1E62F5] before:mr-3 before:inline-block before:size-2 before:rounded-full before:content-['']">
                      Vitrina digital disponible 24/7 lista para recibir tráfico desde redes y Google
                    </p>
                  </li>
                </RevealAnimation>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;