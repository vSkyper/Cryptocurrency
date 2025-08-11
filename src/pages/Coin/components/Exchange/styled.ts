import { InputBase, Paper } from '@mui/material';
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
  maxWidth: 320,
  height: 60,
  margin: '0 auto',
  borderRadius: theme.spacing(2.5),
  background: `linear-gradient(135deg, 
    ${theme.palette.background.paper}ee 0%, 
    ${theme.palette.background.default}cc 100%
  )`,
  border: `1px solid ${theme.palette.divider}60`,
  boxShadow: '0 2px 12px rgba(0,0,0,0.1)',
  transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1)',
  '&:focus-within': {
    boxShadow: `0 4px 20px rgba(0,0,0,0.15), 0 0 0 2px ${theme.palette.primary.main}30`,
    transform: 'translateY(-1px)',
    border: `1px solid ${theme.palette.primary.main}80`,
  },
  [theme.breakpoints.up('lg')]: {
    height: 70,
  },
})) as typeof Paper;

export const ModernExchangeCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: theme.spacing(3),
  background: `linear-gradient(135deg, 
    rgba(255, 255, 255, 0.08) 0%, 
    rgba(255, 255, 255, 0.04) 100%
  )`,
  border: `1px solid rgba(255, 255, 255, 0.15)`,
  boxShadow: `
    0 4px 16px rgba(0,0,0,0.2),
    inset 0 1px 0 rgba(255,255,255,0.05)
  `,
  position: 'relative',
  overflow: 'hidden',
  transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `linear-gradient(135deg, 
      ${theme.palette.primary.main}03, 
      ${theme.palette.secondary.main}02, 
      transparent 60%
    )`,
    zIndex: 0,
  },
})) as typeof Paper;
