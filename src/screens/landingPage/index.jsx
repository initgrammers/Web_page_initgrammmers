import BannerSlider from './components/BannerSlider';

const typesApplication = [
  {
    alt: 'Desarrollo y diseño de software al alcance de tu mano',
    image:
      '/assets/images/desarrollo-diseno-de-software-al-alcance-tu-mano-1.png',
  },
  {
    alt: 'Desarrollo y diseño de software al alcance de tu mano 2',
    image:
      '/assets/images/desarrollo-diseno-de-software-al-alcance-tu-mano-2.png',
  },
  {
    alt: 'Desarrollo y diseño de software al alcance de tu mano3',
    image:
      '/assets/images/desarrollo-diseno-de-software-al-alcance-tu-mano-3.png',
  },
];
const index = () => (
  <BannerSlider
    typesApplication={typesApplication}
    sectionTitle="Desarrollo y diseño de software al alcance de tu mano"
    sectionSubtitle="Descubre el mundo digital, te ayudamos a construir aolicaciones para el mundo digital de principio a fin"
  />
);

export default index;
