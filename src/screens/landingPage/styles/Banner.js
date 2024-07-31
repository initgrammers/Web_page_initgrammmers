import PropTypes from 'prop-types';
import theme from '../../../shared/config/MuiThemeProvider/theme';

const styles = {
  detailsContent: {
    flex: { lg: 5 },
    display: { lg: 'flex' },
    flexDirection: { lg: 'column' },
    justifyContent: { lg: 'center' },
    paddingRight: { lg: theme.spacing(2) },
    paddingTop: { xs: theme.spacing(4), sm: theme.spacing(12), lg: 0 },
  },
  title: {
    color: theme.palette.primary.contrastText,
  },
  description: {
    padding: `${theme.spacing(4)} 0`,
    color: theme.palette.primary.contrastText,
    fontSize: { xs: '1.25rem', sm: '1.2853rem', md: '1.2853rem', lg: '1.4996rem' },
  },
  containerImage: {
    display: 'flex',
    flex: { lg: 5 },
    justifyContent: 'center',
    padding: { xs: `${theme.spacing(4)} 0`, sm: `${theme.spacing(5)} 0`, lg: `${theme.spacing(8)} 0 ${theme.spacing(13)} 0` },
    margin: { lg: 0 },
  },
  image: {
    width: { xs: 288, sm: 544, lg: 504 },
    height: { xs: 235, sm: 449, lg: 504 },
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
