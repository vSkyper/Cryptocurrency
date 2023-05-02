import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Chart = styled(Paper)(({ theme }) => ({
  height: 250,
  padding: theme.spacing(2, 1, 1, 0.8),
  [theme.breakpoints.up('sm')]: {
    height: 415,
    padding: theme.spacing(3, 1.5, 1.5, 2),
  },
  color: 'black',
})) as typeof Paper;
