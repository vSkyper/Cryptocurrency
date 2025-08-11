import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Chart = styled(Paper)(({ theme }) => ({
  height: 320,
  padding: theme.spacing(2),
  borderRadius: theme.spacing(3),
  background: `linear-gradient(135deg, 
    rgba(208, 188, 255, 0.08) 0%, 
    rgba(204, 194, 220, 0.04) 100%
  )`,
  backdropFilter: 'blur(24px)',
  border: '1px solid rgba(208, 188, 255, 0.2)',
  boxShadow: `
    0 8px 32px rgba(0,0,0,0.3),
    0 4px 16px rgba(208, 188, 255, 0.1),
    inset 0 1px 0 rgba(255,255,255,0.08)
  `,
  position: 'relative',
  overflow: 'hidden',
  transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: `
      0 12px 40px rgba(0,0,0,0.4),
      0 6px 20px rgba(208, 188, 255, 0.15),
      inset 0 1px 0 rgba(255,255,255,0.1)
    `,
    border: '1px solid rgba(208, 188, 255, 0.3)',
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `linear-gradient(135deg, 
      rgba(208, 188, 255, 0.05), 
      rgba(204, 194, 220, 0.03), 
      transparent 60%
    )`,
    zIndex: 0,
  },
  [theme.breakpoints.up('sm')]: {
    height: 480,
    padding: theme.spacing(3),
  },
})) as typeof Paper;
