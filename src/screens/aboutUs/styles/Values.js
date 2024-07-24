import PropTypes from 'prop-types';
import theme from '../../../shared/config/MuiThemeProvider/theme'

const styles = {
  section: {
    padding: { xs: theme.spacing(4, 0), sm: theme.spacing(5, 0), lg: theme.spacing(8, 0)},
  },
  values: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: { xs:'center', sm: 'space-between' },
    marginBottom: `-${theme.spacing(4)}`,
  },
  title: {
    paddingBottom: theme.spacing(4),
    fontSize: { xs: "1.5rem", sm: "1.6667rem", md: "1.875rem", lg: "2.0833rem" }
  },
};

styles.propTypes = {
  theme: PropTypes.shape(),
};

export default styles;
