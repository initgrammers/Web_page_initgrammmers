import Slider from '#Components/ResponsiveSlider';
import SecctionContainer from '#Components/Sections/SecctionContainer';

const data = [
  {
    label: 'Label 1',
    image:
        'https://www.logaster.com.es/blog/wp-content/uploads/sites/4/2018/12/Canva-385x350.png',
  },
  {
    label: 'Label 2',
    image:
        'https://images.squarespace-cdn.com/content/v1/58b2f629be65940cc47d9572/1497923519940-T46HV7G4Y5J2824E0YV6/ke17ZwdGBToddI8pDm48kFQQgP34qnCpeHaeAOzTt7pZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PICHnXC1b9smDvYLPdL-DS7U1pkhCtl83kemXd5r3C5ngKMshLAGzx4R3EDFOm1kBS/starbucks-logo.jpg',
  },
  {
    label: 'Label 3',
    image:
        'https://assets.entrepreneur.com/images/misc/1464722957_coca_cola_logo.jpg',
  },
  {
    label: 'Label 4',
    image:
        'https://www.logaster.com/blog/wp-content/uploads/2018/05/LogoMakr.png',
  },
  {
    label: 'Label 5',
    image:
        'https://static.rfstat.com/renderforest/images/v2/logo-homepage/embleme_3.png',
  },
  {
    label: 'Label 6',
    image:
        'https://www.pngfind.com/pngs/m/378-3789685_logos-de-redes-sociales-png-png-download-4000.png',
  },
  {
    label: 'Label 7',
    image:
        'https://e7.pngegg.com/pngimages/335/1001/png-clipart-social-media-facebook-computer-icons-social-network-linkedin-text-logo-internet.png',
  },
  {
    label: 'Label 8',
    image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQunGj_qSj53jScTHWkKAX8WjlSsIuf2CggIw&usqp=CAU',
  },
];
const Questions = () => (
  <SecctionContainer head="Tecnologías con las que trabajamos">
    <Slider data={data} />
  </SecctionContainer>
);

export default Questions;
