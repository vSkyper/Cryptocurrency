import { Box, AppBar, Toolbar } from '@mui/material';
import { SearchBar, Title, Tooltips } from './components';

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position='fixed'
        color='default'
        elevation={0}
        sx={{
          backdropFilter: 'saturate(120%) blur(6px)',
          backgroundColor: (theme) => theme.palette.background.paper,
          borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
        }}
      >
        <Toolbar
          sx={{ gap: 1, px: { xs: 1, sm: 2 }, minHeight: { xs: 56, sm: 64 } }}
        >
          <Title />
          <Box sx={{ flexGrow: 1, maxWidth: 560 }}>
            <SearchBar />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <Tooltips />
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar sx={{ minHeight: { xs: 56, sm: 64 } }} />
    </Box>
  );
}
