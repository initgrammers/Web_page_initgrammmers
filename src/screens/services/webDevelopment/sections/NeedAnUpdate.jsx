import NeedAnUpdate from '../components/NeedAnUpdate';
import { needAnUpdateWebDevelopment } from '#constants/services/webDevelopment';

const NeedAnUpdateSection = () => (
  <NeedAnUpdate
    title={needAnUpdateWebDevelopment.title}
    description={needAnUpdateWebDevelopment.description}
    image={needAnUpdateWebDevelopment.image}
    backgroundImage={needAnUpdateWebDevelopment.backgroundImage}
    ornamentImage={needAnUpdateWebDevelopment.ornamentImage}
  />
);

export default NeedAnUpdateSection;
