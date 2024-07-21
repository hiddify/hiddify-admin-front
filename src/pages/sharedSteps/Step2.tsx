import { Box } from '@mui/material';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MainButton from '../../components/MainButton';
import Typography from '../../components/Typography';
import { useActiveStep } from '../../providers/activeStepProvider';
import { useInstallType } from '../../providers/installTypeProvider';
import { urls } from '../../routes/urls';

const Step2 = () => {
  const { setActiveStep } = useActiveStep();
  const { setInstallType } = useInstallType();
  const navigate = useNavigate();

  useEffect(() => {
    setActiveStep(2);
  }, []);

  const handleNewInstall = () => {
    setInstallType('new-install');
    navigate(urls.newInstallSteps.step3);
    setActiveStep(3);
  };

  const handleBackup = () => {
    setInstallType('backup-install');
    navigate(urls.backupInstallSteps.step3);
    setActiveStep(3);
  };

  const handleMainServer = () => {
    setInstallType('main-server-install');
    navigate(urls.mainServerInstallSteps.step3);
    setActiveStep(3);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '50px',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
      }}
    >
      <MainButton onClick={handleNewInstall} sx={{ width: '415px' }}>
        <Typography size={30} weight={500} variant='h3'>
          New Install
        </Typography>
      </MainButton>

      <MainButton onClick={handleBackup} sx={{ width: '415px' }}>
        <Typography size={30} weight={500} variant='h3'>
          Backup
        </Typography>
      </MainButton>

      <MainButton onClick={handleMainServer} sx={{ width: '415px' }}>
        <Typography size={30} weight={500} variant='h3'>
          Central Server
        </Typography>
      </MainButton>
    </Box>
  );
};

export default Step2;
