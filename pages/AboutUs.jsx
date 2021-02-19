import Layout from '../src/layouts';
import AboutUsPage from '#screens/aboutUs';

const Index = () => <AboutUsPage />;

export const getServerSideProps = async () => ({
  props: {
    layoutProps: {
      navigation: { index: 'aboutUs' },
    },
  },
});

Index.layout = Layout;
export default Index;
