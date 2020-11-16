import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import { Card, CardMedia, Typography, Box } from '@material-ui/core';
import ReactDOM from 'react-dom';

const tutorialSteps = [
  {
    label: 'San',
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
    label1: 'Bird',
    imgPath1:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bird',
    imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
    label1: 'Bali',
    imgPath1:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80',
  },
  {
    label: 'Bali',
    imgPath:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80',
    label1: 'NeONBRAND',
    imgPath1:
      'https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'NeONBRAND',
    imgPath:
      'https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60',
    label1: 'Goč',
    imgPath1:
      'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Goč',
    imgPath:
      'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
    label1: 'San',
    imgPath1:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
  },
];

const useStyles = makeStyles({
  root: {
    height: 205,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    height: 130,
    maxWidth: 'auto',
    overflow: 'hidden',
    width: 100,
    alignContent: 'space-between',
  },

  container: {
    height: 290,
  },

  subtitle: {
    height: 32,
    width: '100%',
  },
});

export default function Slider() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box mt={10} className={classes.container}>
      <Typography align="center">Tecnologías con las que trabajamos</Typography>
      <Box className={classes.root}>
        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
          {theme.direction === 'rtl' ? (
            <KeyboardArrowRight />
          ) : (
            <KeyboardArrowLeft />
          )}
          Back
        </Button>

        <Box mr={1} className={classes.img}>
          <Box>
            <img
              loading="lazy"
              width="100%"
              height="95px"
              src={tutorialSteps[activeStep].imgPath}
              alt={tutorialSteps[activeStep].label}
            />
          </Box>
          <Box className={classes.subtitle}>
            <Typography>
              {tutorialSteps[activeStep].label}
            </Typography>
          </Box>
        </Box>

        <Box mr={1} className={classes.img}>
          <Box>
            <img
              loading="lazy"
              width="100%"
              height="95px"
              src={tutorialSteps[activeStep].imgPath1}
              alt={tutorialSteps[activeStep].label}
            />
          </Box>
          <Box className={classes.subtitle}>
            <Typography>
              {tutorialSteps[activeStep].label1}
            </Typography>
          </Box>
        </Box>

        <Box mr={1} className={classes.img}>
          <Box>
            <img
              loading="lazy"
              width="100%"
              height="95px"
              src={tutorialSteps[activeStep].imgPath}
              alt={tutorialSteps[activeStep].label}
            />
          </Box>
          <Box className={classes.subtitle}>
            <Typography>
              {tutorialSteps[activeStep].label}
            </Typography>
          </Box>
        </Box>

        <Box mr={1} className={classes.img}>
          <Box>
            <img
              loading="lazy"
              width="100%"
              height="95px"
              src={tutorialSteps[activeStep].imgPath1}
              alt={tutorialSteps[activeStep].label}
            />
          </Box>
          <Box className={classes.subtitle}>
            <Typography>
              {tutorialSteps[activeStep].label1}
            </Typography>
          </Box>
        </Box>

        <Button size="small" onClick={handleNext} disabled={activeStep === 4}>
          Next
          {theme.direction === 'rtl' ? (
            <KeyboardArrowLeft />
          ) : (
            <KeyboardArrowRight />
          )}
        </Button>
      </Box>
    </Box>
  );
}
