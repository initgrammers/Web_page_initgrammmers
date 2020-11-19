import PropTypes from 'prop-types';

const styles = (theme) => ({
  root: {
    color: theme.palette.primary.contrastText,
    background: theme.palette.primary.main,
  },
  title: {
    textAlign: 'center',
  },

  containerImage: {
    display: 'flex',
    margin: `${theme.spacing(16)}px 0`,
  },
  applicationType: {
    textAlign: 'center',
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(2),
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
