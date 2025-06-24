'use client';

import Image from 'next/image';
import { Box, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import useSoftwareIa from '#constants/services/SoftwareIa';
import useContacts from '#app/constants/contacts';
import ContactUsButton from '#Components/ContacUsButton';
import styles from '../styles/HowWeApply';

const HowWeApply = () => {
  const { howWeApply } = useSoftwareIa();
  const { contactsLinks } = useContacts();
  const t = useTranslations('Index');

  return (
    <Box component="section" sx={styles.background}>
      <Box sx={styles.root}>
        <Typography variant="h2" sx={styles.title}>
          {howWeApply.title}
        </Typography>

        <Box sx={styles.mainImageContainer}>
          <Box component="figure" sx={styles.mainImage}>
            <Image
              src={howWeApply.image}
              fill
              alt={howWeApply.title}
              quality={100}
            />
          </Box>
        </Box>

        <Typography variant="body1" sx={styles.cta}>
          {howWeApply.cta}
        </Typography>

        <Box sx={{ marginBottom: 6 }}>
          <ContactUsButton
            color="secondary"
            label={t('write')}
            href={contactsLinks.partnershipModelsPage}
          />
        </Box>

        <Box sx={styles.itemsContainer}>
          {howWeApply.items.map((item, index) => (
            <Box key={index} sx={styles.item}>
              <Box sx={styles.iconContainer}>
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={48}
                  height={48}
                  style={{ objectFit: 'contain' }}
                />
              </Box>
              <Typography variant="h3" sx={styles.itemTitle}>
                {item.title}
              </Typography>
              <Typography variant="body2" sx={styles.itemDescription}>
                {item.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default HowWeApply;
