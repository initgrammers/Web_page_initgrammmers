import PropTypes from 'prop-types';
import theme from '../../shared/config/MuiThemeProvider/theme';

const styles = {
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

  container: (isImageRight) => ({
    display: 'flex',
    padding: { xs: `${theme.spacing(4, 0)}`, sm: `${theme.spacing(5)} 0`, lg: 0 },
    flexDirection: { xs: `${isImageRight ? 'column' : 'column-reverse'}`, lg: `${isImageRight ? 'row' : 'row-reverse'}` },
  }),
  image: ({ xs, sm, md, lg }) => ({
    width: { xs: xs.width, sm: sm.width, md: md.width, lg: lg.width },
    height: { xs: xs.height, sm: sm.height, md: md.height, lg: lg.height },
    position: 'relative',
  }),
  title: {
    color: theme.palette.primary.contrastText,
    textAlign: 'center',
  },
  textPrimaryMain: {
    color: theme.palette.primary.light,
  },
  textBlack: {
    color: theme.palette.text.primary,
  },
  description: {
    padding: `${theme.spacing(4)} 0 0 0`,
    textAlign: 'justify',
    color: theme.palette.primary.contrastText,
  },

  containerImage: (isImageRight) => ({
    display: 'flex',
    justifyContent: 'center',
    flex: { lg: 5 },
    padding: {
      xs: `${
        isImageRight
          ? `${theme.spacing(4)} 0 0 0`
          : `0 0 ${theme.spacing(5)} 0`
      }`,
      sm: `${
        isImageRight
          ? `${theme.spacing(5)} 0 0 0`
          : `0 0 ${theme.spacing(5)} 0`
      }`,
      lg: `${theme.spacing(8)} 0 !important`,
    },
  }),
  detailsContent: (isImageRight) => ({
    width: { xs: '100%', sm: 544, lg: 504 },
    flex: { lg: 5 },
    display: { lg: 'flex' },
    flexDirection: { lg: 'column' },
    justifyContent: { lg: 'center' },
    paddingTop: { lg: 0 },
    padding: { lg: `${
      !isImageRight
        ? `0 0 0 ${theme.spacing(2)}`
        : `0 ${theme.spacing(2)} 0 0`
    }` },
    paddingRight: { lg: theme.spacing(2) },
  }),
};

styles.propTypes = {
  theme: PropTypes.shape(),
};

export default styles;
