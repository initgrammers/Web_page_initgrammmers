import PropTypes from 'prop-types';
import Image from 'next/image';
import { Box, Typography } from '@mui/material';
import Subtitle from '#Components/Subtitle';
import BackgroundImage from '#Components/BackgroundImage';
import CustomContainer from '#Components/CustomContainer';
import CardPartnership from '#Components/CardPartnership';
import ContactUsButton from '#Components/ContacUsButton';
import useContacts from '#app/constants/contacts';
import styles from '../styles/PartnershipModel';

const PartnershipModel = ({
  title,
  description,
  image,
  backgroundImage = '',
  heightImage = 0,
  partnershipModels,
}) => {
  const { contactsLinks, textContactUsButton } = useContacts();
  return (
    <Box component="section" position="relative" sx={styles.section}>
      <BackgroundImage image={backgroundImage} height={heightImage} />
      <CustomContainer>
        <Box component="article" sx={styles.content}>
          <Box component="figure" sx={styles.image}>
            <Image quality={100} src={image} fill alt={title} />
          </Box>
          <Subtitle
            head={title}
            component="h2"
            variant="h2"
            mb={0}
            align="center"
          />
          <Typography variant="body1" sx={styles.description}>
            {description}
          </Typography>
          <ContactUsButton
            label={textContactUsButton.email}
            href={contactsLinks.writeUs}
          />

          <Box
            sx={{
              ...styles.services,
              display: 'flex',
              flexDirection: { md: 'row', xs: 'column' },
            }}
          >
            {partnershipModels.map((service) => (
              <Box key={service.title} sx={styles.modelPartnership}>
                <CardPartnership
                  image={service.path}
                  title={service.title}
                  description={service.description}
                />
              </Box>
            ))}
          </Box>
        </Box>
      </CustomContainer>
    </Box>
  );
};
PartnershipModel.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string,
  heightImage: PropTypes.number,
  partnershipModels: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
    })
  ).isRequired,
};

export default PartnershipModel;
