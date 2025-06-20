import theme from '../../../shared/config/MuiThemeProvider/theme';
const styles = {
  container: {
    backgroundColor: '#bd5389',
    boxShadow: '0px 20px 20px -30px black inset, 0px -20px 20px -25px black inset',
    paddingY: 10,
    paddingX: 5,
    position: 'relative',
  },
  
  headerContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    backgroundColor: '#fff',
  },

  pageTitle: {
    fontWeight: 700,
    fontSize: {
      xs: '2.5rem',
      sm: '3rem',
      md: '3.5rem',
    },
    color: theme.palette.primary.main,
    textAlign: 'center',
  },
};

export default styles;
