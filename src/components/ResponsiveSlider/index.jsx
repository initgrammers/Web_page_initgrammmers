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
  const matchMD = useMediaQuery(breakpoints.only('md'));
  const matchLG = useMediaQuery(breakpoints.up('lg'));

  let steps;
  const autoPlay = true;

  if (imageIsLarge) {
    steps = matchXS ? 1 : 2;
  } else {
    steps = matchXS ? 2 : 4;
  }

  if (matchLG && data.length < 6) {
    return (
      <>
        <Box
          display="flex"
          justifyContent="space-between"
          gap={3}
          sx={{
            width: '100vw',
            overflow: 'hidden',
          }}
        >
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

  if (matchLG) {
    steps = 4;
  } else if (matchMD) {
    steps = 3;
  } else if (matchXS) {
    steps = 1;
  } else {
    steps = 2;
  }

  return (
    <Slide
      data={data}
      step={steps}
      showTitleImage={showTitleImage}
      imageIsLarge={imageIsLarge}
      autoPlay={autoPlay}
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
