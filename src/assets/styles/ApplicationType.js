import PropTypes from 'prop-types';
import theme from '../../shared/config/MuiThemeProvider/theme'

const styles = {
  root: {
    color: theme.palette.primary.contrastText,
    width: { xs: 468, sm: 552, md: 512 },
    padding: { lg: theme.spacing(12, 0) },
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
    fontSize: { xs: "1.5rem", sm: "1.6667rem", md: "1.875rem", lg: "2.0833rem" }
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
