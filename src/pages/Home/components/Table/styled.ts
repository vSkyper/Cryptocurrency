import { styled, Paper } from '@mui/material';

export const DataTable = styled(Paper)(({ theme }) => ({
  marginTop: theme.spacing(2),
  borderRadius: theme.spacing(3),
  background: `linear-gradient(135deg, 
    rgba(255, 255, 255, 0.1) 0%, 
    rgba(255, 255, 255, 0.05) 100%
  )`,
  backdropFilter: 'blur(20px)',
  border: `1px solid rgba(255, 255, 255, 0.2)`,
  boxShadow: `
    0 12px 40px rgba(0,0,0,0.3),
    inset 0 1px 0 rgba(255,255,255,0.1)
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
      ${theme.palette.primary.main}03, 
      ${theme.palette.secondary.main}02, 
      transparent 60%
    )`,
    zIndex: 0,
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
