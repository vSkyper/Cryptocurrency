import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Chart = styled(Paper)(({ theme }) => ({
  height: 320,
  padding: theme.spacing(2),
  borderRadius: theme.spacing(3),
  background: 'rgba(64, 156, 255, 0.06)',
  border: '1px solid rgba(64, 156, 255, 0.2)',
  boxShadow: '0 4px 16px rgba(0,0,0,0.25)',
  position: 'relative',
  overflow: 'hidden',
  transition: 'transform 200ms cubic-bezier(0.4, 0, 0.2, 1)',
  contain: 'layout style paint',
  [theme.breakpoints.up('md')]: {
    '&:hover': {
      transform: 'translate3d(0, -2px, 0)',
      boxShadow: '0 8px 24px rgba(0,0,0,0.35)',
    },
  },
  [theme.breakpoints.down('md')]: {
    transition: 'none',
  },
  [theme.breakpoints.up('sm')]: {
    height: 480,
    padding: theme.spacing(3),
  },
})) as typeof Paper;
