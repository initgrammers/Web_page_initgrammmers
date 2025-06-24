import FAQ from '#Components/FAQ';
import usePartnershipModels from '#constants/services/partnershipModels';

const Questions = () => {
  const { FAQPartnershipModels } = usePartnershipModels();
  return (
    <FAQ
      titlePart1={FAQPartnershipModels.titlePart1}
      titlePart2={FAQPartnershipModels.titlePart2}
      questions={FAQPartnershipModels.questions}
    />
  );
};

export default Questions;
