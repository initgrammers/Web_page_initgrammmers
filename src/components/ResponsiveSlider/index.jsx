import { Box, useMediaQuery, useTheme } from '@material-ui/core';
import PropTypes from 'prop-types';
import Slide from './Slide';
import Image from './Image';

const Slider = ({ data, imageIsLarge, showTitleImage }) => {
  const { breakpoints } = useTheme();
  const matchXS = useMediaQuery(breakpoints.down('xs'));
  const matchLG = useMediaQuery(breakpoints.up('lg'));

  let steps;
  if (imageIsLarge) {
    steps = matchXS ? 1 : 2;
  } else {
    steps = matchXS ? 2 : 4;
  }

  if (matchLG) {
    return (
      <>
        <Box display="flex" justifyContent="space-between">
          {data.map((item) => (
            <Image
              key={item.label}
              image={item.image}
              label={item.label}
              showTitleImage={showTitleImage}
            />
          ))}
        </Box>
      </>
    );
  }
  return <Slide data={data} step={steps} />;
};

Slider.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({ image: PropTypes.string, label: PropTypes.string })
  ),
  imageIsLarge: PropTypes.bool,
  showTitleImage: PropTypes.bool,
};

Slider.defaultProps = {
  data: [],
  imageIsLarge: false,
  showTitleImage: true,
};

export default Slider;
