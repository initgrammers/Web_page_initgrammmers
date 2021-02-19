import ShoppingCart from '@material-ui/icons/ShoppingCartOutlined';
import AddToHomeScreen from '@material-ui/icons/AddToHomeScreenOutlined';
import Devices from '@material-ui/icons/DevicesOutlined';
import Widgets from '@material-ui/icons/WidgetsOutlined';
import CastForEducation from '@material-ui/icons/CastForEducationOutlined';
import DeviceHub from '@material-ui/icons/DeviceHubOutlined';
import Search from '@material-ui/icons/SearchOutlined';
import routes from '#app/routes/';

const data = [
  {
    id: 'WebDevelop',
    title: 'Desarrollo Web',
    subtitle: 'Android, iOs, híbridas',
    href: routes.services.webDevelopment,
    icon: <Devices />,
  },
  {
    id: 'MobileDevelopment',
    title: 'Desarrollo de aplicaciones móviles',
    subtitle: 'Android, iOS, híbridas',
    href: routes.services.mobileDevelopment,
    icon: <AddToHomeScreen />,
  },

  {
    id: 'UXUIDesign',
    title: 'Diseño UX UI',
    subtitle: 'Venda a través de internet',
    href: routes.services.uxUiDesign,
    icon: <Widgets />,
  },
  {
    id: 'ShopOnline',
    title: 'Tiendas en linea',
    subtitle: 'Venda a través de internet',
    href: routes.services.shopOnline,
    icon: <ShoppingCart />,
  },
  {
    id: '5',
    title: 'Capacitaciones',
    subtitle: 'Aprende con nosotros',
    href: routes.services.trainings,
    icon: <CastForEducation />,
  },
  {
    id: 'Marketing',
    title: 'Marketing digital',
    subtitle: 'Posicione su marca',
    href: routes.services.marketingDigital,
    icon: <DeviceHub />,
  },
  {
    id: 'SEO',
    title: 'SEO',
    subtitle: 'Posicionamiento en buscadores',
    href: routes.services.seo,
    icon: <Search />,
  },
];

const aboutUs = {
  id: 'AboutUs',
  title: 'Quiénes somos',
  href: routes.services.seo,
};

const portfolio = {
  id: 'portfolio',
  title: 'Portafolio',
  href: routes.services.webDevelopment,
};

export const menuServices = {
  title: 'Servicios',
  items: data,
};

export const menuInitgrammers = {
  menu: [menuServices, aboutUs, portfolio],
};

export default data;
