import { Box, Typography, makeStyles, Button } from '@material-ui/core';
import Image from 'next/image';
import BackgroundImage from '#Components/BackgroundImage';
import CustomContainer from '#Components/CustomContainer';
import styles from '../styles/Banner';

const useStyles = makeStyles(styles);
const Banner = () => {
  const classes = useStyles();
  return (
    <Box component="section" position="relative">
      <BackgroundImage
        image="/assets/images/figures/webDevelopment/bloque1.png"
        height={670}
      />
      <CustomContainer>
        <Box className={classes.container}>
          <Box component="article" className={classes.detailsContent}>
            <Typography variant="h1" className={classes.title}>
              Páginas Web,
              <span> diseño y desarrollo de aplicaciones web </span>
              en Ecuador
            </Typography>
            <Typography
              variant="h2"
              component="p"
              className={classes.description}
            >
              Bienvenidos al mundo del internet
            </Typography>
            <Box>
              <Button variant="contained" className={classes.actionButton}>
                Contáctanos
              </Button>
            </Box>
          </Box>
          <Box className={classes.containerImage}>
            <Box component="figure" className={classes.image}>
              <Image
                quality={100}
                priority
                src="/assets/images/paginas-web-desarrollo-diseno-aplicaciones-web-ecuador.png"
                layout="fill"
                className={classes.mainImage}
              />
            </Box>
          </Box>
        </Box>
      </CustomContainer>
    </Box>
  );
};

export default Banner;
