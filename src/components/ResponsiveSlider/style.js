import PropTypes from 'prop-types';

const styles = (theme) => ({
  imagesContent: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      justifyContent: 'space-between',
    },
  },

  containerImage: {
    margin: theme.spacing(0, 1),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  image: {
    objectFit: 'cover',
    maxHeight: 96,
    width: 'auto',
    margin: 'auto',
  },
  arrow: {
    color: theme.palette.grey[500],
  },
  disableArrow: {
    color: theme.palette.grey[200],
  },
  showLabel: {
    visibility: 'collapse',
  },
});

styles.propTypes = {
  theme: PropTypes.shape(),
};

export default styles;
