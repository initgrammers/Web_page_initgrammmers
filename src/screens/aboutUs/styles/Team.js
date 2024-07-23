import PropTypes from 'prop-types';
import theme from '../../../shared/config/MuiThemeProvider/theme'

const styles = {
  section: {
    background: theme.palette.primary.fade,
    padding: { xs: theme.spacing(4, 0), sm: theme.spacing(5, 0), lg: theme.spacing(8, 0) },
  },
  team: {
    width: "106%",
    display: 'flex',
    flexWrap: 'wrap',
    gap: { xs: '20px' },
    justifyContent: { xs: 'center', sm: 'space-between' },
    marginBottom: `-${theme.spacing(4)}`,
  },
  title: {
    color: theme.palette.primary.light,
    paddingBottom: theme.spacing(4),
    fontSize: { xs: "1.5rem", sm: "1.6667rem", md: "1.875rem", lg: "2.0833rem" }
  },
};

styles.propTypes = {
  theme: PropTypes.shape(),
};

export default styles;
