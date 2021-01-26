import { useTheme } from '@material-ui/core';
import MisionVision from '../components/MisionVision';
import { misionVision } from '#constants/AboutUs';

const MisionVisionSection = () => {
  const { palette } = useTheme();
  return (
    <MisionVision
      misionTitle={misionVision.mision.title}
      misiondescription={misionVision.mision.description}
      misionImage={misionVision.mision.image}
      backgroundColorMision={palette.primary.fade}
      visionTitle={misionVision.vision.title}
      visiondescription={misionVision.vision.description}
      visionImage={misionVision.vision.image}
      backgroundColorVision={palette.secondary.fade}
    />
  );
};

export default MisionVisionSection;
