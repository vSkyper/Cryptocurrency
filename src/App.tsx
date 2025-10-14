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
          primary: { main: '#409cff' },
          secondary: { main: '#3b82f6' },
          background: {
            default: '#0d0e0e',
            paper: 'rgba(20, 30, 48, 0.9)',
          },
        },
      },
    },
    shape: {
      borderRadius: 12,
    },
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
