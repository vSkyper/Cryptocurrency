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
          background:
            'linear-gradient(135deg, rgba(16, 18, 27, 0.85) 0%, rgba(13, 14, 14, 0.9) 100%)',
          backdropFilter: 'blur(24px) saturate(180%)',
          borderBottom: '1px solid rgba(208, 188, 255, 0.12)',
          boxShadow:
            '0 8px 32px rgba(0,0,0,0.15), 0 2px 16px rgba(208, 188, 255, 0.05), inset 0 1px 0 rgba(255,255,255,0.08)',
          width: '100%',
          zIndex: 1100,
        }}
      >
        <Container maxWidth='xl' disableGutters>
          <Toolbar
            sx={{
              gap: { xs: 1.5, sm: 3, md: 4 },
              px: { xs: 2, sm: 3, md: 4 },
              minHeight: { xs: 60, sm: 72 },
              position: 'relative',
              zIndex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderRadius: 0,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: { xs: 1, sm: 2 },
                flexShrink: 0,
              }}
            >
              <Title />
            </Box>

            <Box
              sx={{
                flexGrow: 1,
                maxWidth: { xs: 280, sm: 400, md: 500, lg: 600 },
                minWidth: { xs: 180, sm: 200 },
                mx: { xs: 1, sm: 2, md: 3 },
              }}
            >
              <SearchBar />
            </Box>

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: { xs: 1, sm: 1.5 },
                flexShrink: 0,
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
