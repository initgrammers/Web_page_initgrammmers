import Box from '@material-ui/core/Box';
import Hidden from '@material-ui/core/Hidden';
import makeStyles from '@material-ui/core/styles/makeStyles';
import PropTypes from 'prop-types';
import Image from 'next/image';
import styles from '../assets/styles/BackgroundImage';

const useStyles = ({ height }) => makeStyles((theme) => styles(theme, height));

const BackgroundImage = ({ height, image, alt }) => {
  const classes = useStyles(height);

  return (
    <>
      {height > 0 && (
        <Hidden mdDown>
          <Box className={classes.containerBackgroundImage}>
            <Image quality={100} src={image} layout="fill" alt={alt} />
          </Box>
        </Hidden>
      )}
    </>
  );
};

BackgroundImage.propTypes = {
  height: PropTypes.number,
  image: PropTypes.string,
  alt: PropTypes.string,
};

BackgroundImage.defaultProps = {
  height: 0,
  image: '',
  alt: 'Diseño y desarrollo de aplicaciones web y móviles - Initgrammers',
};
export default BackgroundImage;
