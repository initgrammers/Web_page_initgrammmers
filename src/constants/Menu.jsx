import ShoppingCart from '@material-ui/icons/ShoppingCartOutlined';
import AddToHomeScreen from '@material-ui/icons/AddToHomeScreenOutlined';
import Devices from '@material-ui/icons/DevicesOutlined';
import Widgets from '@material-ui/icons/WidgetsOutlined';
import CastForEducation from '@material-ui/icons/CastForEducationOutlined';
import DeviceHub from '@material-ui/icons/DeviceHubOutlined';
import Search from '@material-ui/icons/SearchOutlined';
import routes from '#app/routes/';
import { useTranslation } from 'next-i18next';

const useMenu = () => {
  const { t } = useTranslation();
  const data = [
    {
      id: 'WebDevelop',
      title: t('webDevelopment'),
      subtitle: 'Android, iOs, híbridas',
      href: routes.services.webDevelopment,
      icon: <Devices />,
    },
    {
      id: 'MobileDevelopment',
      title: t('mobileDevelopment'),
      subtitle: 'Android, iOS, híbridas',
      href: routes.services.mobileDevelopment,
      icon: <AddToHomeScreen />,
    },
  
    {
      id: 'UXUIDesign',
      title: t('ux/uiDesign'),
      subtitle: 'Venda a través de internet',
      href: routes.services.uxUiDesign,
      icon: <Widgets />,
    },
    // {
    //   id: 'ShopOnline',
    //   title: 'Tiendas en linea',
    //   subtitle: 'Venda a través de internet',
    //   href: routes.services.shopOnline,
    //   icon: <ShoppingCart />,
    // },
    {
      id: '5',
      title: t('training'),
      subtitle: 'Aprende con nosotros',
      href: routes.services.trainings,
      icon: <CastForEducation />,
    },
    // {
    //   id: 'Marketing',
    //   title: 'Marketing digital',
    //   subtitle: 'Posicione su marca',
    //   href: routes.services.marketingDigital,
    //   icon: <DeviceHub />,
    // },
    // {
    //   id: 'SEO',
    //   title: 'SEO',
    //   subtitle: 'Posicionamiento en buscadores',
    //   href: routes.services.seo,
    //   icon: <Search />,
    // },
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

  return { data, menuServices, menuInitgrammers }
}


export default useMenu;
