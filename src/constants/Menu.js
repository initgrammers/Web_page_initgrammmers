import ShoppingCart from '@material-ui/icons/ShoppingCartOutlined';
import AddToHomeScreen from '@material-ui/icons/AddToHomeScreenOutlined';
import Devices from '@material-ui/icons/DevicesOutlined';
import Widgets from '@material-ui/icons/WidgetsOutlined';
import CastForEducation from '@material-ui/icons/CastForEducationOutlined';
import DeviceHub from '@material-ui/icons/DeviceHubOutlined';
import Search from '@material-ui/icons/SearchOutlined';

const data = [
  {
    id: 'webdevelop',
    title: 'Desarrollo Web',
    subtitle: 'Android, iOs, híbridas',
    href: '/services/WebDevelopment',
    icon: <Devices />,
  },
  {
    id: '2',
    title: 'Desarrollo de aplicaciones móviles',
    subtitle: 'Android, iOS, híbridas',
    href: '/services/MobileDevelopment',
    icon: <AddToHomeScreen />,
  },

  {
    id: '3',
    title: 'Diseño UX UI',
    subtitle: 'Venda a través de internet',
    href: '/services/UXUIDesign',
    icon: <Widgets />,
  },
  {
    id: '4',
    title: 'Comercio electrónico',
    subtitle: 'Venda a través de internet',
    href: '/services/ShopOnline',
    icon: <ShoppingCart />,
  },
  {
    id: '5',
    title: 'Capacitaciones',
    subtitle: 'Aprende con nosotros',
    href: '/404',
    icon: <CastForEducation />,
  },
  {
    id: '6',
    title: 'Marketing digital',
    subtitle: 'Posicione su marca',
    href: '/404',
    icon: <DeviceHub />,
  },
  {
    id: '7',
    title: 'SEO',
    subtitle: 'Posicionamiento en buscadores',
    href: '/404',
    icon: <Search />,
  },
];

export default data;
