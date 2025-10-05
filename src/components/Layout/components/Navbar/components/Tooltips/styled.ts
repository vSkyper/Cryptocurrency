import { IconButton, IconButtonProps } from '@mui/material';
import { styled } from '@mui/material/styles';

export const GitHubButton = styled(IconButton)<
  IconButtonProps & {
    component?: React.ElementType;
    href?: string;
    target?: string;
  }
>(({ theme }) => ({
  background:
    'linear-gradient(135deg, color-mix(in srgb, var(--brand-blue) 12%, transparent) 0%, color-mix(in srgb, var(--brand-blue) 6%, transparent) 100%)',
  backdropFilter: 'blur(12px)',
  border: '1px solid color-mix(in srgb, var(--brand-blue) 20%, transparent)',
  borderRadius: '12px',
  color: 'var(--brand-blue)',
  transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
  padding: theme.spacing(1.5),
  position: 'relative',
  overflow: 'hidden',
  '& .MuiSvgIcon-root': {
    fontSize: '1.2rem',
    filter:
      'drop-shadow(0 2px 4px color-mix(in srgb, var(--brand-blue) 30%, transparent))',
    transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: '-100%',
    width: '100%',
    height: '100%',
    background:
      'linear-gradient(90deg, transparent, color-mix(in srgb, var(--brand-blue) 15%, transparent), transparent)',
    transition: 'left 500ms cubic-bezier(0.4, 0, 0.2, 1)',
  },
  '&:hover': {
    background:
      'linear-gradient(135deg, color-mix(in srgb, var(--brand-blue) 20%, transparent) 0%, color-mix(in srgb, var(--brand-blue) 12%, transparent) 100%)',
    transform: 'translateY(-2px) scale(1.05)',
    boxShadow:
      '0 8px 25px color-mix(in srgb, var(--brand-blue) 25%, transparent), 0 4px 12px rgba(0,0,0,0.15)',
    border: '1px solid color-mix(in srgb, var(--brand-blue) 40%, transparent)',
    '& .MuiSvgIcon-root': {
      transform: 'rotate(-5deg) scale(1.1)',
      filter:
        'drop-shadow(0 4px 8px color-mix(in srgb, var(--brand-blue) 40%, transparent))',
    },
    '&::before': {
      left: '100%',
    },
  },
  '&:active': {
    transform: 'translateY(-1px) scale(1.02)',
  },
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(2),
    '& .MuiSvgIcon-root': {
      fontSize: '1.3rem',
    },
  },
}));
