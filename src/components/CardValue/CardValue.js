import PropTypes from 'prop-types';
import theme from '../../shared/config/MuiThemeProvider/theme'

const styles = {
  cardValue: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: { xs: 288, sm: 264, lg: 320 },
    marginBottom: theme.spacing(4),
    borderRadius: '20px',
    background: theme.palette.primary.contrastText,
    border: '1px solid',
    borderColor: theme.palette.primary.light,
    padding: theme.spacing(3, 2),
  },
  cardSecondary: {
    borderColor: theme.palette.secondary.light,
  },

  title: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(1),
  },
  description: {
    textAlign: 'center',
    paddingTop: theme.spacing(2),
  },
};

styles.propTypes = {
  theme: PropTypes.shape(),
};

export default styles;
