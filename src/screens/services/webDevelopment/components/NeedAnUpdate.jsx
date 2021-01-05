import { makeStyles, Box, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import CustomContainer from '#Components/CustomContainer';
import styles from '../styles/NeedAnUpdate';

const useStyles = makeStyles(styles);

const NeedAnUpdate = ({
  title,
  description,
  image,
  backgroundImage,
  ornamentImage,
}) => {
  const classes = useStyles();

  return (
    <Box component="section" position="relative">
      <img
        loading="lazy"
        className={classes.background}
        src={backgroundImage}
        alt="Diseño y desarrollo de aplicaciones web y móviles - Initgrammers"
      />
      <Box className={classes.dino}>
        <img loading="lazy" src={ornamentImage} alt="background-dino" />
      </Box>

      <img
        loading="lazy"
        className={classes.computer}
        src={image}
        alt={title}
      />
      <CustomContainer>
        <Box className={classes.container}>
          <Typography variant="h2" className={classes.title}>
            {title}
          </Typography>
          <Typography variant="body1" className={classes.description}>
            {description}
          </Typography>
        </Box>
      </CustomContainer>
    </Box>
  );
};

NeedAnUpdate.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  backgroundImage: PropTypes.isRequired,
  ornamentImage: PropTypes.string.isRequired,
};

export default NeedAnUpdate;
