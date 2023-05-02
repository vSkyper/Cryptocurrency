import LinearProgress, {
  linearProgressClasses,
} from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';

export const StyledLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  marginTop: 20,
  marginBottom: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    background: `linear-gradient(90deg, ${theme.palette.warning.light}, ${theme.palette.success.light})`,
  },
})) as typeof LinearProgress;
