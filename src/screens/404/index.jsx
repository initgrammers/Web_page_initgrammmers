"use client"
import Image from 'next/image';
import styles from './style';
import Subtitle from '#Components/Subtitle';
import Link from '#Components/CustomLink';
import SEO from '#Components/SEO';
import Building from '#app/constants/seo/Building';
import Organization from '#Components/StructuredData/Organization';
import WebSite from '#Components/StructuredData/WebSite';
import { Box, Button } from '@mui/material';

const NotFountPage = () => {
  return (
    <>
      <SEO {...Building} />

      <Box component="section" bgcolor="primary.light">
        <Box sx={styles.root}>
          <Subtitle head="Estamos en construcción" white />
          <Box sx={styles.image}>
            <Image
              quality={100}
              src="/assets/images/404.png"
              alt="Picture of the author"
              layout="fill"
            />
          </Box>
          <Link href="/">
            <Button variant="text" color="primary" sx={styles.button}>
              Volver al inicio
            </Button>
          </Link>
        </Box>
      </Box>

      <Organization />
      <WebSite title={Building.title} url={Building.urlAltern} />
    </>
  );
};

export default NotFountPage;
