import FAQ from '#Components/FAQ';
import { FAQUxUiDesign } from '#constants/services/UxUiDesign';

const Questions = () => (
  <FAQ
    titlePart1={FAQUxUiDesign.titlePart1}
    titlePart2={FAQUxUiDesign.titlePart2}
    questions={FAQUxUiDesign.questions}
  />
);

export default Questions;
