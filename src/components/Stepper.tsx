import { Box, Button, Stepper as MuiStepper, Step, StepLabel, Typography } from '@mui/material';
import React from 'react';

const steps = ['Step 1', 'Step 2', 'Step 3'];

const Stepper: React.FC = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <MuiStepper activeStep={activeStep} orientation='vertical'>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <Box sx={{ mb: 2 }}>
              <div>
                <Typography>Step {index + 1} content goes here.</Typography>
                <Box sx={{ mt: 2 }}>
                  <Button
                    variant='contained'
                    onClick={handleNext}
                    sx={{ mr: 1 }}
                    disabled={index === steps.length - 1}
                  >
                    {index === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                  <Button variant='contained' onClick={handleBack} disabled={index === 0}>
                    Back
                  </Button>
                </Box>
              </div>
            </Box>
          </Step>
        ))}
      </MuiStepper>
      {activeStep === steps.length && (
        <Box sx={{ mt: 2 }}>
          <Typography>All steps completed</Typography>
          <Button onClick={handleReset} variant='contained'>
            Reset
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default Stepper;
