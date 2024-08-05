import PropTypes from 'prop-types';
import Image from 'next/image';
import { Box, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import BackgroundImage from '#Components/BackgroundImage';
import CustomContainer from '#Components/CustomContainer';
import ContactUsButton from '#Components/ContacUsButton';
import useContacts from '#app/constants/contacts';
import styles from './styles';

const Banner = ({
  backgroundImage = '',
  heightImage = 0,
  titlePart1 = '',
  titlePart2 = '',
  titlePart3 = '',
  description = '',
  image = '',
  backgroundColor = '',
  buttonColor = 'secondary',
}) => {
  const { contactsLinks } = useContacts();
  const t = useTranslations('Index');
  return (
    <Box component="section" position="relative" bgcolor={backgroundColor}>
      <BackgroundImage image={backgroundImage} height={heightImage} />
      <CustomContainer>
        <Box sx={styles.container}>
          <Box component="article" sx={styles.detailsContent}>
            <Typography variant="h1" sx={styles.title}>
              {titlePart1}
              <span>{titlePart2}</span>
              {titlePart3}
            </Typography>
            <Typography
              variant="h3"
              component="p"
              sx={styles.description}
            >
              {description}
            </Typography>
            <ContactUsButton
              color={buttonColor}
              label={t('homeLearnButton')}
              href={contactsLinks.general}
            />
          </Box>
          <Box sx={styles.containerImage}>
            <Box component="figure" sx={styles.image}>
              <Image
                quality={100}
                priority
                src={image}
                fill
                style={styles.mainImage}
                alt={`${titlePart1}${titlePart2}${titlePart3}`}
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
  titlePart1: PropTypes.string,
  titlePart2: PropTypes.string,
  titlePart3: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  backgroundColor: PropTypes.string,
  buttonColor: PropTypes.string,
};

export default Banner;
