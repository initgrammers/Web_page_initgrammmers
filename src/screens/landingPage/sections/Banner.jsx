import LandingPageBanner from '../components/Banner';
import { bannerLandingPage } from '#constants/LandingPage';

const Banner = () => (
  <LandingPageBanner
    backgroundImage={bannerLandingPage.backgroundImage}
    heightImage={bannerLandingPage.heightImage}
    title={bannerLandingPage.title}
    description={bannerLandingPage.description}
    image={bannerLandingPage.image}
  />
);

export default Banner;
