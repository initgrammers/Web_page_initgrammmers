'use client';

import PropTypes from 'prop-types';
import { CssBaseline, GlobalStyles } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '#app/shared/config/MuiThemeProvider/theme';
import { colors, fonts } from './styles';

const globalStyles = {
  body: {
    margin: 0,
    backgroundColor: colors.background,
    color: colors.text,
    fontFamily: fonts.body,
  },
  a: {
    color: colors.accentLight,
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
