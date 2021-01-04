import PropTypes from 'prop-types';
import { fade } from '@material-ui/core/styles/colorManipulator';

const styles = (theme) => ({
  root: {
    height: '100vh',
    overflow: 'scroll',
    padding: theme.spacing(5, 2),
    [theme.breakpoints.up('sm')]: {
      height: 'auto',
      padding: theme.spacing(5, 10),
      overflow: 'hidden',
    },
  },
  button: {
    background: 'transparent',
    justifyContent: 'flex-start',
    border: 'none',
  },
  title: {
    marginBottom: theme.spacing(5),
  },
  service: {
    display: 'flex',
    transition: theme.transitions.create('background', {
      duration: 1,
    }),
    '&:active': {
      background: fade(theme.palette.primary.main, 0.1),
      '&>div': {
        color: 'black',
        background: fade(theme.palette.primary.main, 0),
      },
    },
    '&:hover': {
      color: theme.palette.primary.main,
      '&>svg': {
        fill: theme.palette.primary.main,
      },
    },
  },
  descriptionService: {
    textAlign: 'left',
    textTransform: 'capitalize',
    paddingLeft: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
  },
  selected: {
    color: theme.palette.primary.main,
    border: 0,
    background: 'rgba(0,0,0,0.1)',
    borderRadius: 5,
  },
});

styles.propTypes = {
  theme: PropTypes.shape().isRequired,
};

export default styles;
