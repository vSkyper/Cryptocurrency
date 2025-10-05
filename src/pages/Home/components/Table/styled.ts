import { styled, Paper } from '@mui/material';

export const DataTable = styled(Paper)(({ theme }) => ({
  marginTop: theme.spacing(2),
  borderRadius: theme.spacing(3),
  background: 'rgba(64, 156, 255, 0.03)',
  border: '1px solid rgba(64, 156, 255, 0.2)',
  boxShadow: '0 4px 16px rgba(0,0,0,0.25)',
  position: 'relative',
  overflow: 'hidden',
  contain: 'layout style',
  [theme.breakpoints.down('md')]: {
    background: 'rgba(64, 156, 255, 0.05)',
  },
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
