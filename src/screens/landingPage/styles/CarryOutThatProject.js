import PropTypes from 'prop-types';
import theme from '../../../shared/config/MuiThemeProvider/theme'

const styles = {
  backgroundSection: {
    background: theme.palette.secondary.light,
    marginBottom: theme.spacing(8),
  },
  content: {
    display: 'flex',
    flexDirection: {lg:'row', xs:'column'},
    minWidth: 568,
    paddingTop: theme.spacing(4),
  },
  description: {
    padding: `${theme.spacing(4)}px 0`,
    textAlign: 'center',
  },
  contentInformation: {
    display: 'flex',
    marginY: {lg:11, xs:0},
    flexDirection: 'column',
    alignItems: 'center',
    gap: 4,
  },
  containerImage: {
    display: 'flex',
    justifyContent: 'center',
  },
  image: {
    width: 568,
    height: 479,
    position: 'relative',
    bottom: `-${theme.spacing(8)}px`,
    marginTop: `-${theme.spacing(4)}px`,
  },

  [theme.breakpoints.up('sm')]: {
    image: {
      width: 414,
      height: 414,
    },
  },
  [theme.breakpoints.up('md')]: {
    image: {
      margin: 0,
      width: 414,
      height: 414,
    },
  },
  [theme.breakpoints.up('lg')]: {
    content: {
      paddingTop: theme.spacing(8),
      display: 'flex',
    },
    contentInformation: {
      paddingRight: theme.spacing(2),
    },
    containerImage: {
      marginTop: `-${theme.spacing(8)}px`,
    },
    image: {
      width: 504,
      height: 504,
    },
  },
};

styles.propTypes = {
  theme: PropTypes.shape(),
};

export default styles;
