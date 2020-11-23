import {
  makeStyles,
  Box,
  Container,
  Button,
  Typography,
  Hidden,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import Image from 'next/image';
import styles from '../styles/CallToActionType';
import Subtitle from '#Components/Subtitle';

const useStyles = makeStyles(styles);

const CallToActionSection = ({
  titlePart1,
  titlePart2,
  titlePart3,
  description,
  image,
}) => {
  const classes = useStyles();

  return (
    <Box component="section">
      <Hidden mdDown>
        <Box className={classes.containerBackgroundImage}>
          <Image src="/assets/images/figures/bloque5.png" layout="fill" />
        </Box>
      </Hidden>
      <Container fixed className={classes.mainContent}>
        <Box component="article" className={classes.content}>
          <Subtitle
            black
            head={titlePart1}
            emphasis={titlePart2}
            tail={titlePart3}
            align="center"
            mb={4}
          />
          <Typography variant="body1" className={classes.description}>
            {description}
          </Typography>
          <Button variant="contained" className={classes.button}>
            CONTÁCTANOS
          </Button>
          <Box component="figure" className={classes.image}>
            <Image src={image} width={500} height={550} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

CallToActionSection.propTypes = {
  titlePart1: PropTypes.string.isRequired,
  titlePart2: PropTypes.string,
  titlePart3: PropTypes.string,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

CallToActionSection.defaultProps = {
  titlePart2: '',
  titlePart3: '',
};
export default CallToActionSection;
