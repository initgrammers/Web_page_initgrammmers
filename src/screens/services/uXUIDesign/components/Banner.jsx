import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import BackgroundImage from '#Components/BackgroundImage';
import CustomContainer from '#Components/CustomContainer';
import Subtitle from '#Components/Subtitle';
import ContactUsButton from '#Components/ContacUsButton';
import { contactsLinks } from '#app/constants/contacts';
import styles from '../styles/Banner';

const Banner = ({
  backgroundImage = '',
  heightImage = 0,
  title,
  description,
  image,
}) => {
  const { t } = useTranslation();
  return (
    <Box component="section" position="relative">
      <BackgroundImage height={heightImage} image={backgroundImage} />
      <CustomContainer>
        <Box sx={styles.content}>
          <Box component="article" sx={styles.contentInformation}>
            <Subtitle
              black
              variant="h1"
              component="h1"
              emphasis={title}
              mb={0}
            />
            <Typography
              variant="h3"
              component="p"
              sx={styles.description}
            >
              {description}
            </Typography>
            <ContactUsButton
              label={t('homeLearnButton')}
              href={contactsLinks.uiuxPages}
            />
          </Box>
          <Box sx={styles.containerImage}>
            <Box component="figure" sx={styles.image}>
              <Image
                quality={100}
                priority
                src={image}
                fill
                alt={title}
              />
            </Box>
          </Box>
        </Box>
      </CustomContainer>
      <Box sx={styles.bottomSection} />
    </Box>
  );
};

Banner.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string,
  heightImage: PropTypes.number,
};

export default Banner;
