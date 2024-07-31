import PropTypes from 'prop-types';
import theme from '../../shared/config/MuiThemeProvider/theme';

const styles = {
  root: {
    padding: theme.spacing(8, 0),
    minHeight: 473,
    height: 'auto',
    background: theme.palette.primary.main,
  },
  icon: {
    fontSize: 18,
  },
  contactUs: {
    padding: theme.spacing(4, 0),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(5, 0),
    },
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(8, 0),
    },
  },
  gridContact: {
    height: '150px',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  gridContainer: {
    color: theme.palette.primary.contrastText,
    marginTop: theme.spacing(4),
  },
  description: {
    marginBottom: theme.spacing(4),
    maxWidth: 531,
  },
  text: {
    marginBottom: theme.spacing(2),
    fontWeight: '400 !important',
  },
  section: {
    marginBottom: theme.spacing(2),
    fontWeight: 'bold',
    fontSize: '1rem',
  },
  descriptionContact: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  contact: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(6),
  },
  borderContactUs: {
    height: '250px',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    paddingLeft: theme.spacing(4),
    borderLeft: '2px solid',
    borderColor: theme.palette.primary.main,
    [theme.breakpoints.down('sm')]: {
      paddingLeft: theme.spacing(0),
      borderLeft: 0,
    },
    [theme.breakpoints.down('md')]: {
      paddingLeft: theme.spacing(0),
      borderLeft: 0,
    },
  },
  action: {
    marginTop: theme.spacing(1),
    color: theme.palette.common.black,
  },
  image: {
    width: 169,
    height: 32,
    [theme.breakpoints.up('sm')]: {
      margin: 'auto',
      marginBottom: 4,
    },
    [theme.breakpoints.up('md')]: {
      margin: 'auto',
      marginBottom: 4,
    },
    [theme.breakpoints.down('xs')]: {
      margin: 'auto',
    },
    [theme.breakpoints.up('lg')]: {
      marginBottom: 4,
      marginLeft: 0,
    },
  },

  linkIcon: {
    display: 'flex',
    color: 'white',
    marginBottom: theme.spacing(2),
  },
  iconText: {
    marginLeft: theme.spacing(2),
  },

  socialMedia: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    background: theme.palette.primary.contrastText,
    marginLeft: theme.spacing(2),
    '&:hover': {
      color: '#584b4b',
      transition: 'all .05s ease-in-out',
      width: '32px',
      height: '32px',
    },
  },
};

styles.propTypes = {
  theme: PropTypes.shape(),
};

export default styles;
