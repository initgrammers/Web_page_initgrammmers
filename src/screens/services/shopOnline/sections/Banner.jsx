import ShopOnlineBanner from '#Components/Banner';
import { bannerShopOnline } from '#constants/services/ShopOnline';

const Banner = () => (
  <ShopOnlineBanner
    backgroundImage={bannerShopOnline.backgroundImage}
    heightImage={670}
    titlePart1={bannerShopOnline.title}
    description={bannerShopOnline.description}
    image={bannerShopOnline.image}
    backgroundColor={bannerShopOnline.backgroundColor}
  />
);

export default Banner;
