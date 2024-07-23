import PropTypes from 'prop-types';
import Image from 'next/image';
import styles from '../styles/CarryOutThatProject';
import BackgroundImage from '#Components/BackgroundImage';
import CustomContainer from '#Components/CustomContainer';
import Subtitle from '#Components/Subtitle';
import ContactUsButton from '#Components/ContacUsButton';
import { contactsLinks, textContactUsButton } from '#app/constants/contacts';
import { Box, Typography } from '@mui/material';

const CarryOutThatProject = ({
  titlePart1,
  titlePart2 = '',
  description,
  image = '',
}) => {
  return (
    <Box
      component="section"
      position="relative"
      sx={styles.backgroundSection}
    >
      <BackgroundImage />
      <CustomContainer>
        <Box sx={styles.content} gap='16px'>
          <Box flex={1} component="article" sx={styles.contentInformation}>
            <Subtitle
              black
              variant="h1"
              component="h2"
              head={titlePart1}
              emphasis={titlePart2}
              mb={0}
              align="center"
            />
            <Typography
              variant="body1"
              component="p"
              sx={styles.description}
            >
              {description}
            </Typography>
            <ContactUsButton
              label={textContactUsButton.whatsapp}
              href={contactsLinks.landing}
            />
          </Box>
          <Box flex={1} sx={styles.containerImage} my={1}>
            <Box component="figure" sx={styles.image}>
              <Image
                quality={100}
                src={image}
                fill
                objectFit='contain'
                alt={`${titlePart1} ${titlePart2}`}
              />
            </Box>
          </Box>
        </Box>
      </CustomContainer>
    </Box>
  );
};

CarryOutThatProject.propTypes = {
  titlePart1: PropTypes.string.isRequired,
  titlePart2: PropTypes.string,
  description: PropTypes.string.isRequired,
  image: PropTypes.string,
};

export default CarryOutThatProject;
