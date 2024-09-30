'use client';

import React from 'react';
import Organization from '#Components/StructuredData/Organization';
import Banner from './sections/Banner';
import ServicesDetails from './sections/ServicesDetails';
import ServicesMoreDetails from './sections/ServicesMoreDetails';
import PricingSection from './sections/PricingSection';

const Index = () => (
  <>
    <Banner />
    <ServicesDetails />
    <ServicesMoreDetails />
    <PricingSection />

    <Organization />
    {/* <WebSite title={Products.title} url={Products.urlAltern} /> */}
  </>
);

export default Index;
