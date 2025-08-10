import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Chart = styled(Paper)(({ theme }) => ({
  height: 280,
  padding: theme.spacing(1.5, 1, 1, 1.2),
  borderRadius: Number(theme.shape.borderRadius) * 2,
  background: 'background.paper',
  border: `1px solid ${theme.palette.divider}`,
  boxShadow: '0 6px 24px rgba(0,0,0,0.35)',
  [theme.breakpoints.up('sm')]: {
    height: 440,
    padding: theme.spacing(2.5, 1.5, 1.5, 2),
  },
})) as typeof Paper;
