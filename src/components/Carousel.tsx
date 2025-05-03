'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { StaticImageData } from 'next/image';
import Image from 'next/image';
import Icon from './Icon';

export type Card = {
  name: string;
  subtitle: string
  image: StaticImageData;
  description: string;
};

type CardCarouselProps = {
  items: Card[];
  title?: string;
};

export default function CardCarousel({ items, title }: CardCarouselProps) {
  return (
    <div className="relative w-full">
      <div className="relative max-w-330 px-4 mx-auto overflow-visible py-10 md:py-20">
        <button className="swiper-button-prev-custom-1 hidden md:block absolute top-[85px] right-[72px] z-10 text-orange hover:text-blueLink hover:cursor-pointer transition-all duration-300" aria-label="Previous slide">
          <Icon name='carouselLeft' fill='currentColor' />
        </button>
        <button className="swiper-button-next-custom-1 hidden md:block absolute top-[85px] right-0 z-10 text-orange hover:text-blueLink hover:cursor-pointer transition-all duration-300" aria-label="Next slide">
          <Icon name='carouselRight' fill='currentColor' />
        </button>

        <h2 className='text-blueText font-roboto text-[24px] lg:text-[56px] font-[700] leading-[1.1] pb-8 md:pb-20'>{title}</h2>
        <Swiper
          modules={[Navigation]}
          slidesPerView={1.1}
          spaceBetween={16}
          navigation={{
            prevEl: '.swiper-button-prev-custom-1',
            nextEl: '.swiper-button-next-custom-1',
          }}
          breakpoints={{
            640: {
              slidesPerView: 1.5,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2.2,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
          }}
          className="!overflow-visible"
        >
          {items.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-white rounded-[16px] flex flex-col gap-8 p-8 shadow-boxShadow w-[309px] md:w-[412px]">
                <p className="text-[18px] text-black font-roboto font-[400] leading-[1.6]">{item.description}</p>

                <div className='flex flex-row items-center justify-start gap-4'>
                  <Image src={item.image} alt={item.name} height={64} width={64} className='rounded-full' />
                  <div className='flex flex-col justify-start'>
                    <h3 className="text-[18px] text-black font-roboto font-[400] leading-[1.6]">{item.name}</h3>
                    <p className="text-[16px] text-blueText font-roboto font-[400] leading-[1.4]">{item.subtitle}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
