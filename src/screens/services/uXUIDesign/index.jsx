import Banner from './sections/Banner';
import Questions from './sections/Questions';
import InnovativeDesign from './sections/InnovativeDesign';
import UnforgettableExperiences from './sections/UnforgettableExperiences';
import DesignAdaptedToYourBrand from './sections/DesignAdaptedToYourBrand';
import UxUiDesign from './sections/UxUiDesign';
import SliderTech from './sections/SliderTech';
import SEO from '#Components/SEO';
import UxUiDesignSeo from '#constants/seo/UxUiDesign';
import Organization from '#Components/StructuredData/Organization';
import WebSite from '#Components/StructuredData/WebSite';
import Article from '#Components/StructuredData/Article';
import { innovateDesign } from '#constants/services/UxUiDesign';

const index = () => (
  <>
    <SEO {...UxUiDesignSeo} />
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

export default index;
