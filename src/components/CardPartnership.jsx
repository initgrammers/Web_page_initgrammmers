import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import PropTypes from 'prop-types';
import styles from '../assets/styles/CardPartnership';

const useStyles = makeStyles(styles);

const CardService = ({ image, title, description }) => {
  const classes = useStyles();
  return (
    <Box className={classes.card}>
      <Box component="figure">
        <img loading="lazy" width={100} height={100} src={image} alt={title} />
      </Box>
      <Typography
        variant="h4"
        component="h3"
        className={classes.titlePartnership}
      >
        {title}
      </Typography>
      <Typography variant="body2" className={classes.description}>
        {description}
      </Typography>
    </Box>
  );
};

CardService.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default CardService;
