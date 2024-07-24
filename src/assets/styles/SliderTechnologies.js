import PropTypes from 'prop-types';
import theme from '../../shared/config/MuiThemeProvider/theme'

const styles ={
  mainContent: {
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
    zIndex: 1,
    padding: { xs: `0 ${theme.spacing(2)}`, sm: `0 ${theme.spacing(3)}`, md: `0 ${theme.spacing(26)}`, lg: `0 ${theme.spacing(16)}`},
  },
  backgroundGray: {
    background: '#EBEBEB',
  },
  content: {
    padding: { xs: `${theme.spacing(4)} 0`, sm: `${theme.spacing(5)} 0`, lg: `${theme.spacing(8)} 0` },
  },
  bar: {
    marginTop: theme.spacing(4),
    width: '100%',
    height: 10,
    background: `linear-gradient(176.58deg, ${theme.palette.primary.light} 0%,
      ${theme.palette.primary.light} 23.77%, ${theme.palette.secondary.main} 62.24%, ${theme.palette.secondary.light} 87.17%)`,
  },
};

styles.propTypes = {
  theme: PropTypes.shape(),
};

export default styles;
