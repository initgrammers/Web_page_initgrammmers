import Banner from './sections/Banner';
import OpenShop from './sections/OpenShop';
import IncreaseYourSales from './sections/IncreaseYourSales';
import Questions from './sections/Questions';
import SEO from '#Components/SEO';
import ShopOnlineSeo from '#constants/seo/ShopOnline';
import OptionsShopping from './sections/OptionsShopping';
import BenefitsTypes from './sections/BenefitsTypes';
import Organization from '#Components/StructuredData/Organization';
import WebSite from '#Components/StructuredData/WebSite';
import Article from '#Components/StructuredData/Article';
import { shopOnline24Hours } from '#constants/services/ShopOnline';

const Index = () => (
  <>
    <SEO {...ShopOnlineSeo} />
    <Banner />
    <OpenShop />
    <BenefitsTypes />
    <OptionsShopping />
    <IncreaseYourSales />
    <Questions />

    <Organization />
    <WebSite title={ShopOnlineSeo.title} url={ShopOnlineSeo.urlAltern} />
    <Article
      title={ShopOnlineSeo.title}
      description={ShopOnlineSeo.description}
      url={ShopOnlineSeo.urlAltern}
      mainArticle={shopOnline24Hours.description}
    />
  </>
);

export default Index;
