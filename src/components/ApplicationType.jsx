import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { Box, IconButton, MobileStepper, Typography, useTheme } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import styles from '../assets/styles/ApplicationType';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function ApplicationType({ sectionTitle, typesApplication, backgroundGray = false }) {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = typesApplication.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (app) => {
    setActiveStep(app);
  };

  return (
    <Box sx={styles.root}>
      <>
        <Typography
          variant="h2"
          sx={{
            ...styles.title,
            ...(backgroundGray && styles.titleGray),
          }}
        >
          {sectionTitle}
        </Typography>
        <AutoPlaySwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
          interval={20000}
        >
          {typesApplication.map((app, index) => (
            <Box key={index} component="article">
              <Typography
                variant="h3"
                sx={{
                  ...styles.applicationType,
                  ...(backgroundGray && styles.backgroundGray),
                }}
              >
                {app.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  ...(backgroundGray && styles.bodyGray),
                }}
              >
                {app.description}
              </Typography>
            </Box>
          ))}
        </AutoPlaySwipeableViews>
      </>
      <MobileStepper
        sx={styles.stepper}
        steps={maxSteps}
        position="static"
        variant="dots"
        activeStep={activeStep}
        nextButton={
          // eslint-disable-next-line react/jsx-wrap-multilines
          <IconButton
            aria-label="step"
            color="inherit"
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeftIcon sx={styles.button} />
            ) : (
              <KeyboardArrowRightIcon sx={styles.button} />
            )}
          </IconButton>
        }
        backButton={
          // eslint-disable-next-line react/jsx-wrap-multilines
          <IconButton
            aria-label="step"
            color="inherit"
            size="small"
            onClick={handleBack}
            disabled={activeStep === 0}
          >
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRightIcon sx={styles.button} />
            ) : (
              <KeyboardArrowLeftIcon sx={styles.button} />
            )}
          </IconButton>
        }
      />
    </Box>
  );
}

ApplicationType.propTypes = {
  sectionTitle: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  typesApplication: PropTypes.array.isRequired,
  backgroundGray: PropTypes.bool,
};

export default ApplicationType;
