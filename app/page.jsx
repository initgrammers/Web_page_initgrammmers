import React from 'react';
import LandingPage from '#screens/landingPage';
import { MuiThemeProvider } from '#app/shared/config/MuiThemeProvider';

export default function Home() {
  return (
    // <MuiThemeProvider>
      <LandingPage />
    // </MuiThemeProvider>
  );
}

// export const getServerSideProps = async () => ({
//   props: {
//     layoutProps: {
//       navigation: { index: 'index' },
//     },
//   },
// });
