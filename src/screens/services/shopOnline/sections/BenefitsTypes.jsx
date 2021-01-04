import React from 'react';
import SectionApplicationTypes from '#Components/SectionApplicationTypes';
import { benefitsTypes } from '#app/constants/services/ShopOnline';

const MobileApplicationTypes = () => (
  <SectionApplicationTypes
    backgroundImage={benefitsTypes.backgroundImage}
    heightImage={benefitsTypes.heightImage}
    sectionTitle={benefitsTypes.title}
    typesApplication={benefitsTypes.typesApplication}
    image={benefitsTypes.image}
    imageSizes={benefitsTypes.imageSizes}
    backgroundGray={benefitsTypes.backgroundGray}
  />
);

export default MobileApplicationTypes;
