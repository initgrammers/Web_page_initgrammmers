import theme from '../../../shared/config/MuiThemeProvider/theme';

const styles = {
  card: {
    width: '300px',
    height: 'fit-contain',
    minHeight: '600px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 3,
    border: `2px solid ${theme.palette.secondary.fade}`,
    borderRadius: '8px',
    backgroundColor: theme.palette.primary.fade,
  },
  highlightCard: {
    boxShadow: `0 0 10px 1px ${theme.palette.secondary.main}`,
  },
  cardText: {
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    paddingBottom: 8,
  },
  cardHeader: {
    width: '200px',
    display: 'flex',
    flexDirection: 'column',
    gap: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: '2rem',
  },
  subtitle: {
    width: '250px',
  },
  cardBody: {
    display: 'flex',
    flexDirection: 'column',
    gap: 1.5,
  },
  cardTitleOptions: {
    paddingBottom: '4px',
  },
  cardOptions: {
    display: 'flex',
    alignItems: 'start',
    gap: 1,
  },
};

export default styles;
