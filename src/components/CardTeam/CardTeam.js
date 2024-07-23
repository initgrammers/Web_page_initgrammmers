import PropTypes from 'prop-types';
import theme from '../../shared/config/MuiThemeProvider/theme'

const styles = {
  cardPurpose: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: {xs: 288, sm: 264, lg: 320},
    marginBottom: theme.spacing(4),
    borderRadius: '20px',
    boxShadow: '4px 4px 8px rgba(133, 135, 137, 0.3)',
    background: theme.palette.primary.contrastText,
  },

  memberTeam: {
    objectFit: 'cover',
    borderRadius: '20px 20px 0 0',
  },
  divider: {
    height: '5px',
    width: '100%',
    background: theme.palette.primary.light,
  },
  title: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(1),
    color: theme.palette.primary.main,
  },
  description: {
    textAlign: 'center',
    paddingBottom: theme.spacing(2),
  },
  linkedin: {
    padding: `0 0 ${theme.spacing(2)} 0`,
    '>span>svg': {
      fill: 'rgba(0, 0, 0, 0.38)',
    },
  },
  team: {
    justifyContent: { sm: 'space-between'},
  },
};

styles.propTypes = {
  theme: PropTypes.shape(),
};

export default styles;
