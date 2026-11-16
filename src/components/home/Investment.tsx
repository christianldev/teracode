import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const metrics = [
  { label: 'Velocidad', value: '99%' },
  { label: 'Adaptable a', value: 'móvil' },
  { label: 'Diseño', value: 'a medida' },
  { label: 'Soporte local', value: '24/7' },
];

const Investment = () => {
  return (
    <section className="py-16 md:py-20 lg:py-24">
      <div className="main-container">
        <div className="overflow-hidden rounded-[24px] border border-white/10 bg-white p-6 shadow-[0_20px_70px_rgba(0,0,0,0.15)] sm:p-9 lg:px-12 lg:py-10 dark:bg-[linear-gradient(120deg,rgba(100,55,130,0.62),rgba(28,35,44,0.96)_42%,rgba(35,105,145,0.72))]">
          <div className="grid items-center gap-8 md:grid-cols-[1.55fr_0.65fr] lg:gap-14">
            <div className="space-y-6 text-center md:text-left">
              <div className="space-y-3">
                <RevealAnimation delay={0.1}>
                  <h2>
                    Tu proyecto web seguro y <span className="text-primary-500">listo para escalar</span>
                  </h2>
                </RevealAnimation>
                <RevealAnimation delay={0.2}>
                  <p className="mx-auto max-w-[620px] md:mx-0">
                    Desarrollamos con tecnología moderna para que tu página cargue en menos de 2 segundos, se vea
                    impecable en cualquier celular y esté lista para recibir clientes.
                  </p>
                </RevealAnimation>
              </div>
              <RevealAnimation delay={0.3}>
                <LinkButton
                  href="/services"
                  className="btn btn-primary hover:btn-secondary btn-md mx-auto md:mx-0"
                  aria-label="Ver cómo trabajamos">
                  Ver cómo trabajamos
                </LinkButton>
              </RevealAnimation>
            </div>
            <RevealAnimation delay={0.4} offset={100} direction="right">
              <div className="grid grid-cols-2 gap-2.5 sm:gap-3" aria-label="Beneficios de nuestros proyectos web">
                {metrics.map((metric) => (
                  <div key={metric.label} className="rounded-xl bg-slate-300 dark:bg-slate-950/70 p-4 backdrop-blur-sm sm:p-5">
                    <p className="text-secondary/70 dark:text-accent/70 text-sm">{metric.label}</p>
                    <p className="text-secondary dark:text-accent mt-1 text-xl font-semibold">
                      {metric.value}
                    </p>
                  </div>
                ))}
              </div>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Investment;
