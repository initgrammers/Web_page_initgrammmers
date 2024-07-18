// app/components/FacebookPixel.js
'use client';
import { useLayoutEffect } from 'react';
import * as fbq from '#app/lib/facebookPixel';

const FacebookPixel = ({ children }) => {
  useLayoutEffect(() => {
    fbq.initialize(fbq.FB_PIXEL_ID);
    fbq.pageview();
  }, []);

  return children;
};

export default FacebookPixel;
