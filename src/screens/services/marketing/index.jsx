import MarketingTypes from './sections/MarketingTypes';
import IncreaseClics from './sections/IncreaseClics';
import Banner from './sections/Banner';
import Questions from './sections/Questions';
import MarketingSEO from '#constants/seo/Marketing';
import SEO from '#Components/SEO';
import Strategies from './sections/Strategies';
import ImportanceMarketing from './sections/ImportanceMarketing';
import Organization from '#Components/StructuredData/Organization';
import WebSite from '#Components/StructuredData/WebSite';
import Article from '#Components/StructuredData/Article';
import { importanceMarketing } from '#constants/services/marketing';

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
