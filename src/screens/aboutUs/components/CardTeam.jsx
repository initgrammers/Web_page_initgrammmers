import { Typography, Box, makeStyles, IconButton } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import styles from '../styles/CardTeam';

const useStyles = makeStyles(styles);
const CardTeam = ({ name, title, image, href }) => {
  const classes = useStyles();
  return (
    <Box component="article" className={classes.cardPurpose}>
      <img
        className={classes.memberTeam}
        src={image}
        width="100%"
        height="241px"
        alt={title}
      />
      <Box className={classes.divider} />
      <Typography variant="h3" className={classes.title}>
        {name}
      </Typography>
      <Typography className={classes.description} variant="body2">
        {title}
      </Typography>
      <IconButton className={classes.linkedin} href="/">
        <LinkedInIcon />
      </IconButton>
    </Box>
  );
};

export default CardTeam;
