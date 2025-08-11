import { Paper, Chip } from '@mui/material';
import { styled } from '@mui/material/styles';

export const ModernLinksCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  borderRadius: theme.spacing(2.5),
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
})) as typeof Paper;

export const StyledChip = styled(Chip)<{
  component?: React.ElementType;
  href?: string;
  clickable?: boolean;
}>(({ theme }) => ({
  borderRadius: theme.spacing(2),
  background: `linear-gradient(135deg, 
    rgba(208, 188, 255, 0.15) 0%, 
    rgba(204, 194, 220, 0.08) 100%
  )`,
  backdropFilter: 'blur(12px)',
  border: '1px solid rgba(208, 188, 255, 0.25)',
  color: '#D0BCFF',
  fontWeight: 600,
  fontSize: '0.8rem',
  height: 32,
  padding: theme.spacing(0.5, 1),
  transition: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)',
  '& .MuiChip-avatar': {
    width: 20,
    height: 20,
    fontSize: '0.7rem',
    marginLeft: 4,
    marginRight: 1,
  },
  '& .MuiChip-icon': {
    fontSize: '1rem',
    marginLeft: 4,
    marginRight: 1,
    color: '#D0BCFF',
  },
  '& .MuiChip-label': {
    padding: '0 8px',
    fontSize: '0.8rem',
    color: '#D0BCFF',
  },
  '&:hover': {
    background: `linear-gradient(135deg, 
      rgba(208, 188, 255, 0.25) 0%, 
      rgba(204, 194, 220, 0.15) 100%
    )`,
    border: '1px solid rgba(208, 188, 255, 0.4)',
    transform: 'translateY(-1px)',
    boxShadow: '0 4px 20px rgba(208, 188, 255, 0.2)',
  },
  '&:active': {
    transform: 'translateY(0)',
  },
  [theme.breakpoints.down('sm')]: {
    height: 28,
    fontSize: '0.7rem',
    padding: theme.spacing(0.3, 0.8),
    '& .MuiChip-avatar': {
      width: 18,
      height: 18,
      fontSize: '0.6rem',
      marginLeft: 3,
      marginRight: 0,
    },
    '& .MuiChip-icon': {
      fontSize: '0.9rem',
      marginLeft: 3,
      marginRight: 0,
    },
    '& .MuiChip-label': {
      padding: '0 6px',
      fontSize: '0.7rem',
    },
  },
}));
