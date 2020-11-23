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
  containerBackgroundImage: {
    width: `100%`,
    height: 519,
    position: 'absolute',
    top: `-1px`,
  },
});

styles.propTypes = {
  theme: PropTypes.shape(),
};

export default styles;
