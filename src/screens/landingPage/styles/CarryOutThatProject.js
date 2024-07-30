import PropTypes from 'prop-types';
import theme from '../../../shared/config/MuiThemeProvider/theme'

const styles = {
  backgroundSection: {
    background: theme.palette.secondary.light,
    marginBottom: theme.spacing(8),
  },
  content: {
    display: { lg: 'flex' },
    paddingTop: { xs: theme.spacing(4), lg: theme.spacing(8) },
  },
  description: {
    padding: `${theme.spacing(4)} 0`,
    textAlign: 'center',
  },
  contentInformation: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingRight: { lg: theme.spacing(2) },
  },
  containerImage: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: { lg: `-${theme.spacing(8)}` },
  },
  image: {
    width: { xs: 288, sm: 414, lg: 504},
    height: { xs: 288, sm: 414, lg: 504},
    position: 'relative',
    bottom: `-${theme.spacing(8)}`,
    marginTop: `-${theme.spacing(4)}`,
    margin: { md: 0 }
  },
};

styles.propTypes = {
  theme: PropTypes.shape(),
};

export default styles;
