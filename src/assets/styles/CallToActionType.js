import PropTypes from 'prop-types';
import theme from '../../shared/config/MuiThemeProvider/theme'

const styles = {
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: { xs: theme.spacing(4), sm: theme.spacing(5), lg: theme.spacing(8)},
    paddingBottom: { xs: theme.spacing(4), sm: theme.spacing(5), lg: theme.spacing(8)},
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
  imageStyle: ({ xs, sm, md, lg }) => ({
    marginTop: { xs: theme.spacing(4), sm: theme.spacing(5), lg: theme.spacing(8) },
    width:  { xs: xs.width, sm: sm.width, md: md.width, lg: lg.width},
    height:  { xs: xs.height, sm: sm.height, md: md.height, lg: lg.height},
    position: 'relative',
    '&>div>img': {
      objectFit: 'contain',
    },
  }),
};

styles.propTypes = {
  theme: PropTypes.shape(),
};

export default styles;
