import React from 'react';
import LandingPage from '#screens/landingPage';
import { MuiThemeProvider } from '#app/shared/config/MuiThemeProvider';

export function metadata() {
  return {
    title: 'Initgrammers',
  };
}

export default function Home() {
  return (
      <LandingPage />
  );
}

