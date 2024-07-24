import PropTypes from 'prop-types';
import theme from '../../../../shared/config/MuiThemeProvider/theme'

const styles = {
  mainSection: {
    background: theme.palette.primary.contrastText,
    marginBottom: theme.spacing(8),
  },
  detailsContent: {
    paddingTop: theme.spacing(8),
  },
  title: {
    color: theme.palette.primary.light,
    '& span': {
      color: theme.palette.secondary.light,
    },
  },
  description: {
    padding: `${theme.spacing(4)}px 0`,
  },
  containerImage: {
    display: 'flex',
    justifyContent: 'center',
  },
  image: {
    width: 288,
    height: 381,
    position: 'relative',
    bottom: `-${theme.spacing(8)}px`,
  },

  [theme.breakpoints.up('sm')]: {
    detailsContent: {
      paddingTop: theme.spacing(12),
    },
    image: {
      width: 414,
      height: 557,
    },
  },
  [theme.breakpoints.up('md')]: {
    container: {
      padding: `0 ${theme.spacing(23)}px`,
    },
  },
  [theme.breakpoints.up('lg')]: {
    mainSection: {
      position: 'relative',
    },
    container: {
      display: 'flex',
      padding: `0 ${theme.spacing(13)}px`,
      position: 'relative',
      zIndex: 1,
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
    },
    image: {
      width: 504,
      height: 679,
      marginTop: `-${theme.spacing(2)}px`,
    },
  },
  containerBackgroundImage: {
    width: '100%',
    height: 791,
    position: 'absolute',
    bottom: `-${theme.spacing(8)}px`,
  },
};

styles.propTypes = {
  theme: PropTypes.shape(),
};

export default styles;
