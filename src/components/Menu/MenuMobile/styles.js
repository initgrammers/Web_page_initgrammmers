import theme from '../../../shared/config/MuiThemeProvider/theme'

const styles = {
  sectionLogo: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-between',
  },
  drawer: {
    position: 'absolute',
    top: '103%',
    left: 0,
    background: 'white',
    width: '100%',
  },
  nested: {
    color: theme.palette.primary.snackBar,
    paddingLeft: theme.spacing(4),
  },
  selected: {
    color: theme.palette.primary.contrastText,
    background: theme.palette.primary.light,
    '&>div>svg': {
      fill: theme.palette.primary.contrastText,
    },
    '&:hover': {
      background: theme.palette.primary.main,
    },
  },

  button: {
    color: theme.palette.primary.main,
    margin: 0,
  },
};

export default styles;
