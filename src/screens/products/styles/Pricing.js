import theme from '../../../shared/config/MuiThemeProvider/theme';

const styles = {
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingY: 10,
  },
  detailsContent: {
    width: { xs: '100%', sm: 468, lg: '100%' },
    flex: { lg: 5 },
    display: { lg: 'flex' },
    flexDirection: { lg: 'column' },
    justifyContent: { lg: 'center' },
    alignItems: 'center',
    paddingTop: { xs: theme.spacing(8), lg: 0 },
    paddingRight: { lg: theme.spacing(2) },
    textAlign: 'center',
  },
  title1: {
    color: theme.palette.primary.light,
  },
  title2: {
    // color: theme.palette.secondary.light,
  },
  description: {
    padding: `${theme.spacing(4)} 0`,
    color: theme.palette.primary.snackBar,
  },
  containerCards: {
    // backgroundColor: theme.palette.primary.fade,
    width: 'min(87.5vw, 1400px)',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 2,
    padding: `${theme.spacing(4)} 0`,
  },
};

export default styles;
