import FAQ from '#Components/FAQ';
import usePortfolio from '#app/constants/Portfolio';

const Questions = () => {
  const { FAQPortfolio } = usePortfolio();
  return (
    <FAQ
      titlePart1={FAQPortfolio.titlePart1}
      titlePart2={FAQPortfolio.titlePart2}
      questions={FAQPortfolio.questions}
    />
  );
};

export default Questions;
