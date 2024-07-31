import PropTypes from 'prop-types';
import theme from '../../../../shared/config/MuiThemeProvider/theme';

const styles = {
  detailsContent: {
    paddingTop: { xs: theme.spacing(8), sm: theme.spacing(12), lg: 0 },
    flex: { lg: 5 },
    display: { lg: 'flex' },
    flexDirection: { lg: 'column' },
    justifyContent: { lg: 'center' },
    paddingRight: { lg: theme.spacing(2) },
  },
  title: {
    color: theme.palette.primary.contrastText,
    textAlign: { xs: 'center', lg: 'left' },
    fontSize: { xs: '1.5rem', sm: '1.6667rem', md: '1.875rem', lg: '2.0833rem' },
  },
  description: {
    padding: `${theme.spacing(4)} 0`,
    color: theme.palette.common.black,
    textAlign: 'justify',
  },
  containerImage: {
    display: 'flex',
    flex: { lg: 5 },
    justifyContent: 'center',
    padding: { xs: `${theme.spacing(4)} 0`, sm: `${theme.spacing(5)} 0`, lg: `${theme.spacing(8)} 0` },
  },
  image: {
    width: { xs: 288, sm: 544, lg: 504 },
    height: { xs: 235, sm: 449, lg: 382 },
    position: 'relative',
  },
  container: {
    display: { lg: 'flex' },
  },
};

styles.propTypes = {
  theme: PropTypes.shape(),
};

export default styles;
