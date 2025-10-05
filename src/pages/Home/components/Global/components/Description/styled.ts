import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const DescriptionText = styled(Typography)(({ theme }) => ({
  fontWeight: 400,
  lineHeight: 1.5,
  color: theme.palette.text.secondary,
  fontSize: '0.9rem',
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.85rem',
  },
}));

export const BoldText = styled(Typography)<{ component?: React.ElementType }>(
  ({ theme }) => ({
    fontWeight: 700,
    color: theme.palette.text.primary,
  })
);

export const ChangeText = styled(Typography)<{
  component?: React.ElementType;
  isNegative: boolean;
}>(({ isNegative }) => ({
  fontWeight: 700,
  color: isNegative ? '#ff6b6b' : '#51cf66',
}));

export const BTCText = styled(Typography)<{ component?: React.ElementType }>(
  () => ({
    fontWeight: 700,
    color: '#f7931a',
  })
);

export const ETHText = styled(Typography)<{ component?: React.ElementType }>(
  () => ({
    fontWeight: 700,
    color: '#627eea',
  })
);
