import FAQ from '#Components/FAQ';
import { FAQWeb } from '#constants/services/webDevelopment';

const Questions = () => (
  <FAQ
    titlePart1={FAQWeb.titlePart1}
    titlePart2={FAQWeb.titlePart2}
    questions={FAQWeb.questions}
  />
);

export default Questions;
