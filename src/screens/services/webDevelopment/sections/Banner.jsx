import WebDevelopmentBanner from '#Components/Banner';
import { bannerWebDevelopment } from '#constants/services/webDevelopment';

const Banner = () => (
  <WebDevelopmentBanner
    backgroundImage={bannerWebDevelopment.backgroundImage}
    heightImage={bannerWebDevelopment.heightImage}
    titlePart1={bannerWebDevelopment.titlePart1}
    titlePart2={bannerWebDevelopment.titlePart2}
    titlePart3={bannerWebDevelopment.titlePart3}
    description={bannerWebDevelopment.description}
    image={bannerWebDevelopment.image}
  />
);

export default Banner;
