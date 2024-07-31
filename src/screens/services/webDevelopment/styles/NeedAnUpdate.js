import PropTypes from 'prop-types';
import theme from '../../../../shared/config/MuiThemeProvider/theme';

const styles = {
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: { xs: theme.spacing(8), lg: theme.spacing(26) },
    paddingBottom: { xs: theme.spacing(36.75), lg: theme.spacing(50) },
  },
  background: {
    position: 'absolute',
    top: -1,
    zIndex: 1000,
    width: '100%',
    height: 'auto',
  },
  dino: {
    position: 'absolute',
    zIndex: 1000,
    margin: '0 auto',
    top: -32,
    left: 0,
    display: 'flex',
    justifyContent: 'center',
    height: 'auto',
    width: '100%',
    objectFit: 'cover',
  },
  computer: {
    position: 'absolute',
    top: 0,
    height: '100%',
    width: '100%',
  },

  title: {
    color: theme.palette.primary.light,
    textAlign: 'center',
    fontSize: { xs: '1.5rem', sm: '1.6667rem', md: '1.875rem', lg: '2.0833rem' },
  },
  description: {
    width: { lg: 400 },
    paddingTop: theme.spacing(4),
    textAlign: 'center',
  },
};

styles.propTypes = {
  theme: PropTypes.shape(),
};

export default styles;
