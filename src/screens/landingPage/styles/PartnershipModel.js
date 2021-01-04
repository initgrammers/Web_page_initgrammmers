import PropTypes from 'prop-types';

const styles = (theme) => ({
  section: {
    background: `rgba(163, 18, 91, 0.04)`,
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },

  image: {
    width: 288,
    height: 274,
    position: 'relative',
    marginBottom: theme.spacing(4),
  },

  description: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    textAlign: 'center',
  },
  button: {
    background: theme.palette.secondary.main,
    color: theme.palette.primary.contrastText,
  },
  services: {
    marginTop: theme.spacing(5),
  },
  modelPartnership: {
    '&:nth-child(1n)': {
      marginBottom: theme.spacing(4),
    },
    '&:last-child': {
      marginBottom: 0,
    },
  },
  [theme.breakpoints.up('sm')]: {
    content: {
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5),
    },
    image: {
      width: 552,
      height: 525,
      position: 'relative',
      marginBottom: theme.spacing(4),
    },
    modelPartnership: {
      width: 288,
    },
  },
  [theme.breakpoints.up('lg')]: {
    content: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    image: {
      width: 608,
      height: 577,
      position: 'relative',
      marginBottom: theme.spacing(4),
    },
    services: {
      display: 'flex',
      justifyContent: 'space-between',
      width: `100%`,
    },
    modelPartnership: {
      '&:nth-child(1n)': {
        marginBottom: 0,
      },
    },
  },
});
styles.propTypes = {
  theme: PropTypes.shape(),
};

export default styles;
