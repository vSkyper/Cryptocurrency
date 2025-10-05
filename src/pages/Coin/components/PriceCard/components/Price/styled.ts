import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const PriceText = styled(Typography)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontWeight: 700,
  letterSpacing: 0.2,
  background: 'linear-gradient(180deg, #e0e0e0, rgba(224,224,224,0.5))',
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  color: 'transparent',
}));

export const PercentageChip = styled(Typography)<{ isPositive: boolean }>(
  ({ theme, isPositive }) => ({
    marginLeft: theme.spacing(1.5),
    display: 'flex',
    alignItems: 'center',
    fontWeight: 600,
    fontSize: '0.9rem',
    padding: theme.spacing(0.6, 1.2),
    borderRadius: theme.spacing(2),
    background: 'color-mix(in srgb, var(--brand-blue) 12%, transparent)',
    boxShadow:
      '0 2px 8px color-mix(in srgb, var(--brand-blue) 10%, transparent)',
    transition: 'transform 150ms ease',
    color: isPositive ? theme.palette.success.light : theme.palette.error.light,
    '& .MuiSvgIcon-root': {
      marginLeft: theme.spacing(0.5),
      fontSize: '1rem',
      transition: 'transform 200ms ease',
    },
    [theme.breakpoints.up('md')]: {
      '&:hover': {
        transform: 'translate3d(0, -1px, 0)',
      },
      '&:hover .MuiSvgIcon-root': {
        transform: isPositive ? 'translateY(-1px)' : 'translateY(1px)',
      },
    },
    [theme.breakpoints.down('md')]: {
      transition: 'none',
    },
  })
);
