import PropTypes from 'prop-types';

const styles = (theme) => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    width: 188,
    transition: theme.transitions.create('all', {
      duration: theme.transitions.duration.shortest,
    }),
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
  titleService: {
    textAlign: 'center',
    paddingTop: theme.spacing(1),
  },
});

styles.propTypes = {
  theme: PropTypes.shape(),
};

export default styles;
