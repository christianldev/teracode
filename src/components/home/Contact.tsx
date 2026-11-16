import locationWhite from '@public/images/icons/location-white.svg';
import location from '@public/images/icons/location.svg';
import mailWhite from '@public/images/icons/mail-white.svg';
import mail from '@public/images/icons/mail.svg';
import phoneWhite from '@public/images/icons/phone-white.svg';
import phone from '@public/images/icons/phone.svg';
import Image from 'next/image';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

const Contact = () => {
  return (
    <section className="relative overflow-hidden py-16 md:py-20 lg:py-24" aria-label="Contacto">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_75%,rgba(0,103,255,0.14),transparent_34%)]" />
      <div className="main-container relative">
        <div className="mx-auto grid max-w-[860px] items-center gap-10 lg:grid-cols-[1.35fr_0.9fr] lg:gap-16">
          <div className="space-y-7">
            <div className="space-y-4">
              <RevealAnimation delay={0.1}>
                <span className="badge badge-cyan inline-block">Contacto</span>
              </RevealAnimation>
              <div className="space-y-3">
                <RevealAnimation delay={0.2}>
                  <h2>
                    ¿Listo para impulsar <span className="text-primary-500">tu negocio?</span>
                  </h2>
                </RevealAnimation>
                <RevealAnimation delay={0.3}>
                  <p className="max-w-[440px] text-lg">
                    Cuéntanos sobre tu proyecto o idea y recibe una propuesta personalizada en menos de 24 horas.
                  </p>
                </RevealAnimation>
              </div>
            </div>

            <ul className="space-y-3" aria-label="Información de contacto">
              <ContactItem
                icon={mail}
                iconDark={mailWhite}
                content="hola@teracode.tech"
                href="mailto:hola@teracode.tech"
                delay={0.4}
              />
              <ContactItem
                icon={phone}
                iconDark={phoneWhite}
                content="+593 99 123 4567"
                href="tel:+593991234567"
                delay={0.5}
              />
              <ContactItem
                icon={location}
                iconDark={locationWhite}
                content="Guayaquil, Ecuador • Atención a todo el país"
                delay={0.6}
              />
            </ul>

            <RevealAnimation delay={0.7}>
              <Link
                href="https://wa.me/593991234567"
                className="btn btn-primary hover:btn-secondary btn-md"
                aria-label="Escribir directo por WhatsApp">
                <Image src={phoneWhite} alt="" className="size-4" /> Escribir directo por WhatsApp
              </Link>
            </RevealAnimation>
          </div>

          <RevealAnimation delay={0.4} offset={80} direction="left">
            <div className="rounded-[20px] border border-slate-300 bg-white p-6 shadow-xl sm:p-7 dark:border-[#3e5a7c] dark:bg-[#1d2d44]">
              <form action="/" method="post" className="space-y-4">
                <FormField label="Nombre o Negocio" id="name" placeholder="Ingresa tu nombre o el de tu marca" />
                <FormField label="Celular / WhatsApp" id="phone" type="tel" placeholder="Ej: 099 123 4567" />
                <div className="space-y-2">
                  <label htmlFor="project" className="text-secondary dark:text-accent text-sm font-medium">
                    ¿Qué proyecto tienes en mente?
                  </label>
                  <textarea
                    id="project"
                    name="project"
                    placeholder="Cuéntanos brevemente qué necesitas para tu negocio..."
                    className="text-secondary placeholder:text-secondary/60 focus-visible:outline-primary-500 dark:text-accent dark:placeholder:text-accent/60 min-h-[92px] w-full resize-none rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm focus-visible:outline dark:border-[#425779] dark:bg-[#142238]"
                  />
                </div>
                <label
                  htmlFor="privacy"
                  className="text-secondary/75 dark:text-accent/80 flex cursor-pointer items-center gap-2 text-xs">
                  <input
                    id="privacy"
                    type="checkbox"
                    className="accent-primary-500 size-4 rounded border-slate-400"
                    required
                  />
                  Acepto las{' '}
                  <Link href="/privacy-policy" className="underline">
                    políticas de privacidad
                  </Link>
                </label>
                <button
                  type="submit"
                  className="btn btn-primary hover:btn-secondary btn-md w-full"
                  aria-label="Enviar solicitud gratis">
                  Enviar solicitud gratis →
                </button>
              </form>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

type ContactItemProps = {
  icon: typeof mail;
  iconDark: typeof mailWhite;
  content: string;
  href?: string;
  delay: number;
};

const ContactItem = ({ icon, iconDark, content, href, delay }: ContactItemProps) => (
  <RevealAnimation delay={delay}>
    <li className="flex items-center gap-3">
      <span
        className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white dark:bg-[#1d2d44]"
        aria-hidden="true">
        <Image src={icon} alt="" className="size-5 dark:hidden" />
        <Image src={iconDark} alt="" className="hidden size-5 dark:block" />
      </span>
      {href ? <Link href={href}>{content}</Link> : <p>{content}</p>}
    </li>
  </RevealAnimation>
);

type FormFieldProps = {
  label: string;
  id: string;
  placeholder: string;
  type?: 'text' | 'tel';
};

const FormField = ({ label, id, placeholder, type = 'text' }: FormFieldProps) => (
  <div className="space-y-2">
    <label htmlFor={id} className="text-secondary dark:text-accent text-sm font-medium">
      {label}
    </label>
    <input
      id={id}
      name={id}
      type={type}
      placeholder={placeholder}
      className="text-secondary placeholder:text-secondary/60 focus-visible:outline-primary-500 dark:text-accent dark:placeholder:text-accent/60 w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm focus-visible:outline dark:border-[#425779] dark:bg-[#142238]"
      required
    />
  </div>
);

export default Contact;
