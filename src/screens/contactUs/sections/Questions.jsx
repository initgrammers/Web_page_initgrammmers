import useLandingPage from '#app/constants/LandingPage';
import FAQ from '#Components/FAQ';
import React from 'react'

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

export default Questions