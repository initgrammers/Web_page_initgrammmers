import BannerSection from '../components/Banner';
import { bannerUxUiDesign } from '#constants/services/UxUiDesign';

const Banner = () => (
  <BannerSection
    heightImage={bannerUxUiDesign.heightImage}
    backgroundImage={bannerUxUiDesign.backgroundImage}
    title={bannerUxUiDesign.title}
    description={bannerUxUiDesign.description}
    image={bannerUxUiDesign.image}
  />
);

export default Banner;
