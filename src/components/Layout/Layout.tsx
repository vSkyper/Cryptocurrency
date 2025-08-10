import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { Footer, Navbar } from './components';

export default function Layout() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        width: '100%',
      }}
    >
      <Navbar />
      <Box
        component="main"
        sx={{
          flex: 1,
          width: '100%',
        }}
      >
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
}
