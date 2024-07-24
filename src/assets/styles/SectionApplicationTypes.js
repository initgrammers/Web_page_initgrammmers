import PropTypes from 'prop-types';
import theme from '../../shared/config/MuiThemeProvider/theme'

const styles = {
  mainSection: {
    background: theme.palette.secondary.main,
    marginBottom: theme.spacing(8),
  },
  backgroundPrimaryLight: {
    background: theme.palette.primary.light,
  },
  backgroundGray: {
    background: theme.palette.secondary.gray,
  },
  detailsContent: {
    display: { lg: 'flex' },
    flex: { lg: 5 },
    flexDirection: { lg: 'column' },
    justifyContent: { lg: 'center' },
    paddingTop: { xs: theme.spacing(6), lg: 0 },
  },
  title: {
    textAlign: 'center',
  },
  applicationType: {
    textAlign: 'center',
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(2),
  },
  containerImage: {
    position: 'relative',
    display: { xs: 'flex' },
    justifyContent: { xs: 'center' },
    overflow: 'hidden !important',
    bottom: `-${theme.spacing(8)}`,
    left: theme.spacing(2),
    marginTop: `-${theme.spacing(4)}`,
    flex: { lg: 5 },
    alignItems: { lg: 'flex-end' },
  },
  image: ({ xs, sm, md, lg }) => ({
    width:  { xs: xs.width, sm: sm.width, md: md.width, lg: lg.width},
    height:  { xs: xs.height, sm: sm.height, md: md.height, lg: lg.height},
    position: 'relative',
  }),
  container: {
    display: { lg: 'flex'},
    width: { xs: 566, sm: 552, md: 544, lg: 1024 }
  },
};

styles.propTypes = {
  theme: PropTypes.shape(),
};

export default styles;
