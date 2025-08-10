import { Box, AppBar, Toolbar } from '@mui/material';
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
            'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderTop: 'none',
          borderLeft: 'none',
          borderRight: 'none',
          boxShadow:
            '0 8px 32px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.1)',
          width: '100%',
          left: 0,
          right: 0,
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              'linear-gradient(135deg, rgba(120, 119, 198, 0.05), rgba(255, 119, 198, 0.03), transparent 60%)',
            zIndex: -1,
          },
        }}
      >
        <Toolbar
          sx={{
            gap: { xs: 1, sm: 2 },
            px: { xs: 2, sm: 3 },
            minHeight: { xs: 56, sm: 64 },
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Title />
          <Box
            sx={{
              flexGrow: 1,
              maxWidth: { xs: 'calc(100vw - 160px)', sm: 560 },
              minWidth: { xs: 100, sm: 200 },
              overflow: 'hidden',
              mx: { xs: 1, sm: 2 },
            }}
          >
            <SearchBar />
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              flexShrink: 0,
              minWidth: 'auto',
            }}
          >
            <Tooltips />
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar sx={{ minHeight: { xs: 56, sm: 64 } }} />
    </Box>
  );
}
