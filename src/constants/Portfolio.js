import { useTranslations } from 'next-intl';

const usePortfolio = () => {
  const t = useTranslations('Index');

  const bannerPortfolioPage = {
    titlePart1: t('portfolio'),
  };

  const questions = [
    {
      id: 0,
      title: t('question1'),
      details: t('detailsQuestion1'),
    },
    {
      id: 1,
      title: t('question8'),
      details: t('detailsQuestion8'),
    },
    {
      id: 2,
      title: t('question6'),
      details: t('detailsQuestion6'),
    },
  ];

  const FAQPortfolio = {
    titlePart1: t('FAQTitle1'),
    titlePart2: t('FAQTitle2'),
    questions,
  };

  return {
    bannerPortfolioPage,
    FAQPortfolio,
  };
};

export default usePortfolio;
