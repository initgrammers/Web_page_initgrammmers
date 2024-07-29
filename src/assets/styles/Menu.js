import PropTypes from 'prop-types';
import theme from '../../shared/config/MuiThemeProvider/theme'

const styles = {
  appbar: { background: 'red', position: 'relative' },
  main: {
    background: theme.palette.primary.contrastText,
    filter: { xs: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))', lg: 'drop-shadow(9px 9px 16px rgba(0, 0, 0, 0.25))'},
    color: theme.palette.common.black,
  },
  sectionLogo: {
    display: 'flex',
    flex: 1,
    justifyContent: { xs: 'start', sm: 'center'},
  },
  menuDesktopContainer: {
    display: { xs: 'none', md: 'flex' },
    width: '100%',
    justifyContent: 'space-between', // Agrega esta línea para distribuir los elementos
  },

  calculator: {
    background: theme.palette.primary.contrastText,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,
  },
};

styles.propTypes = {
  theme: PropTypes.shape(),
};

export default styles;
