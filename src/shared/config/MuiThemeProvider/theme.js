import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { primary, secondary } from '../theme/colors';
import { typography } from '../theme/typography';

let theme = createTheme({
  typography,
  palette: {
    primary,
    secondary,
  },
});

theme = responsiveFontSizes(theme); 

theme.typography.h1 = {
  [theme.breakpoints.down('xs')]: {
    letterSpacing: '-0.87px',
  },
};

theme.typography.h2 = {
  [theme.breakpoints.down('md')]: {
    fontWeight: 500,
    letterSpacing: '0.18px',
  },
};


theme.typography.h3 = {
  [theme.breakpoints.down('md')]: {
    fontWeight: 400,
  },
};

export default theme; 
