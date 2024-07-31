import PropTypes from 'prop-types';
import theme from '../../../../shared/config/MuiThemeProvider/theme';

const styles = {
  background: {
    background: theme.palette.secondary.fade,
  },
  root: {
    paddingTop: { xs: theme.spacing(4), sm: theme.spacing(5), lg: theme.spacing(8) },
    paddingBottom: { xs: theme.spacing(4), sm: theme.spacing(5), lg: theme.spacing(8) },
  },
  mainContent: {
    zIndex: 1,
    position: 'relative',
  },
  gridContent: {
    display: 'flex',
    alignItems: 'center',
    order: { xs: '-1', lg: '1' },
    paddingLeft: { lg: theme.spacing(15) },
  },
  gridImage: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: { xs: theme.spacing(4), md: theme.spacing(6) },
  },
  image: {
    width: { xs: 288, lg: 504 },
    height: { xs: 392, lg: 694 },
    position: 'relative',
  },
  title: {
    paddingBottom: theme.spacing(4),
    color: theme.palette.primary.light,
  },
  images: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    display: 'flex',
    justifyContent: 'center',
  },
  figureLeft: {
    margin: 0,
  },
  figureRight: {
    margin: '0 0 0 15px',
  },
};

styles.propTypes = {
  theme: PropTypes.shape(),
};

export default styles;
