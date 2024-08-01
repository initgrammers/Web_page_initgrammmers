import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import BackgroundImage from '#Components/BackgroundImage';
import CustomContainer from '#Components/CustomContainer';
import Subtitle from '#Components/Subtitle';
import ContactUsButton from '#Components/ContacUsButton';
import { contactsLinks, textContactUsButton } from '#app/constants/contacts';
import styles from '../styles/CarryOutThatProject';

const CarryOutThatProject = ({
  titlePart1,
  titlePart2 = '',
  description,
  image = '',
}) => (
  <Box component="section" position="relative" sx={styles.backgroundSection}>
    <BackgroundImage />
    <CustomContainer>
      <Box sx={styles.content}>
        <Box component="article" sx={styles.contentInformation}>
          <Subtitle
            black
            variant="h1"
            component="h2"
            head={titlePart1}
            emphasis={titlePart2}
            mb={0}
            align="center"
            fontSize={{
              xs: '2rem',
              sm: '2.5707rem',
              md: '2.7849rem',
              lg: '2.9991rem',
            }}
          />
          <Typography variant="body1" component="p" sx={styles.description}>
            {description}
          </Typography>
          <ContactUsButton
            label={textContactUsButton.whatsapp}
            href={contactsLinks.landing}
          />
        </Box>
        <Box sx={styles.containerImage}>
          <Box component="figure" sx={styles.image}>
            <Image
              quality={100}
              src={image}
              fill
              alt={`${titlePart1} ${titlePart2}`}
              style={{ objectFit: 'contain' }}
            />
          </Box>
        </Box>
      </Box>
    </CustomContainer>
  </Box>
);

CarryOutThatProject.propTypes = {
  titlePart1: PropTypes.string.isRequired,
  titlePart2: PropTypes.string,
  description: PropTypes.string.isRequired,
  image: PropTypes.string,
};

export default CarryOutThatProject;
