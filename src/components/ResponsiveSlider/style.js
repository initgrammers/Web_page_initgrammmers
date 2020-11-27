import PropTypes from 'prop-types';

const styles = (theme) => ({
  containerImage: {
    margin: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    height: 148,
  },
  image: {
    objectFit: 'cover',
    maxWidth: 100,
    maxHeight: 100,
    width: 'auto',
    margin: 'auto',
  },
  bar: {
    width: '100%',
    height: 10,
    background: `linear-gradient(176.58deg, ${theme.palette.primary.light} 0%,
       ${theme.palette.primary.light} 23.77%, ${theme.palette.secondary.main} 62.24%, ${theme.palette.secondary.light} 87.17%)`,
  },
  arrow: {
    color: theme.palette.grey[500],
  },
  disableArrow: {
    color: theme.palette.grey[200],
  },
});

styles.propTypes = {
  theme: PropTypes.shape(),
};

export default styles;
