import PropTypes from 'prop-types';
import theme from '../../../shared/config/MuiThemeProvider/theme'

const styles = {
  section: {
    padding: theme.spacing(4, 0),
  },
  containerMisionVision: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: `-${theme.spacing(3)}px`,
  },
  [theme.breakpoints.up('sm')]: {
    section: {
      padding: theme.spacing(5, 0),
    },
    containerMisionVision: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
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
