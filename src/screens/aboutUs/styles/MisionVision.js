import PropTypes from 'prop-types';
import theme from '../../../shared/config/MuiThemeProvider/theme'

const styles = {
  section: {
    padding: { xs: theme.spacing(4, 0), sm: theme.spacing(5, 0), lg: theme.spacing(8, 0) },
  },
  containerMisionVision: {
    width: { xs: "100%", sm: 552, md: 544, lg: 1024 },
    display: 'flex',
    flexDirection: { xs: 'column', sm: 'row' },
    justifyContent: { xs: 'center', sm: 'space-between' },
    alignItems: 'center',
    marginBottom: `-${theme.spacing(3)}`,
    gap: { xs: 0, sm: 2, lg: 3 }
  },
};

styles.propTypes = {
  theme: PropTypes.shape(),
};

export default styles;
