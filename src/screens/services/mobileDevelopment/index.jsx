import Banner from './components/Banner';
import ImportanceApplications from './components/ImportanceApplications';
import ApplicationsAtYourFingertips from './sections/ApplicationsAtYourFingertips';
import MobileApplicationTypes from './sections/MobileApplicationTypes';
import Questions from './sections/Questions';
import SliderTech from './sections/SliderTech';
import SEO from '#Components/SEO';
import MobileDevelopment from '#constants/seo/MobileDevelopment';
import Organization from '#Components/StructuredData/Organization';
import WebSite from '#Components/StructuredData/WebSite';
import Article from '#Components/StructuredData/Article';
import { importanceApplications } from '#constants/services/MobileDevelopment';

const Index = () => (
  <>
    <SEO {...MobileDevelopment} />
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

export default Index;
