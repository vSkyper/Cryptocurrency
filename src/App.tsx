import { CssBaseline } from '@mui/material';
import {
  Theme,
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from '@mui/material/styles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Coin, Home } from 'pages';
import { Footer, Navbar } from 'components';

export default function App() {
  let theme: Theme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  theme = responsiveFontSizes(theme);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router basename={import.meta.env.PUBLIC_URL}>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/coins/:id' element={<Coin />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}
