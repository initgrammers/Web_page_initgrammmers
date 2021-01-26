import PropTypes from 'prop-types';

const styles = (theme) => ({
  cardPurpose: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 288,
    padding: theme.spacing(3, 2),
    borderRadius: '20px',
    boxShadow: '4px 4px 8px rgba(133, 135, 137, 0.3)',
    ':last-child': {
      marginBottom: 0,
    },
  },

  title: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
  },
  description: {
    textAlign: 'center',
  },

  [theme.breakpoints.up('sm')]: {
    cardPurpose: {
      width: 264,
    },
  },
  [theme.breakpoints.up('lg')]: {
    cardPurpose: {
      width: 496,
    },
  },
});

styles.propTypes = {
  theme: PropTypes.shape(),
};

export default styles;
