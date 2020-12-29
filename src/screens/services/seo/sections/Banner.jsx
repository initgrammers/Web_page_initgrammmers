import SEOBanner from '#Components/Banner';
import { bannerSEO } from '#constants/services/seo';
import { contactsLinks } from '#app/constants/contacts';

const Banner = () => (
  <SEOBanner
    backgroundImage={bannerSEO.backgroundImage}
    heightImage={bannerSEO.heightImage}
    titlePart2={bannerSEO.title}
    description={bannerSEO.description}
    image={bannerSEO.image}
    backgroundColor={bannerSEO.backgroundColor}
    hrefContactUs={contactsLinks.seoPage}
  />
);

export default Banner;
