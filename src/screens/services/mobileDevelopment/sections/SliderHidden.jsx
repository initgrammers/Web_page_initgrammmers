import Hidden from '@material-ui/core/Hidden';
import Slider from '#Components/Slider';
import SliderCard from '#Components/SliderCard';

const SliderHidden = () => (
  <>
    <Hidden xsDown>
      <Slider />
    </Hidden>
    <Hidden smUp>
      <SliderCard />
    </Hidden>
  </>
);

export default SliderHidden;
