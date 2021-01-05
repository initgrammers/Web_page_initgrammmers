import { Box, Typography, makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import Image from 'next/image';
import BackgroundImage from '#Components/BackgroundImage';
import CustomContainer from '#Components/CustomContainer';
import styles from '../styles/VisibilityCompany';

const useStyles = makeStyles(styles);
const VisibilityCompany = ({
  backgroundImage,
  heightImage,
  title,
  description,
  image,
}) => {
  const classes = useStyles();
  return (
    <Box component="section" position="relative" bgcolor="secondary.light">
      <BackgroundImage image={backgroundImage} height={heightImage} />
      <CustomContainer>
        <Box className={classes.container}>
          <Box component="article" className={classes.detailsContent}>
            <Typography variant="h2" className={classes.title}>
              {title}
            </Typography>
            <Typography variant="body1" className={classes.description}>
              {description}
            </Typography>
          </Box>
          <Box className={classes.containerImage}>
            <Box component="figure" className={classes.image}>
              <Image
                quality={100}
                priority
                src={image}
                layout="fill"
                alt={title}
              />
            </Box>
          </Box>
        </Box>
      </CustomContainer>
    </Box>
  );
};

VisibilityCompany.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string,
  heightImage: PropTypes.number,
};

VisibilityCompany.defaultProps = {
  backgroundImage: '',
  heightImage: 0,
};

export default VisibilityCompany;
