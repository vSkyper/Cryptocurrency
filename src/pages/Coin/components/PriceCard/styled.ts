import LinearProgress, {
  linearProgressClasses,
} from '@mui/material/LinearProgress';
import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledLinearProgress = styled(LinearProgress)(() => ({
  height: 10,
  marginTop: 16,
  marginBottom: 8,
  borderRadius: 99,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    background:
      'linear-gradient(90deg, rgba(64, 156, 255, 0.1), rgba(59, 130, 246, 0.05))',
    border: '1px solid rgba(64, 156, 255, 0.15)',
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 99,
    background: 'linear-gradient(90deg, #409CFF, #3B82F6)',
    boxShadow: '0 2px 8px rgba(64, 156, 255, 0.3)',
  },
})) as typeof LinearProgress;

export const ModernCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
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
})) as typeof Paper;
