import { styled, Paper } from '@mui/material';

export const DataTable = styled(Paper)(({ theme }) => ({
  marginTop: theme.spacing(2),
  borderRadius: theme.spacing(3),
  background: `linear-gradient(135deg, 
    rgba(16, 18, 27, 0.85) 0%, 
    rgba(13, 14, 14, 0.9) 50%,
    rgba(16, 18, 27, 0.85) 100%
  )`,
  backdropFilter: 'blur(24px) saturate(180%)',
  border: `1px solid rgba(208, 188, 255, 0.12)`,
  boxShadow: `
    0 8px 32px rgba(0,0,0,0.3),
    0 2px 16px rgba(208, 188, 255, 0.05),
    inset 0 1px 0 rgba(255,255,255,0.08)
  `,
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `linear-gradient(135deg, 
      rgba(208, 188, 255, 0.08) 0%, 
      rgba(204, 194, 220, 0.05) 30%,
      transparent 70%
    )`,
    zIndex: 0,
    opacity: 0.8,
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
