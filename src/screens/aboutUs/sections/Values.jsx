import Values from '../components/Values';
import useAboutUs from '#constants/AboutUs';

const ValuesSection = () => {
  const { valoresInitgrammers } = useAboutUs();
  return (
    <Values
      backgroundImage={valoresInitgrammers.backgroundImage}
      heightImage={valoresInitgrammers.heightImage}
      title={valoresInitgrammers.title}
      values={valoresInitgrammers.valores}
    />
  );
};

export default ValuesSection;
