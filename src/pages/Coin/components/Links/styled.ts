import { Paper, Chip } from '@mui/material';
import { styled } from '@mui/material/styles';

export const ModernLinksCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  borderRadius: theme.spacing(2.5),
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
  [theme.breakpoints.down('md')]: {
    transition: 'none',
  },
})) as typeof Paper;

export const StyledChip = styled(Chip)<{
  component?: React.ElementType;
  href?: string;
  clickable?: boolean;
}>(({ theme }) => ({
  borderRadius: theme.spacing(2),
  background: 'rgba(64, 156, 255, 0.12)',
  border: '1px solid rgba(64, 156, 255, 0.25)',
  color: '#409CFF',
  fontWeight: 600,
  fontSize: '0.8rem',
  height: 32,
  padding: theme.spacing(0.5, 1),
  transition: 'transform 150ms cubic-bezier(0.4, 0, 0.2, 1)',
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
    color: '#409CFF',
  },
  '& .MuiChip-label': {
    padding: '0 8px',
    fontSize: '0.8rem',
    color: '#409CFF',
  },
  '&:hover': {
    background: `linear-gradient(135deg, 
      rgba(64, 156, 255, 0.25) 0%, 
      rgba(59, 130, 246, 0.15) 100%
    )`,
    border: '1px solid rgba(64, 156, 255, 0.4)',
    transform: 'translateY(-1px)',
    boxShadow: '0 4px 20px rgba(64, 156, 255, 0.2)',
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
