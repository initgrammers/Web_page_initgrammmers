import PropTypes from 'prop-types';
import theme from '../../shared/config/MuiThemeProvider/theme';

const styles ={
  mainContent: {
    display: 'flex',
    position: 'relative',
    zIndex: 1,
    padding: { md: `0 ${theme.spacing(21)}`, lg: `0 ${theme.spacing(10)}`},
  },
};

styles.propTypes = {
  theme: PropTypes.shape(),
};

export default styles;
