import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { primary, secondary } from './colors';
import { typography } from './typography';

const defaultTheme = createMuiTheme({
  typography,
  palette: {
    primary,
    secondary,
  },
});

const { breakpoints } = defaultTheme;

const theme = {
  ...defaultTheme,
  overrides: {
    MuiTypography: {
      h1: {
        [breakpoints.down('xs')]: {
          letterSpacing: '-0.87px',
        },
      },
      h2: {
        [breakpoints.down('md')]: {
          fontWeight: 500,
          letterSpacing: '0.18px',
        },
      },
      h3: {
        [breakpoints.down('md')]: {
          fontWeight: 400,
        },
      },
    },
  },
};
export default responsiveFontSizes(theme);
