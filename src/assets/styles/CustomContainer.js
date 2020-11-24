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
});

styles.propTypes = {
  theme: PropTypes.shape(),
};

export default styles;
