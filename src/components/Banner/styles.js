import PropTypes from 'prop-types';
import theme from '../../shared/config/MuiThemeProvider/theme';

const styles = {
  detailsContent: {
    width: { xs: 468, lg: 520 },
    flex: { lg: 5 },
    display: { lg: 'flex' },
    flexDirection: { lg: 'column' },
    justifyContent: { lg: 'center' },
    paddingTop: { xs: theme.spacing(8), lg: 0 },
    paddingRight: { lg: theme.spacing(2) },
  },
  title: {
    color: theme.palette.primary.light,
    '& span': {
      color: theme.palette.secondary.light,
    },
  },
  description: {
    padding: `${theme.spacing(4)} 0`,
    color: theme.palette.primary.snackBar,
    fontSize: { xs: '1.25rem', sm: '1.4996rem' },
  },
  containerImage: {
    display: 'flex',
    flex: { lg: 5 },
    justifyContent: 'center',
    padding: `${theme.spacing(4)} 0`,
    margin: { xs: `${theme.spacing(5)} 0`, lg: `${theme.spacing(8)} 0` },
  },
  image: {
    width: { xs: 288, sm: 552, lg: 504 },
    height: { xs: 288, sm: 414, lg: 504 },
    position: 'relative',
  },
  mainImage: {
    objectFit: 'contain',
  },
  container: {
    display: { lg: 'flex' },
  },
};

styles.propTypes = {
  theme: PropTypes.shape(),
};

export default styles;
