import FAQ from '#Components/FAQ';
import { FAQLandingPage } from '#constants/LandingPage';

const Questions = () => (
  <FAQ
    titlePart1={FAQLandingPage.titlePart1}
    titlePart2={FAQLandingPage.titlePart2}
    questions={FAQLandingPage.questions}
  />
);

export default Questions;
