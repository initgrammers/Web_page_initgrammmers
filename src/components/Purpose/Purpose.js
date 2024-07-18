import PropTypes from 'prop-types';
import theme from '../../shared/config/MuiThemeProvider/theme'

const styles = {
  cardPurpose: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 288,
    padding: theme.spacing(3, 2),
    marginBottom: theme.spacing(3),
    borderRadius: '20px',
    boxShadow: '4px 4px 8px rgba(133, 135, 137, 0.3)',
    ':last-child': {
      marginBottom: 0,
    },
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
  },

  [theme.breakpoints.up('sm')]: {
    cardPurpose: {
      width: 264,
    },
    description: {
      height: theme.spacing(12),
    },
  },
  [theme.breakpoints.up('lg')]: {
    cardPurpose: {
      width: 496,
    },
    description: {
      height: 'auto',
    },
  },
};

styles.propTypes = {
  theme: PropTypes.shape(),
};

export default styles;
