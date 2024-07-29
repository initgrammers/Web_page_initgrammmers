"use client"
import Banner from './sections/Banner';
import MisionVision from './sections/MisionVision';
import AboutUsSeo from '#constants/seo/AboutUs';
import Team from './sections/Team';
import Values from './sections/Values';
import Organization from '#Components/StructuredData/Organization';
import WebSite from '#Components/StructuredData/WebSite';

const Index = () => (
  <>
    <Banner />
    <MisionVision />
    {/* <Team /> */}
    <Values />

    <Organization />
    <WebSite title={AboutUsSeo.title} url={AboutUsSeo.urlAltern} />
  </>
);

export default Index;
