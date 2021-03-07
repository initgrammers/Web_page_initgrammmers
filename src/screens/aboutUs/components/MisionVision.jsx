import Box from '@material-ui/core/Box';
import makeStyles from '@material-ui/core/styles/makeStyles';
import PropTypes from 'prop-types';
import BackgroundImage from '#Components/BackgroundImage';
import CustomContainer from '#Components/CustomContainer';
import Purpose from '#Components/Purpose';
import styles from '../styles/MisionVision';

const useStyles = makeStyles(styles);

const MisionVision = ({
  backgroundImage,
  heightImage,
  misionTitle,
  misiondescription,
  misionImage,
  backgroundColorMision,
  colorTitleIsSecondaryMision,
  visionTitle,
  visiondescription,
  visionImage,
  backgroundColorVision,
  colorTitleIsSecondaryVision,
}) => {
  const classes = useStyles();
  return (
    <Box component="section" position="relative" className={classes.section}>
      <BackgroundImage image={backgroundImage} height={heightImage} />
      <CustomContainer>
        <Box className={classes.containerMisionVision}>
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
};

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

MisionVision.defaultProps = {
  colorTitleIsSecondaryMision: false,
  colorTitleIsSecondaryVision: false,
  backgroundImage: '',
  heightImage: 0,
};

export default MisionVision;
