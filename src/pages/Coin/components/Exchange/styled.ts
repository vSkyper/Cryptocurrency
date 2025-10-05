import {
  InputBase,
  Box,
  Typography,
  Avatar,
  Autocomplete,
} from '@mui/material';
import { styled } from '@mui/material/styles';

export const InputBaseExchange = styled(InputBase)(({ theme }) => ({
  paddingLeft: theme.spacing(1),
  flex: 1,
  '& input[type=number]': {
    MozAppearance: 'textfield',
  },
  '& input[type=number]::-webkit-outer-spin-button': {
    WebkitAppearance: 'none',
    margin: 0,
  },
  '& input[type=number]::-webkit-inner-spin-button': {
    WebkitAppearance: 'none',
    margin: 0,
  },
})) as typeof InputBase;

export const InputCard = styled(Box)(({ theme }) => ({
  paddingLeft: 15,
  paddingRight: 15,
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  height: 70,
  margin: '0 auto',
  borderRadius: 16,
  background: 'var(--bg-tertiary-dark)',
  transition: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)',
  transform: 'translateZ(0)',
  willChange: 'auto',
  contain: 'layout style',
  '&:focus-within': {
    background:
      'color-mix(in srgb, var(--bg-tertiary-dark) 90%, var(--brand-blue) 10%)',
  },
  [theme.breakpoints.down('sm')]: {
    height: 55,
    paddingLeft: 12,
    paddingRight: 12,
  },
  [theme.breakpoints.up('lg')]: {
    height: 75,
  },
}));

export const ModernExchangeCard = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: 16,
  background: 'var(--bg-tertiary)',
  transform: 'translateZ(0)',
  willChange: 'auto',
  contain: 'layout style',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2.5),
  },
}));

export const ExchangeHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(2),
  gap: theme.spacing(1),
  [theme.breakpoints.down('sm')]: {
    marginBottom: theme.spacing(1.8),
    gap: theme.spacing(0.8),
  },
}));

export const AnimatedSwapButton = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'color-mix(in srgb, var(--brand-blue) 20%, transparent)',
  width: 48,
  height: 48,
  margin: theme.spacing(1.5, 'auto'),
  borderRadius: '50%',
  position: 'relative',
  overflow: 'hidden',
  cursor: 'default',
  transition: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)',
  [theme.breakpoints.up('md')]: {
    '&:hover': {
      transform: 'scale(1.05)',
      background: 'color-mix(in srgb, var(--brand-blue) 30%, transparent)',
      boxShadow:
        '0 4px 16px color-mix(in srgb, var(--brand-blue) 20%, transparent)',
    },
  },
  [theme.breakpoints.down('md')]: {
    transition: 'none',
  },
  '& .MuiSvgIcon-root': {
    position: 'relative',
    zIndex: 1,
    fontSize: '1.3rem',
    color: 'var(--brand-blue)',
  },
  [theme.breakpoints.down('sm')]: {
    width: 42,
    height: 42,
    margin: theme.spacing(1.2, 'auto'),
    '& .MuiSvgIcon-root': {
      fontSize: '1.1rem',
    },
  },
}));

export const CurrencySection = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1),
  width: '100%',
  [theme.breakpoints.down('sm')]: {
    gap: theme.spacing(0.8),
  },
}));

export const CurrencyLabel = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  marginBottom: theme.spacing(1),
  padding: theme.spacing(0.5, 1),
  borderRadius: theme.spacing(1.5),
  background: `linear-gradient(135deg, 
    color-mix(in srgb, var(--brand-blue) 12%, transparent), 
    color-mix(in srgb, var(--brand-blue-light) 8%, transparent)
  )`,
  width: 'fit-content',
  transition: 'all 200ms ease',
  '&:hover': {
    background: `linear-gradient(135deg, 
      color-mix(in srgb, var(--brand-blue) 18%, transparent), 
      color-mix(in srgb, var(--brand-blue-light) 12%, transparent)
    )`,
  },
}));

export const HeaderTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: '1.25rem',
  background: `linear-gradient(135deg, 
    ${theme.palette.text.primary}, 
    ${theme.palette.primary.main}aa
  )`,
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  color: 'transparent',
  letterSpacing: '-0.01em',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
  },
}));

export const CurrencyAvatar = styled(Avatar)(({ theme }) => ({
  width: 24,
  height: 24,
  background: `linear-gradient(135deg, 
    ${theme.palette.primary.main}, 
    ${theme.palette.secondary.main}
  )`,
  fontSize: '0.75rem',
  fontWeight: 700,
  [theme.breakpoints.down('sm')]: {
    width: 20,
    height: 20,
    fontSize: '0.6rem',
  },
}));

export const CurrencyLabelTypography = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  color: theme.palette.text.primary,
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
  fontSize: '0.875rem',
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.75rem',
  },
}));

export const CurrencyLabelBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  marginBottom: theme.spacing(1),
  [theme.breakpoints.down('sm')]: {
    gap: theme.spacing(0.5),
    marginBottom: theme.spacing(0.5),
  },
}));

export const StyledAutocomplete = styled(Autocomplete)(({ theme }) => ({
  width: '70px',
  '& .MuiInput-root': {
    border: 'none',
    '&:before': { display: 'none' },
    '&:after': { display: 'none' },
  },
  '& .MuiInputBase-input': {
    fontWeight: 600,
    fontSize: '0.9rem',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    paddingRight: '0px !important',
  },
  '& .MuiAutocomplete-endAdornment': {
    right: '4px',
  },
  '& .MuiAutocomplete-popupIndicator': {
    padding: '2px',
    marginRight: '0px',
  },
  [theme.breakpoints.down('sm')]: {
    width: '60px',
    '& .MuiInputBase-input': {
      fontSize: '0.8rem',
    },
  },
})) as typeof Autocomplete;

export const StyledInputBase = styled(InputBaseExchange)(({ theme }) => ({
  '& input': {
    fontSize: '1.1rem',
    fontWeight: 500,
    color: theme.palette.text.primary,
    textAlign: 'right',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem',
    },
  },
}));

export const RateText = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  color: theme.palette.text.secondary,
  fontSize: '0.8rem',
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.7rem',
  },
}));

export const ExchangeRateDisplay = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing(1),
  padding: theme.spacing(1.5, 2),
  marginTop: theme.spacing(2),
  borderRadius: theme.spacing(2),
  background: 'var(--bg-tertiary-dark)',
  transition: 'all 250ms ease',
  '&:hover': {
    background:
      'color-mix(in srgb, var(--bg-tertiary-dark) 90%, var(--brand-blue) 10%)',
    transform: 'translateY(-1px)',
    boxShadow:
      '0 4px 16px color-mix(in srgb, var(--brand-blue) 10%, transparent)',
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(1, 1.5),
    marginTop: theme.spacing(1.5),
    gap: theme.spacing(0.5),
  },
}));
