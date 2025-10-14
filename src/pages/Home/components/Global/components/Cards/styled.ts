import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

export const CardsContainer = styled(Grid)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  transform: 'translateZ(0)',
  willChange: 'transform',
}));
