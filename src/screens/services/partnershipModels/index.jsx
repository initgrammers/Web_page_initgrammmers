"use client"
import dynamic from 'next/dynamic';
import Banner from './sections/Banner';
import SEOsearch from '#constants/seo/SEO';
import Organization from '#Components/StructuredData/Organization';
import WebSite from '#Components/StructuredData/WebSite';
import Article from '#Components/StructuredData/Article';
import { importancePartnershipModels } from '#constants/services/partnershipModels';

const ImportancePartnershipModels = dynamic(() => import('./sections/ImportancePartnershipModels'));
const BenefitsTypes = dynamic(() => import('./sections/BenefitsTypes'));
const WhatIsPartnershipModels = dynamic(() => import('./sections/WhatIsPartnershipModels'));
const BecomeYourTeam = dynamic(() => import('./sections/BecomeYourTeam'));
const Oportunities = dynamic(() => import('./sections/Oportunities'));
const Questions = dynamic(() => import('./sections/Questions'));

const index = () => (
  <>
    <Banner />
    <ImportancePartnershipModels />
    <BenefitsTypes />
    <WhatIsPartnershipModels />
    <BecomeYourTeam />
    <Oportunities />
    <Questions />

    <Organization />
    <WebSite title={SEOsearch.title} url={SEOsearch.urlAltern} />
    <Article
      title={SEOsearch.title}
      description={SEOsearch.description}
      url={SEOsearch.urlAltern}
      mainArticle={importancePartnershipModels.description}
    />
  </>
);

export default index;
