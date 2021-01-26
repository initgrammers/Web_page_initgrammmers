import { Box, makeStyles } from '@material-ui/core';
import BackgroundImage from '#Components/BackgroundImage';
import CustomContainer from '#Components/CustomContainer';
import Purpose from './Purpose';
import styles from '../styles/MisionVision';

const useStyles = makeStyles(styles);

const MisionVision = ({
  misionTitle,
  misiondescription,
  misionImage,
  backgroundColorMision,
  visionTitle,
  visiondescription,
  visionImage,
  backgroundColorVision,
}) => {
  const classes = useStyles();
  return (
    <Box component="section">
      <BackgroundImage />
      <CustomContainer>
        <Box className={classes.containerMisionVision}>
          <Purpose
            backgroundColor={backgroundColorMision}
            title={misionTitle}
            description={misiondescription}
            image={misionImage}
          />
          <Purpose
            backgroundColor={backgroundColorVision}
            title={visionTitle}
            description={visiondescription}
            image={visionImage}
          />
        </Box>
      </CustomContainer>
    </Box>
  );
};

export default MisionVision;
