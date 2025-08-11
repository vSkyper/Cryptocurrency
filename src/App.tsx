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
          primary: { main: '#D0BCFF' },
          secondary: { main: '#CCC2DC' },
          background: { default: '#0f1115', paper: '#161a22' },
        },
      },
    },
    shape: { borderRadius: 12 },
    typography: {
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightBold: 700,
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
