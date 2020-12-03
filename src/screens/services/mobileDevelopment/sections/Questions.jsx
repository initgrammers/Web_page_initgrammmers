import FAQ from '#Components/FAQ';
import { FAQMobileDevelopment } from '#constants/services/MobileDevelopment';

const Questions = () => (
  <FAQ
    titlePart1={FAQMobileDevelopment.titlePart1}
    titlePart2={FAQMobileDevelopment.titlePart2}
    questions={FAQMobileDevelopment.questions}
  />
);

export default Questions;
