import React from 'react';
import Upgrade from '#Components/Upgrade';

const typesApplication = [
  {
    title: 'Aplicación web estática',
    description:
      'Este tipo de aplicación muestra información específica y está planificada para que se realicen los menores cambios posibles. Por lo general se desarrollan en HTML, CSS y JavaScript, y pueden integrar contenido como videos, imágenes animadas, sliders, mapas, etc. Son ideales para proyectos, portafolios e información de tipo estático, lo que permite reducir la cantidad de recursos como tiempo y dinero. ',
  },
  {
    title: ' Aplicación web dinámica',
    description:
      'Ofrecen una mayor versatilidad para los usuarios, integran una amplia gama de funcionalidades, adaptándose a las necesidades de los clientes. Tiene la ventaja de poder conectarse a una base de datos donde almacena la información que puede ser consultada en cualquier momento.  Pueden ser gestionadas por cualquier persona debido a que cuenta con un panel de administración denominado CMS (sistema de gestión de contenidos), que permite agregar o modificar contenido, así como entradas de blog, noticias, imágenes, etc.',
  },
  {
    title: 'E-commerce',
    description:
      'Es el tipo de aplicación web pensado para tiendas online. Ofrece mayores funcionalidades, porque permite utilizar sistemas para recibir pagos desde tarjetas de crédito, PayPal, efectivo, etc. Además de sincronizarse con la gestión de inventario y logística de envíos podrás controlar desde cualquier parte del mundo la  información de los productos o servicios que tu empresa ofrece.',
  },
  {
    title: 'Portal web app',
    description:
      'También conocido como Landing Page, consta de una página principal con varias secciones o apartados, en donde se muestra todo el contenido de la misma. Dicho contenido puede albergar videos, formularios, textos, información de redes sociales, imágenes, etc.',
  },
  {
    title: 'Aplicación web con “Gestor de Contenidos”',
    description:
      'Es el tipo de aplicación web pensado para tiendas online. Ofrece mayores funcionalidades, porque permite utilizar sistemas para recibir pagos desde tarjetas de crédito, PayPal, efectivo, etc. Además de sincronizarse con la gestión de inventario y logística de envíos podrás controlar desde cualquier parte del mundo la  información de los productos o servicios que tu empresa ofrece.',
  },
];
const NeedUpdate = () => (

  <Upgrade
    sectionTitle="Nuestros servicios"
    image="/assets/images/tipos-aplicaciones-web.png"
  />
);

export default NeedUpdate;
