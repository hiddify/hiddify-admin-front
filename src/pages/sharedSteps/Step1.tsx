import { Box } from '@mui/material';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MainButton from '../../components/MainButton';
import Typography from '../../components/Typography';
import { useActiveStep } from '../../providers/activeStepProvider';
import { urls } from '../../routes/urls';

const Step1 = () => {
  const { setActiveStep } = useActiveStep();
  const navigate = useNavigate();

  useEffect(() => {
    setActiveStep(1);
  }, []);

  const onStart = () => {
    navigate(urls.sharedSteps.step2);
  };
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
      <MainButton onClick={onStart}>
        <Typography size={30} weight={500} variant='h3'>
          Start
        </Typography>
      </MainButton>
    </Box>
  );
};

export default Step1;
