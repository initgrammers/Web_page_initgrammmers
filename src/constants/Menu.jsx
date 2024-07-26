import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';
import DevicesIcon from '@mui/icons-material/Devices';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import CastForEducationOutlinedIcon from '@mui/icons-material/CastForEducationOutlined';
import DeviceHubOutlinedIcon from '@mui/icons-material/DeviceHubOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import styles from '../components/Menu/styles/Options';
import routes from '#app/routes/';

const data = [
  {
    id: 'webDevelopment',
    title: 'Desarrollo Web',
    subtitle: 'Android, iOs, híbridas',
    href: routes.services.webDevelopment,
    icon: <DevicesIcon sx={styles.icon}/>,
  },
  {
    id: 'mobileDevelopment',
    title: 'Desarrollo de aplicaciones móviles',
    subtitle: 'Android, iOS, híbridas',
    href: routes.services.mobileDevelopment,
    icon: <MobileFriendlyIcon sx={styles.icon}/>,
  },

  {
    id: 'uxuiDesign',
    title: 'Diseño UX UI',
    subtitle: 'Venda a través de internet',
    href: routes.services.uxUiDesign,
    icon: <WidgetsOutlinedIcon sx={styles.icon}/>,
  },
  // {
  //   id: 'ShopOnline',
  //   title: 'Tiendas en linea',
  //   subtitle: 'Venda a través de internet',
  //   href: routes.services.shopOnline,
  //   icon: <ShoppingCartOutlinedIcon sx={styles.icon}/>,
  // },
  {
    id: 'trainings',
    title: 'Capacitaciones',
    subtitle: 'Aprende con nosotros',
    href: routes.services.trainings,
    icon: <CastForEducationOutlinedIcon sx={styles.icon}/>,
  },
  // {
  //   id: 'Marketing',
  //   title: 'Marketing digital',
  //   subtitle: 'Posicione su marca',
  //   href: routes.services.marketingDigital,
  //   icon: <DeviceHubOutlinedIcon sx={styles.icon}/>,
  // },
  {
    id: 'partnershipModels',
    title: 'Modelos de Partnership',
    subtitle: 'Soluciones Personalizadas para tu Éxito',
    href: routes.services.partnershipModels,
    icon: <SearchOutlinedIcon sx={styles.icon}/>,
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
