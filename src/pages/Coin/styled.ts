import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Name = styled(Paper)(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  borderRadius: Number(theme.shape.borderRadius) * 2,
  marginBottom: theme.spacing(3),
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(2.5, 1.5),
})) as typeof Paper;
