import { Box, AppBar, Toolbar, Container } from '@mui/material';
import { SearchBar, Title, Tooltips } from './components';

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position='fixed'
        color='transparent'
        elevation={0}
        sx={{
          background: 'rgba(15, 20, 35, 0.9)',
          backdropFilter: 'blur(10px)',
          borderBottom: 'none',
          width: '100%',
          zIndex: 1100,
        }}
      >
        <Container maxWidth='xl' disableGutters>
          <Toolbar
            sx={{
              gap: { xs: 1, sm: 3, md: 4 },
              px: { xs: 1.5, sm: 3, md: 4 },
              minHeight: { xs: 60, sm: 72 },
              position: 'relative',
              zIndex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderRadius: 0,
              flexWrap: { xs: 'nowrap', sm: 'nowrap' },
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: { xs: 0.5, sm: 2 },
                flexShrink: 0,
                minWidth: 'auto',
              }}
            >
              <Title />
            </Box>

            <Box
              sx={{
                flexGrow: 1,
                maxWidth: { xs: 'none', sm: 400, md: 500, lg: 600 },
                minWidth: { xs: 0, sm: 200 },
                mx: { xs: 0.5, sm: 2, md: 3 },
              }}
            >
              <SearchBar />
            </Box>

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: { xs: 0.5, sm: 1.5 },
                flexShrink: 0,
                minWidth: 'auto',
              }}
            >
              <Tooltips />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar sx={{ minHeight: { xs: 60, sm: 72 } }} />
    </Box>
  );
}
