import Layout from '../../src/layouts';
import ShopOnlinePage from '#screens/services/shopOnline';

const Page = () => <ShopOnlinePage />;

export const getServerSideProps = async () => ({
  props: {
    layoutProps: {
      navigation: { index: 'ShopOnline' },
    },
  },
});

Page.layout = Layout;
export default Page;
