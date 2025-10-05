import LinearProgress, {
  linearProgressClasses,
} from '@mui/material/LinearProgress';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const PriceContainer = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: theme.spacing(3),
}));

export const RangeSection = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

export const RangeTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(1),
  textAlign: 'center',
}));

export const ProgressContainer = styled(Box)(({ theme }) => ({
  paddingLeft: theme.spacing(1),
  paddingRight: theme.spacing(1),
}));

export const RangeValue = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontWeight: 500,
}));

export const StyledLinearProgress = styled(LinearProgress)(() => ({
  height: 10,
  marginTop: 16,
  marginBottom: 8,
  borderRadius: 99,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    background:
      'linear-gradient(90deg, color-mix(in srgb, var(--brand-blue) 10%, transparent), color-mix(in srgb, var(--brand-blue-light) 5%, transparent))',
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 99,
    background:
      'linear-gradient(90deg, var(--brand-blue), var(--brand-blue-light))',
    boxShadow:
      '0 2px 8px color-mix(in srgb, var(--brand-blue) 30%, transparent)',
  },
})) as typeof LinearProgress;

export const ModernCard = styled(Box)(({ theme }) => ({
  background: 'var(--bg-tertiary)',
  padding: theme.spacing(3),
  borderRadius: 16,
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2),
    borderRadius: 12,
  },
  transform: 'translateZ(0)',
  willChange: 'auto',
  contain: 'layout style',
}));
