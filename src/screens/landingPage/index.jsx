/* eslint-disable react-hooks/rules-of-hooks */

'use client';

import dynamic from 'next/dynamic';
import Banner from './sections/Banner';
import LandingPage from '#constants/seo/LandingPage';
import Organization from '#Components/StructuredData/Organization';
import WebSite from '#Components/StructuredData/WebSite';
import Article from '#Components/StructuredData/Article';
import useLandingPage from '#constants/LandingPage';

const OnlineSolution = dynamic(() => import('./sections/OnlineSolution'));
const Services = dynamic(() => import('./sections/Services'));
const SliderClients = dynamic(() => import('./sections/SliderClients'));
const CarryOutThatProject = dynamic(() => import('./sections/CarryOutThatProject'));
const Questions = dynamic(() => import('./sections/Questions'));

const Index = () => {
  const { onlineSolution } = useLandingPage();

  return (
    <>
      <Banner />
      <OnlineSolution />
      <Services />
      <SliderClients />
      <CarryOutThatProject />
      <Questions />
      <Organization />
      <WebSite title={LandingPage.title} url={LandingPage.urlAltern} />
      <Article
        title={LandingPage.title}
        description={LandingPage.description}
        url={LandingPage.urlAltern}
        mainArticle={onlineSolution.description}
      />
    </>
  );
};

export default Index;
