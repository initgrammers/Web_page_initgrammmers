import PropTypes from 'prop-types';
import theme from '../../../shared/config/MuiThemeProvider/theme'

const styles = {
  services: {
    display: 'flex',
    flexWrap: 'wrap',
    paddingTop: theme.spacing(4),
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    padding: `${theme.spacing(4)}px 0`,
  },
  title: {
    color: theme.palette.primary.light,
    textAlign: 'center',
  },
  itemService: {
    margin: theme.spacing(6),
  },
  [theme.breakpoints.between('sm', 'md')]: {
    content: {
      padding: `${theme.spacing(5)}px 0`,
    },
    services: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    itemService: {
      '&:nth-of-type(odd)': {
        marginRight: theme.spacing(9),
      },
      '&:nth-of-type(even)': {
        marginLeft: theme.spacing(9),
      },
      '&:last-child': {
        alignContent: 'center',
        margin: 0,
      },
    },
  },
  [theme.breakpoints.up('lg')]: {
    content: {
      padding: `${theme.spacing(2)}px 0 ${theme.spacing(8)}px 0`,
    },
    services: {
      flexDirection: 'row',
    },
    itemService: {
      '&:nth-of-type(1n)': {
        marginBottom: theme.spacing(8),
      },
      '&:nth-of-type(1)': {
        marginLeft: 0,
        marginRight: 0,
      },
      '&:nth-of-type(2)': {
        marginLeft: `${theme.spacing(9)}px`,
        marginRight: `${theme.spacing(9)}px`,
      },
      '&:nth-of-type(3)': {
        marginLeft: 0,
        marginRight: `${theme.spacing(9)}px`,
      },

      '&:nth-of-type(4)': {
        marginRight: 0,
        marginLeft: `${theme.spacing(4.5)}px`,
      },
      '&:nth-of-type(5)': {
        marginRight: 0,
        marginLeft: 0,
      },
      '&:nth-of-type(6)': {
        margin: `0 ${theme.spacing(13)}px`,
      },
      '&:nth-of-type(7)': {
        marginRight: 0,
        marginLeft: 0,
      },
    },
  },
};

styles.propTypes = {
  theme: PropTypes.shape(),
};

export default styles;
