import React from 'react'
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
// import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import image1 from "../../../img/hero.jpg"
import image2 from "../../../img/medical10.jpg"
import { Link } from "react-router-dom";


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label:"Best Healthcare Solution In Your City",
    text:"Get Appoinment",
    imgPath:image1
  },
  {
    label:"We are commited to provide you the best services",
    text:"Get Appoinment",
    imgPath:image2


  }
];


function BannerView() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;
  
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
    <>
        <Box sx={{ maxWidth: "100%", flexGrow: 1 }}>
      {/* <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
        <Typography>{images[activeStep].label}</Typography>
      </Paper> */}
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label} style={{ position: "relative", height: "100%", width: "100%" }}>
            <Typography variant='h2' component="div" sx={{ position: "absolute", top: "35%", left: "10%", color: "white",right:"40%" }}>{step.label}</Typography>
            <Button variant='contained' sx={{ position: "absolute", top: "70%", left: "30%", backgroundColor: "#F77D0A" }} component={Link} to={"/department"}>{step.text}</Button>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{

                  height: 500,
                  display: 'block',
                  maxWidth: "100%",
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
      
    </Box>

      
    </>
  )
}

export default BannerView
