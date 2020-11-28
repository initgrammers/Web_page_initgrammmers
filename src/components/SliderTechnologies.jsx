import { Box, makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import Slider from '#Components/ResponsiveSlider';
import Subtitle from '#Components/Subtitle';
import BackgroundImage from '#Components/BackgroundImage';
import CustomContainer from '#Components/CustomContainer';

const useStyles = makeStyles((theme) => ({
  content: {
    padding: `${theme.spacing(4)}px 0`,
    [theme.breakpoints.up('sm')]: {
      padding: `${theme.spacing(5)}px 0`,
    },
    [theme.breakpoints.up('lg')]: {
      padding: `${theme.spacing(8)}px 0`,
    },
  },
}));

const SliderTechnologies = ({
  title,
  technologies,
  backgroundImage,
  heightImage,
}) => {
  const classes = useStyles();
  return (
    <Box component="section" position="relative">
      <BackgroundImage image={backgroundImage} height={heightImage} />
      <CustomContainer>
        <Box className={classes.content}>
          <Subtitle head={title} component="h2" variant="h2" />
          <Slider data={technologies} />
        </Box>
      </CustomContainer>
    </Box>
  );
};

SliderTechnologies.propTypes = {
  title: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  backgroundImage: PropTypes.string,
  heightImage: PropTypes.number,
};

SliderTechnologies.defaultProps = {
  backgroundImage: '',
  heightImage: 0,
};

export default SliderTechnologies;
