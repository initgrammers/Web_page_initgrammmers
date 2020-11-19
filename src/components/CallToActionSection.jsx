import {
  makeStyles,
  Box,
  Container,
  Button,
  Typography,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import Image from 'next/image';
import styles from '../assets/styles/CallToActionType';
import SecctionContainer from '#Components/Sections/SecctionContainer';
import Subtitle from './Subtitle';

const useStyles = makeStyles(styles);

const CallToActionSection = ({
  titlePart1,
  titlePart2,
  titlePart3,
  description,
  image,
}) => {
  const classes = useStyles();
  // TODO Review this component
  return (
    <SecctionContainer>
      <Container fixed className={classes.content}>
        <Box component="article" className={classes.content}>
          <Subtitle
            black
            head={titlePart1}
            emphasis={titlePart2}
            tail={titlePart3}
            align="center"
            mb={4}
          />
          {/* <Typography variant="h1" component="h1" className={classes.title}>
            {titlePart1}
            <span>{titlePart2}</span>
            {titlePart3}
          </Typography> */}
          <Typography variant="body1" className={classes.description}>
            {description}
          </Typography>
        </Box>
        <Button variant="contained" className={classes.button}>
          CONTÁCTANOS
        </Button>
        <Box component="figure" className={classes.image}>
          <Image src={image} width={500} height={550} />
        </Box>
      </Container>
    </SecctionContainer>
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
