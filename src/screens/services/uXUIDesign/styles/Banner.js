import PropTypes from 'prop-types';
import theme from '../../../../shared/config/MuiThemeProvider/theme'

const styles = {
  content: {
    display: { lg: 'flex' },
    paddingTop: { xs: theme.spacing(4), sm: theme.spacing(8), lg: theme.spacing(0)},
  },
  description: {
    padding: `${theme.spacing(4)} 0`,
  },
  contentInformation: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: { lg: 'center' },
    paddingRight: { lg: theme.spacing(2) },
  },
  containerImage: {
    display: 'flex',
    justifyContent: 'center',
  },
  image: {
    width:  { xs: 288, sm: 412, lg: 504},
    height:  { xs: 343, sm: 490, lg: 600},
    position: 'relative',
    bottom: `-${theme.spacing(8)}`,
  },
  bottomSection: {
    background: theme.palette.primary.light,
    height: theme.spacing(8),
  },
};

styles.propTypes = {
  theme: PropTypes.shape(),
};

export default styles;
