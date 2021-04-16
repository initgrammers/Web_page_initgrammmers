import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import makeStyles from '@material-ui/core/styles/makeStyles';
import PropTypes from 'prop-types';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import styles from './CardTeam';

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
      <IconButton target="_blank" className={classes.linkedin} href={href}>
        <LinkedInIcon />
      </IconButton>
    </Box>
  );
};

CardTeam.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  href: PropTypes.string,
};

CardTeam.defaultProps = {
  href: '#',
};

export default CardTeam;
