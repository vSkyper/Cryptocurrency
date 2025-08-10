import { Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Card = styled(Paper)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(4, 3),
  borderRadius: theme.spacing(3),
  background: `linear-gradient(135deg, 
    rgba(255, 255, 255, 0.15) 0%, 
    rgba(255, 255, 255, 0.08) 100%
  )`,
  backdropFilter: 'blur(20px)',
  border: `1px solid rgba(255, 255, 255, 0.2)`,
  boxShadow: `
    0 12px 40px rgba(0,0,0,0.3),
    inset 0 1px 0 rgba(255,255,255,0.1)
  `,
  position: 'relative',
  overflow: 'hidden',
  transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
    transform: 'translateY(-8px)',
    background: `linear-gradient(135deg, 
      rgba(255, 255, 255, 0.2) 0%, 
      rgba(255, 255, 255, 0.12) 100%
    )`,
    boxShadow: `
      0 20px 60px rgba(0,0,0,0.4),
      inset 0 1px 0 rgba(255,255,255,0.15)
    `,
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `linear-gradient(135deg, 
      ${theme.palette.primary.main}08, 
      ${theme.palette.secondary.main}05, 
      transparent 60%
    )`,
    zIndex: 0,
  },
  '& > *': {
    position: 'relative',
    zIndex: 1,
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(3, 2),
  },
})) as typeof Paper;

export const Percentage = styled(Typography)(({ theme }) => ({
  marginLeft: theme.spacing(1.5),
  display: 'flex',
  alignItems: 'center',
  fontWeight: 600,
  fontSize: '0.95rem',
  padding: theme.spacing(0.5, 1),
  borderRadius: theme.spacing(1.5),
  background: 'rgba(255, 255, 255, 0.15)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  '& .MuiSvgIcon-root': {
    marginLeft: theme.spacing(0.5),
    fontSize: '1.1rem',
  },
})) as typeof Typography;
