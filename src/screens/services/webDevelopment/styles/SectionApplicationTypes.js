import PropTypes from 'prop-types';

const styles = (theme) => ({
  mainSection: {
    background: theme.palette.primary.light,
    marginBottom: theme.spacing(8),
  },
  detailsContent: {
    paddingTop: theme.spacing(6),
  },
  title: {
    textAlign: 'center',
  },
  applicationType: {
    textAlign: 'center',
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(2),
  },
  containerImage: {
    position: 'relative',
    overflow: 'hidden',
    bottom: `-${theme.spacing(8)}px`,
    left: theme.spacing(2),
  },
  image: {
    width: 610,
    height: 438,
    position: 'relative',
  },
  [theme.breakpoints.up('sm')]: {
    containerImage: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
    },
    image: {
      width: 412,
      height: 296,
    },
  },
  [theme.breakpoints.up('md')]: {
    container: {
      alignItems: 'end',
    },
  },
  [theme.breakpoints.up('lg')]: {
    container: {
      display: 'flex',
    },
    detailsContent: {
      flex: 5,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: `${theme.spacing(12)}px 0`,
    },
    containerImage: {
      flex: 5,
      alignItems: 'end',
    },
    image: {
      height: 362,
      width: 504,
    },
  },
});

styles.propTypes = {
  theme: PropTypes.shape(),
};

export default styles;
