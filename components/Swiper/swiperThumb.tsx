import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Scrollbar } from 'swiper';
import Image, { StaticImageData } from 'next/image';
import styles from './swiperThumb.module.css';

import 'swiper/css';
import 'swiper/css/scrollbar';

SwiperCore.use([Scrollbar]);

interface SwiperThumbProps {
  images: { src: StaticImageData; alt: string }[];
}

const SwiperThumb: React.FC<SwiperThumbProps> = ({ images }) => {
  const initialImage = images.length > 0 ? images[0] : { src: '', alt: '' }; // Fallback if empty
  const [activeImage, setActiveImage] = useState(initialImage);

  // Swiper reference
  const swiperRef = useRef<SwiperCore>();

  const handleMainImageClick = () => {
    if (images.length > 0) {
      const currentIndex = images.findIndex((img) => img.src === activeImage.src);
      const nextIndex = (currentIndex + 1) % images.length;
      setActiveImage(images[nextIndex]);

      // Move the swiper to the next slide programmatically
      if (swiperRef.current) {
        swiperRef.current.slideTo(nextIndex);
      }
    }
  };

  const handleThumbnailClick = (img: { src: StaticImageData; alt: string }, index: number) => {
    // Set the clicked thumbnail as the active image
    setActiveImage(img);

    // Move the swiper to the clicked thumbnail
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };

  const scrollSwiper = (direction: 'up' | 'down') => {
    if (swiperRef.current) {
      const currentIndex = swiperRef.current.activeIndex;

      // Check if we need to scroll up or down
      if (direction === 'up' && currentIndex > 0) {
        swiperRef.current.slideTo(currentIndex - 1);
      } else if (direction === 'down' && currentIndex < images.length - 1) {
        swiperRef.current.slideTo(currentIndex + 1);
      }
    }
  };

  return (
    <div className={styles.container}>
      {/* Large Image Display */}
      <div className={styles.mainImageContainer}>
        {activeImage.src ? (
          <div className={styles.mainImage}>
            <Image
              src={activeImage.src}
              alt="Active"
              layout="responsive"
              objectFit="contain" // This ensures the image maintains aspect ratio while being fully visible
              onClick={handleMainImageClick}
            />
          </div>
        ) : (
          <div>No images available</div>
        )}
      </div>

      {/* Thumbnails Slider on the right side */}
      <div className={styles.thumbnailSwiper}>
        <button
          className={`${styles.scrollButton} ${styles.scrollButtonUp}`}
          onClick={() => scrollSwiper('up')}
        >
          &#9650; {/* Up arrow */}
        </button>
        
        <Swiper
          direction="vertical"
          slidesPerView={3}
          spaceBetween={2}
          onSlideChange={(swiper) => setActiveImage(images[swiper.activeIndex])}
          onSwiper={(swiper) => (swiperRef.current = swiper)} // Reference to the swiper instance
          scrollbar={{ draggable: true }}
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <div className={styles.thumbnailSlide}>
                <Image
                  src={img.src}
                  alt={`Thumbnail ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className={`${styles.thumbnailImage} ${
                    img === activeImage ? styles.active : ''
                  }`}
                  onClick={() => handleThumbnailClick(img, index)}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          className={`${styles.scrollButton} ${styles.scrollButtonDown}`}
          onClick={() => scrollSwiper('down')}
        >
          &#9660; {/* Down arrow */}
        </button>
      </div>
    </div>
  );
};

export default SwiperThumb;
