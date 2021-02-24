import Banner from './sections/Banner';
import MisionVision from './sections/MisionVision';
import SEO from '#Components/SEO';
import AboutUsSeo from '#constants/seo/AboutUs';
import Team from './sections/Team';
import Values from './sections/Values';
import Organization from '#Components/StructuredData/Organization';
import WebSite from '#Components/StructuredData/WebSite';

const Index = () => (
  <>
    <SEO {...AboutUsSeo} />
    <Banner />
    <MisionVision />
    <Team />
    <Values />

    <Organization />
    <WebSite title={AboutUsSeo.title} url={AboutUsSeo.urlAltern} />
  </>
);

export default Index;
