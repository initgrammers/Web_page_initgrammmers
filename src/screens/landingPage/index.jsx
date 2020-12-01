import Banner from './sections/Banner';
import OnlineSolution from './sections/OnlineSolution';
import Services from './sections/Services';
import PartnershipModel from './sections/PartnershipModel';
import CarryOutThatProject from './sections/CarryOutThatProject';
import Questions from './sections/Questions';
import SEO from '#Components/SEO';
import LandingPage from '#constants/seo/LandingPage';

const index = () => (
  <>
    <SEO {...LandingPage} />
    <Banner />
    <OnlineSolution />
    <Services />
    <PartnershipModel />
    <CarryOutThatProject />
    <Questions />
  </>
);

export default index;
