import PropTypes from 'prop-types';
import theme from '../../../shared/config/MuiThemeProvider/theme'

const styles = {
  section: {
    padding: theme.spacing(4, 0),
  },
  values: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: `-${theme.spacing(4)}px`,
  },
  title: {
    paddingBottom: theme.spacing(4),
  },
  [theme.breakpoints.up('sm')]: {
    section: {
      padding: theme.spacing(5, 0),
    },
    values: {
      justifyContent: 'space-between',
    },
  },
  [theme.breakpoints.up('lg')]: {
    section: {
      padding: theme.spacing(8, 0),
    },
  },
};

styles.propTypes = {
  theme: PropTypes.shape(),
};

export default styles;
