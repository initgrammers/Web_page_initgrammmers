import PropTypes from 'prop-types';
import theme from '../../shared/config/MuiThemeProvider/theme'

const styles ={
  imagesContent: {
    display: 'flex',
    flex: 1,
    justifyContent: { xs: 'space-evenly', sm: 'space-between' },
    alignItems: 'center',
  },

  containerImage: ({ imageIsLarge }) => ({
    margin: theme.spacing(0, 1),
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    fontSize: '0.8rem',
    height: `${imageIsLarge ? '41px' : '134px'}`,
  }),
  image: {
    objectFit: 'cover',
    maxHeight: 96,
    width: 'auto',
    margin: 'auto',
  },
  arrow: {
    color: theme.palette.grey[500],
  },
  disableArrow: {
    color: theme.palette.grey[200],
  },
  showLabel: {
    visibility: 'collapse',
  },
};

styles.propTypes = {
  theme: PropTypes.shape(),
};

export default styles;
