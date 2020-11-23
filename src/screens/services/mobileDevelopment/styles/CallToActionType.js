import PropTypes from 'prop-types';

const styles = (theme) => ({
  mainContent: {
    [theme.breakpoints.up('md')]: {
      padding: `0 ${theme.spacing(23)}px`,
    },
    container: {
      padding: `0 ${theme.spacing(13)}px`,
    },
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },

  title: {
    paddingBottom: theme.spacing(4),
    textAlign: 'center',
    '& span': {
      color: theme.palette.primary.light,
    },
  },
  description: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(4),
    textAlign: 'center',
  },
  image: {
    paddingTop: theme.spacing(6),
  },
  button: {
    background: theme.palette.secondary.main,
    color: theme.palette.primary.contrastText,
  },
  containerBackgroundImage: {
    width: `100%`,
    height: 1019,
    position: 'absolute',
  },
});

styles.propTypes = {
  theme: PropTypes.shape(),
};

export default styles;
