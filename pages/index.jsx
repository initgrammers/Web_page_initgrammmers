import Layout from '../src/layouts';
import mobileDevelopment from '#screens/services/mobileDevelopment';

const Index = () => <mobileDevelopment />;

export const getServerSideProps = async () => ({
  props: {
    layoutProps: {
      navigation: { index: 'index' },
    },
  },
});

Index.layout = Layout;
export default Index;
