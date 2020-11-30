import PropTypes from 'prop-types';

const styles = (theme) => ({
  content: {
    padding: `${theme.spacing(4)}px 0`,
    [theme.breakpoints.up('sm')]: {
      padding: `${theme.spacing(5)}px 0`,
    },
    [theme.breakpoints.up('lg')]: {
      padding: `${theme.spacing(8)}px 0`,
    },
  },
});

styles.propTypes = {
  theme: PropTypes.shape(),
};

export default styles;
