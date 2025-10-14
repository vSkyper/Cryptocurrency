import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Coin, Home } from 'pages';
import { Layout } from 'components';

export default function App() {
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

  return <RouterProvider router={router} />;
}
