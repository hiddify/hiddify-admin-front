import { Typography as MuiTypography, SxProps, Theme } from '@mui/material';
import { TypographyOwnProps, TypographyTypeMap } from '@mui/material/Typography';
import { FC, ReactNode } from 'react';

interface TProps extends TypographyOwnProps {
  weight: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
  size: number;
  variant?: TypographyTypeMap['props']['variant'];
  sx?: SxProps<Theme> | undefined;
  children: ReactNode;
}

const Typography: FC<TProps> = ({ sx, variant, children, size, weight, ...props }) => {
  return (
    <MuiTypography
      variant={variant}
      sx={{
        fontSize: {
          xs: size / 2 + 'px',
          sm: size / 1.8 + 'px',
          md: size / 1.6 + 'px',
          lg: size / 1.4 + 'px',
          xl: size,
        },
        fontWeight: weight,
        ...sx,
      }}
      {...props}
    >
      {children}
    </MuiTypography>
  );
};

export default Typography;
