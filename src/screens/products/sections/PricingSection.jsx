import useProjects from '#app/constants/Projects';
import Pricing from '../components/Pricing';

const PricingSection = () => {
  const { pricingProjects } = useProjects();
  return (
    <Pricing
      backgroundImage={pricingProjects.backgroundImage}
      heightImage={pricingProjects.heightImage}
      title1={pricingProjects.title1}
      title2={pricingProjects.title2}
      description={pricingProjects.description}
      backgroundColor={pricingProjects.backgroundColor}
      cardsPricing={pricingProjects.cardsPricing}
    />
  );
};

export default PricingSection;
