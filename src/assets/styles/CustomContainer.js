import PropTypes from 'prop-types';
import theme from '../../shared/config/MuiThemeProvider/theme';

const styles ={
  mainContent: {
    display: 'flex',
    position: 'relative',
    zIndex: 1,
    [theme.breakpoints.up('md')]: {
      padding: `0 ${theme.spacing(26)}px`,
    },
    [theme.breakpoints.up('lg')]: {
      padding: `0 ${theme.spacing(16)}px`,
    },
  },
};

styles.propTypes = {
  theme: PropTypes.shape(),
};

export default styles;
