import FAQ from '#Components/FAQ';
import { FAQMarketing } from '#constants/services/marketing';

const Questions = () => (
  <FAQ
    titlePart1={FAQMarketing.titlePart1}
    titlePart2={FAQMarketing.titlePart2}
    questions={FAQMarketing.questions}
  />
);

export default Questions;
