import onePersonality from '@/public/DSC_2931.jpg'
import twoPersonality from '@/public/DSC_3766.jpg'
import thirdPersonality from '@/public/DSC_3769.jpg'
import fourPersonality from '@/public/DSC_3876blackwhite.jpg'
import fivePersonality from '@/public/DSC_3822.jpg'
import sixPersonality from '@/public/image1.jpg'
import { StaticImageData } from 'next/image';

export interface ImageType {
    src: StaticImageData; 
    alt: string; 
}

 export const images:ImageType[]=[
    {src:onePersonality, alt: 'One'},
    {src:twoPersonality, alt: 'Two'},
    {src:thirdPersonality, alt: 'Third'},
    {src:fourPersonality, alt: 'Four'},
    {src:fivePersonality, alt: 'Five'},
    {src:sixPersonality, alt: 'Six'},
]
// export default images;