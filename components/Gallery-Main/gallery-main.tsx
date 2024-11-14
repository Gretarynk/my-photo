import styles from "../Gallery-Main/gallery.module.css";
import LinkGallery from "../Link-Gallery/link-gallery";
import { Carousel } from "primereact/carousel";
import "primereact/resources/themes/nova/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import Image from "next/image";

interface ImageType {
  src: string;
  alt: string;
  type: string;
}

const Gallerymain = () => {
  const images: ImageType[] = [
    { src: "/DSC_3766.jpg", alt: "Image 1", type: "personality" },
    { src: "/image2.jpg", alt: "Image 2", type: "personality" },
    { src: "/image3.jpg", alt: "Image 3", type: "personality" },
  ];
  const imageTemplate = (image: ImageType) => {
    return (
      <div className={styles.imageContainer}>
        <Image className={styles.photoCarousel} src={image.src} alt={image.alt} 
        layout="fill"
         objectFit="
        cover" 
        objectPosition="top"
        />
      </div>
    );
  };
  return (
    <div className={styles.mainContainer}>
      <LinkGallery/>
      <div className={styles.slideWrapper}>
        <Carousel
          value={images}
          itemTemplate={imageTemplate}
          numVisible={1}
          numScroll={1}
          autoplayInterval={3000}
          circular
          showIndicators={false}
          showNavigators={false}
        />
      </div>
    </div>
  );
};

export default Gallerymain;
