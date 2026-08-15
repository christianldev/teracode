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
          'lp:!max-w-[1290px] fixed top-5 left-1/2 z-[100] mx-auto w-full max-w-[350px] -translate-x-1/2 px-3 transition-all duration-500 min-[425px]:max-w-[375px] min-[500px]:max-w-[450px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]',
          isScrolled && 'top-2',
        )}>
        <RevealAnimation direction="up" offset={100} delay={0.1} instant>
          {/* Glassmorphic pill container */}
          <div className="relative mx-auto max-w-full">
            <div
              className={cn(
                'navbar-glow relative mx-auto flex items-center justify-between rounded-full px-2.5 py-2.5 xl:py-0',
                /* frosted glass — matches `card` from source: backdrop-blur + semi-transparent */
                'bg-white/25 backdrop-blur-[38px]',
                'dark:bg-white/10 dark:backdrop-filter dark:backdrop-blur-lg',
                /* matches `border: 1px solid #ffffff56` */
                'border border-white/24 dark:border-transparent dark:backdrop-filter dark:backdrop-blur-lg',
                /* matches `box-shadow: inset 2px 1px 6px #ffffff45` */
                'shadow-[inset_2px_1px_6px_rgba(255,255,255,0.27),0_8px_32px_rgba(0,0,0,0.08)]',
                'dark:shadow-none',
                isScrolled && 'bg-white/25 backdrop-blur-[36px]',
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
                  <figure className="hidden lg:block lg:max-w-[160px] p-2">
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
                <ul className="flex items-center">

                  <li className="relative cursor-pointer py-2.5">
                    <Link
                      href="/about"
                      className={cn(
                        'text-tagline-1 flex items-center gap-1 rounded-full border px-4 py-2 font-normal transition-all duration-200',
                        'border-transparent text-secondary dark:text-accent/20',
                        'hover:border-white/25 hover:bg-white/10 hover:text-secondary hover:shadow-[0_2px_12px_rgba(0,0,0,0.08)]',
                        'dark:hover:border-white/10 dark:hover:bg-white/[0.07] dark:hover:text-accent',
                      )}>
                      <span>Nosotros</span>
                    </Link>
                  </li>
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
                          'border-transparent text-secondary/60 dark:text-accent/80',
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
                <Link href="/signup" className="btn btn-md btn-primary hover:btn-white-dark dark:hover:btn-white">
                  <span>Get started</span>
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
