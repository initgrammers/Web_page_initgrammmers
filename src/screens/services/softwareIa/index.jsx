'use client';

import dynamic from 'next/dynamic';
import Banner from './sections/Banner';
import Organization from '#Components/StructuredData/Organization';
import WebSite from '#Components/StructuredData/WebSite';
import Article from '#Components/StructuredData/Article';
import softwareIaSEO from '#constants/seo/SoftwareIa';
import useSoftwareIa from '#constants/services/SoftwareIa';

const SoftwareIaDevelopment = dynamic(() => import('./sections/SoftwareIaDevelopment'));
const HowWeApply = dynamic(() => import('./sections/HowWeApply'));
const FinalSection = dynamic(() => import('./sections/FinalSection'));
const Questions = dynamic(() => import('./sections/Questions'));

const Index = () => {
  const { howWeApply } = useSoftwareIa();
  return (
    <>
      <Banner />
      <SoftwareIaDevelopment />
      <HowWeApply />
      <FinalSection />
      <Questions />
      <Organization />
      <WebSite title={softwareIaSEO.title} url={softwareIaSEO.urlAltern} />
      <Article
        title={softwareIaSEO.title}
        description={softwareIaSEO.description}
        url={softwareIaSEO.urlAltern}
        mainArticle={howWeApply.description}
      />
    </>
  );
};

export default Index;
