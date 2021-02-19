import PropTypes from 'prop-types';

const styles = (theme) => ({
  menuApp: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },

  button: {
    textTransform: 'capitalize',
    margin: `0 ${theme.spacing(2)}px`,
  },
  services: {
    textTransform: 'capitalize',
    color: theme.palette.common.black,
  },
  sectionMenu: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    marginLeft: theme.spacing(2),
    justifyContent: 'space-around',
    [theme.breakpoints.up('lg')]: {
      justifyContent: 'start',
    },
  },
  contactUs: {
    marginLeft: theme.spacing(4),
  },
  fade: {
    position: 'absolute',
    top: '100%',
    left: 0,
    width: '100%',
    background: 'white',
    boxShadow:
      'rgba(0, 0, 0, 0.25) 0px 4px 4px, rgba(0, 0, 0, 0.25) 0px 4px 4px inset',
  },
});

styles.propTypes = {
  theme: PropTypes.shape().isRequired,
};

export default styles;
