import PropTypes from 'prop-types';

const styles = (theme) => ({
  section: {
    background: theme.palette.primary.fade,
    padding: theme.spacing(4, 0),
  },
  team: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: `-${theme.spacing(4)}px`,
  },
  title: {
    color: theme.palette.primary.light,
    paddingBottom: theme.spacing(4),
  },
  [theme.breakpoints.up('sm')]: {
    section: {
      padding: theme.spacing(5, 0),
    },
    team: {
      justifyContent: 'space-between',
    },
  },
  [theme.breakpoints.up('lg')]: {
    section: {
      padding: theme.spacing(8, 0),
    },
  },
});

styles.propTypes = {
  theme: PropTypes.shape(),
};

export default styles;
