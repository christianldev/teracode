'use client';

import RevealAnimation from '@/components/animation/RevealAnimation';
import { MobileMenuProvider } from '@/context/MobileMenuContext';
import { mobileMenuData } from '@/data/navbar-data';
import { useNavbarScroll } from '@/hooks/useScrollHeader';
import { cn } from '@/utils/cn';
import logoDark from '@public/images/shared/logo-dark.svg';
import logoIcon from '@public/images/shared/logo.svg';
import mainLogo from '@public/images/shared/main-logo.svg';
import mainLogoDark from '@public/images/shared/main-logo-dark.svg';
import Image from 'next/image';
import Link from 'next/link';
import MobileMenu from '../mobile-menu/MobileMenu';
import MobileMenuButton from '../mobile-menu/MobileMenuButton';

const navItems = [
  { label: 'Servicios', href: '/services' },
  { label: 'Portafolio', href: '/case-study' },
  { label: 'Proceso', href: '/process' },
  { label: 'Preguntas', href: '/faq' },
  { label: 'Contacto', href: '/contact-us' },
];

const Navbar = () => {
  const { isScrolled } = useNavbarScroll(150);

  return (
    <MobileMenuProvider>
      <header
        className={cn(
          'lp:!max-w-[1290px] fixed top-5 left-1/2 z-[100] mx-auto w-full max-w-[350px] -translate-x-1/2 px-3 transition-all duration-500 min-[425px]:max-w-[375px] min-[500px]:max-w-[450px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]',
          isScrolled && 'top-2',
        )}>
        <RevealAnimation direction="up" offset={100} delay={0.1} instant>
          {/* Glassmorphic pill container */}
          <div className="relative mx-auto max-w-full">
            <div
              className={cn(
                'navbar-glow relative mx-auto flex items-center justify-between rounded-full px-4 py-2.5 transition-all duration-300 xl:py-1.5',
                /* Frosted glass con opacidad suficiente para leer texto oscuro sobre cualquier foto */
                'bg-white/80 backdrop-blur-xl',
                'dark:bg-background-8/85 dark:backdrop-blur-xl',
                /* Borde sutil definido para separar la píldora del fondo blanco derecho */
                'border border-slate-200/80 dark:border-slate-900/80',
                /* Sombra suave elevada */
                'shadow-[0_8px_30px_rgb(0,0,0,0.08)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.4)]',
                /* Al hacer scroll se vuelve casi sólido para máxima lectura sobre el contenido */
                isScrolled && 'bg-white/95 shadow-[0_10px_35px_rgb(0,0,0,0.12)] dark:bg-background-7/95',
              )}>
              {/* Background layer for overflow clipping without hiding dropdowns */}
              <div className="absolute inset-0 -z-10 overflow-hidden rounded-full">
                {/* shine streak — matches card::after `shine` keyframe */}
                <span
                  aria-hidden
                  style={{ animation: 'glass-shine 10s ease infinite' }}
                  className="pointer-events-none absolute h-3 w-[150%] rotate-[50deg] bg-white blur-[30px]"
                />

                {/* subtle top-edge highlight streak */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent dark:hidden"
                />
              </div>

              <div className="flex items-center justify-center">
                <Link href="/" className="inline-flex items-center">
                  <span className="sr-only">Home</span>
                  <figure className="hidden p-2 lg:block lg:max-w-[160px]">
                    <Image src={mainLogo} alt="TeraCode" className="block h-auto w-full dark:hidden" priority />
                    <Image src={mainLogoDark} alt="TeraCode" className="hidden h-auto w-full dark:block" priority />
                  </figure>
                  <figure className="block max-w-[44px] lg:hidden">
                    <Image src={logoIcon} alt="TeraCode" className="block h-auto w-full dark:hidden" priority />
                    <Image src={logoDark} alt="TeraCode" className="hidden h-auto w-full dark:block" priority />
                  </figure>
                </Link>
              </div>

              <nav className="hidden items-center xl:flex">
                <ul className="flex items-center gap-1">
                  {navItems.map(({ label, href }) => (
                    <li key={label} className="relative py-2.5">
                      <Link
                        href={href}
                        className={cn(
                          'text-tagline-1 flex items-center rounded-full border px-4 py-2 font-normal transition-all duration-200',
                          'text-secondary dark:text-accent/80 border-transparent',
                          'hover:text-secondary hover:border-white/25 hover:bg-white/10 hover:shadow-[0_2px_12px_rgba(0,0,0,0.08)]',
                          'dark:hover:text-accent dark:hover:border-white/10 dark:hover:bg-white/[0.07]',
                        )}>
                        <span>{label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="hidden items-center justify-center xl:flex">
                <Link href="/contact-us" className="btn btn-md btn-primary hover:btn-white-dark dark:hover:btn-white">
                  <span>Cotizar proyecto</span>
                </Link>
              </div>

              <MobileMenuButton />
            </div>
          </div>
        </RevealAnimation>
      </header>
      <MobileMenu menuData={mobileMenuData} />
    </MobileMenuProvider>
  );
};

Navbar.displayName = 'Navbar';
export default Navbar;
