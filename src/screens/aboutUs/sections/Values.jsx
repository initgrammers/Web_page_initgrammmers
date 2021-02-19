import Values from '../components/Values';
import { valoresInitgrammers } from '#constants/AboutUs';

const ValuesSection = () => (
  <Values
    backgroundImage={valoresInitgrammers.backgroundImage}
    heightImage={valoresInitgrammers.heightImage}
    title={valoresInitgrammers.title}
    values={valoresInitgrammers.valores}
  />
);

export default ValuesSection;
