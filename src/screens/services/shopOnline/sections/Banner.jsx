import ShopOnlineBanner from '../components/Banner';
import { bannerShopOnline } from '#constants/services/ShopOnline';

const Banner = () => (
  <ShopOnlineBanner
    title={bannerShopOnline.title}
    description={bannerShopOnline.description}
    image={bannerShopOnline.image}
  />
);

export default Banner;
