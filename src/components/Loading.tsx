import { Box } from '@mui/material';
import Typography from './Typography';

const Loading = () => {
  return (
    <Box
      component='div'
      sx={{
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
        background: theme => theme.palette.bodyBg,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme => theme.palette.btnBg,
      }}
    >
      <Typography size={30} weight={500}>
        Loading...
      </Typography>
    </Box>
  );
};

export default Loading;
