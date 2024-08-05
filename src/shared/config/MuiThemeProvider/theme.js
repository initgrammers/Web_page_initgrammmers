'use client';

import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { primary, secondary } from '../theme/colors';
import { typography } from '../theme/typography';

const baseTheme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: `
      @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700&display=swap');
      `,
    },
  },
  typography,
  palette: {
    primary,
    secondary,
  },
});

const responsiveTheme = responsiveFontSizes(baseTheme);

const theme = {
  ...responsiveTheme,
  typography: {
    ...responsiveTheme.typography,
    h1: {
      ...responsiveTheme.typography.h1,
      [responsiveTheme.breakpoints.down('xs')]: {
        letterSpacing: '-0.87px',
      },
    },
    h2: {
      ...responsiveTheme.typography.h2,
      fontSize: '2.5rem',
      [responsiveTheme.breakpoints.down('md')]: {
        fontWeight: 500,
        letterSpacing: '0.18px',
      },
    },
    h3: {
      ...responsiveTheme.typography.h3,
      fontSize: '2rem',
      [responsiveTheme.breakpoints.down('md')]: {
        fontWeight: 400,
      },
    },
  },
};

export default theme;
