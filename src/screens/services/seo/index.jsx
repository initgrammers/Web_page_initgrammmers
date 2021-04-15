import dynamic from 'next/dynamic';
import Banner from './sections/Banner';
import SEOsearch from '#constants/seo/SEO';
import SEO from '#Components/SEO';
import Organization from '#Components/StructuredData/Organization';
import WebSite from '#Components/StructuredData/WebSite';
import Article from '#Components/StructuredData/Article';
import { importanceSEO } from '#constants/services/seo';

const ImportanceSEO = dynamic(() => import('./sections/ImportanceSEO'));
const BenefitsTypes = dynamic(() => import('./sections/BenefitsTypes'));
const WhatIsSEO = dynamic(() => import('./sections/WhatIsSEO'));
const Oportunities = dynamic(() => import('./sections/Oportunities'));
const Questions = dynamic(() => import('./sections/Questions'));

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
