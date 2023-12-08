import { Box, AppBar, Toolbar } from '@mui/material';
import { SearchBar, Title, Tooltips } from './components';

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar>
        <Toolbar>
          <Title />
          <SearchBar />
          <Tooltips />
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Box>
  );
}
