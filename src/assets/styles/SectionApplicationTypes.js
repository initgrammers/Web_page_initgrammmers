import PropTypes from 'prop-types';
import theme from '../../shared/config/MuiThemeProvider/theme';

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
    color: theme.palette.primary.light,
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
  titleGray: {
    color: theme.palette.primary.snackBar,
  },
  applicationType: {
    textAlign: 'center',
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(2),
    fontSize: { xs: '1.5rem', sm: '1.6667rem', md: '1.875rem', lg: '2.0833rem' },
  },
  containerImage: {
    position: 'relative',
    display: { xs: 'flex' },
    justifyContent: { xs: 'center' },
    overflow: 'hidden !important',
    bottom: `-${theme.spacing(8)}`,
    left: { xs: 0, sm: theme.spacing(2) },
    marginTop: `-${theme.spacing(4)}`,
    flex: { lg: 5 },
    alignItems: { lg: 'flex-end' },
  },
  image: ({ xs, sm, md, lg }) => ({
    width: { xs: `${((xs.width / 600) * 100)}vw`, sm: sm.width, md: md.width, lg: lg.width },
    height: { xs: `${((xs.height / 600) * 100)}vw`, sm: sm.height, md: md.height, lg: lg.height },
    position: 'relative',
  }),
  container: {
    display: { lg: 'flex' },
    width: { xs: "100%", sm: 552, md: 544, lg: 1024 },
  },
  detailsSingleContent: {
    color: theme.palette.primary.contrastText,
    width: { xs: "100", sm: 552, md: 512 },
    padding: { lg: theme.spacing(12, 0) },
    paddingTop: { xs: theme.spacing(6) },
  },
  subTitle: {
    textAlign: 'center',
  },
  subTitleGray: {
    color: theme.palette.primary.snackBar,
  },
  bodyGray: {
    color: theme.palette.primary.snackBar,
  },
};

styles.propTypes = {
  theme: PropTypes.shape(),
};

export default styles;
