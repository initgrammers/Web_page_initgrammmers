import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';
import DevicesIcon from '@mui/icons-material/Devices';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import CastForEducationOutlinedIcon from '@mui/icons-material/CastForEducationOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useTranslation } from 'react-i18next';
import styles from '../components/Menu/styles/Options';
import routes from '#app/routes/';

const useMenu = () => {
  const { t } = useTranslation();
  const data = [
    {
      id: 'webDevelopment',
      title: t('webDevelopment'),
      subtitle: t('subWebDevelopment'),
      href: routes.services.webDevelopment,
      icon: <DevicesIcon sx={styles.icon} />,
    },
    {
      id: 'mobileDevelopment',
      title: t('mobileDevelopment'),
      subtitle: t('subMobileDevelopment'),
      href: routes.services.mobileDevelopment,
      icon: <MobileFriendlyIcon sx={styles.icon} />,
    },

    {
      id: 'uxuiDesign',
      title: t('ux/uiDesign'),
      subtitle: t('subUx/uiDesign'),
      href: routes.services.uxUiDesign,
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
      href: routes.services.trainings,
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
      href: routes.services.partnershipModels,
      icon: <SearchOutlinedIcon sx={styles.icon} />,
    },
  ];

  const aboutUs = {
    id: 'AboutUs',
    title: t('aboutUs'),
    href: routes.aboutUs,
  };

  const portfolio = {
    id: 'portfolio',
    title: t('portfolio'),
    href: routes.portfolio,
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
