import React from 'react';
import Gallerymain from '@/components/Gallery-Main/gallery-main';

import PageTemplate from '@/components/PageTemplate/pageTemplate';
import Slider from '@/components/Slider/slider';

const Gallery = () => {
  // Define the paths to your images
  const imagePaths: string[] = [
    '/image1.jpg',
    '/image2.jpg',
    '/image3.jpg'
   
  ];
  console.log(imagePaths);

  return (
    <PageTemplate>
      
       <Gallerymain/>
        
      
    </PageTemplate>
  );
};

export default Gallery;