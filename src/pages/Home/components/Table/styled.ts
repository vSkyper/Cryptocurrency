import { styled, Box } from '@mui/material';

export const DataTable = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(2),
  borderRadius: 16,
  background:
    theme.palette.mode === 'dark'
      ? 'rgba(20, 30, 48, 0.4)'
      : 'rgba(255, 255, 255, 0.5)',
  border: `1px solid ${
    theme.palette.mode === 'dark'
      ? 'rgba(64, 156, 255, 0.1)'
      : 'rgba(64, 156, 255, 0.15)'
  }`,
  position: 'relative',
  overflow: 'hidden',
  transform: 'translateZ(0)',
  willChange: 'auto',
  contain: 'layout style',
  '& .MuiDataGrid-root': {
    position: 'relative',
    zIndex: 1,
    backgroundColor: 'transparent',
    border: 'none',
  },
  '& .negative': {
    color: '#ff6b6b',
    fontWeight: 600,
  },
  '& .positive': {
    color: '#51cf66',
    fontWeight: 600,
  },
}));
