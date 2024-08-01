import SliderTechnologies from '#Components/SliderTechnologies';
import useLandingPage from '#constants/LandingPage';

const SliderTech = () => {
  const { clientsInitgrammers } = useLandingPage();
  return (
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
};

export default SliderTech;
