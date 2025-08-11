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
  background: `linear-gradient(135deg, 
    rgba(208, 188, 255, 0.08) 0%, 
    rgba(204, 194, 220, 0.04) 100%
  )`,
  backdropFilter: 'blur(16px)',
  border: '1px solid rgba(208, 188, 255, 0.2)',
  boxShadow: '0 4px 20px rgba(0,0,0,0.12)',
  transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `linear-gradient(135deg, 
      rgba(208, 188, 255, 0.05), 
      rgba(204, 194, 220, 0.03), 
      transparent 70%
    )`,
    zIndex: 0,
  },
  '&:focus-within': {
    boxShadow: '0 8px 30px rgba(0,0,0,0.2), 0 0 0 2px rgba(208, 188, 255, 0.4)',
    transform: 'translateY(-2px)',
    border: '1px solid rgba(208, 188, 255, 0.5)',
    '&::before': {
      background: `linear-gradient(135deg, 
        rgba(208, 188, 255, 0.08), 
        rgba(204, 194, 220, 0.05), 
        transparent 70%
      )`,
    },
  },
  '& > *': {
    position: 'relative',
    zIndex: 1,
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
  background: `linear-gradient(135deg, 
    rgba(208, 188, 255, 0.08) 0%, 
    rgba(204, 194, 220, 0.04) 100%
  )`,
  backdropFilter: 'blur(24px)',
  border: '1px solid rgba(208, 188, 255, 0.2)',
  boxShadow: `
    0 8px 32px rgba(0,0,0,0.3),
    0 4px 16px rgba(208, 188, 255, 0.1),
    inset 0 1px 0 rgba(255,255,255,0.08)
  `,
  position: 'relative',
  overflow: 'hidden',
  transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: `
      0 12px 40px rgba(0,0,0,0.4),
      0 6px 20px rgba(208, 188, 255, 0.15),
      inset 0 1px 0 rgba(255,255,255,0.1)
    `,
    border: '1px solid rgba(208, 188, 255, 0.3)',
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `linear-gradient(135deg, 
      rgba(208, 188, 255, 0.05), 
      rgba(204, 194, 220, 0.03), 
      transparent 60%
    )`,
    zIndex: 0,
  },
  '& > *': {
    position: 'relative',
    zIndex: 1,
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2.5),
    borderRadius: theme.spacing(2.5),
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
  background: `linear-gradient(135deg, 
    rgba(208, 188, 255, 0.25), 
    rgba(204, 194, 220, 0.20)
  )`,
  backdropFilter: 'blur(12px)',
  border: '1px solid rgba(208, 188, 255, 0.3)',
  width: 48,
  height: 48,
  margin: theme.spacing(1.5, 'auto'),
  borderRadius: '50%',
  position: 'relative',
  overflow: 'hidden',
  cursor: 'default',
  transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
    transform: 'scale(1.05)',
    background: `linear-gradient(135deg, 
      rgba(208, 188, 255, 0.35), 
      rgba(204, 194, 220, 0.25)
    )`,
    border: '1px solid rgba(208, 188, 255, 0.4)',
    boxShadow: '0 4px 16px rgba(208, 188, 255, 0.2)',
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `linear-gradient(135deg, 
      rgba(208, 188, 255, 0.15), 
      rgba(204, 194, 220, 0.10)
    )`,
    opacity: 0.5,
  },
  '& .MuiSvgIcon-root': {
    position: 'relative',
    zIndex: 1,
    fontSize: '1.3rem',
    color: '#D0BCFF',
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
    rgba(208, 188, 255, 0.12), 
    rgba(204, 194, 220, 0.08)
  )`,
  border: '1px solid rgba(208, 188, 255, 0.2)',
  width: 'fit-content',
  transition: 'all 200ms ease',
  '&:hover': {
    background: `linear-gradient(135deg, 
      rgba(208, 188, 255, 0.18), 
      rgba(204, 194, 220, 0.12)
    )`,
    border: '1px solid rgba(208, 188, 255, 0.3)',
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
    rgba(208, 188, 255, 0.12),
    rgba(204, 194, 220, 0.08)
  )`,
  border: '1px solid rgba(208, 188, 255, 0.25)',
  transition: 'all 250ms ease',
  '&:hover': {
    background: `linear-gradient(135deg, 
      rgba(208, 188, 255, 0.18),
      rgba(204, 194, 220, 0.12)
    )`,
    border: '1px solid rgba(208, 188, 255, 0.35)',
    transform: 'translateY(-1px)',
    boxShadow: '0 4px 16px rgba(208, 188, 255, 0.1)',
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(1, 1.5),
    marginTop: theme.spacing(1.5),
    gap: theme.spacing(0.5),
  },
}));
