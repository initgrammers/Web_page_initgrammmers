import MarketingTypes from './sections/MarketingTypes';
import IncreaseClics from './sections/IncreaseClics';
import Banner from './sections/Banner';
import Questions from './sections/Questions';
import MarketingSEO from '#constants/seo/Marketing';
import SEO from '#Components/SEO';
import Strategies from './sections/Strategies';
import ImportanceMarketing from './sections/ImportanceMarketing'

const index = () => (
  <>
    <SEO {...MarketingSEO} />
    <Banner />
    <ImportanceMarketing />
    <Strategies />
    <MarketingTypes />
    <IncreaseClics />
    <Questions />
  </>
);

export default index;
