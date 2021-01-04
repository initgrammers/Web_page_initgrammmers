import { useTheme } from '@material-ui/core';
import SEOBanner from '#Components/Banner';
import { bannerSEO } from '#constants/services/seo';
import { contactsLinks } from '#app/constants/contacts';

const Banner = () => {
  const { palette } = useTheme();

  return (
    <SEOBanner
      backgroundImage={bannerSEO.backgroundImage}
      heightImage={bannerSEO.heightImage}
      titlePart2={bannerSEO.title}
      description={bannerSEO.description}
      image={bannerSEO.image}
      backgroundColor={palette.primary.fade}
      hrefContactUs={contactsLinks.seoPage}
      buttonColor={bannerSEO.buttonColor}
    />
  );
};

export default Banner;
