"use client";

import Image from "next/image";
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';

import Image_1 from '../../../public/Images/product_2.svg';
import Image_2 from '../../../public/Images/product_3.svg';
import Image_3 from '../../../public/Images/product_4.svg';
import Image_4 from '../../../public/Images/product_5.svg';

const images = [
    Image_1,
    Image_2,
    Image_3,
    Image_4
]

const ProductGallery = () => {
    const [mainSwiper, setMainSwiper] = useState<SwiperType | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const visibleThumbs = images.slice(0, 2);
    const remainingCount = Math.max(images.length - visibleThumbs.length, 0);
    const extraThumbImage = images[2] ?? images[images.length - 1];

    return (
        <div className="relative w-full max-w-md mx-auto p-2 sm:p-4 space-y-4 bg-white rounded-[32px]">
            <div className="pointer-events-none rounded-tl-lg rounded-tr-lg absolute inset-x-0 top-0 z-10 p-4 bg-linear-to-b from-black/30 to-transparent">
                <div className="flex gap-2">
                    {images.map((_, index) => (
                        <div
                            key={index}
                            className="h-1 flex-1 rounded-full bg-white/30 overflow-hidden"
                        >
                            <div
                                className={`h-full rounded-full transition-all duration-300 ${activeIndex === index ? 'bg-white' : 'bg-white/70'}`}
                                style={{ width: activeIndex >= index ? '100%' : '0%' }}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className="relative rounded-[28px] overflow-hidden bg-gray-50 w-full">
                <Swiper
                    spaceBetween={10}
                    navigation={false}
                    modules={[Navigation]}
                    onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                    onSwiper={setMainSwiper}
                    className="rounded-[28px] overflow-hidden w-full"
                >
                    {images.map((src, index) => (
                        <SwiperSlide key={index} className="relative aspect-square w-full">
                            <Image src={src} fill alt="Product" className="object-contain" />
                        </SwiperSlide>
                    ))}
                </Swiper>

                <button
                    type="button"
                    onClick={() => mainSwiper?.slidePrev()}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-20 h-12 w-12 rounded-full bg-[#b7928b] text-white shadow-lg flex items-center justify-center hover:scale-105 transition"
                >
                    <span className="sr-only">Previous image</span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.5 3.5L5 8l4.5 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>

                <button
                    type="button"
                    onClick={() => mainSwiper?.slideNext()}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-20 h-12 w-12 rounded-full bg-[#b7928b] text-white shadow-lg flex items-center justify-center hover:scale-105 transition"
                >
                    <span className="sr-only">Next image</span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.5 3.5L11 8l-4.5 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 w-full">
                {visibleThumbs.map((src, index) => (
                    <button
                        key={index}
                        type="button"
                        onClick={() => mainSwiper?.slideTo(index)}
                        className={`relative overflow-hidden rounded-2xl flex-1 aspect-4/5 bg-[#F5F5F5] ${activeIndex === index ? 'border-gray-500' : 'border-transparent'} hover:border-gray-400`}
                    >
                        <Image src={src} alt={`Thumb ${index}`} fill className="object-contain" />
                    </button>
                ))}
                {remainingCount > 0 && (
                    <button
                        type="button"
                        onClick={() => mainSwiper?.slideTo(visibleThumbs.length)}
                        className={`relative overflow-hidden rounded-2xl flex-1 aspect-4/5 border-2 transition-all ${activeIndex >= visibleThumbs.length ? 'border-gray-500' : 'border-transparent'} hover:border-gray-400`}
                    >
                        <Image src={extraThumbImage} alt="More options" fill className="object-contain" />
                        <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-white font-bold text-xl">
                            +{remainingCount}
                        </div>
                    </button>
                )}
            </div>
        </div>
    );
}

export default ProductGallery;