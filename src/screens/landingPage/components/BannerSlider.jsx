import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Image from 'next/image';
import styles from '../styles/BannerSlider';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const useStyles = makeStyles(styles);
function ApplicationType({ sectionTitle, sectionSubtitle, typesApplication }) {
  const classes = useStyles();
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
    <Box className={classes.root}>
      <Typography variant="h1" className={classes.title}>
        {sectionTitle}
      </Typography>
      <Typography variant="body1" className={classes.subTitle}>
        {sectionSubtitle}
      </Typography>
      <Button variant="contained" className={classes.button}>
        Contactanos
      </Button>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        interval={2000}
      >
        {typesApplication.map((app) => (
          <Box className={classes.containerImage}>
            <Box component="figure" key={app.image}>
              <Image
                quality={100}
                priority
                src={app.image}
                width={216}
                height={171}
              />
              <Typography variant="body1">{app.alt}</Typography>
            </Box>
          </Box>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        className={classes.stepper}
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
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
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
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
          </IconButton>
        }
      />
    </Box>
  );
}

ApplicationType.propTypes = {
  sectionTitle: PropTypes.string.isRequired,
  sectionSubtitle: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  typesApplication: PropTypes.array.isRequired,
};

export default ApplicationType;
