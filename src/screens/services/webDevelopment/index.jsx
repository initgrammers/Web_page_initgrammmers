"use client"
import dynamic from 'next/dynamic';
import Banner from './sections/Banner';
import WebDevelopment from '#constants/seo/WebDevelopment';
import SEO from '#Components/SEO';
import Organization from '#Components/StructuredData/Organization';
import WebSite from '#Components/StructuredData/WebSite';
import Article from '#Components/StructuredData/Article';
import FAQPage from '#Components/StructuredData/FAQPage';
import { visibilityCompany } from '#constants/services/webDevelopment';

const VisibilityCompany = dynamic(() => import('./sections/VisibilityCompany'));
const NeedAnUpdate = dynamic(() => import('./sections/NeedAnUpdate'));
const WebApplicationTypes = dynamic(() =>
  import('./sections/WebApplicationTypes')
);
const SliderTech = dynamic(() => import('./sections/SliderTech'));
const PartOfInternetWorld = dynamic(() =>
  import('./sections/PartOfInternetWorld')
);
const Questions = dynamic(() => import('./sections/Questions'));

const index = () => (
  <>
    <SEO {...WebDevelopment} />
    <Banner />
    <VisibilityCompany />
    <NeedAnUpdate />
    <WebApplicationTypes />
    <SliderTech />
    <PartOfInternetWorld />
    <Questions />

    <Organization />
    <WebSite title={WebDevelopment.title} url={WebDevelopment.urlAltern} />
    <Article
      title={WebDevelopment.title}
      description={WebDevelopment.description}
      url={WebDevelopment.urlAltern}
      mainArticle={visibilityCompany.description}
    />

    <FAQPage />
  </>
);

export default index;
