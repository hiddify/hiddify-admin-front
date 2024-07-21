import { Button, ButtonProps, SxProps, Theme } from '@mui/material';
import { FC, ReactNode } from 'react';

interface IProps extends ButtonProps {
  sx?: SxProps<Theme> | undefined;
  children: ReactNode;
}

const MainButton: FC<IProps> = ({ sx, children, ...props }) => {
  return (
    <Button
      variant='contained'
      sx={{
        border: 'none',
        borderRadius: '100px',
        padding: '15px 40px',
        background: theme => theme.palette.btnBg,
        position: 'relative',
        color: theme => theme.palette.btnText,
        ...sx,
      }}
      {...props}
    >
      {children}
    </Button>
  );
};

export default MainButton;
