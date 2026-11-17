import RevealAnimation from '../animation/RevealAnimation';

const OPERATION_STEPS = [
  {
    number: '1',
    badgeColor: 'bg-ns-yellow',
    title: 'Define tu objetivo y elige tu plan',
    description:
      'Te asesoramos en la elección de tu dominio (.com o .ec) y definimos la estructura ideal según lo que vende tu negocio.',
  },
  {
    number: '2',
    badgeColor: 'bg-ns-green',
    title: 'Diseñamos y conectamos tus canales',
    description:
      'Construimos tu sitio web o catálogo rápido, 100% adaptable a celular y enlazado directamente a tu WhatsApp y redes sociales.',
  },
  {
    number: '3',
    badgeColor: 'bg-ns-red',
    title: 'Publicamos y te entregamos el control',
    description:
      'Lanzamos tu plataforma con certificado de seguridad SSL activo y te capacitamos para gestionar tus productos o contenidos sin complicaciones.',
  },
];

const ProcessOperation = () => {
  return (
    <section className="bg-background-1 dark:bg-background-6 space-y-[70px] py-[100px]">
      <div className="main-container space-y-[70px]">
        {/* Encabezado */}
        <div className="mx-auto max-w-[804px] space-y-5 text-center">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-cyan-v2">Tu ventaja digital</span>
          </RevealAnimation>
          <div className="space-y-3 text-center">
            <RevealAnimation delay={0.2}>
              <h2 className="mx-auto max-w-[680px]">
                De tu idea a una web lista para vender, sin complicaciones
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="mx-auto max-w-[740px]">
                Nos encargamos de toda la parte técnica, el diseño y la optimización de velocidad
                para que tú solo te enfoques en atender a tus clientes y cerrar más ventas.
              </p>
            </RevealAnimation>
          </div>
        </div>

        {/* Contenido principal: Tarjetas de impacto (Izquierda) + 3 Pasos (Derecha) */}
        <div className="grid grid-cols-12 items-center gap-y-14 md:gap-y-20 lg:gap-16 xl:gap-[90px]">
          {/* Columna Izquierda: Visual UI nativo en español */}
          <div className="col-span-12 lg:col-span-6 xl:col-span-5">
            <RevealAnimation delay={0.4}>
              <div className="mx-auto max-w-[460px] space-y-4 lg:mx-0">
                {/* Escudo superior de garantía */}
                <div className="flex flex-col items-center">
                  <div className="bg-ns-green flex size-16 items-center justify-center rounded-2xl shadow-lg shadow-lime-500/20">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#111827"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </div>
                  <div className="bg-stroke-2 dark:bg-stroke-6 h-6 w-px" />
                </div>

                {/* Dos tarjetas intermedias */}
                <div className="grid grid-cols-2 gap-4">
                  {/* Tarjeta oscura: Velocidad / SEO */}
                  <div className="bg-background-3 dark:bg-background-7 rounded-2xl border border-gray-200/70 p-5 dark:border-gray-800">
                    <p className="text-secondary/60 dark:text-accent/60 text-xs font-medium">
                      Rendimiento Web
                    </p>
                    <p className="text-secondary dark:text-accent mt-1 text-2xl font-bold">
                      99/100
                    </p>
                    <div className="mt-4 flex items-end gap-1.5 h-10">
                      <span className="h-4 w-full rounded-sm bg-[#1E62F5]/40" />
                      <span className="h-6 w-full rounded-sm bg-[#1E62F5]/60" />
                      <span className="h-5 w-full rounded-sm bg-[#1E62F5]/50" />
                      <span className="h-8 w-full rounded-sm bg-[#1E62F5]/80" />
                      <span className="h-10 w-full rounded-sm bg-[#1E62F5]" />
                    </div>
                    <p className="mt-3 text-xs font-medium text-[#1E62F5]">
                      Carga ultrarrápida
                    </p>
                  </div>

                  {/* Tarjeta clara destacada: Conversión WhatsApp */}
                  <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-md dark:border-gray-700">
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-medium text-slate-500">Pedidos WhatsApp</p>
                      <span className="rounded-full bg-lime-100 px-2 py-0.5 text-[11px] font-bold text-lime-800">
                        +65% ↗
                      </span>
                    </div>
                    <p className="mt-1 text-2xl font-bold text-slate-950">24 / 7</p>
                    <div className="mt-4 flex items-end gap-1.5 h-10">
                      <span className="h-3 w-full rounded-sm bg-lime-300" />
                      <span className="h-5 w-full rounded-sm bg-lime-400" />
                      <span className="h-6 w-full rounded-sm bg-lime-400" />
                      <span className="h-8 w-full rounded-sm bg-lime-500" />
                      <span className="h-10 w-full rounded-sm bg-lime-500" />
                    </div>
                    <p className="mt-3 text-xs font-medium text-slate-600">
                      Cierre directo sin fricción
                    </p>
                  </div>
                </div>

                {/* Tarjeta inferior: Satisfacción y Soporte */}
                <div className="bg-background-3 dark:bg-background-7 flex items-center justify-between rounded-2xl border border-gray-200/70 p-5 dark:border-gray-800">
                  <div>
                    <p className="text-secondary/60 dark:text-accent/60 text-xs font-medium">
                      Satisfacción de clientes
                    </p>
                    <div className="mt-1 flex items-baseline gap-2">
                      <span className="text-secondary dark:text-accent text-xl font-bold">
                        5.0 / 5
                      </span>
                      <span className="text-xs font-semibold text-amber-500">★★★★★</span>
                    </div>
                    <p className="text-secondary/60 dark:text-accent/60 mt-0.5 text-xs">
                      Soporte local directo en Guayaquil, Ecuador
                    </p>
                  </div>

                  <div className="flex items-center gap-1">
                    <span className="h-2 w-2 rounded-full bg-[#1E62F5]" />
                    <span className="h-3.5 w-2 rounded-full bg-[#1E62F5]" />
                    <span className="h-6 w-2 rounded-full bg-[#1E62F5]" />
                    <span className="h-4 w-2 rounded-full bg-[#1E62F5]" />
                    <span className="h-8 w-2 rounded-full bg-[#1E62F5]" />
                  </div>
                </div>
              </div>
            </RevealAnimation>
          </div>

          {/* Columna Derecha: 3 Pasos en Español */}
          <div className="col-span-12 lg:col-span-6 xl:col-span-7">
            <div className="space-y-5">
              {OPERATION_STEPS.map((stepItem, index) => (
                <RevealAnimation key={stepItem.number} delay={0.45 + index * 0.1}>
                  <div className="bg-background-3 dark:bg-background-7 mx-auto flex items-start gap-4 rounded-2xl px-7 py-5 sm:max-w-[596px] sm:gap-[22px] sm:rounded-[20px] sm:px-[34px] sm:py-6 lg:mx-0">
                    <div>
                      <div
                        className={`${stepItem.badgeColor} text-tagline-1 text-secondary flex size-10 shrink-0 items-center justify-center rounded-full font-semibold`}
                      >
                        {stepItem.number}
                      </div>
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-secondary dark:text-accent text-lg leading-[27px] font-medium">
                        {stepItem.title}
                      </h3>
                      <p>{stepItem.description}</p>
                    </div>
                  </div>
                </RevealAnimation>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessOperation;