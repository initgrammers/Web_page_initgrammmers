'use client';

import { Box, Button } from '@mui/material';
import Image from 'next/image';
import Subtitle from '#Components/Subtitle';
import Link from '#Components/CustomLink';
import Building from '#app/constants/seo/Building';
import Organization from '#Components/StructuredData/Organization';
import WebSite from '#Components/StructuredData/WebSite';
import styles from './style';

const NotFountPage = () => (
  <>
    <Box component="section" bgcolor="primary.light">
      <Box sx={styles.root}>
        <Subtitle head="Estamos en construcción" white />
        <Box sx={styles.image}>
          <Image
            quality={100}
            src="/assets/images/404.png"
            alt="Picture of the author"
            fill
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

export default NotFountPage;
