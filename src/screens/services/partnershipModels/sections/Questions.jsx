import FAQ from '#Components/FAQ';
import { FAQSEO } from '#constants/services/partnershipModels';

const Questions = () => (
  <FAQ
    titlePart1={FAQSEO.titlePart1}
    titlePart2={FAQSEO.titlePart2}
    questions={FAQSEO.questions}
  />
);

export default Questions;
