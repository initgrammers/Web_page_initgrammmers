import FAQ from '#Components/FAQ';
import { FAQPartnershipModels } from '#constants/services/partnershipModels';

const Questions = () => (
  <FAQ
    titlePart1={FAQPartnershipModels.titlePart1}
    titlePart2={FAQPartnershipModels.titlePart2}
    questions={FAQPartnershipModels.questions}
  />
);

export default Questions;
