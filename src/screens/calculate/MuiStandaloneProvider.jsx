'use client';

import PropTypes from 'prop-types';
import { CssBaseline, GlobalStyles } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { colors, fonts } from './styles';

// This page is fully standalone (its own dark theme + Inter typeface) — it
// deliberately does NOT reuse the site's shared theme, whose Raleway
// typography would otherwise leak into every MUI Typography variant here.
const theme = createTheme({
  palette: {
    mode: 'dark',
    background: { default: colors.background, paper: colors.card },
    text: { primary: colors.text, secondary: colors.muted },
  },
  typography: {
    fontFamily: fonts.body,
  },
});

const globalStyles = {
  body: {
    margin: 0,
    scrollBehavior: 'smooth',
    backgroundColor: colors.background,
    color: colors.text,
    fontFamily: fonts.body,
  },
  a: {
    color: colors.text,
  },
  '@keyframes fadeInUp': {
    from: { opacity: 0, transform: 'translateY(18px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
  },
  '@keyframes toastIn': {
    from: { opacity: 0, transform: 'translateY(14px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
  },
  'input::placeholder, textarea::placeholder': {
    color: colors.muted,
  },
};

export default function MuiStandaloneProvider({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles styles={globalStyles} />
      {children}
    </ThemeProvider>
  );
}

MuiStandaloneProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
