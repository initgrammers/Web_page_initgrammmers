import theme from '../../../../shared/config/MuiThemeProvider/theme';

const styles = {
  background: {
    background: theme.palette.primary.contrastText,
    position: 'relative',
    textAlign: 'center',
    paddingTop: { xs: theme.spacing(6), md: theme.spacing(10) },
    paddingBottom: { xs: theme.spacing(6), md: theme.spacing(10) },
  },

  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: theme.spacing(4),
  },

  imageContainer: (sizes) => ({
    width: {
      xs: sizes.xs.width,
      sm: sizes.sm.width,
      md: sizes.md.width,
      lg: sizes.lg.width,
    },
    height: {
      xs: sizes.xs.height,
      sm: sizes.sm.height,
      md: sizes.md.height,
      lg: sizes.lg.height,
    },
    position: 'relative',
  }),

  title: {
    color: theme.palette.text.primary,
    fontWeight: 700,
    maxWidth: '800px',
    fontSize: { xs: '1.8rem', md: '2.4rem' },
  },

  titleHighlight: {
    color: theme.palette.primary.main,
  },

  description: {
    color: theme.palette.text.secondary,
    maxWidth: '600px',
  },
};

export default styles;
