import React from 'react';
import SectionApplicationTypes from '#Components/SectionApplicationTypes';
import { benefitsTypes } from '#app/constants/services/ShopOnline';

const MobileApplicationTypes = () => (
  <SectionApplicationTypes
    sectionTitle={benefitsTypes.title}
    typesApplication={benefitsTypes.typesApplication}
    image={benefitsTypes.image}
    imageSizes={benefitsTypes.imageSizes}
    backgroundPrimayLight={benefitsTypes.backgroundPrimayLight}
    color="red"
  />
);

export default MobileApplicationTypes;
