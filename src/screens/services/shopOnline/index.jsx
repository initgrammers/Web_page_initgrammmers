import dynamic from 'next/dynamic';
import Banner from './sections/Banner';
import SEO from '#Components/SEO';
import ShopOnlineSeo from '#constants/seo/ShopOnline';
import Organization from '#Components/StructuredData/Organization';
import WebSite from '#Components/StructuredData/WebSite';
import Article from '#Components/StructuredData/Article';
import { shopOnline24Hours } from '#constants/services/ShopOnline';

const OpenShop = dynamic(() => import('./sections/OpenShop'));
const BenefitsTypes = dynamic(() => import('./sections/BenefitsTypes'));
const OptionsShopping = dynamic(() => import('./sections/OptionsShopping'));
const IncreaseYourSales = dynamic(() => import('./sections/IncreaseYourSales'));
const Questions = dynamic(() => import('./sections/Questions'));

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
