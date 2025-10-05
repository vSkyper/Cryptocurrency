import { CssBaseline } from '@mui/material';
import {
  ThemeProvider,
  extendTheme,
  responsiveFontSizes,
} from '@mui/material/styles';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Coin, Home } from 'pages';
import { Layout } from 'components';

export default function App() {
  let theme = extendTheme({
    cssVarPrefix: 'app',
    colorSchemes: {
      dark: {
        palette: {
          primary: { main: '#409CFF' },
          secondary: { main: '#3B82F6' },
          background: { default: '#0d0e0eff', paper: '#151619ff' },
        },
      },
    },
    shape: { borderRadius: 12 },
    typography: {
      fontSize: 14,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightBold: 700,
      h6: {
        '@media (max-width:600px)': {
          fontSize: '1rem',
        },
      },
      body1: {
        '@media (max-width:600px)': {
          fontSize: '0.85rem',
        },
      },
      body2: {
        '@media (max-width:600px)': {
          fontSize: '0.8rem',
        },
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: () => ({
          'html, body': {
            overscrollBehaviorY: 'none',
            overscrollBehaviorX: 'none',
            overflowX: 'hidden',
            width: '100%',
            maxWidth: '100%',
          },
          '#root': {
            overflowX: 'hidden',
            width: '100%',
            maxWidth: '100%',
          },
        }),
      },
      MuiAppBar: {
        defaultProps: { elevation: 0, color: 'default' },
        styleOverrides: {
          root: () => ({
            backdropFilter: 'saturate(120%) blur(6px)',
          }),
        },
      },
      MuiPaper: {
        defaultProps: { elevation: 1 },
        styleOverrides: {
          root: ({ theme }: any) => ({
            backgroundImage: 'none',
            border: `1px solid ${theme.palette.divider}`,
          }),
        },
      },
    },
  });

  theme = responsiveFontSizes(theme);

  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/coins/:id',
          element: <Coin />,
        },
      ],
    },
  ]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
