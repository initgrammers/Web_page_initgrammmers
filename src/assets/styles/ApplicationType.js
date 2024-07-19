import PropTypes from 'prop-types';
import theme from '../../shared/config/MuiThemeProvider/theme'

const styles = {
  root: {
    color: theme.palette.primary.contrastText,
    [theme.breakpoints.up('lg')]: {
      width: 504,
      padding: theme.spacing(12, 0),
    },
  },
  backgroundGray: {
    color: theme.palette.primary.light,
  },
  title: {
    textAlign: 'center',
  },
  titleGray: {
    color: theme.palette.primary.snackBar,
  },
  applicationType: {
    textAlign: 'center',
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(2),
  },
  button: {
    color: 'white',
  },
  bodyGray: {
    color: theme.palette.primary.snackBar,
  },
  stepper: {
    display: 'flex',
    justifyContent: 'center',
    background: 'none',
    '& .MuiMobileStepper-dot': {
      backgroundColor: 'rgba(255, 255, 255, 0.6)',
    },
    '& .MuiMobileStepper-dotActive': {
      backgroundColor: theme.palette.primary.contrastText,
    },
  },
};

styles.propTypes = {
  theme: PropTypes.shape(),
};

export default styles;
