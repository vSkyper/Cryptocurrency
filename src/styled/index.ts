import { Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Card = styled(Paper)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(3.5, 3),
  borderRadius: theme.spacing(2.5),
  background: `linear-gradient(135deg, 
    rgba(16, 18, 27, 0.8) 0%, 
    rgba(13, 14, 14, 0.85) 100%
  )`,
  backdropFilter: 'blur(16px) saturate(180%)',
  border: `1px solid rgba(208, 188, 255, 0.15)`,
  boxShadow: `
    0 8px 32px rgba(0,0,0,0.4),
    0 2px 12px rgba(208, 188, 255, 0.1),
    inset 0 1px 0 rgba(255,255,255,0.08)
  `,
  position: 'relative',
  overflow: 'hidden',
  transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
  height: 'auto',
  minHeight: 120,
  '&:hover': {
    transform: 'translateY(-4px)',
    background: `linear-gradient(135deg, 
      rgba(16, 18, 27, 0.9) 0%, 
      rgba(13, 14, 14, 0.95) 100%
    )`,
    border: `1px solid rgba(208, 188, 255, 0.25)`,
    boxShadow: `
      0 12px 40px rgba(0,0,0,0.5),
      0 4px 16px rgba(208, 188, 255, 0.15),
      inset 0 1px 0 rgba(255,255,255,0.12)
    `,
    [theme.breakpoints.down('md')]: {
      transform: 'translateY(-2px)',
    },
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `linear-gradient(135deg, 
      rgba(208, 188, 255, 0.06) 0%, 
      rgba(204, 194, 220, 0.04) 40%,
      transparent 70%
    )`,
    zIndex: 0,
    opacity: 0.8,
  },
  '& > *': {
    position: 'relative',
    zIndex: 1,
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(3, 2.5),
    minHeight: 90,
  },
})) as typeof Paper;

export const Percentage = styled(Typography)(({ theme }) => ({
  marginLeft: theme.spacing(1.5),
  display: 'flex',
  alignItems: 'center',
  fontWeight: 600,
  fontSize: '0.9rem',
  padding: theme.spacing(0.6, 1.2),
  borderRadius: theme.spacing(2),
  background:
    'linear-gradient(135deg, rgba(208, 188, 255, 0.15) 0%, rgba(208, 188, 255, 0.08) 100%)',
  backdropFilter: 'blur(12px)',
  border: '1px solid rgba(208, 188, 255, 0.2)',
  boxShadow:
    '0 2px 8px rgba(208, 188, 255, 0.1), inset 0 1px 0 rgba(255,255,255,0.1)',
  transition: 'all 200ms ease',
  '& .MuiSvgIcon-root': {
    marginLeft: theme.spacing(0.5),
    fontSize: '1rem',
    filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.2))',
  },
  '&:hover': {
    transform: 'translateY(-1px)',
    background:
      'linear-gradient(135deg, rgba(208, 188, 255, 0.2) 0%, rgba(208, 188, 255, 0.12) 100%)',
    boxShadow:
      '0 4px 12px rgba(208, 188, 255, 0.15), inset 0 1px 0 rgba(255,255,255,0.15)',
    border: '1px solid rgba(208, 188, 255, 0.3)',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '0.8rem',
    padding: theme.spacing(0.4, 0.8),
    marginLeft: theme.spacing(1),
    '& .MuiSvgIcon-root': {
      fontSize: '0.9rem',
    },
  },
})) as typeof Typography;
