import ServicesSections from '../components/Services';
import { servicesInitgrammers } from '#constants/LandingPage';

const Services = () => (
  <ServicesSections
    backgroundImage={servicesInitgrammers.backgroundImage}
    heightImage={servicesInitgrammers.heightImage}
    title={servicesInitgrammers.title}
    services={servicesInitgrammers.services}
  />
);

export default Services;
