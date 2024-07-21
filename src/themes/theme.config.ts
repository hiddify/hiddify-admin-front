import { experimental_extendTheme as extendTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface PaletteOptions {
    bodyBg: string;
    stepBg: string;
    perano: string;
    white: string;
    royal: string;
    textColor: string;
    btnBg: string;
    btnText: string;
  }
  interface Palette {
    bodyBg: string;
    stepBg: string;
    perano: string;
    white: string;
    royal: string;
    textColor: string;
    btnBg: string;
    btnText: string;
  }
}

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        bodyBg: '#EAECF8',
        stepBg: '#90A8EE',
        white: '#FBFBFB',
        royal: '#455FE9',
        perano: '#B8C7F4',
        textColor: '#455FE9',
        btnBg: '#455FE9',
        btnText: '#FBFBFB',
      },
    },
    dark: {
      palette: {
        bodyBg: '#455FE9',
        stepBg: 'rgba(251, 251, 251, 0.25)',
        perano: '#B8C7F4',
        white: '#FBFBFB',
        royal: '#455FE9',
        textColor: '#FBFBFB',
        btnBg: '#FBFBFB',
        btnText: '#455FE9',
      },
    },
  },
  components: {
    MuiStepper: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: 'transparent',
          height: '100%',
          width: '100%',
          '& .MuiStepConnector-line': {
            display: 'none',
          },
          '& .MuiStepIcon-root': {
            fill: theme.palette.perano,
            width: '50px',
            height: '50px',
          },
          '& .MuiStepIcon-text': {
            fill: '#ffffff',
          },
          '& .MuiStepLabel-label': {
            color: theme.palette.white + ' !important',
            fontSize: '30px',
            fontWeight: '500',
          },
        }),
      },
    },
  },
});

export default theme;
