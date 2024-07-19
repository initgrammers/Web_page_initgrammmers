import PropTypes from 'prop-types';
import theme from '../../shared/config/MuiThemeProvider/theme'

const styles = {
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  titlePartnership: {
    textAlign: 'center',
    padding: `${theme.spacing(1)}px 0`,
    color: theme.palette.primary.main,
  },
  description: {
    textAlign: 'justify',
  },
};

styles.propTypes = {
  theme: PropTypes.shape(),
};

export default styles;
