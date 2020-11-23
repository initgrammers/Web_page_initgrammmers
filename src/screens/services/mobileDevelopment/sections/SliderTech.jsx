import { Box, Hidden, makeStyles } from '@material-ui/core';
import Image from 'next/image';
import Slider from '#Components/ResponsiveSlider';
import SecctionContainer from '#Components/Sections/SecctionContainer';
import { MobileTechnologies } from '#constants/services/MobileDevelopment';

const useStyles = makeStyles((theme) => ({
  containerBackgroundImage: {
    width: `100%`,
    height: 364,
    position: 'absolute',
  },
  root: {
    position: 'relative',
  },
}));

const Questions = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Hidden mdDown>
        <Box className={classes.containerBackgroundImage}>
          <Image src="/assets/images/figures/bloque3.png" layout="fill" />
        </Box>
      </Hidden>
      <SecctionContainer head="Tecnologías con las que trabajamos">
        <Slider data={MobileTechnologies} />
      </SecctionContainer>
    </Box>
  );
};

export default Questions;
