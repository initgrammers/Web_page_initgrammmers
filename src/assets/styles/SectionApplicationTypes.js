import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';

const styles = makeStyles((theme) => ({
  mainSection: {
    background: theme.palette.secondary.main,
    marginBottom: theme.spacing(8),
  },
  backgroundPrimaryLight: {
    background: theme.palette.primary.light,
  },
  backgroundGray: {
    background: theme.palette.secondary.gray,
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
    marginTop: `-${theme.spacing(4)}px`,
  },

  image: ({ xs }) => ({
    width: xs.width,
    height: xs.height,
    position: 'relative',
  }),

  [theme.breakpoints.up('sm')]: {
    containerImage: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
    },
    image: ({ sm }) => ({
      width: sm.width,
      height: sm.height,
    }),
  },
  [theme.breakpoints.up('md')]: {
    image: ({ md }) => ({
      width: md.width,
      height: md.height,
    }),
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
    },
    containerImage: {
      flex: 5,
      alignItems: 'flex-end',
    },
    image: ({ lg }) => ({
      width: lg.width,
      height: lg.height,
    }),
  },
}));

styles.propTypes = {
  theme: PropTypes.shape(),
};

export default styles;
