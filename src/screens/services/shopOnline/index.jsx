import Banner from './sections/Banner';
import OpenShop from './sections/OpenShop';
import IncreaseYourSales from './sections/IncreaseYourSales';
import Questions from './sections/Questions';
import SEO from '#Components/SEO';
import ShopOnlineSeo from '#constants/seo/ShopOnline';
import OptionsShopping from './sections/OptionsShopping';

const index = () => (
  <>
    <SEO {...ShopOnlineSeo} />
    <Banner />
    <OpenShop />
    <OptionsShopping />
    <IncreaseYourSales />
    <Questions />
  </>
);

export default index;
