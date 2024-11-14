import React from 'react';

import PageTemplate from "@/components/PageTemplate/pageTemplate";
import GalleryTemplate from "@/components/GalleryTemplate/galleryTemplate";
import {images} from '@/app/lib/images';

const Family = () => {
    return (
     <PageTemplate>
      <GalleryTemplate
        title="Family"
        content="I dont know the person who 100% is in acceptance of own look "
        images={images}

      />
      </PageTemplate>
  
    );
  };
  
  export default Family;