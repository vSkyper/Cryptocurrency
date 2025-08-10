import { Paper, Chip } from '@mui/material';
import { styled } from '@mui/material/styles';

export const ModernLinksCard = styled(Paper)(({ theme }) => ({
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

export const StyledChip = styled(Chip)(({ theme }) => ({
  borderRadius: theme.spacing(2),
  background: `linear-gradient(135deg, 
    rgba(255, 255, 255, 0.15) 0%, 
    rgba(255, 255, 255, 0.08) 100%
  )`,
  backdropFilter: 'blur(10px)',
  border: `1px solid rgba(255, 255, 255, 0.2)`,
  color: theme.palette.text.primary,
  fontWeight: 600,
  padding: theme.spacing(0.5, 1),
  transition: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
    background: `linear-gradient(135deg, 
      rgba(255, 255, 255, 0.2) 0%, 
      rgba(255, 255, 255, 0.12) 100%
    )`,
    transform: 'translateY(-1px)',
    boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
  },
  '&:active': {
    transform: 'translateY(0)',
  },
}));
