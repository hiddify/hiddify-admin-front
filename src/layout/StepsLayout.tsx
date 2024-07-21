import { Box } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Stepper from '../components/Stepper';
import { useActiveStep } from '../providers/activeStepProvider';
import { useInstallType } from '../providers/installTypeProvider';

const StepsLayout: React.FC = () => {
  const { steps } = useInstallType();
  const { activeStep } = useActiveStep();

  return (
    <Box
      component='div'
      sx={{
        background: 'transparent',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
        padding: '0',
        margin: '0',
      }}
    >
      <Box
        component='section'
        sx={{
          height: '100%',
          width: 'fit-content',
          display: 'flex',
          alignItems: 'center',
          position: 'fixed',
          left: { md: '3vw' },
          padding: '10px',
        }}
      >
        <Stepper
          steps={steps}
          activeStep={Number(activeStep)}
          sx={{ height: { xs: '100%', md: '65%' } }}
        />
      </Box>

      <Outlet />
    </Box>
  );
};

export default StepsLayout;
