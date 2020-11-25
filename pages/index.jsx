import Layout from '../src/layouts';
import MobileDevelopment from '#screens/services/mobileDevelopment';

const Index = () => <MobileDevelopment />;

export const getServerSideProps = async () => ({
  props: {
    layoutProps: {
      navigation: { index: 'index' },
    },
  },
});

Index.layout = Layout;
export default Index;
