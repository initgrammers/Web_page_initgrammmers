import { Box, Typography } from '@mui/material';
import CustomContainer from '#Components/CustomContainer';
import BackgroundImage from '#Components/BackgroundImage';
import styles from '../styles/Pricing';
import PricingCard from './PricingCard';

const Pricing = ({
  backgroundImage = '',
  heightImage = 0,
  title1,
  title2 = '',
  description,
  backgroundColor = '',
  cardsPricing,
}) => (
  <Box component="section" position="relative" bgcolor={backgroundColor}>
    <BackgroundImage height={heightImage} image={backgroundImage} />
    <CustomContainer>
      <Box sx={styles.container}>
        <Box component="article" sx={styles.detailsContent}>
          <Typography variant="h2" sx={styles.title1}>
            {title1}
          </Typography>
          <Typography variant="h1" sx={styles.title2}>
            {title2}
          </Typography>
          <Typography
            variant="body1"
            sx={styles.description}
          >
            {description}
          </Typography>
        </Box>
        <Box sx={styles.containerCards}>
          {cardsPricing.map((card) => (
            <PricingCard
              key={card.title}
              title={card.title}
              subtitle={card.subtitle}
              price={card.price}
              titleOptions={card.titleOptions}
              options={card.options}
              buttonText={card.buttonText}
              highlightOption={card.highlightOption}
            />
          ))}
        </Box>
      </Box>
    </CustomContainer>
  </Box>
);

export default Pricing;
