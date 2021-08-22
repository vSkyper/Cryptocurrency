import { Paper, Typography } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';

export const Card = styled(Paper)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(2, 0),
}));

export const Percentage = styled(Typography)(({ theme }) => ({
  marginLeft: 10,
  display: 'flex',
  alignItems: 'center',
  fontWeight: 300,
}));
