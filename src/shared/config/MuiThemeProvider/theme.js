import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import responsiveFontSizes from '@material-ui/core/styles/responsiveFontSizes';
import { primary, secondary } from '../theme/colors';
import { typography } from '../theme/typography';

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
