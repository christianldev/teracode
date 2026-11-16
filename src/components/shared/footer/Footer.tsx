import RevealAnimation from '@/components/animation/RevealAnimation';
import { footerLinks } from '@/data/footer-data';
import { cn } from '@/utils/cn';
import instagram from '@public/images/icons/instagram.svg';
import mailWhite from '@public/images/icons/mail-white.svg';
import phoneWhite from '@public/images/icons/phone-white.svg';
import mainLogoDark from '@public/images/shared/main-logo-dark.svg';
import Image from 'next/image';
import Link from 'next/link';
import ThemeToggle from '../ThemeToggle';

const Footer = ({ className }: { className?: string }) => {
  return (
    <footer className={cn('relative overflow-hidden bg-[#080f17] text-white', className)}>
      <div className="bg-primary-500/35 pointer-events-none absolute -top-56 left-1/2 h-80 w-[60%] -translate-x-1/2 rounded-full blur-[120px]" />
      <div className="main-container relative px-5">
        <div className="grid gap-12 py-14 sm:py-16 lg:grid-cols-[1.65fr_repeat(3,1fr)] lg:gap-10 lg:py-20">
          <RevealAnimation delay={0.1}>
            <div className="max-w-[290px]">
              <Link href="/" aria-label="Inicio de TeraCode" className="inline-block">
                <Image src={mainLogoDark} alt="TeraCode" className="h-auto w-[235px]" />
              </Link>
              <p className="mt-6 text-base leading-relaxed text-white/65">
                Desarrollo web, tiendas online y sistemas a medida diseñados para impulsar negocios en Ecuador.
              </p>
              <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3 text-sm text-white/90">
                <Link
                  href="https://www.instagram.com/teracode.tech"
                  className="hover:text-primary-400 flex items-center gap-2"
                  aria-label="Instagram de TeraCode">
                  <Image src={instagram} alt="" className="size-5 brightness-0 invert" /> @teracode.tech
                </Link>
                <Link
                  href="https://wa.me/593991234567"
                  className="hover:text-primary-400 flex items-center gap-2"
                  aria-label="WhatsApp de TeraCode">
                  <Image src={phoneWhite} alt="" className="size-5" /> WhatsApp
                </Link>
                <Link
                  href="mailto:hola@teracode.tech"
                  className="hover:text-primary-400 flex items-center gap-2"
                  aria-label="Correo de TeraCode">
                  <Image src={mailWhite} alt="" className="size-5" /> hola@teracode.tech
                </Link>
              </div>
            </div>
          </RevealAnimation>

          {footerLinks.map(({ title, links }, index) => (
            <RevealAnimation key={title} delay={0.2 + index * 0.1}>
              <div>
                <h2 className="text-lg font-medium text-white">{title}</h2>
                <ul className="mt-5 space-y-3 text-base text-white/75">
                  {links.map(({ label, href }) => (
                    <li key={label}>
                      <Link href={href} className="hover:text-primary-400 transition-colors">
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </RevealAnimation>
          ))}
        </div>

        <div className="flex flex-col justify-between gap-3 border-t border-white/15 py-6 text-sm text-white/75 sm:flex-row sm:items-center">
          <p>© 2026 TeraCode. Todos los derechos reservados.</p>
          <p>Guayaquil, Ecuador</p>
        </div>
      </div>
      <ThemeToggle />
    </footer>
  );
};

Footer.displayName = 'Footer';
export default Footer;
