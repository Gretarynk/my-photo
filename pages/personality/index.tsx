import React from "react";

import PageTemplate from "@/components/PageTemplate/pageTemplate";
import GalleryTemplate from "@/components/GalleryTemplate/galleryTemplate";
import {images} from '@/app/lib/images';

const Personality = () => {
  return (
    <PageTemplate>
      <GalleryTemplate
        title="Personality"
        content="I dont know the person who 100% is in acceptance of own look gcfcukhgbjkhdjfghgjdjbgfjbvijdskhvgiusvgbdjsbduijsvgbdijvdjvbjdbvjdbv
        jkdbvjdbvidjbvjbvjbcvjbcvjbcjvbcjbvjcbvjcbvjxbcvkjxcb "
        images={images}

      />
    </PageTemplate>
  );
};

export default Personality;
