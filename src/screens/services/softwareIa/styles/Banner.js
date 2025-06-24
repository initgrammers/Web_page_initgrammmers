import PropTypes from 'prop-types';
import theme from '../../../../shared/config/MuiThemeProvider/theme';

const styles = {
  mainSection: {
    background: theme.palette.primary.contrastText,
    marginBottom: theme.spacing(8),
    position: { lg: 'relative' },
  },
  detailsContent: {
    flex: { lg: 5 },
    display: { lg: 'flex' },
    flexDirection: { lg: 'column' },
    justifyContent: { lg: 'center' },
    paddingTop: { xs: theme.spacing(8), sm: theme.spacing(12), lg: 0 },
  },
  title: {
    color: theme.palette.primary.light,
    '& span': {
      color: theme.palette.secondary.light,
    },
  },
  description: {
    padding: `${theme.spacing(4)} 0`,
  },
  containerImage: {
    display: 'flex',
    justifyContent: 'center',
    flex: { lg: 5 },
  },
  image: {
    width: { xs: 288, sm: 414, lg: 504 },
    height: { xs: 381, sm: 557, lg: 679 },
    position: 'relative',
    bottom: `-${theme.spacing(8)}`,
    marginTop: { lg: `-${theme.spacing(2)}` },
  },
  container: {
    display: { lg: 'flex' },
    position: { lg: 'relative' },
    zIndex: { lg: 1 },
    padding: { md: `0 ${theme.spacing(23)}`, lg: `0 ${theme.spacing(13)}` },
  },
  containerBackgroundImage: {
    width: '100%',
    height: 791,
    position: 'absolute',
    bottom: `-${theme.spacing(8)}`,
    display: { xs: 'none', lg: 'block' },
  },
};

styles.propTypes = {
  theme: PropTypes.shape(),
};

export default styles;
