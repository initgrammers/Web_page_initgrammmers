import PropTypes from 'prop-types';
import theme from '../../shared/config/MuiThemeProvider/theme';

const styles ={
  mainContent: {
    display: 'flex',
    position: 'relative',
    zIndex: 1,
    marginX: { lg: 0 }, 
    padding: { xs: `0 ${theme.spacing(2)}`, sm: `0 ${theme.spacing(3)}`, md: `0 ${theme.spacing(26)}`, lg: `0 ${theme.spacing(16)}`},
  },
};

styles.propTypes = {
  theme: PropTypes.shape(),
};

export default styles;
