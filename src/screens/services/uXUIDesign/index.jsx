"use client"
import dynamic from 'next/dynamic';
import Banner from './sections/Banner';
import UxUiDesignSeo from '#constants/seo/UxUiDesign';
import Organization from '#Components/StructuredData/Organization';
import WebSite from '#Components/StructuredData/WebSite';
import Article from '#Components/StructuredData/Article';
import useUxUiDesign from '#constants/services/UxUiDesign';

const InnovativeDesign = dynamic(() => import('./sections/InnovativeDesign'));
const UxUiDesign = dynamic(() => import('./sections/UxUiDesign'));
const SliderTech = dynamic(() => import('./sections/SliderTech'));
const DesignAdaptedToYourBrand = dynamic(() =>
  import('./sections/DesignAdaptedToYourBrand')
);
const UnforgettableExperiences = dynamic(() =>
  import('./sections/UnforgettableExperiences')
);
const Questions = dynamic(() => import('./sections/Questions'));

const index = () => { 
  const { innovateDesign } = useUxUiDesign();
  return (
    <>
      <Banner />
      <InnovativeDesign />
      <UxUiDesign />
      <SliderTech />
      <DesignAdaptedToYourBrand />
      <UnforgettableExperiences />
      <Questions />

      <Organization />
      <WebSite title={UxUiDesignSeo.title} url={UxUiDesignSeo.urlAltern} />
      <Article
        title={UxUiDesignSeo.title}
        description={UxUiDesignSeo.description}
        url={UxUiDesignSeo.urlAltern}
        mainArticle={innovateDesign.description}
      />
    </>
  );
};
export default index;
