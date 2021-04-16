import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
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
