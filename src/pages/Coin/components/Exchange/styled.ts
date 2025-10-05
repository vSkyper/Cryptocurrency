import { InputBase, Box } from '@mui/material';
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
  background: 'rgba(20, 30, 48, 0.4)',
  transition: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)',
  transform: 'translateZ(0)',
  willChange: 'auto',
  contain: 'layout style',
  '&:focus-within': {
    background: 'rgba(25, 35, 55, 0.5)',
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
  background: 'rgba(20, 30, 48, 0.4)',
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
  background: 'rgba(64, 156, 255, 0.2)',
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
      background: 'rgba(64, 156, 255, 0.3)',
      boxShadow: '0 4px 16px rgba(64, 156, 255, 0.2)',
    },
  },
  [theme.breakpoints.down('md')]: {
    transition: 'none',
  },
  '& .MuiSvgIcon-root': {
    position: 'relative',
    zIndex: 1,
    fontSize: '1.3rem',
    color: '#409CFF',
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
    rgba(64, 156, 255, 0.12), 
    rgba(59, 130, 246, 0.08)
  )`,
  width: 'fit-content',
  transition: 'all 200ms ease',
  '&:hover': {
    background: `linear-gradient(135deg, 
      rgba(64, 156, 255, 0.18), 
      rgba(59, 130, 246, 0.12)
    )`,
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
  background: 'rgba(20, 30, 48, 0.4)',
  transition: 'all 250ms ease',
  '&:hover': {
    background: 'rgba(25, 35, 55, 0.5)',
    transform: 'translateY(-1px)',
    boxShadow: '0 4px 16px rgba(64, 156, 255, 0.1)',
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(1, 1.5),
    marginTop: theme.spacing(1.5),
    gap: theme.spacing(0.5),
  },
}));
