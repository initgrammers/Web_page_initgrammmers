"use client"
import dynamic from 'next/dynamic';
import Banner from './components/Banner';
import MobileDevelopment from '#constants/seo/MobileDevelopment';
import Organization from '#Components/StructuredData/Organization';
import WebSite from '#Components/StructuredData/WebSite';
import Article from '#Components/StructuredData/Article';
import useMobileDevelopment from '#constants/services/MobileDevelopment';


const ImportanceApplications = dynamic(() =>
  import('./components/ImportanceApplications')
);
const SliderTech = dynamic(() => import('./sections/SliderTech'));
const MobileApplicationTypes = dynamic(() =>
  import('./sections/MobileApplicationTypes')
);
const ApplicationsAtYourFingertips = dynamic(() =>
  import('./sections/ApplicationsAtYourFingertips')
);
const Questions = dynamic(() => import('./sections/Questions'));

const Index = () => { 
  const { importanceApplications } = useMobileDevelopment();
  return (
    <>
      <Banner />
      <ImportanceApplications />
      <SliderTech />
      <MobileApplicationTypes />
      <ApplicationsAtYourFingertips />
      <Questions />

      <Organization />
      <WebSite
        title={MobileDevelopment.title}
        url={MobileDevelopment.urlAltern}
      />
      <Article
        title={MobileDevelopment.title}
        description={MobileDevelopment.description}
        url={MobileDevelopment.urlAltern}
        mainArticle={importanceApplications.description1}
      />
    </>
  );
}

export default Index;
