import Layout from '../src/layouts';
import LandingPage from '#screens/landingPage';
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Index = () => <LandingPage />;

export const getServerSideProps = async ({ locale }) => {
  return {
    props: {
      layoutProps: {
        navigation: { index: 'index' },
      },
      ...(await serverSideTranslations(locale ?? "en", ["common"])),
    },
  };
};

Index.layout = Layout;
export default Index;
