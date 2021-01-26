import PropTypes from 'prop-types';

const styles = (theme) => ({
  cardPurpose: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 288,
    marginBottom: theme.spacing(4),
    borderRadius: '20px',
    boxShadow: '4px 4px 8px rgba(133, 135, 137, 0.3)',
  },

  memberTeam: {
    objectFit: 'cover',
    borderRadius: '20px 20px 0 0',
  },
  divider: {
    height: '5px',
    width: '100%',
    background: theme.palette.primary.light,
  },
  title: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(1),
    color: theme.palette.primary.main,
  },
  description: {
    textAlign: 'center',
    paddingBottom: theme.spacing(2),
  },
  linkedin: {
    padding: `0 0 ${theme.spacing(2)}px 0`,
    '>span>svg': {
      fill: 'rgba(0, 0, 0, 0.38)',
    },
  },
  [theme.breakpoints.up('sm')]: {
    cardPurpose: {
      width: 264,
    },
    team: {
      justifyContent: 'space-between',
    },
  },
  [theme.breakpoints.up('lg')]: {
    cardPurpose: {
      width: 320,
    },
  },
});

styles.propTypes = {
  theme: PropTypes.shape(),
};

export default styles;
