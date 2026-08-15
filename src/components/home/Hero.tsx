'use client'

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

import teracodeBanner1 from '@public/images/banner/teracode-banner-1.jpeg';
import teracodeBanner2 from '@public/images/banner/teracode-banner-2.jpeg';
import teracodeBanner3 from '@public/images/banner/teracode-banner-3.jpeg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import required modules
import { FreeMode, Navigation, Thumbs, EffectFade, Autoplay } from 'swiper/modules';


const Hero = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  return (
    <section className=" bg-cover bg-no-repeat bg-[url('/images/other/bg-lines-2.png')] dark:bg-[url('/images/other/bg-lines-2-dark.png')] active">

      <div className="grid xl:grid-cols-5 grid-cols-1 items-stretch">
        <div className="xl:col-span-3 h-full relative min-w-0 overflow-hidden">

          <Swiper
            style={{
              '--swiper-navigation-color': '#fff',
              '--swiper-pagination-color': '#fff',
            } as React.CSSProperties}
            spaceBetween={0}
            effect={'fade'}
            navigation={{
              nextEl: '.cre-button-next',
              prevEl: '.cre-button-prev',
            }}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs, EffectFade, Autoplay]}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            className="mySwiper swiper-hero swiper-fade h-full w-full"
          >
            <SwiperSlide>
              <div className="relative h-full w-full flex items-center justify-center">
                <Image src={teracodeBanner1} alt="banner" className="w-full h-auto object-contain object-left xl:object-center" />
                <div className="absolute inset-0 bg-black/10"></div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative h-full w-full flex items-center justify-center">
                <Image src={teracodeBanner2} alt="banner" className="w-full h-auto object-contain object-left xl:object-center" />
                <div className="absolute inset-0 bg-black/10"></div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative h-full w-full flex items-center justify-center">
                <Image src={teracodeBanner3} alt="banner" className="w-full h-auto object-contain object-left xl:object-center" />
                <div className="absolute inset-0 bg-black/10"></div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="xl:col-span-2 relative h-full flex flex-col justify-between bg-[#f8f9fa] overflow-hidden">
          {/* Background grid */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '70px 70px' }}></div>

          <div className="flex-1 flex flex-col justify-center relative z-10 px-8 py-12 xl:p-16">
            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={20}
              slidesPerView={1}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2 swiper-hero w-full"
            >
              <SwiperSlide>
                <div className="flex-col flex items-start justify-center w-full">
                  <h2 className="text-[36px] xl:text-[44px] font-bold text-default-950 mt-2 leading-[1.1] text-left">Innovative Design Solutions:<br />Unleashing Creativity for You</h2>
                  <p className="w-full text-base text-default-800 font-medium mt-6 max-w-lg text-left leading-relaxed">Their ability to understand our vision and translate it into a comprehensive marketing strategy is truly exceptional.</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex-col flex items-start justify-center w-full">
                  <h2 className="text-[36px] xl:text-[44px] font-bold text-default-950 mt-2 leading-[1.1] text-left">Design Excellence Redefined:<br />Elevate Your Brand with Our Agency</h2>
                  <p className="w-full text-base text-default-800 font-medium mt-6 max-w-lg text-left leading-relaxed">Their ability to understand our vision and translate it into a comprehensive marketing strategy is truly exceptional.</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex-col flex items-start justify-center w-full">
                  <h2 className="text-[36px] xl:text-[44px] font-bold text-default-950 mt-2 leading-[1.1] text-left">Crafting Vision into Reality:<br />Design Agency at Your Service</h2>
                  <p className="w-full text-base text-default-800 font-medium mt-6 max-w-lg text-left leading-relaxed">Their ability to understand our vision and translate it into a comprehensive marketing strategy is truly exceptional.</p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="relative z-10 w-full px-8 xl:px-16 pb-12">
            <div className="flex items-center justify-end gap-5">
              <div className="cre-button-prev cursor-pointer group" tabIndex={0} role="button" aria-label="Previous slide">
                <div className="h-[60px] w-[60px] rounded-full border border-gray-200 bg-white group-hover:bg-primary flex items-center justify-center transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left h-5 w-5 stroke-gray-900 group-hover:stroke-white transition-colors"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
                </div>
              </div>
              <div className="cre-button-next cursor-pointer group" tabIndex={0} role="button" aria-label="Next slide">
                <div className="h-[60px] w-[60px] rounded-full border border-gray-200 bg-white group-hover:bg-primary flex items-center justify-center transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right h-5 w-5 stroke-gray-900 group-hover:stroke-white transition-colors"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
