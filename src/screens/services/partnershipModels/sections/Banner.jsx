import SEOBanner from '#Components/Banner';
import { bannerSEO } from '#constants/services/partnershipModels';
import { contactsLinks } from '#app/constants/contacts';
import { useTheme } from '@mui/material';

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
