import { Box, Divider, Typography, Chip } from '@mui/material';
import { styled } from '@mui/material/styles';

export const ModernDataCard = styled(Box)(({ theme }) => ({
  background: 'var(--bg-tertiary)',
  padding: theme.spacing(3),
  borderRadius: 16,
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2),
    borderRadius: 12,
  },
  transform: 'translateZ(0)',
  willChange: 'auto',
  contain: 'layout style',
}));

export const DataRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: theme.spacing(2),
  borderRadius: theme.spacing(2),
  position: 'relative',
  zIndex: 1,
  transition: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1)',
  [theme.breakpoints.down('md')]: {
    padding: `${theme.spacing(2)} ${theme.spacing(0.5)}`,
  },
  [theme.breakpoints.up('md')]: {
    '&:hover': {
      background: 'color-mix(in srgb, var(--brand-blue) 8%, transparent)',
    },
  },
}));

export const StyledDivider = styled(Divider)(({ theme }) => ({
  background: `linear-gradient(90deg, 
    transparent 0%, 
    color-mix(in srgb, var(--brand-blue) 30%, transparent) 50%, 
    transparent 100%
  )`,
  height: '1px',
  border: 'none',
  margin: theme.spacing(0.5, 0),
}));

export const SectionTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  fontWeight: 700,
  background: `linear-gradient(135deg, 
    ${theme.palette.text.primary}, 
    ${theme.palette.primary.main}aa
  )`,
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  color: 'transparent',
  zIndex: 1,
  position: 'relative',
}));

export const LabelText = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  color: theme.palette.text.primary,
}));

export const ValueText = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  color: theme.palette.text.secondary,
}));

export const PriceRangeContainer = styled(Box)(() => ({
  textAlign: 'right',
}));

export const LowPriceText = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  color: theme.palette.error.light,
}));

export const PriceSeparator = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.disabled,
}));

export const HighPriceText = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  color: theme.palette.success.light,
}));

export const RankChip = styled(Chip)(() => ({
  background:
    'linear-gradient(135deg, color-mix(in srgb, var(--brand-blue) 20%, transparent) 0%, color-mix(in srgb, var(--brand-blue-light) 20%, transparent) 100%)',
  color: 'var(--brand-blue)',
  fontWeight: 700,
  border: '1px solid color-mix(in srgb, var(--brand-blue) 40%, transparent)',
  fontSize: '0.85rem',
  letterSpacing: '0.5px',
}));

export const PriceChangeContainer = styled(Box)(() => ({
  textAlign: 'right',
}));

export const PriceInfoRow = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  justifyContent: 'flex-end',
}));

export const ChangeChip = styled(Chip)<{ isNegative: boolean }>(
  ({ isNegative }) => ({
    background: isNegative
      ? 'linear-gradient(135deg, color-mix(in srgb, var(--brand-negative) 20%, transparent) 0%, color-mix(in srgb, var(--brand-negative) 10%, transparent) 100%)'
      : 'linear-gradient(135deg, color-mix(in srgb, var(--brand-positive) 20%, transparent) 0%, color-mix(in srgb, var(--brand-positive) 10%, transparent) 100%)',
    color: isNegative ? 'var(--brand-negative)' : 'var(--brand-positive)',
    fontWeight: 600,
    border: isNegative
      ? '1px solid color-mix(in srgb, var(--brand-negative) 30%, transparent)'
      : '1px solid color-mix(in srgb, var(--brand-positive) 30%, transparent)',
  })
);

export const DateText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.disabled,
  marginTop: 4,
  display: 'block',
}));
