import { Box } from '@material-ui/core';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Slider from '#Components/ResponsiveSlider';
import Subtitle from '#Components/Subtitle';
import BackgroundImage from '#Components/BackgroundImage';
import CustomContainer from '#Components/CustomContainer';
import styles from '../assets/styles/SliderTechnologies';

const SliderTechnologies = ({
  title,
  technologies,
  backgroundImage,
  heightImage,
  variantTitle,
  titleBlack,
  backgroundGray,
  barIsInvisible,
  imageIsLarge,
  showTitleImage,
}) => {
  const classes = styles({ barIsInvisible });
  return (
    <Box
      component="section"
      position="relative"
      className={clsx({
        [classes.backgroundGray]: backgroundGray,
      })}
    >
      <BackgroundImage image={backgroundImage} height={heightImage} />
      <CustomContainer>
        <Box className={classes.content}>
          <Subtitle
            head={title}
            component={variantTitle}
            variant={variantTitle}
            align="center"
            black={titleBlack}
          />
          <Slider
            showTitleImage={showTitleImage}
            imageIsLarge={imageIsLarge}
            data={technologies}
          />
          <Box className={classes.bar} />
        </Box>
      </CustomContainer>
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

SliderTechnologies.defaultProps = {
  backgroundImage: '',
  heightImage: 0,
  variantTitle: 'h2',
  titleBlack: false,
  backgroundGray: false,
  barIsInvisible: false,
  imageIsLarge: false,
  showTitleImage: true,
};

export default SliderTechnologies;
