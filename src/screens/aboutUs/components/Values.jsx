import PropTypes from 'prop-types';
import BackgroundImage from '#Components/BackgroundImage';
import CustomContainer from '#Components/CustomContainer';
import CardValue from '#Components/CardValue';
import styles from '../styles/Values';
import { Box, Typography } from '@mui/material';

const Values = ({ title, values, backgroundImage, heightImage }) => {
  return (
    <Box component="section" position="relative" sx={styles.section}>
      <BackgroundImage image={backgroundImage} height={heightImage} />
      <CustomContainer>
        <Box>
          <Typography variant="h2" align="center" sx={styles.title}>
            {title}
          </Typography>

          <Box sx={styles.values}>
            {values.map((valueInitgrammers, key) => (
              <CardValue
                key={key}
                image={valueInitgrammers.image}
                description={valueInitgrammers.description}
                isBorderSecondary={valueInitgrammers.isBorderSecondary}
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
