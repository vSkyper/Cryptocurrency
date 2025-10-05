import { InputBase, Paper, Box } from '@mui/material';
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

export const InputCard = styled(Paper)(({ theme }) => ({
  paddingLeft: 15,
  paddingRight: 15,
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  height: 70,
  margin: '0 auto',
  borderRadius: theme.spacing(2.5),
  background: 'rgba(64, 156, 255, 0.06)',
  border: '1px solid rgba(64, 156, 255, 0.2)',
  boxShadow: '0 4px 20px rgba(0,0,0,0.12)',
  transition:
    'border 200ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 200ms cubic-bezier(0.4, 0, 0.2, 1)',
  position: 'relative',
  overflow: 'hidden',
  contain: 'layout style paint',
  '&:focus-within': {
    boxShadow: '0 8px 30px rgba(0,0,0,0.2), 0 0 0 2px rgba(64, 156, 255, 0.4)',
    border: '1px solid rgba(64, 156, 255, 0.5)',
  },
  [theme.breakpoints.down('sm')]: {
    height: 55,
    paddingLeft: 12,
    paddingRight: 12,
    borderRadius: theme.spacing(2),
  },
  [theme.breakpoints.up('lg')]: {
    height: 75,
  },
})) as typeof Paper;

export const ModernExchangeCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: theme.spacing(3),
  background: 'rgba(64, 156, 255, 0.06)',
  border: '1px solid rgba(64, 156, 255, 0.2)',
  boxShadow: '0 4px 16px rgba(0,0,0,0.25)',
  position: 'relative',
  overflow: 'hidden',
  transition: 'transform 200ms cubic-bezier(0.4, 0, 0.2, 1)',
  contain: 'layout style paint',
  [theme.breakpoints.up('md')]: {
    '&:hover': {
      transform: 'translate3d(0, -2px, 0)',
      boxShadow: '0 8px 24px rgba(0,0,0,0.35)',
    },
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2.5),
    borderRadius: theme.spacing(2.5),
  },
  [theme.breakpoints.down('md')]: {
    transition: 'none',
  },
})) as typeof Paper;

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
  border: '1px solid rgba(64, 156, 255, 0.3)',
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
      border: '1px solid rgba(64, 156, 255, 0.4)',
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
  border: '1px solid rgba(64, 156, 255, 0.2)',
  width: 'fit-content',
  transition: 'all 200ms ease',
  '&:hover': {
    background: `linear-gradient(135deg, 
      rgba(64, 156, 255, 0.18), 
      rgba(59, 130, 246, 0.12)
    )`,
    border: '1px solid rgba(64, 156, 255, 0.3)',
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
  background: `linear-gradient(135deg, 
    rgba(64, 156, 255, 0.12),
    rgba(59, 130, 246, 0.08)
  )`,
  border: '1px solid rgba(64, 156, 255, 0.25)',
  transition: 'all 250ms ease',
  '&:hover': {
    background: `linear-gradient(135deg, 
      rgba(64, 156, 255, 0.18),
      rgba(59, 130, 246, 0.12)
    )`,
    border: '1px solid rgba(64, 156, 255, 0.35)',
    transform: 'translateY(-1px)',
    boxShadow: '0 4px 16px rgba(64, 156, 255, 0.1)',
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(1, 1.5),
    marginTop: theme.spacing(1.5),
    gap: theme.spacing(0.5),
  },
}));
