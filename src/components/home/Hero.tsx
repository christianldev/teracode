'use client';

import React, { useEffect, useState } from 'react';
import type SwiperType from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

import teracodeBanner1 from '@public/images/banner/teracode-banner-1.jpeg';
import teracodeBanner2 from '@public/images/banner/teracode-banner-2.jpeg';
import teracodeBanner3 from '@public/images/banner/teracode-banner-3.jpeg';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

import { Controller, EffectFade } from 'swiper/modules';

const HERO_SLIDES = [
  {
    id: 1,
    badge: '⚡ Velocidad y Posicionamiento',
    title: 'Sitios web ultrarrápidos que destacan en Google.',
    description:
      'Desarrollamos con tecnología moderna para que tu página cargue en segundos, retenga a tus visitas y convierta búsquedas en clientes reales.',
    primaryCta: 'Cotizar mi web',
    primaryHref: 'https://wa.link/ku5ww8',
    secondaryCta: 'Ver portafolio',
    secondaryHref: '#portafolio',
    image: teracodeBanner1,
    alt: 'Desarrollo web de alto rendimiento y SEO en TeraCode Guayaquil',
  },
  {
    id: 2,
    badge: '🛍️ Tiendas Online & Catálogos',
    title: 'Automatiza tus ventas y recibe pedidos por WhatsApp.',
    description:
      'Olvídate de enviar precios y fotos uno por uno. Creamos tu catálogo digital o e-commerce listo para vender las 24 horas desde cualquier celular.',
    primaryCta: 'Crear mi tienda',
    primaryHref: 'https://wa.link/ku5ww8',
    secondaryCta: 'Ver demos',
    secondaryHref: '#portafolio',
    image: teracodeBanner2,
    alt: 'Equipo de diseño UI y desarrollo web en TeraCode',
  },
  {
    id: 3,
    badge: '💻 Desarrollo a Medida • Ecuador',
    title: 'Transformamos tu idea en una plataforma sólida.',
    description:
      'Desde landing pages de alto impacto hasta sistemas web personalizados diseñados para profesionalizar tu marca y escalar tu negocio.',
    primaryCta: 'Hablar con un asesor',
    primaryHref: 'https://wa.link/ku5ww8',
    secondaryCta: 'Conocer proceso',
    secondaryHref: '#proceso',
    image: teracodeBanner3,
    alt: 'Agencia de software y desarrollo web en Guayaquil, Ecuador',
  },
];

const Hero = () => {
  const [heroSwiper, setHeroSwiper] = useState<SwiperType | null>(null);
  const [textSwiper, setTextSwiper] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!heroSwiper) return;

    const autoplayTimer = window.setInterval(() => {
      if (!heroSwiper.destroyed) {
        heroSwiper.slideNext();
      }
    }, 6000);

    return () => window.clearInterval(autoplayTimer);
  }, [heroSwiper]);

  const handlePrev = () => {
    heroSwiper?.slidePrev();
    textSwiper?.slidePrev();
  };

  const handleNext = () => {
    heroSwiper?.slideNext();
    textSwiper?.slideNext();
  };

  return (
    <section
      id="inicio"
      className="bg-cover bg-no-repeat bg-[url('/images/other/bg-lines-2.png')] dark:bg-[url('/images/other/bg-lines-2-dark.png')] active"
    >
      <div className="grid xl:grid-cols-5 grid-cols-1 items-stretch min-h-[780px] xl:min-h-[860px]">
        {/* Columna Izquierda: Imágenes */}
        <div className="xl:col-span-3 h-full relative min-w-0 overflow-hidden min-h-[380px] sm:min-h-[480px]">
          <Swiper
            spaceBetween={0}
            loop={true}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            onSwiper={setHeroSwiper}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            controller={{ control: textSwiper }}
            modules={[Controller, EffectFade]}
            className="mySwiper swiper-hero h-full w-full"
          >
            {HERO_SLIDES.map((slide, index) => (
              <SwiperSlide key={slide.id} className="h-full">
                <div className="relative h-full w-full">
                  <Image
                    src={slide.image}
                    alt={slide.alt}
                    fill
                    priority={index === 0}
                    sizes="(max-width: 1280px) 100vw, 60vw"
                    className="object-cover object-center"
                  />
                  {/* Sutil degradado superior para dar aún más contraste al Navbar */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/5 to-black/15 pointer-events-none" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Columna Derecha: Copy y Llamados a la Acción */}
        <div className="xl:col-span-2 relative h-full flex flex-col justify-between bg-[#f8f9fa] dark:bg-background-7 overflow-hidden">
          {/* Cuadrícula de fondo sutil */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage:
                'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
              backgroundSize: '70px 70px',
            }}
          />

          <div className="flex-1 flex flex-col justify-center relative z-10 px-6 sm:px-10 pt-12 pb-6 xl:px-14 xl:pt-28">
            <Swiper
              onSwiper={setTextSwiper}
              spaceBetween={24}
              slidesPerView={1}
              loop={true}
              allowTouchMove={false}
              controller={{ control: heroSwiper }}
              modules={[Controller]}
              className="mySwiper2 swiper-hero w-full"
            >
              {HERO_SLIDES.map((slide) => (
                <SwiperSlide key={slide.id}>
                  <div className="flex flex-col items-start justify-center w-full">
                    {/* Badge superior */}
                    <span className="inline-flex items-center rounded-full bg-blue-50 dark:bg-blue-950/50 border border-blue-200/80 dark:border-blue-800/60 px-3.5 py-1.5 text-xs font-semibold text-[#1E62F5] dark:text-blue-400">
                      {slide.badge}
                    </span>

                    {/* Título principal */}
                    <h1 className="text-[32px] sm:text-[38px] xl:text-[42px] font-bold text-slate-950 dark:text-white mt-4 leading-[1.12] tracking-tight text-left">
                      {slide.title}
                    </h1>

                    {/* Subtítulo */}
                    <p className="w-full text-base text-slate-600 dark:text-slate-300 font-normal mt-5 max-w-lg text-left leading-relaxed">
                      {slide.description}
                    </p>

                    {/* Botones de Acción (CTAs) */}
                    <div className="mt-8 flex flex-wrap items-center gap-3.5">
                      <a
                        href={slide.primaryHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1E62F5] hover:bg-blue-700 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-200 hover:-translate-y-0.5"
                      >
                        {slide.primaryCta}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </a>

                      <a
                        href={slide.secondaryHref}
                        className="inline-flex items-center justify-center rounded-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 hover:border-slate-400 dark:hover:border-slate-600 px-6 py-3.5 text-sm font-semibold text-slate-800 dark:text-slate-200 transition-colors"
                      >
                        {slide.secondaryCta}
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Barra inferior con indicador numérico y controles */}
          <div className="relative z-10 w-full px-6 sm:px-10 xl:px-14 pb-8 xl:pb-12">
            <div className="flex items-center justify-between border-t border-slate-200/70 dark:border-slate-800 pt-5">
              {/* Indicador 01 / 03 + puntos */}
              <div className="flex items-center gap-3">
                <span className="text-sm font-bold text-slate-900 dark:text-white tabular-nums">
                  0{activeIndex + 1}
                </span>
                <div className="flex items-center gap-1.5">
                  {HERO_SLIDES.map((s, i) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => {
                        heroSwiper?.slideToLoop(i);
                        textSwiper?.slideToLoop(i);
                      }}
                      aria-label={`Ir al slide ${i + 1}`}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        activeIndex === i
                          ? 'w-7 bg-[#1E62F5]'
                          : 'w-2 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xs font-medium text-slate-400 tabular-nums">
                  0{HERO_SLIDES.length}
                </span>
              </div>

              {/* Botones Anterior / Siguiente */}
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="cre-button-prev cursor-pointer group"
                  aria-label="Slide anterior"
                >
                  <div className="h-12 w-12 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 group-hover:bg-[#1E62F5] group-hover:border-[#1E62F5] flex items-center justify-center transition-colors shadow-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="stroke-slate-800 dark:stroke-slate-200 group-hover:stroke-white transition-colors"
                    >
                      <path d="m12 19-7-7 7-7" />
                      <path d="M19 12H5" />
                    </svg>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={handleNext}
                  className="cre-button-next cursor-pointer group"
                  aria-label="Siguiente slide"
                >
                  <div className="h-12 w-12 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 group-hover:bg-[#1E62F5] group-hover:border-[#1E62F5] flex items-center justify-center transition-colors shadow-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="stroke-slate-800 dark:stroke-slate-200 group-hover:stroke-white transition-colors"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;