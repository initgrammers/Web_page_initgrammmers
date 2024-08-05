'use client';

import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import theme from './theme';
import Layout from '#Layouts/index';

export default function MuiThemeProvider({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <CssBaseline />
        {children}
      </Layout>
    </ThemeProvider>
  );
}
