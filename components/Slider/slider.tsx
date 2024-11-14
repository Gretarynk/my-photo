
import React from 'react';
import styles from './slider.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper/modules';
import { images } from '@/app/lib/images';
import Image,{ StaticImageData }  from 'next/image'; // Import Image from next/image

import 'swiper/css';
import 'swiper/css/effect-fade';

interface ImageType {
    src: StaticImageData; 
    alt: string; }

interface SliderProps {
    images: ImageType[]; 
}

const Slider = ({ images }: SliderProps) => {
    return (
        <div className={styles.containerSwiper}>
            <Swiper 
            navigation
            modules={[EffectFade]} effect="fade">
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <div className={styles.slideBox}>
                            <Image 
                                src={image.src} // Use the correct source
                                alt={image.alt} 
                               fill
                                style={{objectFit: 'cover'}}
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Slider;