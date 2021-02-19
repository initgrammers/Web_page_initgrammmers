import PropTypes from 'prop-types';

const styles = (theme) => ({
  detailsContent: {
    paddingTop: theme.spacing(8),
  },
  title: {
    color: theme.palette.primary.light,
    '& span': {
      color: theme.palette.secondary.light,
    },
  },
  description: {
    padding: `${theme.spacing(4)}px 0`,
    color: theme.palette.primary.snackBar,
  },
  containerImage: {
    display: 'flex',
    justifyContent: 'center',
    padding: `${theme.spacing(4)}px 0`,
  },
  image: {
    width: 288,
    height: 288,
    position: 'relative',
  },
  mainImage: {
    objectFit: 'contain',
  },
  [theme.breakpoints.up('sm')]: {
    containerImage: {
      margin: `${theme.spacing(5)}px 0`,
    },
    image: {
      width: 552,
      height: 414,
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
      paddingTop: 0,
      paddingRight: theme.spacing(2),
    },
    containerImage: {
      flex: 5,
      margin: `${theme.spacing(8)}px 0`,
    },
    image: {
      width: 504,
      height: 504,
    },
  },
});

styles.propTypes = {
  theme: PropTypes.shape(),
};

export default styles;
