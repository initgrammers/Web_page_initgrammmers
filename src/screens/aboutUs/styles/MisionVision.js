import PropTypes from 'prop-types';

const styles = (theme) => ({
  containerMisionVision: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: theme.spacing(4, 0),
  },
  [theme.breakpoints.up('sm')]: {
    containerMisionVision: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      margin: theme.spacing(5, 0),
    },
  },
  [theme.breakpoints.up('lg')]: {
    containerMisionVision: {
      margin: theme.spacing(8, 0),
    },
  },
});

styles.propTypes = {
  theme: PropTypes.shape(),
};

export default styles;
