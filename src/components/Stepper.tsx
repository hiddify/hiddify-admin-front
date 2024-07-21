import {
  Box,
  Stepper as MuiStepper,
  Step,
  stepClasses,
  stepIconClasses,
  StepLabel,
  stepLabelClasses,
  SxProps,
  Theme,
} from '@mui/material';
import React from 'react';
import { TStep } from '../providers/installTypeProvider';

type TProps = {
  sx?: SxProps<Theme> | undefined;
  steps: TStep[];
  activeStep: number;
};

const Stepper: React.FC<TProps> = ({ sx, steps, activeStep = 1 }) => {
  // const isMobile = useMediaQuery('(max-width:768px)');

  return (
    <Box sx={{ width: 'fit-content', ...sx }}>
      <MuiStepper
        activeStep={activeStep - 1}
        orientation='vertical'
        sx={{
          [`& .${stepIconClasses.active}`]: {
            fill: theme => theme.palette.white,
            [`& .${stepIconClasses.text}`]: { fill: theme => theme.palette.royal },
          },
        }}
      >
        {steps.map((step, index) => {
          let labelStyle: SxProps<Theme> | undefined = {};
          if (activeStep - 1 === index) {
            labelStyle = {
              [`& .${stepLabelClasses.labelContainer}`]: {
                display: 'block',
              },
              backgroundColor: theme => theme.palette.stepBg,
              borderRadius: '100px',
              padding: '15px',
              paddingRight: '40px',
              [`& .${stepLabelClasses.iconContainer}`]: { paddingRight: '20px' },
            };
          } else {
            labelStyle = {
              [`& .${stepLabelClasses.labelContainer}`]: {
                display: 'none',
              },
              padding: '0',
              [`& .${stepLabelClasses.iconContainer}`]: { padding: 0 },
            };
          }

          const content = (
            <Step
              key={step.label}
              sx={{
                [`&.${stepClasses.root}`]: {
                  width: 'fit-content',
                },
              }}
            >
              <StepLabel sx={{ width: 'fit-content', ...labelStyle }}>
                {activeStep - 1 === index && step.label}
              </StepLabel>
            </Step>
          );
          return content;
        })}
      </MuiStepper>
    </Box>
  );
};

export default Stepper;
