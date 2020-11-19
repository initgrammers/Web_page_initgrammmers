import Slider from '#Components/ResponsiveSlider';
import SecctionContainer from '#Components/Sections/SecctionContainer';

const data = [
  {
    label: 'Label 1',
    image:
        '/assets/svg/html-5.svg',
  },
  {
    label: 'Label 2',
    image:
        '/assets/svg/wordpress.svg',
  },
  {
    label: 'Label 3',
    image:
        '/assets/svg/css-3.svg',
  },
  {
    label: 'Label 4',
    image:
        '/assets/svg/firebase-1.svg',
  },
  {
    label: 'Label 5',
    image:
        '/assets/svg/angular-icon-1.svg',
  },
  {
    label: 'Label 6',
    image:
        '/assets/svg/apple.svg',
  },
  {
    label: 'Label 7',
    image:
        '/assets/svg/next-js.svg',
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
