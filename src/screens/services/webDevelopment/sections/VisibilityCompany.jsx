import VisibilityCompany from '../components/VisibilityCompany';
import { visibilityCompany } from '#constants/services/webDevelopment';

const VisibilityCompanySection = () => (
  <VisibilityCompany
    title={visibilityCompany.title}
    description={visibilityCompany.description}
    image={visibilityCompany.image}
    backgroundImage={visibilityCompany.backgroundImage}
    heightImage={visibilityCompany.heightImage}
  />
);

export default VisibilityCompanySection;
