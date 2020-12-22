import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';

const styles = makeStyles((theme) => ({
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

  imageStyle: ({ xs }) => ({
    width: xs.width,
    height: xs.height,
    marginBottom: theme.spacing(4),
    position: 'relative',
    '&>div>img': {
      objectFit: 'contain',
    },
  }),

  shop: {
    marginTop: theme.spacing(4),
  },
  optionsShop: {
    '&:nth-child(1n)': {
      marginBottom: theme.spacing(4),
    },
    '&:last-child': {
      marginBottom: 0,
    },
  },
  [theme.breakpoints.up('sm')]: {
    imageStyle: ({ sm }) => ({
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
      width: lg.width,
      height: lg.height,
      position: 'relative',
    }),
    content: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    shop: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
    optionsShop: {
      width: '480px',
      '&:nth-child(3)': {
        marginBottom: 0,
      },
      '&:last-child': {
        marginBottom: 0,
      },
    },
  },
}));

styles.propTypes = {
  theme: PropTypes.shape(),
};

export default styles;
