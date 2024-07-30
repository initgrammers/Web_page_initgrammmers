import PropTypes from 'prop-types';
import theme from '../../../shared/config/MuiThemeProvider/theme'

const styles = {
  menuApp: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
  languageMenu: {
    display: 'flex',
    flexDirection: 'column',
    width: 'fit-content'
  },
  button: {
    textTransform: 'capitalize',
    margin: `0 ${theme.spacing(2)}`,
  },
  services: {
    textTransform: 'capitalize',
    color: theme.palette.common.black,
  },
  sectionMenu: {
    flex: 1,
    alignItems: 'center',
    marginLeft: theme.spacing(2),
    justifyContent: 'space-around',
    [theme.breakpoints.up('lg')]: {
      justifyContent: 'start',
    },
  },
  fade: {
    position: 'absolute',
    top: '100%',
    left: 0,
    width: '100%',
    background: 'white',
    boxShadow:
      'rgba(0, 0, 0, 0.25) 0px 4px 4px, rgba(0, 0, 0, 0.25) 0px 4px 4px inset',
  },
  contactUs: {
    marginLeft: theme.spacing(4),
  },
};

styles.propTypes = {
  theme: PropTypes.shape().isRequired,
};

export default styles;
