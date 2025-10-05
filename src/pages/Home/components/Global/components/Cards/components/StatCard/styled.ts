import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const CardTitle = styled(Typography)<{ hasPercentage?: boolean }>(
  ({ hasPercentage, theme }) => ({
    fontWeight: 700,
    marginBottom: theme.spacing(1.5),
    fontSize: '1.25rem',
    color: theme.palette.text.primary,
    display: hasPercentage ? 'flex' : 'block',
    justifyContent: hasPercentage ? 'center' : 'normal',
    alignItems: hasPercentage ? 'center' : 'normal',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.1rem',
    },
  })
);

export const Card = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(3.5, 3),
  borderRadius: 16,
  background: 'color-mix(in srgb, var(--bg-tertiary) 40%, transparent)',
  position: 'relative',
  overflow: 'hidden',
  height: 'auto',
  minHeight: 120,
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2, 1.5),
    minHeight: 80,
  },
}));

export const CardSubtitle = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  color: theme.palette.text.secondary,
  textAlign: 'center',
  fontSize: '0.875rem',
  letterSpacing: '0.3px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.8rem',
  },
}));

export const PercentageChip = styled('div')<{ isNegative: boolean }>(
  ({ isNegative, theme }) => ({
    marginLeft: theme.spacing(1.5),
    display: 'flex',
    alignItems: 'center',
    fontWeight: 600,
    fontSize: '0.9rem',
    padding: theme.spacing(0.6, 1.2),
    borderRadius: theme.spacing(2),
    background: isNegative
      ? 'color-mix(in srgb, var(--brand-negative) 12%, transparent)'
      : 'color-mix(in srgb, var(--brand-positive) 12%, transparent)',
    boxShadow: isNegative
      ? '0 2px 8px color-mix(in srgb, var(--brand-negative) 10%, transparent)'
      : '0 2px 8px color-mix(in srgb, var(--brand-positive) 10%, transparent)',
    transition: 'transform 150ms ease',
    color: isNegative ? 'var(--brand-negative)' : 'var(--brand-positive)',
    border: isNegative
      ? '1px solid color-mix(in srgb, var(--brand-negative) 30%, transparent)'
      : '1px solid color-mix(in srgb, var(--brand-positive) 30%, transparent)',
    '& .MuiSvgIcon-root': {
      marginLeft: theme.spacing(0.5),
      fontSize: '1rem',
    },
    [theme.breakpoints.up('md')]: {
      '&:hover': {
        transform: 'translate3d(0, -1px, 0)',
      },
    },
    [theme.breakpoints.down('md')]: {
      transition: 'none',
    },
  })
);
