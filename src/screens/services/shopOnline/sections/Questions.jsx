import FAQ from '#Components/FAQ';
import { FAQUxUiDesign } from '#constants/services/ShopOnline';

const Questions = () => (
  <FAQ
    titlePart1={FAQUxUiDesign.titlePart1}
    titlePart2={FAQUxUiDesign.titlePart2}
    questions={FAQUxUiDesign.questions}
    black
  />
);

export default Questions;
