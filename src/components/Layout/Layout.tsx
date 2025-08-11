import { Outlet } from 'react-router-dom';
import { Footer, Navbar } from './components';

export default function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
