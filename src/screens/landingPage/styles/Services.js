import PropTypes from 'prop-types';
import theme from '../../../shared/config/MuiThemeProvider/theme'

const styles = {
  services: {
    width: "100%",
    display: 'flex',
    flexWrap: 'wrap',
    paddingTop: theme.spacing(4),
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: { xs: 5, sm: 10 },
    [theme.breakpoints.between('sm', 'lg')]: {
      width: 552,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    [theme.breakpoints.up('lg')]: {
      width: 1024,
      flexDirection: 'row',
    },
  },
  content: {
    padding: `${theme.spacing(4)} 0`,
    [theme.breakpoints.between('sm', 'md')]: {
      padding: `${theme.spacing(5)} 0`,
    },
    [theme.breakpoints.up('lg')]: {
      padding: `${theme.spacing(2)} 0 ${theme.spacing(8)} 0`,
    },
  },
  title: {
    color: theme.palette.primary.light,
    textAlign: 'center',
  },
  // itemService: {
  //   marginBottom: theme.spacing(3),
  //   '&:last-child': {
  //     marginBottom: 0,
  //   },
  //   [theme.breakpoints.between('sm', 'md')]: {
  //     '&:nth-child(odd)': {
  //       marginRight: theme.spacing(9),
  //     },
  //     '&:nth-child(even)': {
  //       marginLeft: theme.spacing(9),
  //     },
  //     '&:last-child': {
  //       alignContent: 'center',
  //       margin: 0,
  //     },
  //   },
  //   [theme.breakpoints.up('lg')]: {
  //     '&:nth-child(1n)': {
  //       marginBottom: theme.spacing(8),
  //     },
  //     '&:nth-child(1)': {
  //       marginLeft: 0,
  //       marginRight: 0,
  //     },
  //     '&:nth-child(2)': {
  //       marginLeft: theme.spacing(9),
  //       marginRight: theme.spacing(9),
  //     },
  //     '&:nth-child(3)': {
  //       marginLeft: 0,
  //       marginRight: theme.spacing(9),
  //     },
  //     '&:nth-child(4)': {
  //       marginRight: 0,
  //       marginLeft: theme.spacing(4.5),
  //     },
  //     '&:nth-child(5)': {
  //       marginRight: 0,
  //       marginLeft: 0,
  //     },
  //     '&:nth-child(6)': {
  //       margin: `0 ${theme.spacing(13)}`,
  //     },
  //     '&:nth-child(7)': {
  //       marginRight: 0,
  //       marginLeft: 0,
  //     },
  //   },
  // },
};

styles.propTypes = {
  theme: PropTypes.shape(),
};

export default styles;
