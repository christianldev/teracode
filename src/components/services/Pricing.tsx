'use client';

import { CheckIcon } from '@/icons';
import { cn } from '@/utils/cn';
import { useState } from 'react';
import RevealAnimation from '../animation/RevealAnimation';

interface PricingFeature {
  id: string;
  text: string;
  isActive: boolean;
}

interface PricingCard {
  id: string;
  title: string;
  badge?: string;
  description: string;
  standardPrice: string; // Pago único 50/50
  cashPrice: string;     // Pago de contado (10% dto.)
  pricePrefix?: string;
  ctaText: string;
  whatsappMessage: string;
  isFeatured: boolean;
  features: PricingFeature[];
}

const WHATSAPP_BASE_URL = 'https://wa.link/ku5ww8';

const pricingData: PricingCard[] = [
  {
    id: 'landing-express',
    title: 'Landing Page Express',
    description: 'Ideal para emprendedores y servicios que buscan captar clientes rápido.',
    standardPrice: '180',
    cashPrice: '162',
    ctaText: 'Cotizar este plan',
    whatsappMessage: 'Hola TeraCode, me interesa el plan Landing Page Express ($180).',
    isFeatured: false,
    features: [
      { id: 'responsive', text: 'Diseño moderno 100% adaptable a móvil', isActive: true },
      { id: 'whatsapp-btn', text: 'Botón directo a tu WhatsApp', isActive: true },
      { id: 'seo-speed', text: 'Optimización de velocidad y SEO básico', isActive: true },
      { id: 'fast-delivery', text: 'Entrega rápida en 4 a 5 días', isActive: true },
      { id: 'domain-ssl', text: 'Asesoría de dominio y hosting', isActive: false },
    ],
  },
  {
    id: 'web-corporativa',
    title: 'Web Corporativa / Catálogo',
    badge: 'Más elegido',
    description: 'Para negocios que quieren proyectar autoridad y recibir pedidos ordenados.',
    standardPrice: '320',
    cashPrice: '288',
    ctaText: 'Solicitar ahora',
    whatsappMessage: 'Hola TeraCode, me interesa el plan Web Corporativa / Catálogo ($320).',
    isFeatured: true,
    features: [
      { id: 'sections-catalog', text: 'Hasta 5 secciones o catálogo de productos', isActive: true },
      { id: 'whatsapp-orders', text: 'Pedidos automáticos directos a WhatsApp', isActive: true },
      { id: 'google-maps-seo', text: 'Configuración en Google Maps y SEO local', isActive: true },
      { id: 'domain-included', text: 'Dominio .com y certificado SSL (1er año)', isActive: true },
      { id: 'training', text: 'Capacitación para administrar tu contenido', isActive: true },
    ],
  },
  {
    id: 'tienda-pro',
    title: 'Tienda Online Pro',
    description: 'E-commerce completo para vender tus productos en todo el país 24/7.',
    standardPrice: '550',
    cashPrice: '495',
    pricePrefix: 'Desde ',
    ctaText: 'Cotizar tienda',
    whatsappMessage: 'Hola TeraCode, me interesa cotizar una Tienda Online Pro.',
    isFeatured: false,
    features: [
      { id: 'cart-payments', text: 'Carrito de compras y pasarela de pagos', isActive: true },
      { id: 'admin-panel', text: 'Panel autoadministrable de stock y pedidos', isActive: true },
      { id: 'shipping-wa', text: 'Integración con envíos y notificaciones WhatsApp', isActive: true },
      { id: 'local-support', text: 'Soporte técnico prioritario en Ecuador', isActive: true },
    ],
  },
];

const Pricing = () => {
  const [isCashPayment, setIsCashPayment] = useState(false);

  return (
    <section id="precios" className="relative overflow-hidden py-24 xl:py-[160px]">
      <div className="main-container space-y-[64px]">
        {/* Cabecera */}
        <div className="flex flex-col items-center text-center">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-yellow-v2 mb-5">Planes y Paquetes</span>
          </RevealAnimation>

          <RevealAnimation delay={0.2}>
            <h2 className="mx-auto mb-4 max-w-[680px]">
              Elige el plan ideal para impulsar tu negocio.
            </h2>
          </RevealAnimation>

          <RevealAnimation delay={0.25}>
            <p className="text-secondary/75 dark:text-accent/75 mx-auto mb-8 max-w-[540px] text-base">
              Inversión transparente sin mensualidades ocultas. Empiezas con el 50% y pagas el saldo contra entrega.
            </p>
          </RevealAnimation>

          {/* Selector de modalidad de pago (corregido sin solapamientos) */}
          <RevealAnimation delay={0.3}>
            <div className="dark:bg-background-7 relative inline-flex items-center rounded-full border border-gray-200/80 bg-white px-7 py-3.5 shadow-xs dark:border-gray-800">
              <span className="bg-[#1E62F5] text-white absolute -top-3.5 right-4 z-10 rounded-full px-3 py-0.5 text-xs font-semibold shadow-sm">
                Ahorra 10%
              </span>

              <label className="relative z-10 inline-flex cursor-pointer items-center gap-3 select-none">
                <span
                  className={cn(
                    'text-sm font-medium transition-colors sm:text-base',
                    !isCashPayment
                      ? 'text-secondary dark:text-accent font-semibold'
                      : 'text-secondary/60 dark:text-accent/60',
                  )}>
                  Pago 50 / 50
                </span>

                <input
                  type="checkbox"
                  id="priceCheck"
                  checked={isCashPayment}
                  onChange={(e) => setIsCashPayment(e.target.checked)}
                  className="peer sr-only"
                  aria-label="Alternar entre pago 50/50 y pago de contado con descuento"
                />

                <span className="bg-secondary peer-checked:bg-[#1E62F5] after:bg-accent dark:border-accent relative h-[28px] w-13 rounded-[34px] transition-colors after:absolute after:start-[2px] after:top-1/2 after:h-6 after:w-6 after:-translate-y-1/2 after:rounded-full after:transition-all after:content-[''] peer-checked:after:translate-x-[99%] dark:border" />

                <span
                  className={cn(
                    'text-sm font-medium transition-colors sm:text-base',
                    isCashPayment
                      ? 'text-[#1E62F5] font-semibold'
                      : 'text-secondary/60 dark:text-accent/60',
                  )}>
                  Contado
                </span>
              </label>
            </div>
          </RevealAnimation>
        </div>

        {/* Tarjetas de Precios */}
        <div className="relative">
          <div className="flex items-stretch justify-center gap-8 max-lg:flex-col">
            {pricingData.map((card, index) => (
              <RevealAnimation key={card.id} delay={0.35 + index * 0.15} className="flex flex-1 max-lg:w-full lg:max-w-[420px]">
                <div
                  className={cn(
                    'relative flex w-full flex-col rounded-[20px] transition-transform duration-300 hover:-translate-y-1',
                    card.isFeatured
                      ? "bg-[url('/images/ns-img-25.png')] bg-cover bg-center bg-no-repeat p-2.5 shadow-xl"
                      : 'bg-background-3 dark:bg-background-7 p-8',
                  )}>
                  {/* Insignia superior en la tarjeta destacada */}
                  {card.badge && (
                    <span className="absolute -top-3.5 left-1/2 z-20 -translate-x-1/2 rounded-full bg-[#1E62F5] px-4 py-1 text-xs font-semibold tracking-wide text-white shadow-md">
                      ★ {card.badge}
                    </span>
                  )}

                  <div
                    className={cn(
                      'flex h-full flex-col',
                      card.isFeatured && 'rounded-xl bg-white p-8 dark:bg-black',
                    )}>
                    <h3 className={cn('text-heading-5 font-semibold', card.isFeatured ? 'mb-2.5' : 'mb-2')}>
                      {card.title}
                    </h3>

                    <p className="text-secondary/75 dark:text-accent/75 mb-6 min-h-[48px] text-sm leading-relaxed">
                      {card.description}
                    </p>

                    {/* Precio */}
                    <div className="price-month mb-7">
                      <div className="flex items-baseline gap-1">
                        {card.pricePrefix && (
                          <span className="text-secondary/70 dark:text-accent/70 text-base font-medium">
                            {card.pricePrefix}
                          </span>
                        )}
                        <h4 className="text-heading-4 font-bold">
                          $<span>{isCashPayment ? card.cashPrice : card.standardPrice}</span>
                        </h4>
                        <span className="text-secondary/60 dark:text-accent/60 text-xs font-medium uppercase">
                          USD
                        </span>
                      </div>
                      <p className="text-secondary/80 dark:text-accent/80 mt-1 text-sm font-medium">
                        {isCashPayment
                          ? 'Pago único de contado (10% dto. aplicado)'
                          : 'Pago único • 50% inicio / 50% entrega'}
                      </p>
                    </div>

                    {/* Botón directo a WhatsApp */}
                    <a
                      href={WHATSAPP_BASE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        'btn btn-md mb-8 block w-full text-center font-semibold first-letter:uppercase before:content-none',
                        card.isFeatured
                          ? '!bg-[#1E62F5] !text-white hover:!bg-blue-700 shadow-md shadow-blue-600/20'
                          : 'btn-white dark:btn-white-dark hover:btn-secondary dark:hover:btn-accent',
                      )}>
                      {card.ctaText} →
                    </a>

                    {/* Lista de beneficios */}
                    <ul className="relative mt-auto list-none space-y-3">
                      {card.features.map((feature) => (
                        <li key={feature.id} className="flex items-start gap-2.5">
                          <span
                            className={cn(
                              'mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full',
                              feature.isActive
                                ? card.isFeatured
                                  ? 'bg-[#1E62F5]'
                                  : 'bg-secondary dark:bg-accent'
                                : 'dark:bg-background-9 bg-white',
                            )}>
                            <CheckIcon
                              className={cn(
                                feature.isActive
                                  ? card.isFeatured
                                    ? 'fill-white'
                                    : 'dark:fill-secondary fill-white'
                                  : 'fill-secondary/40 dark:fill-accent/40',
                              )}
                            />
                          </span>
                          <span
                            className={cn(
                              'text-tagline-1 text-sm leading-snug font-normal',
                              feature.isActive
                                ? 'text-secondary dark:text-accent'
                                : 'text-secondary/50 dark:text-accent/50 line-through',
                            )}>
                            {feature.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;