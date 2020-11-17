import PropTypes from 'prop-types';

const styles = (theme) => ({
  root: {
    paddingTop: theme.spacing(16),
    paddingBottom: theme.spacing(16),
    [theme.breakpoints.down('md')]: {
      paddingTop: theme.spacing(13),
      paddingBottom: theme.spacing(13),
    },
    [theme.breakpoints.down('xs')]: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    paddingBottom: theme.spacing(4),
    textAlign: 'center',
    '& span': {
      color: theme.palette.primary.light,
    },
  },
  description: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(4),
  },
  image: {
    paddingTop: theme.spacing(6),
  },
  button: {
    background: theme.palette.secondary.main,
    color: theme.palette.primary.contrastText,
  },
});

styles.propTypes = {
  theme: PropTypes.shape(),
};

export default styles;
