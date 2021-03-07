import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './CardValue';

const useStyles = makeStyles(styles);
const CardValue = ({ description, image, isBorderSecondary }) => {
  const classes = useStyles();
  return (
    <Box
      component="article"
      className={clsx(classes.cardValue, {
        [classes.cardSecondary]: isBorderSecondary,
      })}
    >
      <img src={image} width="100px" height="100px" alt={description} />
      <Typography className={classes.description} variant="body2">
        {description}
      </Typography>
    </Box>
  );
};

CardValue.propTypes = {
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  isBorderSecondary: PropTypes.bool,
};

CardValue.defaultProps = {
  isBorderSecondary: false,
};
export default CardValue;
