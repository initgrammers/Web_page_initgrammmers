import React from 'react';
import SectionApplicationTypes from '#Components/SectionApplicationTypes';

const typesApplication = [
  {
    title: 'Aplicaciones nativas',
    description:
      'El desarrollo de estas aplicaciones móviles va dirigido específicamente para un sistema operativo (iOS, Android),  programada bajo un lenguage específico, la ventaja de estas apps es que aprovechan todas las funcionalidades del dispositivo.',
  },
  {
    title: 'Aplicaciones Web',
    description:
      'Básicamente es una página web optimizada de tal manera que se puede adaptar a cualquier dispositivo móvil, está optimización es posible a HTML, CSS y Javascript. Se puede acceder a la aplicación web a través de un navegador web ingresando su URL.',
  },
  {
    title: 'Aplicaciones híbridas',
    description:
      'Desarrollo de aplicaciones móviles que se programan para funcionar en varias plataformas iOS o Android. Pueden adaptarse a cualquier dispositivo móvil y aprovechar el acceso a las funcionalidades del dispositivo.Las aplicaciones híbridas permiten ahorrar recursos y tiempo de desarrollo.',
  },
  {
    title: 'Aplicaciones PWA',
    description:
      'Desarrollo de aplicaciones móviles que combina aspectos de una aplicación nativa y aplicación web. Se desarrollan en lenguajes de programación web por lo que pueden adaptarse a cualquier dispositivo móvil y aprovechar el acceso a las funcionalidades del dispositivo. ',
  },
];
const MobileApplicationTypes = () => (
  <SectionApplicationTypes
    sectionTitle="Tipos de aplicaciones móviles"
    typesApplication={typesApplication}
  />
);

export default MobileApplicationTypes;
