import { makeStyles, Box, Typography } from '@material-ui/core';
import Image from 'next/image';
import styles from '../styles/Banner';
import BackgroundImage from '#Components/BackgroundImage';
import CustomContainer from '#Components/CustomContainer';
import Subtitle from '#Components/Subtitle';
import ContactUsButton from '#Components/ContacUsButton';
import { contactsLinks } from '#app/constants/contacts';

const useStyles = makeStyles(styles);

const Banner = () => {
  const classes = useStyles();
  return (
    <Box
      component="section"
      position="relative"
      className={classes.backgroundSection}
    >
      <BackgroundImage
        height={664}
        image="/assets/images/figures/uxUiDesign/bloque1.png"
      />
      <CustomContainer>
        <Box className={classes.content}>
          <Box component="article" className={classes.contentInformation}>
            <Subtitle
              black
              variant="h1"
              component="h1"
              emphasis="Diseño UX UI : Interfaces y experiencia de usuario"
              mb={0}
            />
            <Typography
              variant="h3"
              component="p"
              className={classes.description}
            >
              Diseño innovador, experiencia única
            </Typography>
            <ContactUsButton href={contactsLinks.uiuxPages} />
          </Box>
          <Box className={classes.containerImage}>
            <Box component="figure" className={classes.image}>
              <Image
                quality={100}
                priority
                src="/assets/images/diseno-ux-ix-interfaces-experiencia-usuario.png"
                layout="fill"
              />
            </Box>
          </Box>
        </Box>
      </CustomContainer>
    </Box>
  );
};

export default Banner;
