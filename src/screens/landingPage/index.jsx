import Banner from './sections/Banner';
import OnlineSolution from './sections/OnlineSolution';
import Services from './sections/Services';
import PartnershipModel from './sections/PartnershipModel';
import SliderClients from './sections/SliderClients';
import CarryOutThatProject from './sections/CarryOutThatProject';
import Questions from './sections/Questions';
import SEO from '#Components/SEO';
import LandingPage from '#constants/seo/LandingPage';
import Organization from '#Components/StructuredData/Organization';
import WebSite from '#Components/StructuredData/WebSite';
import Article from '#Components/StructuredData/Article';
import { onlineSolution } from '#constants/LandingPage';

const index = () => (
  <>
    <SEO {...LandingPage} />
    <Banner />
    <OnlineSolution />
    <Services />
    <PartnershipModel />
    <SliderClients />
    <CarryOutThatProject />
    <Questions />

    <Organization />
    <WebSite title={LandingPage.title} url={LandingPage.urlAltern} />
    <Article
      title={LandingPage.title}
      description={LandingPage.description}
      url={LandingPage.urlAltern}
      mainArticle={onlineSolution.description}
    />
  </>
);

export default index;
