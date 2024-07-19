import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';
import DevicesIcon from '@mui/icons-material/Devices';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import CastForEducationOutlinedIcon from '@mui/icons-material/CastForEducationOutlined';
import DeviceHubOutlinedIcon from '@mui/icons-material/DeviceHubOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import routes from '#app/routes/';

const data = [
  {
    id: 'WebDevelop',
    title: 'Desarrollo Web',
    subtitle: 'Android, iOs, híbridas',
    href: routes.services.webDevelopment,
    icon: <DevicesIcon />,
  },
  {
    id: 'MobileDevelopment',
    title: 'Desarrollo de aplicaciones móviles',
    subtitle: 'Android, iOS, híbridas',
    href: routes.services.mobileDevelopment,
    icon: <MobileFriendlyIcon />,
  },

  {
    id: 'UXUIDesign',
    title: 'Diseño UX UI',
    subtitle: 'Venda a través de internet',
    href: routes.services.uxUiDesign,
    icon: <WidgetsOutlinedIcon />,
  },
  {
    id: 'ShopOnline',
    title: 'Tiendas en linea',
    subtitle: 'Venda a través de internet',
    href: routes.services.shopOnline,
    icon: <ShoppingCartOutlinedIcon />,
  },
  {
    id: '5',
    title: 'Capacitaciones',
    subtitle: 'Aprende con nosotros',
    href: routes.services.trainings,
    icon: <CastForEducationOutlinedIcon />,
  },
  {
    id: 'Marketing',
    title: 'Marketing digital',
    subtitle: 'Posicione su marca',
    href: routes.services.marketingDigital,
    icon: <DeviceHubOutlinedIcon />,
  },
  {
    id: 'SEO',
    title: 'SEO',
    subtitle: 'Posicionamiento en buscadores',
    href: routes.services.seo,
    icon: <SearchOutlinedIcon />,
  },
];

const aboutUs = {
  id: 'AboutUs',
  title: 'Quiénes somos',
  href: routes.aboutUs,
};

const portfolio = {
  id: 'portfolio',
  title: 'Portafolio',
  href: routes.portfolio,
};

export const menuServices = {
  title: 'Servicios',
  items: data,
};

export const menuInitgrammers = {
  menu: [menuServices, aboutUs, portfolio],
};

export default data;
