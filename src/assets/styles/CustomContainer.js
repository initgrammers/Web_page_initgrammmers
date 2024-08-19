import PropTypes from 'prop-types';
import theme from '../../shared/config/MuiThemeProvider/theme';

const styles = {
  mainContent: {
    display: 'flex',
    position: 'relative',
    zIndex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: { xs: `0 ${theme.spacing(2)}`, md: `0 ${theme.spacing(16)}`, lg: `0 ${theme.spacing(10)}` },
  },
};

styles.propTypes = {
  theme: PropTypes.shape(),
};

export default styles;
