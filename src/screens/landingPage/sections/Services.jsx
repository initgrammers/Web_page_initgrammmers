import ServicesSections from '../components/Services';
import useLandingPage from '#constants/LandingPage';

const Services = () => {
  const { servicesInitgrammers } = useLandingPage();
  return (
    <ServicesSections
      backgroundImage={servicesInitgrammers.backgroundImage}
      heightImage={servicesInitgrammers.heightImage}
      title={servicesInitgrammers.title}
      services={servicesInitgrammers.services}
    />
  );
};

export default Services;
