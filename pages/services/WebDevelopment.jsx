import Layout from '../../src/layouts';
import WebDevelopmentPage from '#screens/services/webDevelopment';

const Page = () => <WebDevelopmentPage />;

export const getServerSideProps = async () => ({
  props: {
    layoutProps: {
      navigation: { index: 'WebDevelopment' },
    },
  },
});

Page.layout = Layout;
export default Page;
