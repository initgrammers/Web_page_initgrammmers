import Layout from '../../src/layouts';
import SEOPage from '#screens/services/seo';

const Page = () => <SEOPage />;

export const getServerSideProps = async () => ({
  props: {
    layoutProps: {
      navigation: { index: 'SEO' },
    },
  },
});

Page.layout = Layout;
export default Page;
