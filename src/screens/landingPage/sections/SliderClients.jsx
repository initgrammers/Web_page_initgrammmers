import SliderTechnologies from '#Components/SliderTechnologies';
import { clientsInitgrammers } from '#constants/LandingPage';

const SliderTech = () => (
  <SliderTechnologies
    title={clientsInitgrammers.title}
    technologies={clientsInitgrammers.clients}
    variantTitle={clientsInitgrammers.variantTitle}
    titleBlack={clientsInitgrammers.titleBlack}
    backgroundGray
    barIsInvisible
    imageIsLarge
    showTitleImage={false}
  />
);

export default SliderTech;
