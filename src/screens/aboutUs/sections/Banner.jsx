import AboutUsBanner from '#Components/Banner';
import { bannerAboutUs } from '#constants/AboutUs';
import { contactsLinks } from '#app/constants/contacts';
import { useTheme } from '@mui/material';

const Banner = () => {
  const { palette } = useTheme();
  return (
    <AboutUsBanner
      backgroundImage={bannerAboutUs.backgroundImage}
      heightImage={bannerAboutUs.heightImage}
      titlePart1={bannerAboutUs.title}
      description={bannerAboutUs.description}
      image={bannerAboutUs.image}
      backgroundColor={palette.secondary.fade}
      hrefContactUs={contactsLinks.general}
    />
  );
};

export default Banner;
