import Layout from '../../src/layouts';
import SoftwareIaPage from '#screens/services/softwareIa';

const Page = () => <SoftwareIaPage />;

export const getServerSideProps = async () => ({
  props: {
    layoutProps: {
      navigation: { index: 'SoftwareIa' },
    },
  },
});

Page.layout = Layout;
export default Page;
