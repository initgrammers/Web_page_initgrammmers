import LandingPageBanner from '../components/Banner';
import useLandingPage from '#constants/LandingPage';

const Banner = () => {
  const {bannerLandingPage} = useLandingPage();
  return(
    <LandingPageBanner
      backgroundImage={bannerLandingPage.backgroundImage}
      heightImage={bannerLandingPage.heightImage}
      title={bannerLandingPage.title}
      description={bannerLandingPage.description}
      image={bannerLandingPage.image}
    />
  );
}

export default Banner;
