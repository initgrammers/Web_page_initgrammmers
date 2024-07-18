"use client"
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import theme from './theme';
import FacebookPixel from '#Components/FacebookPixel';
import Layout from '#Layouts/index';

// const NoLayout = ({ children }) => children;

export const MuiThemeProvider = ({ children }) => {
  // const Layout = Component.layout || NoLayout;
  return (
    <ThemeProvider theme={theme}>
      <FacebookPixel>
      <Layout>
        <>
          <CssBaseline />
          {children}
        </>
      </Layout>
      </FacebookPixel>
    </ThemeProvider>
  );
};
