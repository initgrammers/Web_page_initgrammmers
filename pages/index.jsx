import Layout from '../src/layouts';
import PageMobileDevelopment from '#screens/services/mobileDevelopment/';

const Index = () => <PageMobileDevelopment />;

export const getServerSideProps = async () => ({
  props: {
    layoutProps: {
      navigation: { index: 'MobileDevelopment' },
    },
  },
});

Index.layout = Layout;
export default Index;
