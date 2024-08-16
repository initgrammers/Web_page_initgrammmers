import React from 'react';
import { Box, Typography } from '@mui/material';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import styles from '../styles/PricingCard';
import ContactUsButton from '#Components/ContacUsButton';

const PricingCard = ({
  title,
  subtitle,
  price,
  titleOptions,
  options,
  highlightOption,
  buttonText,
}) => (
  <Box
    key={title}
    sx={{
      ...styles.card,
      ...(highlightOption && styles.highlightCard),
    }}
  >
    <Box sx={styles.cardText}>
      <Box sx={styles.cardHeader}>
        <Typography sx={styles.title}>{title}</Typography>
        <Typography variant="h5" sx={styles.subtitle}>{subtitle}</Typography>
        <Typography variant="h2">{price}</Typography>
      </Box>
      <Box sx={styles.cardBody} key={title}>
        <Typography
          variant="h4"
          sx={styles.cardTitleOptions}
        >
          {titleOptions}
        </Typography>
        {options.map((opt, index) => (
          <Box sx={styles.cardOptions} key={`opt${index}`}>
            <CheckCircleOutlinedIcon />
            <Typography
              variant="body1"
            >
              {opt}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
    <ContactUsButton
      label={buttonText}
      href="/en/products"
      sx={{ width: '200px' }}
      color={highlightOption ? 'secondary' : 'primary'}
    />
  </Box>
);

export default PricingCard;
