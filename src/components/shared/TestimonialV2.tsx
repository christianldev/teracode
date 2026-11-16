'use client';

import { useState } from 'react';
import RevealAnimation from '../animation/RevealAnimation';

const testimonials = [
  {
    business: 'La Mochorillería (Guayaquil)',
    initials: 'LM',
    name: 'Sofía G.',
    role: 'Fundadora',
    quote:
      'Antes perdíamos mucho tiempo respondiendo precios por chat. Con la web de TeraCode, los clientes revisan el catálogo y nos escriben listos para agendar o comprar.',
  },
  {
    business: 'TeraCode',
    initials: 'TC',
    name: 'Equipo TeraCode',
    role: 'Tecnología y diseño',
    quote:
      'Una presencia digital clara permite que los negocios conviertan más visitas en conversaciones y oportunidades reales.',
  },
];

const TestimonialV2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonial = testimonials[currentIndex];

  const changeTestimonial = (direction: number) => {
    setCurrentIndex((index) => (index + direction + testimonials.length) % testimonials.length);
  };

  return (
    <RevealAnimation delay={0.3} offset={100}>
      <article
        id="testimonial"
        className="dark:bg-background-6 mx-auto max-w-[740px] rounded-[20px] bg-white px-6 py-8 sm:px-8 sm:py-10 md:px-11 md:py-12"
        aria-label="Caso de éxito de cliente">
        <blockquote className="text-center">
          <p className="text-secondary dark:text-accent mx-auto max-w-[590px] text-xl leading-snug font-medium sm:text-2xl">
            &ldquo;{testimonial.quote}&rdquo;
          </p>
        </blockquote>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 text-center sm:flex-row sm:text-left">
          <div className="flex items-center gap-3">
            <span className="text-primary-500 flex size-11 items-center justify-center rounded-full bg-white text-xs font-bold shadow-sm ring-1 ring-black/10 dark:bg-white">
              {testimonial.initials}
            </span>
            <p className="text-secondary dark:text-accent text-sm font-medium">{testimonial.business}</p>
          </div>
          <span className="bg-secondary/15 dark:bg-accent/15 hidden h-8 w-px sm:block" />
          <div className="flex items-center gap-2">
            <span className="bg-primary-500 flex size-9 items-center justify-center rounded-full text-sm font-semibold text-white">
              {testimonial.name.charAt(0)}
            </span>
            <p className="text-secondary dark:text-accent text-sm">
              <span className="font-medium">{testimonial.name}</span> — {testimonial.role}
            </p>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => changeTestimonial(-1)}
            className="text-secondary/50 hover:text-primary-500 dark:text-accent/50 transition-colors"
            aria-label="Testimonio anterior">
            ‹
          </button>
          <span className="bg-primary-500 h-1.5 w-6 rounded-full" aria-hidden="true" />
          <button
            type="button"
            onClick={() => changeTestimonial(1)}
            className="text-secondary/50 hover:text-primary-500 dark:text-accent/50 transition-colors"
            aria-label="Siguiente testimonio">
            ›
          </button>
        </div>
      </article>
    </RevealAnimation>
  );
};

export default TestimonialV2;
