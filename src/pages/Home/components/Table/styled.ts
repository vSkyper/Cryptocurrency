import { styled } from '@mui/material/styles';

export const DataTable = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(3),
  borderRadius: theme.shape.borderRadius,
  '& .negative': {
    color: theme.palette.error.light,
  },
  '& .positive': {
    color: theme.palette.success.light,
  },
}));
