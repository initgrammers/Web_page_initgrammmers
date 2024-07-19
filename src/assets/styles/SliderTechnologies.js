import PropTypes from 'prop-types';
import makeStyles from '@material-ui/core/styles/makeStyles';
import theme from '../../shared/config/MuiThemeProvider/theme'

const styles ={
  backgroundGray: {
    background: '#EBEBEB',
  },
  content: {
    padding: `${theme.spacing(4)}px 0`,
    [theme.breakpoints.up('sm')]: {
      padding: `${theme.spacing(5)}px 0`,
    },
    [theme.breakpoints.up('lg')]: {
      padding: `${theme.spacing(8)}px 0`,
    },
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
