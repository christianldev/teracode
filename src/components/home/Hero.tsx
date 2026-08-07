import heroSectionBg from '@public/images/ns-img-217.svg';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const Hero = () => {
  return (
    <section className="dark:bg-background-6 relative overflow-hidden bg-white min-[1921px]:overflow-hidden">
      {/* large blob — orange-to-magenta, white border + inset glow, slow drift */}
      <span
        aria-hidden
        style={{ animation: 'blob-drift 28s ease-in-out infinite' }}
        className="pointer-events-none absolute top-[8%] left-[42%] h-[280px] w-[280px] -translate-x-full rounded-full border-2 border-white/65 bg-gradient-to-b from-orange-400 to-fuchsia-600 shadow-[inset_14px_0px_28px_#fff] blur-[2px]"
      />
      {/* small blob — horizontal gradient, opposite phase */}
      <span
        aria-hidden
        style={{ animation: 'blob-drift-2 20s ease-in-out infinite' }}
        className="pointer-events-none absolute bottom-[18%] left-[44%] h-[140px] w-[140px] -translate-x-full rounded-full border-2 border-white/65 bg-gradient-to-r from-orange-400 to-fuchsia-600 shadow-[inset_10px_0px_20px_#fff] blur-[1px]"
      />
      {/* accent blob — third drift for depth */}
      <span
        aria-hidden
        style={{ animation: 'blob-drift-3 22s ease-in-out infinite' }}
        className="pointer-events-none absolute top-[30%] left-[55%] h-[100px] w-[100px] rounded-full border-2 border-white/50 bg-gradient-to-br from-pink-500 to-orange-300 shadow-[inset_8px_0px_16px_#fff] blur-[1px]"
      />
      <RevealAnimation offset={0} delay={0.5}>
        <figure className="absolute top-[50%] z-[1] w-full min-[1440px]:top-[350px] min-[2559px]:!top-[0px] sm:top-[38%] md:top-[20%] lg:top-[20%] xl:top-[411px] 2xl:top-[194px]">
          <Image src={heroSectionBg} alt="-bg" className="h-full w-full object-contain" />
        </figure>
      </RevealAnimation>

      <div className="mx-auto max-w-[1365px]">
        <div className="pt-20 pb-14 sm:pt-24 sm:pb-20 md:pt-24 lg:pt-28 xl:pt-[109px] xl:pb-[94px]">
          <div className="h-auto bg-[url('/images/ns-img-218.svg')] bg-center bg-no-repeat xl:h-[962px] dark:bg-[url('/images/ns-img-dark-148.svg')]">
            <div className="main-container">
              <div className="relative z-[2] space-y-10 pt-[71px] md:space-y-14">
                {/* heading  */}
                <div className="space-y-4">
                  <RevealAnimation delay={0.1}>
                    <h1 className="mx-auto max-w-[800px] text-center xl:w-full xl:max-w-[1140px]">
                      Build wealth with
                      <span className="text-primary-500"> automated investments.</span>
                    </h1>
                  </RevealAnimation>
                  <RevealAnimation delay={0.2}>
                    <p className="mx-auto max-w-[600px] text-center md:w-full xl:max-w-[804px]">
                      At TeraCode, we help you invest confidently—offering tools that align with your goals, minimize
                      risk, and maximize long-term growth. Whether saving for retirement or growing your portfolio,
                      we&apos;ve got you covered.
                    </p>
                  </RevealAnimation>
                </div>
                {/* cta btn  */}
                <ul className="flex flex-col items-center justify-center gap-4 text-center sm:flex-row">
                  <RevealAnimation delay={0.3} direction="left" offset={50}>
                    <li className="w-full sm:w-auto">
                      <LinkButton
                        href="/pricing"
                        rel="noopener noreferrer"
                        className="btn btn-secondary dark:btn-accent hover:btn-white dark:hover:btn-white-dark btn-md md:btn-xl mx-auto w-[90%] md:mx-0 md:w-auto"
                        aria-label="Begin your investment journey">
                        Start Investing
                      </LinkButton>
                    </li>
                  </RevealAnimation>
                  <RevealAnimation delay={0.5} direction="left" offset={50}>
                    <li className="w-full sm:w-auto">
                      <LinkButton
                        href="/tutorial"
                        rel="noopener noreferrer"
                        className="btn hover:btn-secondary dark:hover:btn-accent btn-white dark:btn-transparent btn-md md:btn-xl mx-auto w-[90%] md:mx-0 md:w-auto"
                        aria-label="Learn more about our investment platform">
                        Learn more
                      </LinkButton>
                    </li>
                  </RevealAnimation>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
