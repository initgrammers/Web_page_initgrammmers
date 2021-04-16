import React from 'react';
import PropTypes from 'prop-types';
import makeStyles from '@material-ui/core/styles/makeStyles';
import useTheme from '@material-ui/core/styles/useTheme';
import MobileStepper from '@material-ui/core/MobileStepper';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import clsx from 'clsx';
import styles from '../assets/styles/ApplicationType';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const useStyles = makeStyles(styles);
function ApplicationType({ sectionTitle, typesApplication, backgroundGray }) {
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
      <>
        <Typography
          variant="h2"
          className={clsx(classes.title, {
            [classes.titleGray]: backgroundGray,
          })}
        >
          {sectionTitle}
        </Typography>
        <AutoPlaySwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
          interval={20000}
          className={classes.swipeable}
        >
          {typesApplication.map((app, index) => (
            <Box key={index} component="article">
              <Typography
                variant="h3"
                className={clsx(classes.applicationType, {
                  [classes.backgroundGray]: backgroundGray,
                })}
              >
                {app.title}
              </Typography>
              <Typography
                variant="body1"
                className={clsx({
                  [classes.bodyGray]: backgroundGray,
                })}
              >
                {app.description}
              </Typography>
            </Box>
          ))}
        </AutoPlaySwipeableViews>
      </>
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
              <KeyboardArrowLeft className={classes.button} />
            ) : (
              <KeyboardArrowRight className={classes.button} />
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
              <KeyboardArrowRight className={classes.button} />
            ) : (
              <KeyboardArrowLeft className={classes.button} />
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

ApplicationType.defaultProps = {
  backgroundGray: false,
};
export default ApplicationType;
