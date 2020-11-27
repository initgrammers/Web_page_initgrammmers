import ShoppingCart from '@material-ui/icons/ShoppingCartOutlined';
import AddToHomeScreen from '@material-ui/icons/AddToHomeScreenOutlined';
import Devices from '@material-ui/icons/DevicesOutlined';
import Widgets from '@material-ui/icons/WidgetsOutlined';
import CastForEducation from '@material-ui/icons/CastForEducationOutlined';
import DeviceHub from '@material-ui/icons/DeviceHubOutlined';
import Search from '@material-ui/icons/SearchOutlined';

export const data = [
  {
    title: 'Desarrollo Web',
    subtitle: 'Android, iOs, híbridas',
    href: '/services/WebDevelopment',
    icon: <Devices />,
  },
  {
    title: 'Desarrollo de aplicaciones móviles',
    subtitle: 'Android, iOS, híbridas',
    href: '/services/MobileDevelopment',
    icon: <AddToHomeScreen />,
  },

  {
    title: 'Diseño UX UI',
    subtitle: 'Venda a través de internet',
    href: '/services/UXUIDesign',
    icon: <Widgets />,
  },
  {
    title: 'Comercio digital',
    subtitle: 'Venda a través de internet',
    href: '#',
    icon: <ShoppingCart />,
  },
  {
    title: 'Capacitaciones',
    subtitle: 'Aprende con nosotros',
    href: '#',
    icon: <CastForEducation />,
  },
  {
    title: 'Marketing digital',
    subtitle: 'Posicione su marca',
    href: '#',
    icon: <DeviceHub />,
  },
  {
    title: 'SEO',
    subtitle: 'Posicionamiento en buscadores',
    href: '#',
    icon: <Search />,
  },
];
