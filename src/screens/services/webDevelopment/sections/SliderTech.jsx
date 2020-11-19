import Slider from '#Components/ResponsiveSlider';
import SecctionContainer from '#Components/Sections/SecctionContainer';
import { MobileTechnologies } from '#constants/services/webDevelopment';

const Questions = () => (
  <SecctionContainer head="Tecnologías con las que trabajamos">
    <Slider data={MobileTechnologies} />
  </SecctionContainer>
);

export default Questions;
