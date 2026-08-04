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
import { useState } from 'react';
import MobileMenu from '../mobile-menu/MobileMenu';
import MobileMenuButton from '../mobile-menu/MobileMenuButton';
import CompanyMenu from './CompanyMenu';
import PartnershipMenu from './PartnershipMenu';
import PeopleAndCultureMenu from './PeopleAndCultureMenu';
import ResourcesMenu from './ResourcesMenu';

const dropdownNavItems = [
  { label: 'Company', dataMenu: 'company-mega-menu', MenuComponent: CompanyMenu },
  { label: 'Collaborate', dataMenu: 'partnership-dropdown-menu', MenuComponent: PartnershipMenu },
  { label: 'Resources', dataMenu: 'resources-mega-menu', MenuComponent: ResourcesMenu },
  { label: 'People & Culture', dataMenu: 'people-dropdown-menu', MenuComponent: PeopleAndCultureMenu },
];

const Navbar = () => {
  const [menuDropdownId, setMenuDropdownId] = useState<string | null>(null);

  const { isScrolled } = useNavbarScroll(150);

  const handleMenuHover = (dropdownId?: string | null) => {
    setMenuDropdownId(dropdownId || null);
  };

  return (
    <MobileMenuProvider>
      <header
        onMouseLeave={() => handleMenuHover(null)}
        className={cn(
          'lp:!max-w-[1290px] fixed top-5 left-1/2 z-50 mx-auto w-full max-w-[350px] -translate-x-1/2 px-3 transition-all duration-500 min-[425px]:max-w-[375px] min-[500px]:max-w-[450px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]',
          isScrolled && 'top-2',
        )}>
        <RevealAnimation direction="up" offset={100} delay={0.1} instant>
          {/* Glassmorphic pill container */}
          <div
            className={cn(
              'relative mx-auto flex items-center justify-between rounded-full px-2.5 py-2.5 xl:py-0',
              /* frosted glass base */
              'bg-white/[0.07] backdrop-blur-2xl',
              'dark:bg-white/[0.04]',
              /* luminous border */
              'border border-white/20 dark:border-white/[0.08]',
              /* layered shadow for depth */
              'shadow-[0_8px_32px_rgba(0,0,0,0.10),0_1px_0_rgba(255,255,255,0.18)_inset]',
              'dark:shadow-[0_8px_32px_rgba(0,0,0,0.40),0_1px_0_rgba(255,255,255,0.06)_inset]',
              /* tighten glass when scrolled */
              isScrolled && 'bg-white/[0.12] backdrop-blur-3xl shadow-[0_12px_40px_rgba(0,0,0,0.15),0_1px_0_rgba(255,255,255,0.22)_inset] dark:bg-white/[0.07]',
            )}>

            {/* subtle top-edge highlight streak */}
            <span
              aria-hidden
              className="pointer-events-none absolute inset-x-6 top-0 h-px rounded-full bg-gradient-to-r from-transparent via-white/40 to-transparent dark:via-white/20"
            />

            <div className="flex items-center justify-center">
              <Link href="/" className="inline-flex items-center">
                <span className="sr-only">Home</span>
                <figure className="hidden lg:block lg:max-w-[110px]">
                  <Image src={mainLogo} alt="NextSaaS" className="block h-auto w-full dark:hidden" priority />
                  <Image src={mainLogoDark} alt="NextSaaS" className="hidden h-auto w-full dark:block" priority />
                </figure>
                <figure className="block max-w-[44px] lg:hidden">
                  <Image src={logoIcon} alt="NextSaaS" className="block h-auto w-full dark:hidden" priority />
                  <Image src={logoDark} alt="NextSaaS" className="hidden h-auto w-full dark:block" priority />
                </figure>
              </Link>
            </div>

            <nav className="hidden items-center xl:flex">
              <ul className="flex items-center">
                {dropdownNavItems.map(({ label, dataMenu, MenuComponent }) => (
                  <li
                    key={label}
                    className="group/item relative cursor-pointer py-2.5"
                    data-menu={dataMenu}
                    onMouseEnter={() => handleMenuHover(dataMenu)}>
                    <button
                      type="button"
                      className={cn(
                        'text-tagline-1 flex cursor-pointer items-center gap-1 rounded-full border px-4 py-2 font-normal transition-all duration-200',
                        /* glass tint on hover */
                        'border-transparent text-secondary/60 dark:text-accent/60',
                        'hover:border-white/25 hover:bg-white/10 hover:text-secondary hover:shadow-[0_2px_12px_rgba(0,0,0,0.08)]',
                        'dark:hover:border-white/10 dark:hover:bg-white/[0.07] dark:hover:text-accent',
                      )}>
                      <span>{label}</span>
                      <span className="block origin-center translate-y-px transition-all duration-300 group-hover/item:rotate-180">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                      </span>
                    </button>
                    <MenuComponent menuDropdownId={menuDropdownId} setMenuDropdownId={setMenuDropdownId} />
                  </li>
                ))}
                <li className="relative cursor-pointer py-2.5">
                  <Link
                    href="/pricing"
                    className={cn(
                      'text-tagline-1 flex items-center gap-1 rounded-full border px-4 py-2 font-normal transition-all duration-200',
                      'border-transparent text-secondary/60 dark:text-accent/60',
                      'hover:border-white/25 hover:bg-white/10 hover:text-secondary hover:shadow-[0_2px_12px_rgba(0,0,0,0.08)]',
                      'dark:hover:border-white/10 dark:hover:bg-white/[0.07] dark:hover:text-accent',
                    )}>
                    <span>Pricing</span>
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="hidden items-center justify-center xl:flex">
              {/* CTA with subtle glow ring */}
              <Link
                href="/signup"
                className="btn btn-md btn-primary relative overflow-hidden shadow-[0_0_18px_rgba(var(--color-primary,99,102,241),0.35)] transition-shadow duration-300 hover:shadow-[0_0_28px_rgba(var(--color-primary,99,102,241),0.55)] hover:btn-white-dark dark:hover:btn-white">
                <span>Get started</span>
              </Link>
            </div>

            <MobileMenuButton />
          </div>
        </RevealAnimation>
      </header>
      <MobileMenu menuData={mobileMenuData} />
    </MobileMenuProvider>
  );
};

Navbar.displayName = 'Navbar';
export default Navbar;
