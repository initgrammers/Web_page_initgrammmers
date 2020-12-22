import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';

const styles = makeStyles((theme) => ({
  background: {
    background: 'rgba(163, 18, 91, 0.04)',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },

  title: {
    paddingBottom: theme.spacing(4),
    textAlign: 'center',
    '& span': {
      color: theme.palette.primary.light,
    },
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
  imageStyle: ({ xs }) => ({
    marginTop: theme.spacing(4),
    width: xs.width,
    height: xs.height,
    position: 'relative',
    '&>div>img': {
      objectFit: 'contain',
    },
  }),
  [theme.breakpoints.up('sm')]: {
    imageStyle: ({ sm }) => ({
      marginTop: theme.spacing(5),
      width: sm.width,
      height: sm.height,
      position: 'relative',
    }),
    content: {
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5),
    },
  },
  [theme.breakpoints.up('md')]: {
    imageStyle: ({ md }) => ({
      width: md.width,
      height: md.height,
      position: 'relative',
    }),
  },
  [theme.breakpoints.up('lg')]: {
    imageStyle: ({ lg }) => ({
      marginTop: theme.spacing(8),
      width: lg.width,
      height: lg.height,
      position: 'relative',
    }),
    content: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
  },
}));

styles.propTypes = {
  theme: PropTypes.shape(),
};

export default styles;
