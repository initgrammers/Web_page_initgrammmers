import theme from '../../../shared/config/MuiThemeProvider/theme';

const styles = {
  container: { 
    background: theme.palette.primary.light,
    height: 'max(100vh, 650px)',
    maxHeight: "800px",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: theme.palette.primary.contrastText,
  },
  containerImage: {
    display: { lg: 'flex', md: 'none', xs: 'none' },
    flex: 1,
    justifyContent: 'center',
    padding: `${theme.spacing(4)} 0`,
    margin: { xs: `${theme.spacing(5)} 0`, lg: `${theme.spacing(8)} 0` },
  },
  mainImage: {
    objectFit: 'contain',
  },
  image: {
    width: { xs: 288, sm: 552, lg: 504 },
    height: { xs: 288, sm: 414, lg: 504 },
    position: 'relative',
  },
};

export default styles;
