import dynamic from 'next/dynamic';
import Banner from './sections/Banner';
import MarketingSEO from '#constants/seo/Marketing';
import SEO from '#Components/SEO';
import Organization from '#Components/StructuredData/Organization';
import WebSite from '#Components/StructuredData/WebSite';
import Article from '#Components/StructuredData/Article';
import { importanceMarketing } from '#constants/services/marketing';

const ImportanceMarketing = dynamic(() => import('./sections/ImportanceMarketing'));
const Strategies = dynamic(() => import('./sections/Strategies'));
const MarketingTypes = dynamic(() => import('./sections/MarketingTypes'));
const IncreaseClics = dynamic(() => import('./sections/IncreaseClics'));
const Questions = dynamic(() => import('./sections/Questions'));

const index = () => (
  <>
    <SEO {...MarketingSEO} />
    <Banner />
    <ImportanceMarketing />
    <Strategies />
    <MarketingTypes />
    <IncreaseClics />
    <Questions />

    <Organization />
    <WebSite title={MarketingSEO.title} url={MarketingSEO.urlAltern} />
    <Article
      title={MarketingSEO.title}
      description={MarketingSEO.description}
      url={MarketingSEO.urlAltern}
      mainArticle={importanceMarketing.description}
    />
  </>
);

export default index;
