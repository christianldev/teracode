'use client';

import { useGSAP } from '@gsap/react';
import step from '@public/images/ns-img-149.png';
import stepDark from '@public/images/ns-img-dark-103.png';
import Image from 'next/image';
import { useRef } from 'react';
import RevealAnimation from '../animation/RevealAnimation';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface ProcessItem {
  number: string;
  title: string;
  description: string;
  align: 'left' | 'right';
}

const PROCESS_STEPS: ProcessItem[] = [
  {
    number: 'PASO 01',
    title: 'Diagnóstico y propuesta a medida',
    description:
      'Conversamos por WhatsApp o videollamada breve para conocer tu negocio, tus objetivos y definir exactamente qué estructura y funciones necesitas.',
    align: 'left',
  },
  {
    number: 'PASO 02',
    title: 'Diseño visual y estructura estratégica',
    description:
      'Creamos la propuesta visual de tu sitio enfocada en celular, identidad de tu marca y botones estratégicos para convertir visitas en clientes.',
    align: 'right',
  },
  {
    number: 'PASO 03',
    title: 'Desarrollo, velocidad y conexión WhatsApp',
    description:
      'Programamos tu plataforma con tecnología moderna, optimizamos tiempos de carga, configuramos SEO básico y conectamos tus canales de venta.',
    align: 'left',
  },
  {
    number: 'PASO 04',
    title: 'Revisión final, lanzamiento y capacitación',
    description:
      'Validamos cada detalle contigo, publicamos tu web con dominio y certificado SSL activo, y te enseñamos a gestionar tu contenido con soporte directo.',
    align: 'right',
  },
];

const ProcessStep = () => {
  const stepLine1 = useRef<SVGSVGElement>(null);
  const stepLine2 = useRef<SVGSVGElement>(null);
  const stepLine3 = useRef<SVGSVGElement>(null);
  const scopeRef = useRef<HTMLElement | null>(null);
  const animationInitialized = useRef(false);

  const lineRefs = [stepLine1, stepLine2, stepLine3];

  useGSAP(
    () => {
      if (animationInitialized.current) return;
      animationInitialized.current = true;

      const stepLines = [stepLine1.current, stepLine2.current, stepLine3.current].filter(
        Boolean,
      ) as SVGSVGElement[];

      if (!stepLines.length) return;

      gsap.set(stepLines, { height: 0 });

      stepLines.forEach((line, index) => {
        gsap.to(line, {
          height: 260,
          duration: 1.2,
          ease: 'power3.out',
          delay: index * 0.15,
          scrollTrigger: {
            trigger: line,
            start: 'top 82%',
            end: 'top 25%',
            toggleActions: 'play none none reverse',
          },
        });
      });
    },
    { scope: scopeRef },
  );

  return (
    <section
      id="proceso"
      ref={scopeRef}
      className="pt-[100px] pb-[120px] lg:pt-[140px] xl:pb-[180px]"
    >
      <div className="main-container">
        {/* Encabezado */}
        <div className="mb-[70px] space-y-5 text-center">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green">Nuestro proceso</span>
          </RevealAnimation>
          <div className="space-y-3">
            <RevealAnimation delay={0.2}>
              <h2>Cómo trabajamos juntos</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="mx-auto max-w-[620px]">
                Un proceso claro, ágil y sin complicaciones técnicas, diseñado para lanzar tu
                proyecto rápido y enfocado en generar resultados reales para tu negocio.
              </p>
            </RevealAnimation>
          </div>
        </div>

        {/* Línea de tiempo vertical */}
        <RevealAnimation delay={0.35}>
          <div className="process-steps">
            <div className="mx-auto mb-[60px] max-w-[870px]">
              {PROCESS_STEPS.map((item, idx) => {
                const isLast = idx === PROCESS_STEPS.length - 1;
                const isLeft = item.align === 'left';

                return (
                  <div key={item.number} className="relative">
                    {/* Nodo circular + Línea conectora vertical */}
                    <div>
                      <div className="relative z-10 mx-auto flex size-[34px] items-center justify-center rounded-full bg-white drop-shadow-2xl dark:bg-black">
                        <figure className="size-7">
                          <Image
                            src={step}
                            alt={item.title}
                            className="h-full w-full object-cover dark:hidden"
                          />
                          <Image
                            src={stepDark}
                            alt={item.title}
                            className="hidden h-full w-full object-cover dark:block"
                          />
                        </figure>
                      </div>

                      {!isLast && (
                        <div className="bg-stroke-2 dark:bg-stroke-6 mx-auto h-[230px] w-1 lg:h-[260px]">
                          <svg
                            ref={lineRefs[idx]}
                            xmlns="http://www.w3.org/2000/svg"
                            className="step-line h-[0px] w-1"
                            viewBox="0 0 2 222"
                            fill="none"
                          >
                            <path
                              d="M1 1L0.99999 221"
                              stroke={`url(#paint0_linear_teracode_step_${idx})`}
                              strokeWidth={2}
                              strokeLinecap="round"
                            />
                            <defs>
                              <linearGradient
                                id={`paint0_linear_teracode_step_${idx}`}
                                x1="0.5"
                                y1={1}
                                x2="0.49999"
                                y2={221}
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop offset={0} stopColor="#64D9FD" />
                                <stop offset="0.35" stopColor="#1E62F5" />
                                <stop offset="0.7" stopColor="#7E57FD" />
                                <stop offset={1} stopColor="#B04BFD" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </div>
                      )}
                    </div>

                    {/* Tarjeta de contenido del paso */}
                    <RevealAnimation delay={0.2 + idx * 0.1}>
                      <div
                        className={
                          isLeft
                            ? 'card-item dark:bg-background-6 max-lg:bg-background-4 absolute top-12 left-1/2 z-20 w-full max-w-[370px] -translate-x-1/2 space-y-2.5 rounded-[20px] p-6 shadow-md lg:top-0 lg:left-0 lg:translate-x-0 lg:rounded-none lg:bg-transparent lg:p-0 lg:shadow-none lg:dark:bg-transparent'
                            : 'card-item dark:bg-background-6 max-lg:bg-background-4 absolute top-12 right-1/2 z-20 w-full max-w-[370px] translate-x-1/2 space-y-2.5 rounded-[20px] p-6 shadow-md lg:top-0 lg:right-0 lg:translate-x-0 lg:rounded-none lg:bg-transparent lg:p-0 lg:shadow-none lg:dark:bg-transparent'
                        }
                      >
                        <p className="text-tagline-2 font-semibold tracking-wider text-[#1E62F5]">
                          {item.number}
                        </p>
                        <div className="space-y-2">
                          <h3 className="text-heading-6 lg:text-heading-5">{item.title}</h3>
                          <p className="text-sm leading-relaxed lg:text-base">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </RevealAnimation>
                  </div>
                );
              })}
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default ProcessStep;