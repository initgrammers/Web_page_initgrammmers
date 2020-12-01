export const bannerLandingPage = {
  backgroundImage: '/assets/images/figures/landingPage/bloque1.png',
  heightImage: 670,
  title: 'Desarrollo y diseño de software al alcande de tus manos',
  description:
    'Descubre el mundo digital, te ayudamos a construir aplicaciones y programas de principio a fin',
  image: '/assets/images/desarrollo-diseno-software.gif',
};

export const onlineSolution = {
  backgroundImage: '/assets/images/figures/landingPage/bloque2.png',
  heightImage: 628,
  title: 'Encuentra la solución en línea',
  description:
    'Fusionamos el diseño y el desarrollo en cada uno de los proyectos. Nuestro trabajo es asesorarte en todo el proceso para que puedas elegir la mejor opción para llevar a cabo esa idea que tienes en mente. A través de la tecnología te ayudamos a cumplir tus objetivos con un trabajo a tiempo y orientado a resultados.',
  image: '/assets/images/solucion-en-linea.png',
  titlePrimaryMain: true,
  descriptionBlack: true,
  imageSizes: {
    xs: {
      width: 288,
      height: 308,
    },
    sm: {
      width: 412,
      height: 442,
    },
    md: {
      width: 544,
      height: 539,
    },
    lg: {
      width: 504,
      height: 500,
    },
  },
  isImageRight: true,
};

const partnershipModels = [
  {
    path: '/assets/images/proyecto-precio-fijo.png',
    title: 'Proyecto a precio fijo',
    description:
      'Sin cargos ocultos u adicionales, una vez que se ha firmado un contrato con precio definido. ',
  },
  {
    path: '/assets/images/extension-de-tu-equipo.png',
    title: 'Extensión de tu equipo',
    description:
      'Te ayudamos a no perder oportunidades y aprovechar el potencial del mercado. Nos unimos a tu equipo de desarrollo para ayudarte a completar tareas.',
  },
  {
    path: '/assets/images/nos-convertimos-en-tu-equipo.png',
    title: 'Nos convertimos en tu equipo',
    description:
      'Comprometidos con ayudarte a alcanzar el éxito, trabajamos como tu equipo de tecnología, desarrollo y/o  programación. ',
  },
];

export const partnershipModel = {
  title: 'Modelos de partnership',
  description:
    'Una asociación perfecta que entrega los resultados esperados de acuerdo a tus necesidades. Tenemos todo lo que necesitas.',
  image: '/assets/images/modelo-partnership.png',
  backgroundImage: '/assets/images/figures/landingPage/bloque4.png',
  heightImage: 1262,
  partnershipModels,
};

const services = [
  {
    href: '/services/WebDevelopment',
    path: '/assets/images/desarrollo-web.png',
    service: 'Desarrollo Web',
  },
  {
    href: '/services/UXUIDesign',
    path: '/assets/images/diseno-ux-ui.png',
    service: 'Diseño UX / UX',
  },
  {
    href: '/services/MobileDevelopment',
    path: '/assets/images/desarrollo-movil.png',
    service: 'Desarrollo Móvil',
  },
  {
    href: '/services/Tranings',
    path: '/assets/images/capacitaciones.png',
    service: 'Capacitaciones',
  },
  {
    href: '/services/Marketing',
    path: '/assets/images/marketing.png',
    service: 'Marketing',
  },
  {
    href: '/services/SEO',
    path: '/assets/images/posicionamiento-buscadores.png',
    service: 'Posicionamiento en buscadores',
  },
  {
    href: '/services/ECommerce',
    path: '/assets/images/e-commerce.png',
    service: 'E-commerce',
  },
];

export const servicesInitgrammers = {
  backgroundImage: '/assets/images/figures/landingPage/bloque3.png',
  heightImage: 665,
  title: 'Integramos diseño y desarrollo para entregar el mejor proyecto',
  services,
};

export const carryOutProject = {
  titlePart1: '¿Aún pensando cómo ',
  titlePart2: 'llevar a cabo ese proyecto?',
  description:
    'Tomamos una idea y la transformamos en una obra maestra digital. Nuestra pasión por la tecnología y deseo de hacer las cosas diferentes',
  image: '/assets/images/pensado-como-llevar-a-cabo-tu-proyecto.png',
};

const questions = [
  {
    id: 0,
    title: '¿Puedo recibir pagos a través de mi aplicación móvil?',
    details:
      'Si, durante el desarrollo de aplicaciones móviles podemos integrar una pasarela de pagos a tu aplicación móvil para que puedas vender productos o servicios.',
  },
  {
    id: 1,
    title: '¿A qué tiendas de aplicaciones móviles se puede subir mi producto?',
    details:
      'Dependiendo del tipo de aplicación que desees,  el desarrollo de aplicaciones móviles puede ser dirigido para que se pueda desplegar la aplicación móvil en una o todas las tiendas de aplicaciones móviles como Google Play Store, App Store de Apple, entre otras, según los requerimientos que tengas.',
  },
  {
    id: 2,
    title:
      '¿Puedo agregar más funcionalidades a mi aplicación después de terminado el desarrollo?',
    details:
      'Si, creamos aplicaciones modulares, que permiten que se agreguen nuevas funcionalidades en el futuro, trabajamos con buenas prácticas de código para desarrollar las aplicaciones móviles, lo que te permitirá escalar tu producto en el futuro.',
  },
  {
    id: 3,
    title: 'Aún  no sé qué tipo de aplicación móvil escoger',
    details:
      'No hay problema, contamos con servicio de asesoría y diseño de producto para entender mejor tus necesidades y optimizar tu presupuesto y recursos, así desarrollar la mejor aplicación para solucionar tu problema, contáctanos.',
  },
  {
    id: 4,
    title: '¿En qué dispositivos se puede utilizar mi aplicación móvil?',
    details:
      'Desarrollamos aplicaciones móviles para todos los dispositivos móviles: tablets, celulares, computadoras.',
  },
  {
    id: 5,
    title: 'Aún  no sé qué tipo de aplicación móvil escoger',
    details:
      'No hay problema, contamos con servicio de asesoría y diseño de producto para entender mejor tus necesidades y optimizar tu presupuesto y recursos, así desarrollar la mejor aplicación para solucionar tu problema, contáctanos. ',
  },
];

export const FAQLandingPage = {
  titlePart1: 'Preguntas',
  titlePart2: 'frecuentes',
  questions,
};
