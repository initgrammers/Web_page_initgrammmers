import Banner from './sections/Banner';
import MisionVision from './sections/MisionVision';
import SEO from '#Components/SEO';
import AboutUsSeo from '#constants/seo/AboutUs';
import Team from './components/Team';

const Index = () => (
  <>
    <SEO {...AboutUsSeo} />
    <Banner />
    <MisionVision />
    <Team />
  </>
);

export default Index;
