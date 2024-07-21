import { Box } from '@mui/material';
import { useEffect } from 'react';
import MainButton from '../../components/MainButton';
import Typography from '../../components/Typography';
import { useActiveStep } from '../../providers/activeStepProvider';
import { useInstallType } from '../../providers/installTypeProvider';

const Step2 = () => {
  const { setActiveStep } = useActiveStep();
  const { setInstallType } = useInstallType();

  useEffect(() => {
    setActiveStep(2);
  }, []);

  const handleNewInstall = () => {
    setInstallType('new-install');
    setActiveStep(3);
  };

  const handleBackup = () => {
    setInstallType('backup-install');
    setActiveStep(3);
  };

  const handleMainServer = () => {
    setInstallType('main-server-install');
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
