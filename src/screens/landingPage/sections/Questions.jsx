import FAQ from '#Components/FAQ';
import useLandingPage from '#constants/LandingPage';

const Questions = () => {
  const {FAQLandingPage} = useLandingPage();
  return(
    <FAQ
      titlePart1={FAQLandingPage.titlePart1}
      titlePart2={FAQLandingPage.titlePart2}
      questions={FAQLandingPage.questions}
    />
  );
}
export default Questions;
