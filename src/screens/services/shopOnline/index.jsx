import Banner from './sections/Banner';
import OpenShop from './sections/OpenShop';
import IncreaseYourSales from './sections/IncreaseYourSales';
import Questions from './sections/Questions';
import SEO from '#Components/SEO';
import ShopOnlineSeo from '#constants/seo/ShopOnline';
import OptionsShopping from './sections/OptionsShopping';
import BenefitsTypes from './sections/BenefitsTypes';

const Index = () => (
  <>
    <SEO {...ShopOnlineSeo} />
    <Banner />
    <OpenShop />
    <BenefitsTypes />
    <OptionsShopping />
    <IncreaseYourSales />
    <Questions />
  </>
);

export default Index;
