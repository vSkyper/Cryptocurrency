import { Box, Stack, Chip } from '@mui/material';
import { styled } from '@mui/material/styles';

export const HeaderContainer = styled(Stack)(({ theme }) => ({
  marginBottom: theme.spacing(4),
}));

export const CoinImage = styled(Box)<{
  component?: React.ElementType;
  src?: string;
  alt?: string;
}>(({ theme }) => ({
  width: 56,
  height: 56,
  borderRadius: '50%',
  border: '2px solid color-mix(in srgb, var(--brand-blue) 20%, transparent)',
  [theme.breakpoints.down('sm')]: {
    width: 48,
    height: 48,
  },
}));

export const InfoStack = styled(Stack)(() => ({
  flex: 1,
}));

export const CoinName = styled(Box)(({ theme }) => ({
  fontSize: '2rem',
  fontWeight: 700,
  color: theme.palette.text.primary,
  letterSpacing: '-0.02em',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.5rem',
  },
}));

export const CoinSymbol = styled(Box)<{ component?: React.ElementType }>(
  ({ theme }) => ({
    fontSize: '1.25rem',
    fontWeight: 600,
    color: theme.palette.text.secondary,
    textTransform: 'uppercase',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem',
    },
  })
);

export const RankChip = styled(Chip)(() => ({
  fontWeight: 700,
  fontSize: '0.75rem',
  height: 24,
  borderRadius: '12px',
  background: 'color-mix(in srgb, var(--brand-blue) 15%, transparent)',
  border: '1px solid color-mix(in srgb, var(--brand-blue) 30%, transparent)',
  color: 'var(--brand-blue)',
  '& .MuiChip-label': {
    paddingLeft: 8,
    paddingRight: 8,
  },
}));

export const HeroSection = styled(Box)(({ theme }) => ({
  position: 'relative',
  background: 'color-mix(in srgb, var(--brand-blue) 6%, transparent)',
  border: '1px solid color-mix(in srgb, var(--brand-blue) 20%, transparent)',
  borderRadius: theme.spacing(3),
  padding: theme.spacing(3, 4),
  marginBottom: theme.spacing(3),
  boxShadow:
    '0 4px 16px color-mix(in srgb, var(--brand-blue) 5%, rgba(0,0,0,0.2))',
  overflow: 'hidden',
  width: '100%',
  maxWidth: '100%',
  boxSizing: 'border-box',
  transform: 'translateZ(0)',
  willChange: 'auto',
  contain: 'layout style',
  isolation: 'isolate',
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(3, 4),
    marginBottom: theme.spacing(3),
    borderRadius: theme.spacing(3),
  },
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(3, 4),
    marginBottom: theme.spacing(3),
  },
})) as typeof Box;
