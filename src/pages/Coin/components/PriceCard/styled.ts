import LinearProgress, {
  linearProgressClasses,
} from '@mui/material/LinearProgress';
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
