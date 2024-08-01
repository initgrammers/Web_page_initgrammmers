import VisibilityCompany from '../components/VisibilityCompany';
import useWebDevelopment from '#constants/services/webDevelopment';

const VisibilityCompanySection = () => {
  const { visibilityCompany } = useWebDevelopment();

  return (
    <VisibilityCompany
      title={visibilityCompany.title}
      description={visibilityCompany.description}
      image={visibilityCompany.image}
      backgroundImage={visibilityCompany.backgroundImage}
      heightImage={visibilityCompany.heightImage}
    />
  );
};

export default VisibilityCompanySection;
