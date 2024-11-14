import styles from './galleryTemplate.module.css'
import LinkGallery from '../Link-Gallery/link-gallery'
import SwiperThumb from '../Swiper/swiperThumb'
// import Slider from '../Slider/slider'


interface galleryTypes{
    title:string;
    content:string;
    images:{ src: StaticImageData; alt: string }[];
    
}


const GalleryTemplate=({title,content,images}:galleryTypes)=>{
    return(
        <div className={styles.mainContainer}>
<LinkGallery/>
<div className={styles.contentWrapper}>
   
    <div className={styles.textWrapper}>
        <h2>{title}</h2>
        <p className="lorem10">{content}</p>
    </div>
</div>
<SwiperThumb images={images}/>
</div>
    )
}

export default GalleryTemplate