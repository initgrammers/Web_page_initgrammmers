import PropTypes from 'prop-types';
import theme from '../../../shared/config/MuiThemeProvider/theme'

const styles = {
  section: {
    padding: { xs: theme.spacing(4, 0), sm: theme.spacing(5, 0), lg: theme.spacing(8, 0) },
  },
  containerMisionVision: {
    width: "100%",
    display: 'flex',
    flexDirection: { xs: 'column', sm: 'row' },
    justifyContent: { xs: 'center', sm: 'space-between' },
    alignItems: 'center',
    marginBottom: `-${theme.spacing(3)}`,
  },
};

styles.propTypes = {
  theme: PropTypes.shape(),
};

export default styles;
