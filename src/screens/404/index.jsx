import { Box, Button, makeStyles } from '@material-ui/core';
import Image from 'next/image';
import styles from './style';
import Subtitle from '#Components/Subtitle';
import Link from '#Components/CustomLink';
import SEO from '#Components/SEO';
import Building from '#app/constants/seo/Building';

const useStyles = makeStyles(styles);
const NotFountPage = () => {
  const classes = useStyles();
  return (
    <>
      <SEO {...Building} />

      <Box component="section" bgcolor="primary.light">
        <Box className={classes.root}>
          <Subtitle head="Estamos en construcción" white />
          <Box className={classes.image}>
            <Image
              quality={100}
              src="/assets/images/404.png"
              alt="Picture of the author"
              layout="fill"
            />
          </Box>
          <Link href="/">
            <Button variant="text" color="primary" className={classes.button}>
              Volver al inicio
            </Button>
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default NotFountPage;
