'use client';

import homeIcon from '@public/images/icons/home.svg';
import mailIcon from '@public/images/icons/mail-open.svg';
import phoneIcon from '@public/images/icons/phone-right.svg';
import gradientThree from '@public/images/ns-img-498.png';
import gradientTwo from '@public/images/ns-img-509.png';
import gradientOne from '@public/images/ns-img-510.png';
import Image from 'next/image';
import React, { useState } from 'react';
import RevealAnimation from '../animation/RevealAnimation';

const contactInfoItems = [
  {
    id: 1,
    icon: homeIcon,
    title: 'Ubicación',
    content: 'Guayaquil, Ecuador • Atención a todo el país',
    gradient: gradientOne,
    gradientClass: 'top-[-187px] left-[174px] -rotate-[78deg]',
  },
  {
    id: 2,
    icon: mailIcon,
    title: 'Correo electrónico',
    content: 'hola@teracode.tech',
    link: 'mailto:hola@teracode.tech',
    isExternal: false,
    gradient: gradientTwo,
    gradientClass: 'top-[-206px] left-[-36px] rotate-[62deg]',
  },
  {
    id: 3,
    icon: phoneIcon,
    title: 'WhatsApp Directo',
    content: 'Escríbenos ahora • Respuesta en menos de 24h',
    link: 'https://wa.link/ku5ww8',
    isExternal: true,
    gradient: gradientThree,
    gradientClass: 'top-[-184px] left-[-185px]',
  },
];

const ContactInfo = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    number: '',
    email: '',
    subject: 'Web Corporativa / Catálogo ($320)',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open('https://wa.link/ku5ww8', '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="contacto"
      className="pt-32 pb-14 sm:pt-36 md:pt-42 md:pb-16 lg:pb-20 xl:pt-[180px] xl:pb-[100px]"
      aria-label="Información y formulario de contacto"
    >
      <div className="main-container">
        <div className="space-y-[70px]">
          {/* Encabezado */}
          <div className="mx-auto max-w-[680px] space-y-3 text-center">
            <RevealAnimation delay={0.2}>
              <h2>Hablemos sobre tu próximo proyecto digital.</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p>
                ¿Quieres cotizar una página web, catálogo con pedidos a WhatsApp o tienda online?
                Escríbenos directamente o completa el formulario y te asesoramos sin compromiso.
              </p>
            </RevealAnimation>
          </div>

          <div className="flex flex-col items-center justify-center gap-10 lg:flex-row lg:items-start lg:gap-8 xl:gap-[70px]">
            {/* Tarjetas de información de contacto */}
            <div className="flex w-full flex-col gap-8 md:flex-row lg:w-auto lg:flex-col">
              {contactInfoItems.map((item) => (
                <RevealAnimation key={item.id} delay={0.4}>
                  <div className="border-gray-200/70 bg-[#080f17] dark:bg-background-6 relative w-full space-y-6 overflow-hidden rounded-[20px] p-11 text-center md:max-w-[371px]">
                    {/* Superposición decorativa */}
                    <figure
                      className={`pointer-events-none absolute size-[350px] overflow-hidden select-none ${item.gradientClass}`}
                    >
                      <Image
                        src={item.gradient}
                        alt="Degradado decorativo"
                        className="size-full object-cover"
                      />
                    </figure>
                    <figure className="mx-auto size-10 overflow-hidden">
                      <Image
                        src={item.icon}
                        alt={`Ícono de ${item.title}`}
                        className="size-full object-cover"
                      />
                    </figure>
                    <div className="relative z-10 space-y-2.5">
                      <p className="text-heading-6 text-accent">{item.title}</p>
                      {item.link ? (
                        <p className="text-accent/80 transition-colors hover:text-white">
                          <a
                            href={item.link}
                            target={item.isExternal ? '_blank' : undefined}
                            rel={item.isExternal ? 'noopener noreferrer' : undefined}
                            className="underline-offset-4 hover:underline"
                          >
                            {item.content}
                          </a>
                        </p>
                      ) : (
                        <p className="text-accent/70">{item.content}</p>
                      )}
                    </div>
                  </div>
                </RevealAnimation>
              ))}
            </div>

            {/* Formulario de contacto */}
            <RevealAnimation
              delay={0.3}
              className="dark:bg-background-6 mx-auto w-full max-w-[847px] rounded-4xl border border-gray-200/70 bg-white p-6 shadow-sm md:p-8 lg:p-11 dark:border-gray-800"
            >
              <form onSubmit={handleSubmit} className="space-y-7">
                {/* Nombre y WhatsApp */}
                <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
                  {/* Nombre */}
                  <div className="w-full space-y-2 lg:max-w-[364px]">
                    <label
                      htmlFor="fullname"
                      className="text-tagline-2 text-secondary dark:text-accent block font-medium"
                    >
                      Tu nombre o empresa *
                    </label>
                    <input
                      type="text"
                      id="fullname"
                      name="fullname"
                      value={formData.fullname}
                      onChange={handleChange}
                      placeholder="Ej. Andrea Pérez / Studio Moda"
                      required
                      autoComplete="name"
                      className="dark:focus-visible:border-stroke-4/20 dark:border-stroke-7 dark:bg-background-6 border-stroke-3 bg-background-1 text-tagline-2 placeholder:text-secondary/60 placeholder:text-tagline-2 dark:placeholder:text-accent/60 dark:text-accent h-[48px] w-full rounded-full border px-[18px] py-3 font-normal placeholder:font-normal focus:border-[#1E62F5] focus:outline-none"
                    />
                  </div>

                  {/* Número WhatsApp */}
                  <div className="w-full space-y-2 lg:max-w-[364px]">
                    <label
                      htmlFor="number"
                      className="text-tagline-2 text-secondary dark:text-accent block font-medium"
                    >
                      Tu WhatsApp *
                    </label>
                    <input
                      type="tel"
                      id="number"
                      name="number"
                      value={formData.number}
                      onChange={handleChange}
                      placeholder="Ej. 099 123 4567"
                      required
                      autoComplete="tel"
                      className="dark:focus-visible:border-stroke-4/20 dark:border-stroke-7 dark:bg-background-6 border-stroke-3 bg-background-1 text-tagline-2 placeholder:text-secondary/60 placeholder:text-tagline-2 dark:placeholder:text-accent/60 dark:text-accent h-[48px] w-full rounded-full border px-[18px] py-3 font-normal placeholder:font-normal focus:border-[#1E62F5] focus:outline-none"
                    />
                  </div>
                </div>

                {/* Correo electrónico */}
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-tagline-2 text-secondary dark:text-accent block font-medium"
                  >
                    Correo electrónico (opcional)
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tu@empresa.com"
                    autoComplete="email"
                    className="dark:focus-visible:border-stroke-4/20 dark:border-stroke-7 dark:bg-background-6 border-stroke-3 bg-background-1 text-tagline-2 placeholder:text-secondary/60 placeholder:text-tagline-2 dark:placeholder:text-accent/60 dark:text-accent h-[48px] w-full rounded-full border px-[18px] py-3 font-normal placeholder:font-normal focus:border-[#1E62F5] focus:outline-none"
                  />
                </div>

                {/* Servicio / Asunto */}
                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="text-tagline-2 text-secondary dark:text-accent block font-medium"
                  >
                    Servicio de interés
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="dark:focus-visible:border-stroke-4/20 dark:border-stroke-7 dark:bg-background-6 border-stroke-3 bg-background-1 text-tagline-2 dark:text-accent h-[48px] w-full rounded-full border px-[18px] py-3 font-normal focus:border-[#1E62F5] focus:outline-none"
                  >
                    <option value="Landing Page Express ($180)">
                      Landing Page Express ($180)
                    </option>
                    <option value="Web Corporativa / Catálogo ($320)">
                      Web Corporativa / Catálogo ($320)
                    </option>
                    <option value="Tienda Online Pro (Desde $550)">
                      Tienda Online Pro (Desde $550)
                    </option>
                    <option value="Sistema Web a Medida / API">
                      Sistema Web a Medida / Integraciones
                    </option>
                  </select>
                </div>

                {/* Mensaje */}
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-tagline-2 text-secondary dark:text-accent block font-medium"
                  >
                    Detalles de tu proyecto *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Cuéntanos qué vende tu negocio, si ya tienes dominio o referencias de páginas que te gusten..."
                    required
                    className="dark:bg-background-6 dark:border-stroke-7 border-stroke-3 bg-background-1 text-tagline-2 placeholder:text-secondary/60 dark:focus-visible:border-stroke-4/20 placeholder:text-tagline-2 dark:placeholder:text-accent/60 dark:text-accent w-full rounded-xl border px-[18px] py-3 font-normal placeholder:font-normal focus:border-[#1E62F5] focus:outline-none"
                  />
                </div>

                {/* Checkbox de consentimiento */}
                <fieldset className="mb-4 flex items-center gap-2">
                  <label htmlFor="terms" className="flex items-center gap-x-3">
                    <input id="terms" type="checkbox" className="peer sr-only" defaultChecked required />
                    <span className="border-stroke-3 dark:border-stroke-7 relative size-4 cursor-pointer rounded-full border after:absolute after:top-1/2 after:left-1/2 after:size-2.5 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:bg-[#1E62F5] after:opacity-0 peer-checked:border-[#1E62F5] peer-checked:after:opacity-100" />
                    <span className="sr-only">Aceptar contacto para cotización</span>
                  </label>
                  <label
                    htmlFor="terms"
                    className="text-tagline-3 text-secondary/70 dark:text-accent/70 cursor-pointer"
                  >
                    Acepto ser contactado por WhatsApp o correo para recibir mi propuesta.
                  </label>
                </fieldset>

                {/* Botón enviar */}
                <button
                  type="submit"
                  className="btn btn-md w-full !bg-[#1E62F5] font-semibold !text-white shadow-lg shadow-blue-600/20 transition-all before:content-none hover:!bg-blue-700"
                >
                  Solicitar cotización por WhatsApp →
                </button>
              </form>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;