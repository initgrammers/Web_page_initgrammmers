import PropTypes from 'prop-types';

const styles = (theme) => ({
  calculator: {
    fontSize: '0.875rem',
    fontWeight: '400',
    lineHeight: '1.43',
    letterSpacing: '0px',
    textTransform: 'inherit',
    color: theme.palette.text.primary,
    [theme.breakpoints.up('lg')]: {
      marginRight: theme.spacing(2),
    },
  },
});

styles.propTypes = {
  theme: PropTypes.shape(),
};

export default styles;
