import WebApplicationTypes from './sections/WebApplicationTypes';
import PartOfInternetWorld from './sections/PartOfInternetWorld';
import Banner from './sections/Banner';
import VisibilityCompany from './sections/VisibilityCompany';
import SliderTech from './sections/SliderTech';
import Questions from './sections/Questions';
import NeedAnUpdate from './sections/NeedAnUpdate';
import WebDevelopment from '#constants/seo/WebDevelopment';
import SEO from '#Components/SEO';

const index = () => (
  <>
    <SEO {...WebDevelopment} />
    <Banner />
    <VisibilityCompany />
    <NeedAnUpdate />
    <WebApplicationTypes />
    <SliderTech />
    <PartOfInternetWorld />
    <Questions />

    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Article',
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id':
              'https://initgrammers.com/servicios/desarrollo-aplicaciones-y-paginas-web-ecuador',
          },
          headline: 'Desarrollo de aplicaciones web Ecuador | Initgrammers',
          image:
            'https://initgrammers.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Finitgrammers%2Fimage%2Fupload%2Fv1609857584%2Fservicios%2Fdesarrollo-web%2Fpaginas-web-desarrollo-diseno-aplicaciones-web-ecuador.png&w=1920&q=100',
          description:
            'Diseño y desarrollo de aplicaciones web en Ecuador, páginas o sitios web, landing page, desarrollo web con CMS (WordPress, Joomla) y software a medida',
          articleBody:
            'Una buena presencia en línea ayudará a conseguir más clientes potenciales. Nuestro trabajo es crear páginas web con diseños atractivos y funcionales. Una página web permite que todo el mundo te encuentre y sepa qué es lo que haces y ofreces a tus consumidores.',

          author: {
            '@type': 'Organization',
            name: 'InitGrammers',
          },
          publisher: {
            '@type': 'Organization',
            name: 'InitGrammers',
            logo: {
              '@type': 'ImageObject',
              url:
                'https://res.cloudinary.com/initgrammers/image/upload/v1614019631/logo-initGrammers.png',
            },
          },
          datePublished: '2021-02-22',
          dateModified: '2021-02-22',
        }),
      }}
    />

    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: '¿Cuáles son los beneficios de tener una página web?',
              acceptedAnswer: {
                '@type': 'Answer',
                text:
                  'Una página web añade valor a tus productos y/o servicios, también nos ayuda a promocionar productos y/o servicios a los clientes, pero además nos ayuda a conseguir nuevos clientes y ahorrar muchísimo en publicidad.',
              },
            },
            {
              '@type': 'Question',
              name: '¿Puedo recibir pagos por ventas en mi página web?',
              acceptedAnswer: {
                '@type': 'Answer',
                text:
                  'Si, te ayudamos a crear una página web para desplegar una tienda e-commerce, donde puedes ofertar tus productos y recibir pagos, para conocer más sobre este tipo de tienda click aquí.',
              },
            },
            {
              '@type': 'Question',
              name:
                '¿Puedo mostrar el catálogo de mis productos en la página web?',
              acceptedAnswer: {
                '@type': 'Answer',
                text:
                  'Si, te ayudamos a escoger entre varias opciones para mostrar el catálogo de tus productos en tu página web, de acuerdo a tu marca y el diseño más atractivo para llegar a tus clientes',
              },
            },
            {
              '@type': 'Question',
              name:
                '¿Pueden mis clientes contactarme a través de WhatsApp desde mi página?',
              acceptedAnswer: {
                '@type': 'Answer',
                text:
                  'Si, colocamos un botón de WhatsApp en las páginas web, donde tus clientes pueden contactarse contigo a cualquier hora.',
              },
            },
            {
              '@type': 'Question',
              name: 'Ya tengo una página ¿Pueden ayudarme a mejorarla?',
              acceptedAnswer: {
                '@type': 'Answer',
                text:
                  'Mantener actualizado tu sitio web es primordial, pues un diseño antiguo o desorganizado puede proyecta una imagen incorrecta de tu negocio y quienes visitan tu sitio no se quedan por la apariencia desactualizada o largos tiempos de carga. Te asesoramos en mejorar la imagen de tu página web para que tenga un diseño atractivo y contenido actualizado.',
              },
            },
            {
              '@type': 'Question',
              name:
                '¿Por que una página web es una buena opción para tu empresa?',
              acceptedAnswer: {
                '@type': 'Answer',
                text:
                  'Para cualquier organización empresarial, su sitio web es la primera impresión y habla sobre el trabajo que ha realizado, brinda credibilidad ante clientes potenciales y ayuda a posicionarse en los buscadores. Una buena presencia en línea comienza con un sitio web, el cual ayuda a conseguir más visitantes y clientes nuevos. Por lo tanto, desarrollar un sitio web de calidad es una necesidad hoy en día para tener una ventaja sobre la competencia.',
              },
            },
            {
              '@type': 'Question',
              name: '¿Como puedo tener un dominio con el nombre de mi negocio?',
              acceptedAnswer: {
                '@type': 'Answer',
                text:
                  'Si aún no tienes un dominio a nombre de tu negocio te asesoramos para conseguir uno para que tus clientes puedan recordarlo y encontrarlo fácilmente.',
              },
            },
            {
              '@type': 'Question',
              name:
                '¿Pueden ayudarme para salir entre los primeros resultados en Google?',
              acceptedAnswer: {
                '@type': 'Answer',
                text:
                  'Si, ofrecemos asesoría en SEO para que tu página web salga en los primeros resultados, el posicionamiento de tu marca en línea te ayudará a conseguir más clientes.',
              },
            },
          ],
        }),
      }}
    />
  </>
);

export default index;
