import LinearProgress, {
  linearProgressClasses,
} from '@mui/material/LinearProgress';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledLinearProgress = styled(LinearProgress)(() => ({
  height: 10,
  marginTop: 16,
  marginBottom: 8,
  borderRadius: 99,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    background:
      'linear-gradient(90deg, rgba(64, 156, 255, 0.1), rgba(59, 130, 246, 0.05))',
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 99,
    background: 'linear-gradient(90deg, #409CFF, #3B82F6)',
    boxShadow: '0 2px 8px rgba(64, 156, 255, 0.3)',
  },
})) as typeof LinearProgress;

export const ModernCard = styled(Box)(({ theme }) => ({
  background: 'rgba(20, 30, 48, 0.4)',
  padding: theme.spacing(3),
  borderRadius: 16,
  transform: 'translateZ(0)',
  willChange: 'auto',
  contain: 'layout style',
}));
