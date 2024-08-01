import PropTypes from 'prop-types';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import Slide from './Slide';
import Image from './Image';

const Slider = ({
  data = [],
  imageIsLarge = false,
  showTitleImage = true,
}) => {
  const { breakpoints } = useTheme();
  const matchXS = useMediaQuery(breakpoints.down('sm'));
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
        <Box display="flex" justifyContent="space-between" gap={3}>
          {data.map((item) => (
            <Image
              key={item.label}
              image={item.image}
              label={item.label}
              showTitleImage={showTitleImage}
              imageIsLarge={imageIsLarge}
              fill
            />
          ))}
        </Box>
      </>
    );
  }
  return (
    <Slide
      data={data}
      step={steps}
      showTitleImage={showTitleImage}
      imageIsLarge={imageIsLarge}
    />
  );
};

Slider.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({ image: PropTypes.string, label: PropTypes.string })
  ),
  imageIsLarge: PropTypes.bool,
  showTitleImage: PropTypes.bool,
};

export default Slider;
