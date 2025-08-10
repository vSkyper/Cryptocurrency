import { Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Card = styled(Paper)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(2, 1),
  borderRadius: Number(theme.shape.borderRadius) * 2,
  boxShadow: theme.shadows[2],
})) as typeof Paper;

export const Percentage = styled(Typography)(({ theme }) => ({
  marginLeft: theme.spacing(1),
  display: 'flex',
  alignItems: 'center',
  fontWeight: 300,
})) as typeof Typography;
