import PropTypes from 'prop-types';

const styles = (theme) => ({
  title: {
    color: theme.palette.primary.light,
    '& span': {
      color: theme.palette.secondary.light,
    },
  },
  black: {
    color: theme.palette.text.primary,
    '& span': {
      color: theme.palette.primary.light,
    },
  },
});

styles.propTypes = {
  theme: PropTypes.shape().isRequired,
};

export default styles;
