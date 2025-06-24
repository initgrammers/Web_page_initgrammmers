import theme from '../../../../shared/config/MuiThemeProvider/theme';

const styles = {
  background: {
    background: theme.palette.primary.contrastText,
  },
  root: {
    paddingTop: {
      xs: theme.spacing(4),
      sm: theme.spacing(6),
      lg: theme.spacing(10),
    },
    paddingBottom: {
      xs: theme.spacing(4),
      sm: theme.spacing(6),
      lg: theme.spacing(10),
    },
    position: 'relative',
    textAlign: 'center',
  },
  title: {
    color: theme.palette.primary.main,
    fontSize: { xs: '1.8rem', md: '2.4rem' },
    marginBottom: theme.spacing(2),
    fontWeight: 700,
  },
  mainImageContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: theme.spacing(2),
  },
  mainImage: {
    width: { xs: 240, md: 360 },
    height: { xs: 240, md: 360 },
    position: 'relative',
  },
  cta: {
    marginBottom: theme.spacing(4),
    color: theme.palette.text.primary,
  },
  button: {
    marginBottom: theme.spacing(6),
  },
  itemsContainer: {
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    maxWidth: 320,
  },
  iconContainer: {
    width: 88,
    height: 88,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 2,
  },
  icon: {
    width: 88,
    height: 88,
    objectFit: 'contain',
  },
  itemTitle: {
    fontWeight: 700,
    color: theme.palette.primary.main,
    marginBottom: theme.spacing(1),
  },
  itemDescription: {
    textAlign: 'justify',
  },
};

export default styles;
