import { makeStyles, Box, Container, Hidden } from '@material-ui/core';
import PropTypes from 'prop-types';
import Image from 'next/image';
import styles from '../styles/FAQ';
import Subtitle from '#Components/Subtitle';
import Accordion from '#Components/Accordion';

const useStyles = makeStyles(styles);

const FAQ = ({ titlePart1, titlePart2, titlePart3, questions }) => {
  const classes = useStyles();

  return (
    <Box component="section" position="relative">
      <Hidden mdDown>
        <Box className={classes.containerBackgroundImage}>
          <Image src="/assets/images/figures/bloque6.png" layout="fill" />
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
          {questions.map(({ id, title, details }) => (
            <Accordion key={id} title={title} details={details} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

FAQ.propTypes = {
  titlePart1: PropTypes.string.isRequired,
  titlePart2: PropTypes.string,
  titlePart3: PropTypes.string,
  questions: PropTypes.object.isRequired,
};

FAQ.defaultProps = {
  titlePart2: '',
  titlePart3: '',
};
export default FAQ;
