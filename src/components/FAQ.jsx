import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import Subtitle from '#Components/Subtitle';
import Accordion from '#Components/Accordion';
import BackgroundImage from '#Components/BackgroundImage';
import CustomContainer from '#Components/CustomContainer';
import styles from '../assets/styles/FAQ';

const FAQ = ({
  titlePart1,
  questions,
  titlePart2 = '',
  titlePart3 = '',
  backgroundImage = '',
  heightImage = 0,
  black = false,
}) => (
  <Box component="section" position="relative">
    <BackgroundImage image={backgroundImage} height={heightImage} />
    <CustomContainer>
      <Box component="article" sx={styles.content}>
        <Subtitle
          black={black}
          head={titlePart1}
          emphasis={titlePart2}
          tail={titlePart3}
          align="center"
          mb={2}
          component="h2"
          variant="h3"
          fontSize={{ xs: '1.25rem', sm: '1.2853rem', lg: '1.4996rem' }}
        />
        {questions.map(({ id, title, details }) => (
          <Accordion key={id} title={title} details={details} />
        ))}
      </Box>
    </CustomContainer>
  </Box>
);

FAQ.propTypes = {
  titlePart1: PropTypes.string.isRequired,
  titlePart2: PropTypes.string,
  titlePart3: PropTypes.string,
  questions: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  backgroundImage: PropTypes.string,
  heightImage: PropTypes.number,
  black: PropTypes.bool,
};
export default FAQ;
