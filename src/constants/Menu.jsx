import ShoppingCart from '@material-ui/icons/ShoppingCartOutlined';
import AddToHomeScreen from '@material-ui/icons/AddToHomeScreenOutlined';
import Devices from '@material-ui/icons/DevicesOutlined';
import Widgets from '@material-ui/icons/WidgetsOutlined';
import CastForEducation from '@material-ui/icons/CastForEducationOutlined';
import DeviceHub from '@material-ui/icons/DeviceHubOutlined';
import Search from '@material-ui/icons/SearchOutlined';

// eslint-disable-next-line import/prefer-default-export
export const data = [
  {
    id: 'WebDevelop',
    title: 'Desarrollo Web',
    subtitle: 'Android, iOs, híbridas',
    href: '/services/WebDevelopment',
    icon: <Devices />,
  },
  {
    id: 'MobileDevelopment',
    title: 'Desarrollo de aplicaciones móviles',
    subtitle: 'Android, iOS, híbridas',
    href: '/services/MobileDevelopment',
    icon: <AddToHomeScreen />,
  },

  {
    id: 'UXUIDesign',
    title: 'Diseño UX UI',
    subtitle: 'Venda a través de internet',
    href: '/services/UXUIDesign',
    icon: <Widgets />,
  },
  {
    id: '4',
    title: 'Comercio digital',
    subtitle: 'Venda a través de internet',
    href: '/services/Ecommerce',
    icon: <ShoppingCart />,
  },
  {
    id: '5',
    title: 'Capacitaciones',
    subtitle: 'Aprende con nosotros',
    href: '/services/Training',
    icon: <CastForEducation />,
  },
  {
    id: '6',
    title: 'Marketing digital',
    subtitle: 'Posicione su marca',
    href: '/services/Marketing',
    icon: <DeviceHub />,
  },
  {
    id: '7',
    title: 'SEO',
    subtitle: 'Posicionamiento en buscadores',
    href: '/services/SEO',
    icon: <Search />,
  },
];

export default data;
