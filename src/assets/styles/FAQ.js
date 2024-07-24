import PropTypes from 'prop-types';
import theme from '../../shared/config/MuiThemeProvider/theme'

const styles = {
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: { xs: theme.spacing(4), sm: theme.spacing(8) },
    paddingBottom: { xs: theme.spacing(4), sm: theme.spacing(8) },
  },
};

styles.propTypes = {
  theme: PropTypes.shape(),
};

export default styles;
