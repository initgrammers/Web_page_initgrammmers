import PropTypes from 'prop-types';
import makeStyles from '@material-ui/core/styles/makeStyles';

const styles = makeStyles((theme) => ({
  backgroundPrimaryLight: {
    background: theme.palette.primary.light,
  },
  backgroundSecondaryMain: {
    background: theme.palette.secondary.main,
  },
  backgroundSecondaryFade: {
    background: theme.palette.secondary.fade,
  },
  backgroundPrimaryFade: {
    background: theme.palette.primary.fade,
  },

  container: (props) => ({
    display: 'flex',
    flexDirection: `${props.isImageRight ? 'column' : 'column-reverse'}`,
    padding: theme.spacing(4, 0),
  }),
  title: {
    color: theme.palette.primary.contrastText,
    textAlign: 'center',
  },
  description: {
    padding: `${theme.spacing(4)}px 0 0 0`,
    textAlign: 'justify',
    color: theme.palette.primary.contrastText,
  },
  textPrimaryMain: {
    color: theme.palette.primary.light,
  },
  textBlack: {
    color: theme.palette.text.primary,
  },

  actionButton: {
    color: theme.palette.primary.contrastText,
    background: theme.palette.secondary.main,
  },
  containerImage: (props) => ({
    display: 'flex',
    justifyContent: 'center',
    padding: `${
      props.isImageRight
        ? `${theme.spacing(4)}px 0 0 0`
        : `0 0 ${theme.spacing(5)}px 0`
    }`,
  }),
  image: ({ xs }) => ({
    width: xs.width,
    height: xs.height,
    position: 'relative',
  }),
  [theme.breakpoints.up('sm')]: {
    container: {
      padding: `${theme.spacing(5)}px 0 !important`,
    },
    containerImage: (props) => ({
      display: 'flex',
      justifyContent: 'center',
      padding: `${
        props.isImageRight
          ? `${theme.spacing(5)}px 0 0 0`
          : `0 0 ${theme.spacing(5)}px 0`
      }`,
    }),
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
    container: (props) => ({
      display: 'flex',
      flexDirection: `${props.isImageRight ? 'row' : 'row-reverse'}`,
      padding: '0 !important',
    }),
    detailsContent: (props) => ({
      flex: 5,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      paddingTop: 0,
      padding: `${
        !props.isImageRight
          ? `0 0 0 ${theme.spacing(2)}px`
          : `0 ${theme.spacing(2)}px 0 0`
      }`,
      paddingRight: theme.spacing(2),
    }),
    containerImage: {
      flex: 5,
      padding: `${theme.spacing(8)}px 0 !important`,
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
