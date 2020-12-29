import { makeStyles, Box, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import Image from 'next/image';
import styles from '../styles/PartnershipModel';
import Subtitle from '#Components/Subtitle';
import BackgroundImage from '#Components/BackgroundImage';
import CustomContainer from '#Components/CustomContainer';
import CardPartnership from '#Components/CardPartnership';
import ContactUsButton from '#Components/ContacUsButton';
import { contactsLinks, textContactUsButton } from '#app/constants/contacts';

const useStyles = makeStyles(styles);

const PartnershipModel = ({
  title,
  description,
  image,
  backgroundImage,
  heightImage,
  partnershipModels,
}) => {
  const classes = useStyles();

  return (
    <Box component="section" position="relative" className={classes.section}>
      <BackgroundImage image={backgroundImage} height={heightImage} />
      <CustomContainer>
        <Box component="article" className={classes.content}>
          <Box component="figure" className={classes.image}>
            <Image quality={100} src={image} layout="fill" alt={title} />
          </Box>
          <Subtitle
            head={title}
            component="h2"
            variant="h2"
            mb={0}
            align="center"
          />
          <Typography variant="body1" className={classes.description}>
            {description}
          </Typography>
          <ContactUsButton
            label={textContactUsButton.email}
            href={contactsLinks.writeUs}
          />

          <Box className={classes.services}>
            {partnershipModels.map((service) => (
              <Box key={service.title} className={classes.modelPartnership}>
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

PartnershipModel.defaultProps = {
  backgroundImage: '',
  heightImage: 0,
};
export default PartnershipModel;
