import PropTypes from 'prop-types';
import theme from '../../shared/config/MuiThemeProvider/theme'

const styles = {
  link: ({ mr }) => ({
    textDecoration: 'none',
    marginRight: `${mr * theme.spacing(1)}`,
  }),
};

styles.propTypes = {
  theme: PropTypes.shape(),
};

export default styles;
