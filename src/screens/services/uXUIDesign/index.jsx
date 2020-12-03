import Banner from './sections/Banner';
import Questions from './sections/Questions';
import InnovativeDesign from './sections/InnovativeDesign';
import UnforgettableExperiences from './sections/UnforgettableExperiences';
import DesignAdaptedToYourBrand from './sections/DesignAdaptedToYourBrand';
import UxUiDesign from './sections/UxUiDesign';
import SliderTech from './sections/SliderTech';
import SEO from '#Components/SEO';
import UxUiDesignSeo from '#constants/seo/UxUiDesign';

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
  </>
);

export default index;
