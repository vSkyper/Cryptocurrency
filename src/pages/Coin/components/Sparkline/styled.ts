import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Chart = styled(Paper)(({ theme }) => ({
  height: 320,
  padding: theme.spacing(2),
  borderRadius: theme.spacing(3),
  background: `linear-gradient(135deg, 
    rgba(255, 255, 255, 0.08) 0%, 
    rgba(255, 255, 255, 0.04) 100%
  )`,
  border: `1px solid rgba(255, 255, 255, 0.15)`,
  boxShadow: `
    0 6px 24px rgba(0,0,0,0.15),
    inset 0 1px 0 rgba(255,255,255,0.05)
  `,
  position: 'relative',
  overflow: 'hidden',
  transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
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
  [theme.breakpoints.up('sm')]: {
    height: 480,
    padding: theme.spacing(3),
  },
})) as typeof Paper;
