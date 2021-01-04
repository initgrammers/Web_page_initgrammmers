import { Box, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import Image from 'next/image';
import styles from '../styles/Strategies';
import Subtitle from '#Components/Subtitle';
import CustomContainer from '#Components/CustomContainer';
import ContactUsButton from '#Components/ContacUsButton';
import { contactsLinks } from '#app/constants/contacts';
import CardPartnership from '#Components/CardPartnership';

const Strategies = ({
  titlePart1,
  titlePart2,
  titlePart3,
  description,
  image,
  imageSizes,
  optionsShoppingOnline,
}) => {
  const classes = styles({ ...imageSizes });

  return (
    <Box component="section" position="relative">
      <CustomContainer>
        <Box component="article" className={classes.content}>
          <Subtitle
            head={titlePart1}
            emphasis={titlePart2}
            tail={titlePart3}
            align="center"
            mb={4}
            component="h2"
            variant="h2"
          />
          <Box className={classes.imageStyle}>
            <Image
              quality={100}
              src={image}
              layout="fill"
              alt={`${titlePart1} ${titlePart2} ${titlePart3}`}
            />
          </Box>
          <Typography variant="body1" className={classes.description}>
            {description}
          </Typography>
          <ContactUsButton color="secondary" href={contactsLinks.general} />
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

Strategies.propTypes = {
  titlePart1: PropTypes.string.isRequired,
  titlePart2: PropTypes.string,
  titlePart3: PropTypes.string,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
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

Strategies.defaultProps = {
  titlePart2: '',
  titlePart3: '',
};
export default Strategies;
