import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Name = styled(Paper)(({ theme }) => ({
  boxShadow: 'none',
  marginBottom: 20,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(2.5, 0),
})) as typeof Paper;
