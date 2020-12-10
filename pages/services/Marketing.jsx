import Layout from '../../src/layouts';
import MarketingPage from '../../src/screens/services/marketing';

const Page = () => <MarketingPage />;

export const getServerSideProps = async () => ({
  props: {
    layoutProps: {
      navigation: { index: 'Marketing' },
    },
  },
});

Page.layout = Layout;
export default Page;
