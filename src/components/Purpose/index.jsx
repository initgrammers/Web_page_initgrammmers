import { Typography, Box, makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './Purpose';

const useStyles = makeStyles(styles);
const Purpose = ({
  title,
  description,
  image,
  backgroundColor,
  colorTitleIsSecondary,
}) => {
  const classes = useStyles();
  return (
    <Box className={classes.cardPurpose} bgcolor={backgroundColor}>
      <img src={image} width="100px" height="100px" alt={title} />
      <Typography
        variant="h2"
        className={clsx(classes.title, {
          [classes.titleSecondary]: colorTitleIsSecondary,
        })}
      >
        {title}
      </Typography>
      <Typography className={classes.description} variant="body1">
        {description}
      </Typography>
    </Box>
  );
};

Purpose.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  colorTitleIsSecondary: PropTypes.bool,
};

Purpose.defaultProps = {
  colorTitleIsSecondary: false,
};

export default Purpose;
