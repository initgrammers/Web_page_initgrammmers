import PropTypes from 'prop-types';
import Image from 'next/image';
import BackgroundImage from '#Components/BackgroundImage';
import CustomContainer from '#Components/CustomContainer';
import styles from '../styles/Banner';
import ContactUsButton from '#Components/ContacUsButton';
import { contactsLinks, textContactUsButton } from '#app/constants/contacts';
import { Box, Typography } from '@mui/material';
import { primary } from '#app/shared/config/theme/colors';
import { useTranslation } from 'react-i18next';

const Banner = ({
  backgroundImage = '',
  heightImage = 0,
  title = '',
  description = '',
  image = '',
}) => {
  const {t} = useTranslation();
  return (
    <Box component="section" position="relative" sx={{background: primary.light}} >
      <BackgroundImage image={backgroundImage} height={heightImage}/>
      <CustomContainer>
        <Box display='flex' sx={{flexDirection: {lg:'row', xs:'column'}}} gap='16px'>
          <Box component="article" sx={styles.detailsContent} flex={1}>
            <Typography variant="h1" sx={styles.title}>
              {title}
            </Typography>
            <Typography
              variant="h3"
              component="p"
              sx={styles.description}
            >
              {description}
            </Typography>
            <ContactUsButton
              color="secondary"
              label={t('homeLearnButton')}
              href={contactsLinks.landing}
            />
          </Box>
          <Box sx={styles.containerImage} flex={1} my={1}>
            <Box component="figure" sx={styles.image}>
              <Image
                quality={100}
                priority
                src={image}
                fill
                alt={title}
                style={{ objectFit: 'contain'}}
              />
            </Box>
          </Box>
        </Box>
      </CustomContainer>
    </Box>
  );
};

Banner.propTypes = {
  backgroundImage: PropTypes.string,
  heightImage: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};

export default Banner;
