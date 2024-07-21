import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { Box, IconButton, useColorScheme } from '@mui/material';
import React from 'react';

import { Outlet, useNavigate } from 'react-router-dom';
import MainButton from '../components/MainButton';
import Typography from '../components/Typography';
import { useActiveStep } from '../providers/activeStepProvider';
import { useInstallType } from '../providers/installTypeProvider';
import { urls } from '../routes/urls';

const Layout: React.FC = () => {
  const { steps } = useInstallType();
  const { activeStep, setActiveStep } = useActiveStep();
  const { mode, setMode } = useColorScheme();
  const navigate = useNavigate();

  const handleThemeToggle = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
  };

  const onNext = () => {
    if (activeStep) {
      setActiveStep(s => (s && s < steps.length ? s + 1 : steps.length));
      navigate(steps[activeStep].route);
    } else {
      setActiveStep(1);
      navigate(urls.sharedSteps.step1);
    }
  };

  const onBack = () => {
    if (activeStep && activeStep > 1) {
      setActiveStep(s => (s && s > 1 ? s - 1 : undefined));
      navigate(steps[activeStep - 2].route);
    } else {
      navigate(urls.home);
    }
  };

  return (
    <Box
      component='main'
      sx={{
        background: theme => theme.palette.bodyBg,
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
        position: 'relative',
        padding: '0',
        margin: '0',
      }}
    >
      <IconButton
        style={{ position: 'absolute', top: 10, right: 10 }}
        onClick={handleThemeToggle}
        color='inherit'
      >
        {mode === 'dark' ? (
          <Brightness7Icon sx={{ fontSize: '35px', color: theme => theme.palette.white }} />
        ) : (
          <Brightness4Icon sx={{ fontSize: '35px', color: theme => theme.palette.royal }} />
        )}
      </IconButton>
      <Typography
        variant='h1'
        size={75}
        weight={700}
        textAlign='center'
        sx={{
          position: 'fixed',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          height: 'fit-content',
          color: theme => theme.palette.textColor,
          top: { xs: '35vw', md: '8vw' },
        }}
      >
        {activeStep ? steps[activeStep - 1].title : 'به هیدیفای خوش آمدید'}
      </Typography>
      <Outlet />
      <Box
        component='footer'
        sx={{
          position: 'fixed',
          bottom: '3vh',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          gap: '150px',
        }}
      >
        <MainButton onClick={onBack}>
          <Typography size={30} weight={500} variant='h3'>
            Back
          </Typography>
        </MainButton>
        <MainButton onClick={onNext}>
          <Typography size={30} weight={500} variant='h3'>
            Next
          </Typography>
        </MainButton>
      </Box>
    </Box>
  );
};

export default Layout;
