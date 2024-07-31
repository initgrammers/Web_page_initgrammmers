import FAQ from '#Components/FAQ';
import useUxUiDesign from '#constants/services/UxUiDesign';

const Questions = () => {
  const { FAQUxUiDesign } = useUxUiDesign();
  return (
    <FAQ
      titlePart1={FAQUxUiDesign.titlePart1}
      titlePart2={FAQUxUiDesign.titlePart2}
      questions={FAQUxUiDesign.questions}
    />
  );
}

export default Questions;
