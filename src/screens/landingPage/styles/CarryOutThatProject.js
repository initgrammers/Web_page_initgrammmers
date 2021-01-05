import PropTypes from 'prop-types';

const styles = (theme) => ({
  backgroundSection: {
    background: theme.palette.secondary.light,
    marginBottom: theme.spacing(8),
  },
  content: {
    paddingTop: theme.spacing(4),
  },
  description: {
    padding: `${theme.spacing(4)}px 0`,
    textAlign: 'center',
  },
  contentInformation: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  containerImage: {
    display: 'flex',
    justifyContent: 'center',
  },
  image: {
    width: 288,
    height: 288,
    position: 'relative',
    bottom: `-${theme.spacing(8)}px`,
    marginTop: `-${theme.spacing(4)}px`,
  },

  [theme.breakpoints.up('sm')]: {
    image: {
      width: 414,
      height: 414,
    },
  },
  [theme.breakpoints.up('md')]: {
    image: {
      margin: 0,
      width: 414,
      height: 414,
    },
  },
  [theme.breakpoints.up('lg')]: {
    content: {
      paddingTop: theme.spacing(8),
      display: 'flex',
    },
    contentInformation: {
      paddingRight: theme.spacing(2),
    },
    containerImage: {
      marginTop: `-${theme.spacing(8)}px`,
    },
    image: {
      width: 504,
      height: 504,
    },
  },
});

styles.propTypes = {
  theme: PropTypes.shape(),
};

export default styles;
