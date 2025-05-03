'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { StaticImageData } from 'next/image';
import Image from 'next/image';
import Icon from '../IconT';
import Square from '../../../public/Brand/square.png';
import './CarouselYellow.css';

export type Card = {
  name: string;
  subtitle: string
  image: StaticImageData;
  description: string;
};

type CarouselYellowProps = {
  items: Card[];
};

export default function CarouselYellow({ items }: CarouselYellowProps) {
  return (
    <div className='bg-yellow'>
      <div className="relative w-full max-w-[650px] xl:max-w-330  mx-auto">

        <div className='absolute right-[21px] bottom-[351px] xl:right-[151px] xl:top-[18px]'>
          <Icon name='chatBubble' />
        </div>

        <div className='hidden xl:block absolute right-5 top-[-30px]'>
          <Icon name='square' />
        </div>

        <div className='xl:hidden absolute left-1/2 -translate-x-1/2 bottom-[-30px]'>
          <Icon name='squareMobile' />
        </div>

        <div className="relative max-w-330 px-4 mx-auto overflow-hidden py-12 md:py-20">

          <Image src={Square} alt='squares' className='absolute bottom-[32px] left-8 xl:left-[auto] xl:right-[422px] z-5' />

          <button className="swiper-button-prev-custom hidden md:block absolute top-1/2 left-0 z-10 transition-all hover:cursor-pointer">
            <Icon name='arrowLeftYellow' />
          </button>

          <button className="swiper-button-next-custom hidden md:block absolute top-1/2 right-0 z-10 transition-all hover:cursor-pointer">
            <Icon name='arrowRightYellow' />
          </button>

          <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView={1}
            spaceBetween={16}
            navigation={{
              prevEl: '.swiper-button-prev-custom',
              nextEl: '.swiper-button-next-custom',
            }}
            className="!overflow-visible"
            pagination={{ clickable: true }}
          >
            {items.map((item, idx) => (
              <SwiperSlide key={idx}>
                <div className="flex flex-col xl:flex-row xl:px-[72px] justify-between items-center">
                  <div className='pb-[88px] xl:pb-0 max-w-[528px]'>
                    <p className="text-[18px] xl:text-[24px] text-blueText font-roboto font-[400] leading-[1.6] pb-4">{item.description}</p>
                    <h3 className="text-[18px] xl:text-[24px] text-blueText font-roboto font-[400] leading-[1.6]">{item.name}</h3>
                    <p className="text-[18px] xl:text-[24px] text-blueText font-roboto font-[600] leading-[1.6]">{item.subtitle}</p>
                  </div>
                  <Image src={item.image} alt={item.name} height={415} width={528} className='max-w-[339px] sm:max-w-[361px] xl:max-w-[528px] rounded-[16px]' />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
