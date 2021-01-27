import PropTypes from 'prop-types';

const styles = (theme) => ({
  main: {
    background: theme.palette.primary.contrastText,
    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
    [theme.breakpoints.up('lg')]: {
      filter: 'drop-shadow(9px 9px 16px rgba(0, 0, 0, 0.25)); color: black',
    },
    color: theme.palette.common.black,
  },
  sectionLogo: {
    display: 'flex',
    flex: 1,
    justifyContent: 'start',
    [theme.breakpoints.up('sm')]: {
      justifyContent: 'center',
    },
  },

  calculator: {
    background: theme.palette.primary.contrastText,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,
  },
});

styles.propTypes = {
  theme: PropTypes.shape(),
};

export default styles;
