const styles = (theme) => ({
  sectionLogo: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-between',
  },
  drawer: {
    flexShrink: 0,
    width: '100%',
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
  nested: {
    paddingLeft: theme.spacing(4),
  },
  button: {
    color: theme.palette.primary.main,
    margin: 0,
  },
});

export default styles;
