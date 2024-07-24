import PropTypes from 'prop-types';
import theme from '../../shared/config/MuiThemeProvider/theme'

const styles = {
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  [theme.breakpoints.up('sm')]: {
    content: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
  },
  [theme.breakpoints.up('lg')]: {
    content: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
  },
};

styles.propTypes = {
  theme: PropTypes.shape(),
};

export default styles;
