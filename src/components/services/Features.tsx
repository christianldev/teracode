import { cn } from '@/utils/cn';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const benefits = [
  'Diseño móvil de alta conversión para que nunca pierdas una venta.',
  'Velocidad de carga superior para retener más visitas.',
  'Gestión y soporte local en Guayaquil, Ecuador, sin complicaciones.',
];

const CheckIcon = () => (
  <svg aria-hidden="true" className="mt-1 size-[18px] shrink-0" viewBox="0 0 18 18" fill="none">
    <circle cx="9" cy="9" r="9" className="fill-secondary/10 dark:fill-accent/10" />
    <path d="m5.2 9.1 2.3 2.3 5.3-5.3" className="stroke-secondary dark:stroke-accent" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Features = ({
  className,
  badgeClassName,
  btnClassName,
}: {
  className?: string;
  badgeClassName?: string;
  btnClassName?: string;
}) => {
  return (
    <section className={cn('overflow-hidden py-20 md:py-24 xl:py-[120px]', className)}>
      <div className="main-container">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20 xl:px-10">
          <div className="max-w-[520px] text-center lg:text-left">
            <RevealAnimation delay={0.1}>
              <span className={cn('badge badge-cyan inline-block', badgeClassName)}>Beneficios</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 className="mt-5 text-heading-4 md:text-heading-3">
                Optimiza y haz crecer las operaciones de tu negocio.
              </h2>
            </RevealAnimation>
            <ul className="mt-6 space-y-3 text-left">
              {benefits.map((benefit, index) => (
                <RevealAnimation key={benefit} delay={0.3 + index * 0.1}>
                  <li className="flex gap-2.5 text-secondary/80 dark:text-accent/80">
                    <CheckIcon />
                    <span>{benefit}</span>
                  </li>
                </RevealAnimation>
              ))}
            </ul>
            <RevealAnimation delay={0.6}>
              <LinkButton
                href="/contact-us"
                className={cn('btn-primary hover:btn-secondary mt-8', btnClassName)}>
                Empezar ahora
              </LinkButton>
            </RevealAnimation>
          </div>

          <RevealAnimation delay={0.3} direction="left" offset={100}>
            <div className="relative mx-auto w-[220px] rounded-[36px] border-[7px] border-slate-200 bg-slate-100 p-3 shadow-[0_14px_24px_rgba(15,23,42,0.20)] ring-2 ring-slate-300/60 sm:w-[250px]">
              <div className="absolute top-2 left-1/2 h-1.5 w-16 -translate-x-1/2 rounded-full bg-slate-300" />
              <div className="space-y-3 rounded-[24px] bg-white px-3 pt-12 pb-4">
                <div className="rounded-xl bg-white p-3 shadow-[0_5px_14px_rgba(15,23,42,0.12)]">
                  <div className="flex items-center justify-between text-sm font-medium text-secondary">
                    <span>Pedidos Nuevos</span>
                    <span className="flex size-4 items-center justify-center rounded-full bg-primary text-[10px] text-white">✓</span>
                  </div>
                  <p className="mt-1 text-xs text-secondary/50">100% de progreso</p>
                  <div className="mt-2 h-1.5 rounded-full bg-slate-100"><div className="h-full w-full rounded-full bg-primary" /></div>
                </div>
                <div className="rounded-xl bg-white p-3 shadow-[0_5px_14px_rgba(15,23,42,0.12)]">
                  <p className="text-sm font-medium text-secondary">Rendimiento</p>
                  <div className="mt-2 flex items-end justify-between gap-3">
                    <div className="flex h-20 items-end gap-1.5">
                      <span className="h-12 w-3 rounded-sm bg-primary/70" />
                      <span className="h-20 w-3 rounded-sm bg-primary" />
                      <span className="h-16 w-3 rounded-sm bg-violet-500" />
                    </div>
                    <div className="relative size-20 rounded-full bg-[conic-gradient(#1f6fe5_0_42%,#8553dd_42%_69%,#dbeafe_69%_100%)]"><div className="absolute inset-[9px] rounded-full bg-white" /></div>
                  </div>
                </div>
                <div className="flex items-center justify-around rounded-xl bg-white p-3 text-center text-xs shadow-[0_5px_14px_rgba(15,23,42,0.12)]">
                  <div><span className="mx-auto mb-1 block size-6 rounded-full bg-primary/20" />Cliente</div>
                  <div><span className="mx-auto mb-1 block size-6 rounded-full bg-violet-500/30" />Administrador</div>
                </div>
              </div>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default Features;
