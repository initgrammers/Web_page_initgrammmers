import BenefitsTypes from './sections/BenefitsTypes';
import Oportunities from './sections/Oportunities';
import Banner from './sections/Banner';
import Questions from './sections/Questions';
import SEOsearch from '#constants/seo/SEO';
import SEO from '#Components/SEO';
import ImportanceSEO from './sections/ImportanceSEO';
import WhatIsSEO from './sections/WhatIsSEO';
import Organization from '#Components/StructuredData/Organization';
import WebSite from '#Components/StructuredData/WebSite';
import Article from '#Components/StructuredData/Article';
import { importanceSEO } from '#constants/services/seo';

const index = () => (
  <>
    <SEO {...SEOsearch} />
    <Banner />
    <ImportanceSEO />
    <BenefitsTypes />
    <WhatIsSEO />
    <Oportunities />
    <Questions />

    <Organization />
    <WebSite title={SEOsearch.title} url={SEOsearch.urlAltern} />
    <Article
      title={SEOsearch.title}
      description={SEOsearch.description}
      url={SEOsearch.urlAltern}
      mainArticle={importanceSEO.description}
    />
  </>
);

export default index;
