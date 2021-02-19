import Banner from './sections/Banner';
import MisionVision from './sections/MisionVision';
import SEO from '#Components/SEO';
import AboutUsSeo from '#constants/seo/AboutUs';
import Team from './sections/Team';
import Values from './sections/Values';

const Index = () => (
  <>
    <SEO {...AboutUsSeo} />
    <Banner />
    <MisionVision />
    <Team />
    <Values />
  </>
);

export default Index;
