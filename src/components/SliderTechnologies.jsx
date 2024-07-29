import PropTypes from 'prop-types';
import clsx from 'clsx';
import Slider from '#Components/ResponsiveSlider';
import Subtitle from '#Components/Subtitle';
import BackgroundImage from '#Components/BackgroundImage';
import CustomContainer from '#Components/CustomContainer';
import styles from '../assets/styles/SliderTechnologies';
import { Box } from '@mui/material';

const SliderTechnologies = ({
  title,
  technologies,
  backgroundImage = '',
  heightImage = 0,
  variantTitle = 'h2',
  titleBlack = false,
  backgroundGray = false,
  barIsInvisible = false,
  imageIsLarge = false,
  showTitleImage = true,
}) => {
  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        ...(backgroundGray && styles.backgroundGray),
      }}
    >
      <BackgroundImage image={backgroundImage} height={heightImage} />
      <Box sx={styles.mainContent}>
        <Box sx={styles.content}>
          <Subtitle
            head={title}
            component={variantTitle}
            variant={variantTitle}
            align="center"
            black={titleBlack}
            mb={4}
            fontSize={{ xs: "1.5rem", sm: "1.6667rem", md: "1.875rem", lg: "2.0833rem" }}
          />
          <Slider
            showTitleImage={showTitleImage}
            imageIsLarge={imageIsLarge}
            data={technologies}
          />
          {!barIsInvisible && (
            <Box sx={styles.bar}/>
          )} 
        </Box>
      </Box>
    </Box>
  );
};

SliderTechnologies.propTypes = {
  title: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  backgroundImage: PropTypes.string,
  heightImage: PropTypes.number,
  variantTitle: PropTypes.string,
  titleBlack: PropTypes.bool,
  backgroundGray: PropTypes.bool,
  barIsInvisible: PropTypes.bool,
  imageIsLarge: PropTypes.bool,
  showTitleImage: PropTypes.bool,
};

export default SliderTechnologies;
