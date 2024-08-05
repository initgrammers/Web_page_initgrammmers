import { useTheme } from '@mui/material';
import ShopOnlineBanner from '#Components/Banner';
import { bannerShopOnline } from '#constants/services/ShopOnline';
import useContacts from '#app/constants/contacts';

const Banner = () => {
  const { palette } = useTheme();
  const { contactsLinks } = useContacts();
  return (
    <ShopOnlineBanner
      backgroundImage={bannerShopOnline.backgroundImage}
      heightImage={bannerShopOnline.heightImage}
      titlePart1={bannerShopOnline.title}
      description={bannerShopOnline.description}
      image={bannerShopOnline.image}
      backgroundColor={palette.secondary.fade}
      hrefContactUs={contactsLinks.shopEcommercePage}
    />
  );
};

export default Banner;
