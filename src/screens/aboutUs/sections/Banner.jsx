import { useTheme } from '@mui/material';
import AboutUsBanner from '#Components/Banner';
import useAboutUs from '#constants/AboutUs';
import useContacts from '#app/constants/contacts';

const Banner = () => {
  const { palette } = useTheme();
  const { contactsLinks } = useContacts();
  const { bannerAboutUs } = useAboutUs();
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
