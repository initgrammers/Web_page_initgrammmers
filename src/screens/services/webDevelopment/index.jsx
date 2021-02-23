import WebApplicationTypes from './sections/WebApplicationTypes';
import PartOfInternetWorld from './sections/PartOfInternetWorld';
import Banner from './sections/Banner';
import VisibilityCompany from './sections/VisibilityCompany';
import SliderTech from './sections/SliderTech';
import Questions from './sections/Questions';
import NeedAnUpdate from './sections/NeedAnUpdate';
import WebDevelopment from '#constants/seo/WebDevelopment';
import SEO from '#Components/SEO';
import Organization from '#Components/StructuredData/Organization';
import WebSite from '#Components/StructuredData/WebSite';
import Article from '#Components/StructuredData/Article';
import FAQPage from '#Components/StructuredData/FAQPage';
import { visibilityCompany } from '#constants/services/webDevelopment';

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
