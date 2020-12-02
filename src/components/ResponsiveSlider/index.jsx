import { Box, makeStyles, useMediaQuery, useTheme } from '@material-ui/core';
import PropTypes from 'prop-types';
import Slide from './Slide';
import Image from './Image';
import styles from './style';

const useStyles = makeStyles(styles);
const Slider = ({ data }) => {
  const classes = useStyles();
  const { breakpoints } = useTheme();
  const matchXS = useMediaQuery(breakpoints.down('xs'));
  const matchLG = useMediaQuery(breakpoints.up('lg'));
  const steps = matchXS ? 2 : 4;

  if (matchLG) {
    return (
      <>
        <Box display="flex" justifyContent="space-between">
          {data.map((item) => (
            <Image key={item.label} image={item.image} label={item.label} />
          ))}
        </Box>
        <Box width="100%" height={10} className={classes.bar} />
      </>
    );
  }
  return <Slide data={data} step={steps} />;
};

Slider.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({ image: PropTypes.string, label: PropTypes.string })
  ),
};

Slider.defaultProps = {
  data: [],
};

export default Slider;
