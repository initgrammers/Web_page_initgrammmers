import routes from '#app/routes/';

export const bannerLandingPage = {
  backgroundImage:
    'https://res.cloudinary.com/initgrammers/image/upload/v1607008550/LandingPage/figures/bloque1.png',
  heightImage: 672,
  title: 'Desarrollo y diseño de aplicaciones al alcance de tus manos',
  description:
    'Descubre el mundo digital, te ayudamos a construir aplicaciones y programas de principio a fin',
  image:
    'https://res.cloudinary.com/initgrammers/image/upload/v1607028746/LandingPage/desarrollo-diseno-software.png',
};

export const onlineSolution = {
  backgroundImage:
    'https://res.cloudinary.com/initgrammers/image/upload/v1606839723/LandingPage/figures/bloque2.png',
  heightImage: 628,
  title: 'Encuentra la solución en línea',
  description:
    'Fusionamos el diseño y el desarrollo en cada uno de los proyectos. Nuestro trabajo es asesorarte en todo el proceso para que puedas elegir la mejor opción para llevar a cabo esa idea que tienes en mente. A través de la tecnología te ayudamos a cumplir tus objetivos con un trabajo a tiempo y orientado a resultados.',
  image:
    'https://res.cloudinary.com/initgrammers/image/upload/v1609863472/LandingPage/solucion-en-linea.png',
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
    path:
      'https://res.cloudinary.com/initgrammers/image/upload/v1606839967/LandingPage/proyecto-precio-fijo.png',
    title: 'Proyecto a precio fijo',
    description:
      'Sin cargos ocultos u adicionales, una vez que se ha firmado un contrato con precio definido. ',
  },
  {
    path:
      'https://res.cloudinary.com/initgrammers/image/upload/v1606839967/LandingPage/extension-de-tu-equipo.png',
    title: 'Extensión de tu equipo',
    description:
      'Te ayudamos a no perder oportunidades y aprovechar el potencial del mercado. Nos unimos a tu equipo de desarrollo para ayudarte a completar tareas.',
  },
  {
    path:
      'https://res.cloudinary.com/initgrammers/image/upload/v1606839967/LandingPage/nos-convertimos-en-tu-equipo.png',
    title: 'Nos convertimos en tu equipo',
    description:
      'Comprometidos con ayudarte a alcanzar el éxito, trabajamos como tu equipo de tecnología, desarrollo y/o  programación. ',
  },
];

export const partnershipModel = {
  title: 'Modelos de partnership',
  description:
    'Una asociación perfecta que entrega los resultados esperados de acuerdo a tus necesidades. Tenemos todo lo que necesitas.',
  image:
    'https://res.cloudinary.com/initgrammers/image/upload/v1609863472/LandingPage/modelo-partnership.png',
  backgroundImage:
    'https://res.cloudinary.com/initgrammers/image/upload/v1606839723/LandingPage/figures/bloque4.png',
  heightImage: 1262,
  partnershipModels,
};

const services = [
  {
    href: routes.services.webDevelopment,
    path:
      'https://res.cloudinary.com/initgrammers/image/upload/v1606839497/LandingPage/desarrollo-web.png',
    service: 'Desarrollo Web',
  },
  {
    href: routes.services.uxUiDesign,
    path:
      'https://res.cloudinary.com/initgrammers/image/upload/v1606839497/LandingPage/diseno-ux-ui.png',
    service: 'Diseño UX / UX',
  },
  {
    href: routes.services.mobileDevelopment,
    path:
      'https://res.cloudinary.com/initgrammers/image/upload/v1606839497/LandingPage/desarrollo-movil.png',
    service: 'Desarrollo Móvil',
  },
  {
    href: routes.services.trainings,
    path:
      'https://res.cloudinary.com/initgrammers/image/upload/v1606839497/LandingPage/capacitaciones.png',
    service: 'Capacitaciones',
  },
  {
    href: routes.services.marketingDigital,
    path:
      'https://res.cloudinary.com/initgrammers/image/upload/v1606839497/LandingPage/marketing.png',
    service: 'Marketing Digital',
  },
  {
    href: routes.services.seo,
    path:
      'https://res.cloudinary.com/initgrammers/image/upload/v1606839497/LandingPage/posicionamiento-buscadores.png',
    service: 'Posicionamiento en buscadores / SEO',
  },
  {
    href: routes.services.shopOnline,
    path:
      'https://res.cloudinary.com/initgrammers/image/upload/v1606839497/LandingPage/e-commerce.png',
    service: 'Comercio Electrónico',
  },
];

export const servicesInitgrammers = {
  backgroundImage:
    'https://res.cloudinary.com/initgrammers/image/upload/v1606839723/LandingPage/figures/bloque3.png',
  heightImage: 665,
  title: 'Integramos diseño y desarrollo para entregar el mejor proyecto',
  services,
};

const clients = [
  {
    label: 'Atenas Education',
    image:
      'https://res.cloudinary.com/initgrammers/image/upload/v1609862938/LandingPage/atenas-education.png',
  },
  {
    label: 'La Casa del Carpintero',
    image:
      'https://res.cloudinary.com/initgrammers/image/upload/v1609862948/LandingPage/la-casa-del-carpintero.png',
  },
  {
    label: 'JRTEC',
    image:
      'https://res.cloudinary.com/initgrammers/image/upload/v1609862943/LandingPage/JRTEC.png',
  },
  {
    label: 'Escuela Politécnica Nacional',
    image:
      'https://res.cloudinary.com/initgrammers/image/upload/v1609862939/LandingPage/Escuela-Politecnica-Nacional.png',
  },
  {
    label: 'Solufer Ecuador',
    image:
      'https://res.cloudinary.com/initgrammers/image/upload/v1609862938/LandingPage/solufer.png',
  },
];

export const clientsInitgrammers = {
  title: 'Quienes confiaron en nosotros:',
  variantTitle: 'h4',
  titleBlack: true,
  clients,
};

export const carryOutProject = {
  titlePart1: 'Estamos pendientes de ti ',
  titlePart2: 'soporte sin coste adicional',
  description:
    'En todos nuestros proyectos ofrecemos soporte durante todo el año y mantenimiento de tus productos sin recargo. ',
  image:
    'https://res.cloudinary.com/initgrammers/image/upload/v1609863472/LandingPage/soporte-adicional-sin-costo.png',
};

const questions = [
  {
    id: 0,
    title: '¿Cómo me apoyan en el proceso de desarrollo de un proyecto?',
    details:
      'Te asesoramos para alcanzar el éxito, ya sea que necesites desarrollo de aplicaciones móviles, una tienda electrónica, una página web, diseño UX UI, capacitaciones, posicionamiento en buscadores o más. Somos parte de todo el proceso contigo, utilizando metodologías de trabajo ágiles, te ayudado a crear el mejor producto y a alcanzar el éxito.',
  },
  {
    id: 1,
    title: '¿En qué consisten los modelos de partnership?',
    details:
      'Un modelo de partnership nos permite adaptarnos a tus necesidades para ofrecerte el mejor servicio, esta asociación puede ser un proyecto a precio fijo con contratos establecidos, o podemos unirnos a tu equipo de desarrollo para brindar una mano. ¿No tienes equipo de IT? No hay problema, podemos convertirnos en tu equipo de tecnología para ayudarte a completar los proyectos.',
  },
  {
    id: 2,
    title: '¿Pueden ayudarme a crear una página web para mi negocio?',
    details:
      'Sí, ofrecemos el servicio de desarrollo y programación de páginas web.',
  },
  {
    id: 3,
    title: '¿Qué tipo de capacitaciones ofrecen?',
    details:
      'Ofrecemos capacitaciones en tecnología en línea para personas de todas las edades, en temas de programación y diseño digital. Escríbenos para recibir más información.',
  },
  {
    id: 4,
    title:
      '¿Quiero contratar el servicio de programación, pero no tengo una interfaz gráfica para mi proyecto, me pueden ayudar?',
    details:
      'Fusionamos el diseño y el desarrollo en cada uno de los proyectos siguiendo las normas de las más recientes tecnologías. Nuestro trabajo es asesorarte para que puedas elegir la mejor opción para llevar a cabo esa idea que tienes en mente. A través de la tecnología te ayudamos a cumplir tus objetivos con un trabajo a tiempo y orientado a resultados.',
  },
  {
    id: 5,
    title: '¿Cuánto tiempo se tardan en desarrollar un proyecto?',
    details:
      'Dependiendo de los requerimientos del proyecto y los servicios que requieran, sea programación, diseño, guías de marca, etc. Un proyecto puede variar su duración, contáctanos para recibir una estimación de costos y tiempo de tu proyecto. ',
  },
  {
    id: 6,
    title: '¿Qué tipo de aplicaciones móviles pueden desarrollar?',
    details:
      'Nos enorgullecemos de poder manejar múltiples tecnologías y servicios, aplicaciones móviles para Android, iOS o de tipo multiplataforma.',
  },
  {
    id: 7,
    title: '¿Qué servicios de programación ofrecen?',
    details:
      'Contamos con un equipo multidisciplinario, programadores Backend, Frontend y Full Stack, lo que asegura el éxito del desarrollo de tu proyecto o software. ',
  },
];

export const FAQLandingPage = {
  titlePart1: 'Preguntas',
  titlePart2: 'frecuentes',
  questions,
};
