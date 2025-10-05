import { Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const TooltipPaper = styled(Paper)(({ theme }) => ({
  opacity: 0.98,
  padding: theme.spacing(1.5),
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
}));

export const TooltipDate = styled(Typography)(() => ({}));

export const TooltipValue = styled(Typography)(() => ({
  fontWeight: 300,
}));
