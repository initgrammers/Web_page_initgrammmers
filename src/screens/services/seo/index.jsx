import BenefitsTypes from './sections/BenefitsTypes';
import Oportunities from './sections/Oportunities';
import Banner from './sections/Banner';
import Questions from './sections/Questions';
import SEOsearch from '#constants/seo/SEO';
import SEO from '#Components/SEO';
import ImportanceSEO from './sections/ImportanceSEO';
import WhatIsSEO from './sections/WhatIsSEO';

const index = () => (
  <>
    <SEO {...SEOsearch} />
    <Banner />
    <ImportanceSEO />
    <BenefitsTypes />
    <WhatIsSEO />
    <Oportunities />
    <Questions />
  </>
);

export default index;
