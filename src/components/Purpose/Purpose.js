import PropTypes from 'prop-types';
import theme from '../../shared/config/MuiThemeProvider/theme';

const styles = {
  cardPurpose: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: { xs: 264, lg: 496 },
    padding: theme.spacing(3, 2),
    marginBottom: theme.spacing(3),
    borderRadius: '20px',
    boxShadow: '4px 4px 8px rgba(133, 135, 137, 0.3)',
  },

  title: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    color: theme.palette.primary.main,
  },
  titleSecondary: {
    color: theme.palette.secondary.main,
  },
  description: {
    textAlign: 'center',
    height: { sm: theme.spacing(12), lg: 'auto' },
  },
};

styles.propTypes = {
  theme: PropTypes.shape(),
};

export default styles;
