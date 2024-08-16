import theme from '../../../shared/config/MuiThemeProvider/theme';

const styles = {
  backgroundPrimaryLight: {
    background: theme.palette.primary.light,
  },
  backgroundSecondaryMain: {
    background: theme.palette.secondary.main,
  },
  backgroundSecondaryFade: {
    background: theme.palette.secondary.fade,
  },
  backgroundPrimaryFade: {
    background: theme.palette.primary.fade,
  },
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    paddingTop: { xs: 5, lg: 15 },
  },
  detailsContent: {
    width: '100%',
    flex: { lg: 5 },
    display: { lg: 'flex' },
    flexDirection: { lg: 'column' },
    justifyContent: { lg: 'center' },
    alignItems: 'center',
    paddingTop: { xs: theme.spacing(8), lg: 0 },
    textAlign: 'center',
  },
  title1: {
    color: theme.palette.primary.light,
  },
  title2: {
    color: theme.palette.secondary.light,
  },
  description: {
    padding: `${theme.spacing(4)} 0`,
    color: theme.palette.primary.snackBar,
    fontSize: { xs: '1.25rem', sm: '1.4996rem' },
  },
  buttons: {
    display: 'flex',
    flexDirection: { xs: 'column', sm: 'row' },
    justifyContent: 'center',
    gap: 2,
  },
  containerImage: {
    display: 'flex',
    flex: { lg: 5 },
    justifyContent: 'center',
    padding: `${theme.spacing(4)} 0`,
    margin: { xs: `${theme.spacing(5)} 0`, lg: `${theme.spacing(8)} 0` },
  },
  image: {
    width: { xs: 288, sm: 552, lg: 504 },
    height: { xs: 288, sm: 414, lg: 504 },
    position: 'relative',
  },
  mainImage: {
    objectFit: 'contain',
  },
};

export default styles;
