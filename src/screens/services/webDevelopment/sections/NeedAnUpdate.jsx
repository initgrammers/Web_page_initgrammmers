import NeedAnUpdate from '../components/NeedAnUpdate';
import useWebDevelopment from '#constants/services/webDevelopment';

const NeedAnUpdateSection = () => {
  const { needAnUpdateWebDevelopment } = useWebDevelopment();

  return (
    <NeedAnUpdate
      title={needAnUpdateWebDevelopment.title}
      description={needAnUpdateWebDevelopment.description}
      image={needAnUpdateWebDevelopment.image}
      backgroundImage={needAnUpdateWebDevelopment.backgroundImage}
      ornamentImage={needAnUpdateWebDevelopment.ornamentImage}
    />
  );
};
export default NeedAnUpdateSection;
