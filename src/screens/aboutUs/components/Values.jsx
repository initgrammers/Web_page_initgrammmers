import { makeStyles, Box, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import BackgroundImage from '#Components/BackgroundImage';
import CustomContainer from '#Components/CustomContainer';
import CardValue from '#Components/CardValue';
import styles from '../styles/Values';

const useStyles = makeStyles(styles);

const Values = ({ title, values, backgroundImage, heightImage }) => {
  const classes = useStyles();

  return (
    <Box component="section" position="relative" className={classes.section}>
      <BackgroundImage image={backgroundImage} height={heightImage} />
      <CustomContainer>
        <Box>
          <Typography variant="h2" align="center" className={classes.title}>
            {title}
          </Typography>

          <Box className={classes.values}>
            {values.map((cardUser) => (
              <CardValue
                image={cardUser.image}
                description={cardUser.description}
                isBorderSecondary={cardUser.isBorderSecondary}
              />
            ))}
          </Box>
        </Box>
      </CustomContainer>
    </Box>
  );
};

Values.propTypes = {
  backgroundImage: PropTypes.string,
  heightImage: PropTypes.number,
  title: PropTypes.string.isRequired,
  values: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string,
      image: PropTypes.string,
      isBorderSecondary: PropTypes.bool,
    })
  ).isRequired,
};

Values.defaultProps = {
  backgroundImage: '',
  heightImage: 0,
};

export default Values;
