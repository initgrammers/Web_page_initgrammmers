import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import Image from 'next/image';
import styles from '../styles/OptionsShopping';
import Subtitle from '#Components/Subtitle';
import BackgroundImage from '#Components/BackgroundImage';
import CustomContainer from '#Components/CustomContainer';
import ContactUsButton from '#Components/ContacUsButton';
import { contactsLinks, textContactUsButton } from '#app/constants/contacts';
import CardPartnership from '#Components/CardPartnership';

const OptionsShopping = ({
  titlePart1,
  titlePart2,
  titlePart3,
  description,
  image,
  backgroundImage,
  heightImage,
  imageSizes,
  optionsShoppingOnline,
}) => {
  const classes = styles({ ...imageSizes });

  return (
    <Box component="section" position="relative">
      <BackgroundImage image={backgroundImage} height={heightImage} />
      <CustomContainer>
        <Box component="article" className={classes.content}>
          <Box className={classes.imageStyle}>
            <Image
              quality={100}
              src={image}
              layout="fill"
              alt={`${titlePart1} ${titlePart2} ${titlePart3}`}
            />
          </Box>
          <Subtitle
            head={titlePart1}
            emphasis={titlePart2}
            tail={titlePart3}
            align="center"
            mb={0}
            component="h2"
            variant="h2"
          />
          <Typography variant="body1" className={classes.description}>
            {description}
          </Typography>
          <ContactUsButton
            label={textContactUsButton.whatsapp}
            href={contactsLinks.shopEcommercePage}
          />

          <Box className={classes.shop}>
            {optionsShoppingOnline.map((service) => (
              <Box key={service.title} className={classes.optionsShop}>
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

OptionsShopping.propTypes = {
  titlePart1: PropTypes.string.isRequired,
  titlePart2: PropTypes.string,
  titlePart3: PropTypes.string,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string,
  heightImage: PropTypes.number,
  imageSizes: PropTypes.shape({
    xs: PropTypes.shape({
      width: PropTypes.number,
      height: PropTypes.number,
    }),
    sm: PropTypes.shape({
      width: PropTypes.number,
      height: PropTypes.number,
    }),
    md: PropTypes.shape({
      width: PropTypes.number,
      height: PropTypes.number,
    }),
    lg: PropTypes.shape({
      width: PropTypes.number,
      height: PropTypes.number,
    }),
  }).isRequired,
  optionsShoppingOnline: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
    })
  ).isRequired,
};

OptionsShopping.defaultProps = {
  titlePart2: '',
  titlePart3: '',
  backgroundImage: '',
  heightImage: 0,
};
export default OptionsShopping;
