import { Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Card = styled(Paper)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(2, 0),
})) as typeof Paper;

export const Percentage = styled(Typography)({
  marginLeft: 5,
  display: 'flex',
  alignItems: 'center',
  fontWeight: 300,
}) as typeof Typography;
