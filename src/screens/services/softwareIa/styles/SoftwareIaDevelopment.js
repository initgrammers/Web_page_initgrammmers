import theme from '../../../../shared/config/MuiThemeProvider/theme';

const styles = {
  background: {
    background: theme.palette.secondary.fade,
  },

  mainSection: {
    position: 'relative',
    paddingTop: {
      xs: theme.spacing(6),
      md: theme.spacing(10),
    },
    paddingBottom: {
      xs: theme.spacing(6),
      md: theme.spacing(10),
    },
  },

  containerBackgroundImage: {
    position: 'absolute',
    inset: 0,
    zIndex: 0,
  },

  container: {
    zIndex: 1,
    position: 'relative',
    maxWidth: '1280px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: { xs: 'column', lg: 'row' },
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: theme.spacing(6),
  },

  containerImage: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    order: { xs: 1, lg: 0 }, // Imagen a la izquierda en desktop
    paddingTop: { xs: theme.spacing(4), md: theme.spacing(6) },
  },

  image: {
    width: { xs: 300, md: 400, lg: 480 },
    height: { xs: 260, md: 350, lg: 420 },
    position: 'relative',
  },

  detailsContent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: { xs: 'center', lg: 'left' },
    order: { xs: 0, lg: 1 },
    paddingLeft: { lg: theme.spacing(8) },
    paddingRight: { xs: theme.spacing(2), md: theme.spacing(4) },
  },

  title: {
    paddingBottom: theme.spacing(3),
    color: theme.palette.primary.main,
    fontSize: { xs: '1.8rem', md: '2.4rem', lg: '2.8rem' },
    fontWeight: 700,
  },

  description: {
    color: theme.palette.text.primary,
    fontSize: { xs: '1rem', md: '1.25rem' },
    maxWidth: '600px',
  },
};

export default styles;
