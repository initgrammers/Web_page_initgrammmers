import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';
import DevicesIcon from '@mui/icons-material/Devices';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import CastForEducationOutlinedIcon from '@mui/icons-material/CastForEducationOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useLocale, useTranslations } from 'next-intl';
import styles from '../components/Menu/styles/Options';
import routes from '#app/routes/';

const useMenu = () => {
  const t = useTranslations('Index');
  const locale = useLocale();
  const data = [
    {
      id: 'webDevelopment',
      title: t('webDevelopment'),
      subtitle: t('subWebDevelopment'),
      href: `/${locale}/${routes.services.webDevelopment}`,
      icon: <DevicesIcon sx={styles.icon} />,
    },
    {
      id: 'mobileDevelopment',
      title: t('mobileDevelopment'),
      subtitle: t('subMobileDevelopment'),
      href: `/${locale}/${routes.services.mobileDevelopment}`,
      icon: <MobileFriendlyIcon sx={styles.icon} />,
    },

    {
      id: 'uxuiDesign',
      title: t('ux/uiDesign'),
      subtitle: t('subUx/uiDesign'),
      href: `/${locale}/${routes.services.uxUiDesign}`,
      icon: <WidgetsOutlinedIcon sx={styles.icon} />,
    },
    // {
    //   id: 'ShopOnline',
    //   title: 'Tiendas en linea',
    //   subtitle: 'Venda a través de internet',
    //   href: routes.services.shopOnline,
    //   icon: <ShoppingCart />,
    // },
    {
      id: 'trainings',
      title: t('training'),
      subtitle: t('subTraining'),
      href: `/${locale}/${routes.services.trainings}`,
      icon: <CastForEducationOutlinedIcon sx={styles.icon} />,
    },
    // {
    //   id: 'Marketing',
    //   title: 'Marketing digital',
    //   subtitle: 'Posicione su marca',
    //   href: routes.services.marketingDigital,
    //   icon: <DeviceHub />,
    // },
    {
      id: 'partnershipModels',
      title: 'Modelos de Partnership',
      subtitle: 'Soluciones Personalizadas para tu Éxito',
      href: `/${locale}/${routes.services.partnershipModels}`,
      icon: <SearchOutlinedIcon sx={styles.icon} />,
    },
  ];

  const aboutUs = {
    id: 'AboutUs',
    title: t('aboutUs'),
    href: `/${locale}/${routes.aboutUs}`,
  };

  const portfolio = {
    id: 'portfolio',
    title: t('portfolio'),
    href: `/${locale}/${routes.portfolio}`,
  };

  const products = {
    id: 'productos',
    title: t('products'),
    href: `/${locale}/${routes.products}`,
  };

  const menuServices = {
    title: t('services'),
    items: data,
  };

  const menuInitgrammers = {
    menu: [menuServices, aboutUs, portfolio],
  };

  return { data, menuServices, menuInitgrammers };
};

export default useMenu;
