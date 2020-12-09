import PropTypes from 'prop-types';

const styles = (theme) => ({
  detailsContent: {
    paddingTop: theme.spacing(4),
  },
  title: {
    color: theme.palette.primary.contrastText,
  },
  description: {
    padding: `${theme.spacing(4)}px 0`,
    color: theme.palette.primary.contrastText,
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
      padding: `${theme.spacing(5)}px 0`,
    },
    image: {
      width: 414,
      height: 414,
    },
    detailsContent: {
      paddingTop: theme.spacing(12),
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
      padding: `${theme.spacing(10)}px 0 ${theme.spacing(10)}px 0`,
      margin: 0,
    },
    image: {
      width: 504,
      height: 500,
    },
  },
});

styles.propTypes = {
  theme: PropTypes.shape(),
};

export default styles;
