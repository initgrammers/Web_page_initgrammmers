import FAQ from '#Components/FAQ';
import useMobileDevelopment from '#constants/services/MobileDevelopment';

const Questions = () => {
  const { FAQMobileDevelopment } = useMobileDevelopment();
  return (
    <FAQ
      titlePart1={FAQMobileDevelopment.titlePart1}
      titlePart2={FAQMobileDevelopment.titlePart2}
      questions={FAQMobileDevelopment.questions}
    />
  );
};

export default Questions;
