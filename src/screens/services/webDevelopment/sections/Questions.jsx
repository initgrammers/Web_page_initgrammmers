import FAQ from '#Components/FAQ';
import useWebDevelopment from '#constants/services/webDevelopment';

const Questions = () => {
  const { FAQWeb } = useWebDevelopment();

  return (
    <FAQ
      titlePart1={FAQWeb.titlePart1}
      titlePart2={FAQWeb.titlePart2}
      questions={FAQWeb.questions}
    />
  );
};

export default Questions;
