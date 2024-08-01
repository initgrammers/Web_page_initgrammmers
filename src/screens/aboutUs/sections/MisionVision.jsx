import { useTheme } from '@mui/material';
import MisionVision from '../components/MisionVision';
import useAboutUs from '#constants/AboutUs';

const MisionVisionSection = () => {
  const { palette } = useTheme();
  const { misionVision } = useAboutUs();
  return (
    <MisionVision
      backgroundImage={misionVision.backgroundImage}
      heightImage={misionVision.heightImage}
      misionTitle={misionVision.mision.title}
      misiondescription={misionVision.mision.description}
      misionImage={misionVision.mision.image}
      backgroundColorMision={palette.primary.fade}
      colorTitleIsSecondaryMision={misionVision.mision.colorTitleIsSecondary}
      visionTitle={misionVision.vision.title}
      visiondescription={misionVision.vision.description}
      visionImage={misionVision.vision.image}
      backgroundColorVision={palette.secondary.fade}
      colorTitleIsSecondaryVision={misionVision.vision.colorTitleIsSecondary}
    />
  );
};

export default MisionVisionSection;
