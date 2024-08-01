import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import BackgroundImage from '#Components/BackgroundImage';
import CustomContainer from '#Components/CustomContainer';
import Purpose from '#Components/Purpose';
import styles from '../styles/MisionVision';

const MisionVision = ({
  misionTitle,
  misiondescription,
  misionImage,
  backgroundColorMision,
  visionTitle,
  visiondescription,
  visionImage,
  backgroundColorVision,
  colorTitleIsSecondaryMision = false,
  colorTitleIsSecondaryVision = false,
  backgroundImage = '',
  heightImage = 0,
}) => (
  <Box component="section" position="relative" sx={styles.section}>
    <BackgroundImage image={backgroundImage} height={heightImage} />
    <CustomContainer>
      <Box sx={styles.containerMisionVision}>
        <Purpose
          backgroundColor={backgroundColorMision}
          title={misionTitle}
          description={misiondescription}
          image={misionImage}
          colorTitleIsSecondary={colorTitleIsSecondaryMision}
        />
        <Purpose
          backgroundColor={backgroundColorVision}
          title={visionTitle}
          description={visiondescription}
          image={visionImage}
          colorTitleIsSecondary={colorTitleIsSecondaryVision}
        />
      </Box>
    </CustomContainer>
  </Box>
);

MisionVision.propTypes = {
  backgroundImage: PropTypes.string,
  heightImage: PropTypes.number,
  misionTitle: PropTypes.string.isRequired,
  misiondescription: PropTypes.string.isRequired,
  misionImage: PropTypes.string.isRequired,
  backgroundColorMision: PropTypes.string.isRequired,
  colorTitleIsSecondaryMision: PropTypes.bool,
  visionTitle: PropTypes.string.isRequired,
  visiondescription: PropTypes.string.isRequired,
  visionImage: PropTypes.string.isRequired,
  backgroundColorVision: PropTypes.string.isRequired,
  colorTitleIsSecondaryVision: PropTypes.bool,
};

export default MisionVision;
