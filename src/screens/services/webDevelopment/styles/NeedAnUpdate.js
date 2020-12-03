import PropTypes from 'prop-types';

const styles = (theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(36.75),
  },
  background: {
    position: 'absolute',
    top: -1,
    zIndex: 1000,
    width: '100%',
    height: 'auto',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  dino: {
    position: 'absolute',
    zIndex: 1000,
    margin: '0 auto',
    top: -32,
    left: 0,
    display: 'flex',
    justifyContent: 'center',
    height: 'auto',
    width: '100%',
    objectFit: 'cover',
  },
  computer: {
    position: 'absolute',
    top: 0,
    height: '100%',
    width: '100%',
    objectFit: 'cover',
    [theme.breakpoints.up('sm')]: {
      objectFit: 'fill',
    },
  },

  title: {
    color: theme.palette.primary.main,
    textAlign: 'center',
  },
  description: {
    paddingTop: theme.spacing(4),
    textAlign: 'center',
  },

  [theme.breakpoints.up('lg')]: {
    container: {
      paddingTop: theme.spacing(26),
      paddingBottom: theme.spacing(50),
    },
    description: {
      width: 400,
    },
  },
});

styles.propTypes = {
  theme: PropTypes.shape(),
};

export default styles;
