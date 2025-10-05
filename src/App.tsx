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
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          ':root': {
            // Custom brand color variables - change these to update colors across the entire app
            '--brand-blue': '#409CFF',
            '--brand-blue-light': '#3B82F6',
            '--brand-positive': '#51cf66',
            '--brand-negative': '#ff6b6b',
            '--brand-bitcoin': '#f7931a',
            '--brand-ethereum': '#627eea',

            // Background color variables - change these to update the app background
            '--bg-primary': '#0f172a',
            '--bg-secondary': '#111827',
            '--bg-tertiary': 'rgba(28, 38, 56, 0.3)',
            '--bg-tertiary-dark': 'rgba(20, 30, 48, 0.8)',
            '--bg-gradient-1':
              'color-mix(in srgb, var(--brand-blue) 8%, transparent)',
            '--bg-gradient-2':
              'color-mix(in srgb, var(--brand-blue-light) 6%, transparent)',
          },
          'html, body': {
            overscrollBehaviorY: 'none',
            overscrollBehaviorX: 'none',
            overflowX: 'hidden',
            minWidth: '100%',
            backgroundColor: 'var(--bg-primary)',
            background: `
              radial-gradient(ellipse 1000px 1000px at 10% 20%, var(--bg-gradient-1), transparent 70%),
              radial-gradient(ellipse 1200px 1200px at 90% 80%, var(--bg-gradient-2), transparent 70%),
              linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 50%, var(--bg-primary) 100%)
            `,
          },
          '#root': {
            overflowX: 'hidden',
            width: '100%',
            maxWidth: '100%',
          },
        },
      },
      MuiAppBar: {
        defaultProps: {
          elevation: 0,
          color: 'default',
        },
        styleOverrides: {
          root: {
            backdropFilter: 'saturate(120%) blur(6px)',
          },
        },
      },
      MuiPaper: {
        defaultProps: {
          elevation: 1,
        },
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
