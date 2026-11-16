import lmsAcademy from '@public/images/portfolio-lms-academy.png';
import mochorilleria from '@public/images/portfolio-mochilorilleria.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const projects = [
  {
    title: 'Mochilorillería — Catálogo Digital & Pedidos',
    tags: ['E-commerce', 'Entrega en 5 días'],
    image: mochorilleria,
    action: 'Ver demo en vivo',
  },
  {
    title: 'LMS Academy — Web Institucional & Captación',
    tags: ['Landing Page', 'Next.js + SEO Local'],
    image: lmsAcademy,
    action: 'Ver sitio',
  },
];

const Blog = () => {
  return (
    <section className="dark:bg-background-6 bg-white py-16 md:py-20 lg:py-24">
      <div className="main-container">
        <div className="mb-10 space-y-4 text-center md:mb-14">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-cyan inline-block">Portafolio</span>
          </RevealAnimation>
          <div className="space-y-3">
            <RevealAnimation delay={0.2}>
              <h2>
                Proyectos y <span className="text-primary-500">soluciones reales</span>
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="mx-auto max-w-[560px]">
                Explora algunos de los sitios web y plataformas que hemos desarrollado para impulsar negocios en
                Ecuador.
              </p>
            </RevealAnimation>
          </div>
        </div>

        <div className="mx-auto grid max-w-[900px] gap-5 lg:grid-cols-2">
          {projects.map((project, index) => (
            <RevealAnimation key={project.title} delay={0.4 + index * 0.1}>
              <article className="grid min-h-[276px] overflow-hidden rounded-lg border border-slate-300 bg-slate-50 sm:grid-cols-[55%_45%] dark:border-[#36445a] dark:bg-[#111927]">
                <div className="relative flex min-h-48 items-end justify-center overflow-hidden bg-slate-100 sm:min-h-full dark:bg-[#111927]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="absolute -bottom-3 left-1/2 h-auto w-[135%] max-w-none -translate-x-1/2 object-contain"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-col items-start justify-center space-y-4 bg-slate-100 p-5 sm:p-4 dark:bg-[#1d2939]">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="dark:text-accent rounded-full bg-slate-200 px-2.5 py-1 text-[11px] font-medium text-slate-700 dark:bg-white/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-secondary dark:text-accent text-xl leading-tight font-semibold">
                    {project.title}
                  </h3>
                  <LinkButton
                    href="/case-study"
                    className="btn-sm text-secondary hover:border-primary-500 hover:bg-primary-500 dark:text-accent dark:hover:border-primary-500 dark:hover:bg-primary-500 rounded-full border border-slate-300 bg-transparent px-3 text-xs hover:text-white dark:border-[#536178]"
                    aria-label={`${project.action}: ${project.title}`}>
                    {project.action} →
                  </LinkButton>
                </div>
              </article>
            </RevealAnimation>
          ))}
        </div>

        <RevealAnimation delay={0.7}>
          <div className="mt-10 text-center md:mt-12">
            <LinkButton
              href="/contact-us"
              className="btn btn-primary hover:btn-secondary btn-md"
              aria-label="Solicitar una propuesta similar">
              Solicitar una propuesta similar
            </LinkButton>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default Blog;
