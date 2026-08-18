
import NextjsLogo from '@public/images/icons/nextjs-icon.svg';
import JavaScriptLogo from '@public/images/icons/javascript.svg';
import NodeLogo from '@public/images/icons/nodejs-icon.svg';
import LaravelLogo from '@public/images/icons/laravel.svg';
import ReactLogo from '@public/images/icons/react.svg';
import PythonLogo from '@public/images/icons/python.svg';
import HTMLLogo from '@public/images/icons/html-5.svg';
import TailwindLogo from '@public/images/icons/tailwindcss-icon.svg';

import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import RevealAnimation from '../animation/RevealAnimation';

export const clientLogos = [
  {
    id: 1,
    image: NextjsLogo,

  },
  {
    id: 2,
    image: JavaScriptLogo,

  },
  {
    id: 3,
    image: NodeLogo,

  },
  {
    id: 4,
    image: LaravelLogo,

  },

  {
    id: 5,
    image: ReactLogo,

  },
  {
    id: 6,
    image: PythonLogo,

  },
  {
    id: 7,
    image: HTMLLogo,

  },
  {
    id: 8,
    image: TailwindLogo,

  },

];

const Clients = () => {
  return (
    <section className="py-16 md:py-20 lg:py-[90px] xl:py-[100px]">
      <div className="main-container">
        <div className="space-y-8 md:space-y-14">
          <RevealAnimation delay={0.1}>
            <h2 className="text-center xl:text-heading-3">
              Nuestras tecnologías

            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <div className="space-y-4 md:space-y-8">
              <article className="relative max-w-[1200px] mx-auto">
                <div className="absolute left-0 top-0 h-full w-[8%] bg-gradient-to-r from-background-2 to-transparent dark:from-background-5 z-40" />
                <div className="absolute right-0 top-0 h-full w-[8%] bg-gradient-to-l from-background-2 to-transparent dark:from-background-5 z-40" />
                <Marquee pauseOnHover={true} autoFill={true}>
                  <div className="flex items-center justify-center gap-8">
                    {clientLogos.map((logo) => (
                      <figure key={logo.id} className="w-10 h-10 sm:w-14 sm:h-14 md:w-18 md:h-18 lg:w-22 lg:h-22 ml-8 flex items-center justify-center">
                        <Image src={logo.image} alt="Client company logo" className="max-w-full max-h-full object-contain" />
                      </figure>
                    ))}
                  </div>
                </Marquee>
              </article>

            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default Clients;
