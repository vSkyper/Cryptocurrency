import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledPriceCard = styled(Box)<{ isPositive: boolean }>(
  ({ theme, isPositive }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(2),
    borderRadius: 12,
    background: 'var(--bg-tertiary)',
    position: 'relative',
    overflow: 'hidden',
    transform: 'translateZ(0)',
    willChange: 'auto',
    contain: 'layout style',
    color: isPositive ? 'var(--brand-positive)' : 'var(--brand-negative)',
    borderColor: isPositive
      ? 'color-mix(in srgb, var(--brand-positive) 30%, transparent)'
      : 'color-mix(in srgb, var(--brand-negative) 30%, transparent)',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: '3px',
      background: isPositive
        ? 'var(--brand-positive)'
        : 'var(--brand-negative)',
      opacity: 0.8,
    },
  })
);

export const PercentageText = styled(Typography)(() => ({
  fontWeight: 700,
  fontSize: '1.1rem',
  marginBottom: 4,
}));

export const LabelText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontWeight: 500,
  textTransform: 'uppercase',
  letterSpacing: 0.5,
}));
