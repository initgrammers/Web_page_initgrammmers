import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: 'Aplicaciones nativas',
    imgPath:
      'El desarrollo de estas aplicaciones móviles va dirigido específicamente para un sistema operativo (iOS, Android),  programada bajo un lenguage específico, la ventaja de estas apps es que aprovechan todas las funcionalidades del dispositivo.',
  },
  {
    label: 'Aplicaciones Web',
    imgPath:
      'Básicamente es una página web optimizada de tal manera que se puede adaptar a cualquier dispositivo móvil, está optimización es posible a HTML, CSS y Javascript. Se puede acceder a la aplicación web a través de un navegador web ingresando su URL.',
  },
  {
    label: 'Aplicaciones híbridas',
    imgPath:
      'Desarrollo de aplicaciones móviles que se programan para funcionar en varias plataformas iOS o Android. Pueden adaptarse a cualquier dispositivo móvil y aprovechar el acceso a las funcionalidades del dispositivo.Las aplicaciones híbridas permiten ahorrar recursos y tiempo de desarrollo.',
  },
  {
    label: 'Aplicaciones PWA',
    imgPath:
      'Desarrollo de aplicaciones móviles que combina aspectos de una aplicación nativa y aplicación web. Se desarrollan en lenguajes de programación web por lo que pueden adaptarse a cualquier dispositivo móvil y aprovechar el acceso a las funcionalidades del dispositivo. ',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.primary.contrastText,
    [theme.breakpoints.up('lg')]: {
      width: 536,
    },
  },
  title: {
    textAlign: 'center',
  },
  applicationType: {
    textAlign: 'center',
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(2),
  },
  stepper: {
    display: 'flex',
    justifyContent: 'center',
    background: 'none',
    '& .MuiMobileStepper-dot': {
      backgroundColor: 'rgba(255, 255, 255, 0.6)',
    },
    '& .MuiMobileStepper-dotActive': {
      backgroundColor: theme.palette.primary.contrastText,
    },
  },
}));

function ApplicationType() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box className={classes.root}>
      <Typography variant="h2" className={classes.title}>
        Tipos de aplicaciones móviles
      </Typography>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        interval={2000}
      >
        {tutorialSteps.map((step, index) => (
          <>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box key={step.label} component="article">
                <Typography variant="h3" className={classes.applicationType}>
                  {step.label}
                </Typography>
                <Typography variant="body1">{step.imgPath}</Typography>
              </Box>
            ) : null}
          </>
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

export default ApplicationType;
