import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Foot = styled(Paper)(({ theme }) => ({
  boxShadow: 'none',
  marginTop: 30,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(2, 0),
})) as typeof Paper;
