import LinearProgress, {
  linearProgressClasses,
} from '@mui/material/LinearProgress';
import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 8,
  marginTop: 16,
  marginBottom: 8,
  borderRadius: 99,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    background:
      'linear-gradient(90deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03))',
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 99,
    background: `linear-gradient(90deg, ${theme.palette.warning.main}, ${theme.palette.success.main})`,
  },
})) as typeof LinearProgress;

export const ModernCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: theme.spacing(3),
  background: `linear-gradient(135deg, 
    rgba(255, 255, 255, 0.08) 0%, 
    rgba(255, 255, 255, 0.04) 100%
  )`,
  border: `1px solid rgba(255, 255, 255, 0.15)`,
  boxShadow: `
    0 4px 16px rgba(0,0,0,0.2),
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
      ${theme.palette.primary.main}04, 
      ${theme.palette.secondary.main}03, 
      transparent 50%
    )`,
    zIndex: 0,
  },
})) as typeof Paper;
