import { CssBaseline } from '@mui/material';
import {
  Theme,
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from '@mui/material/styles';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Coin, Home } from 'pages';
import { Layout } from 'components';

export default function App() {
  let theme: Theme = createTheme({
    palette: {
      mode: 'dark',
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
