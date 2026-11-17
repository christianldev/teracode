'use client';

import React, { useState } from 'react';
import RevealAnimation from '../animation/RevealAnimation';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    whatsapp: '',
    email: '',
    projectType: 'Página Web / Landing Page',
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
    <section id="contacto" className="pt-[100px] pb-[160px] xl:pb-[200px]">
      <div className="main-container">
        <div className="space-y-[60px]">
          {/* Encabezado */}
          <div className="mx-auto max-w-[850px] space-y-5 text-center md:w-full">
            <RevealAnimation delay={0.2}>
              <span className="badge badge-cyan">Contacto</span>
            </RevealAnimation>
            <div className="space-y-3">
              <RevealAnimation delay={0.3}>
                <h2 id="contact-heading">¿Listo para impulsar tu negocio?</h2>
              </RevealAnimation>
              <RevealAnimation delay={0.4}>
                <p className="mx-auto max-w-[540px] sm:w-full">
                  Cuéntanos sobre tu proyecto o escríbenos directo por WhatsApp. Te respondemos
                  desde Guayaquil con una propuesta clara en menos de 24 horas.
                </p>
              </RevealAnimation>
            </div>

            {/* Canales directos rápidos */}
            <RevealAnimation delay={0.45}>
              <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                <a
                  href="https://wa.link/ku5ww8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#1E62F5] px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-blue-600/20 transition-all hover:bg-blue-700"
                >
                  <span>💬 Chat directo por WhatsApp</span>
                </a>
                <a
                  href="mailto:hola@teracode.tech"
                  className="dark:bg-background-6 dark:text-accent border-stroke-3 dark:border-stroke-6 inline-flex items-center gap-2 rounded-full border bg-white px-5 py-2.5 text-sm font-medium text-slate-800 transition-colors hover:border-[#1E62F5]"
                >
                  <span>✉️ teracode.techec@gmail.com</span>
                </a>
              </div>
            </RevealAnimation>
          </div>

          {/* Formulario */}
          <RevealAnimation delay={0.5}>
            <div className="contact-form dark:bg-background-6 mx-auto max-w-[850px] rounded-[20px] border border-gray-200/70 bg-white p-6 shadow-sm sm:p-[42px] md:w-full dark:border-gray-800">
              <form onSubmit={handleSubmit}>
                <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                  {/* Nombre completo */}
                  <div className="space-y-2">
                    <label
                      htmlFor="fullname"
                      className="text-tagline-1 text-secondary dark:text-accent block font-medium"
                    >
                      Tu nombre o negocio *
                    </label>
                    <input
                      type="text"
                      id="fullname"
                      name="fullname"
                      value={formData.fullname}
                      onChange={handleChange}
                      placeholder="Ej. Carlos Mendoza / Café del Centro"
                      required
                      autoComplete="name"
                      className="shadow-1 dark:text-accent dark:bg-background-6 border-stroke-3 dark:border-stroke-6 bg-background-1 text-tagline-1 dark:placeholder:text-accent/60 placeholder:text-secondary/60 placeholder:text-tagline-1 w-full rounded-full border px-[18px] py-2.5 font-normal placeholder:font-normal focus:border-[#1E62F5] focus:outline-none"
                    />
                  </div>

                  {/* WhatsApp / Teléfono */}
                  <div className="space-y-2">
                    <label
                      htmlFor="whatsapp"
                      className="text-tagline-1 text-secondary dark:text-accent block font-medium"
                    >
                      WhatsApp de contacto *
                    </label>
                    <input
                      type="tel"
                      id="whatsapp"
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleChange}
                      placeholder="Ej. 099 123 4567"
                      required
                      autoComplete="tel"
                      className="shadow-1 dark:text-accent dark:bg-background-6 border-stroke-3 dark:border-stroke-6 bg-background-1 text-tagline-1 dark:placeholder:text-accent/60 placeholder:text-secondary/60 placeholder:text-tagline-1 w-full rounded-full border px-[18px] py-2.5 font-normal placeholder:font-normal focus:border-[#1E62F5] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                  {/* Correo electrónico */}
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-tagline-1 text-secondary dark:text-accent block font-medium"
                    >
                      Correo electrónico (opcional)
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="tu@negocio.com"
                      autoComplete="email"
                      className="shadow-1 dark:text-accent dark:bg-background-6 border-stroke-3 dark:border-stroke-6 bg-background-1 text-tagline-1 dark:placeholder:text-accent/60 placeholder:text-secondary/60 placeholder:text-tagline-1 w-full rounded-full border px-[18px] py-2.5 font-normal placeholder:font-normal focus:border-[#1E62F5] focus:outline-none"
                    />
                  </div>

                  {/* Tipo de proyecto */}
                  <div className="space-y-2">
                    <label
                      htmlFor="projectType"
                      className="text-tagline-1 text-secondary dark:text-accent block font-medium"
                    >
                      ¿Qué necesitas desarrollar?
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="shadow-1 dark:text-accent dark:bg-background-6 border-stroke-3 dark:border-stroke-6 bg-background-1 text-tagline-1 w-full rounded-full border px-[18px] py-2.5 font-normal focus:border-[#1E62F5] focus:outline-none"
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
                      <option value="Sistema Web o Desarrollo a Medida">
                        Sistema Web o Desarrollo a Medida
                      </option>
                    </select>
                  </div>
                </div>

                {/* Mensaje */}
                <div className="mb-6 space-y-2">
                  <label
                    htmlFor="message"
                    className="text-tagline-1 text-secondary dark:text-accent block font-medium"
                  >
                    Cuéntanos brevemente sobre tu proyecto *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Ej. Tengo un local en Guayaquil y quiero una página con catálogo de productos donde mis clientes hagan pedidos directo a WhatsApp..."
                    required
                    className="dark:bg-background-6 dark:text-accent border-stroke-3 dark:border-stroke-6 bg-background-1 text-tagline-1 dark:placeholder:text-accent/60 placeholder:text-secondary/60 placeholder:text-tagline-1 w-full rounded-2xl border px-[18px] py-3 font-normal placeholder:font-normal focus:border-[#1E62F5] focus:outline-none"
                  />
                </div>

                {/* Checkbox de privacidad */}
                <fieldset className="mb-6 flex items-center gap-2">
                  <label htmlFor="terms" className="flex items-center gap-x-3">
                    <input id="terms" type="checkbox" className="peer sr-only" defaultChecked required />
                    <span className="border-stroke-3 dark:border-stroke-7 relative size-4 cursor-pointer rounded-full border after:absolute after:top-1/2 after:left-1/2 after:size-2.5 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:bg-[#1E62F5] after:opacity-0 peer-checked:border-[#1E62F5] peer-checked:after:opacity-100" />
                  </label>
                  <label
                    htmlFor="terms"
                    className="text-tagline-3 text-secondary/70 dark:text-accent/70 cursor-pointer"
                  >
                    Acepto ser contactado por WhatsApp o correo para recibir mi cotización.
                  </label>
                </fieldset>

                {/* Botón de envío */}
                <button
                  type="submit"
                  className="btn btn-md w-full !bg-[#1E62F5] font-semibold !text-white shadow-lg shadow-blue-600/20 transition-all before:content-none hover:!bg-blue-700"
                >
                  Enviar solicitud por WhatsApp →
                </button>
              </form>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default Contact;