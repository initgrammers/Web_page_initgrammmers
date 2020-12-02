import PropTypes from 'prop-types';

const styles = (theme) => ({
  root: {
    color: theme.palette.primary.contrastText,
    [theme.breakpoints.up('lg')]: {
      width: 504,
      padding: theme.spacing(12, 0),
    },
  },
  title: {
    textAlign: 'center',
  },
  applicationType: {
    textAlign: 'center',
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(2),
  },
  button: {
    color: 'white',
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
});

styles.propTypes = {
  theme: PropTypes.shape(),
};

export default styles;
