import { Typography, Box, makeStyles } from '@material-ui/core';
import styles from '../styles/Purpose';

const useStyles = makeStyles(styles);
const Purpose = ({ title, description, image, backgroundColor }) => {
  const classes = useStyles();
  return (
    <Box className={classes.cardPurpose} bgcolor={backgroundColor}>
      <img src={image} width="100px" height="100px" alt={title} />
      <Typography variant="h2" className={classes.title}>
        {title}
      </Typography>
      <Typography className={classes.description} variant="body1">
        {description}
      </Typography>
    </Box>
  );
};

export default Purpose;
