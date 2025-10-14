import { Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

export const ToggleButtonContainer = styled(Box)<{ mobile?: boolean }>(
  ({ mobile }) => ({
    display: mobile ? 'block' : 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    ...(mobile
      ? {
          '@media (min-width: 900px)': {
            display: 'none',
          },
        }
      : {
          '@media (max-width: 899px)': {
            display: 'none',
          },
        }),
  })
);

export const ToggleButton = styled(Button)<{
  active?: boolean;
  mobile?: boolean;
}>(({ active, mobile, theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: mobile ? theme.spacing(0.75) : theme.spacing(1),
  padding: mobile ? theme.spacing(0.75, 1.5) : theme.spacing(1, 2),
  borderRadius: theme.spacing(3),
  fontSize: mobile ? '0.85rem' : '0.95rem',
  fontWeight: 600,
  textTransform: 'none',
  cursor: 'pointer',
  transition: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)',
  position: 'relative',
  overflow: 'hidden',

  // Active state - gradient background
  background: active
    ? 'linear-gradient(135deg, var(--brand-blue) 0%, var(--brand-blue-light) 100%)'
    : 'var(--bg-tertiary-dark)',

  color: active ? '#ffffff' : 'rgba(255, 255, 255, 0.85)',

  border: active
    ? '1px solid color-mix(in srgb, var(--brand-blue) 40%, transparent)'
    : '1px solid color-mix(in srgb, var(--brand-blue) 25%, transparent)',

  boxShadow: active
    ? '0 4px 12px color-mix(in srgb, var(--brand-blue) 30%, transparent), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
    : '0 2px 8px rgba(0, 0, 0, 0.2), 0 0 0 1px color-mix(in srgb, var(--brand-blue) 15%, transparent)',

  // Hover effect
  '&:hover': {
    transform: 'translateY(-2px)',
    background: active
      ? 'linear-gradient(135deg, var(--brand-blue-light) 0%, var(--brand-blue) 100%)'
      : 'color-mix(in srgb, var(--bg-tertiary-dark) 85%, var(--brand-blue) 15%)',
    border: active
      ? '1px solid color-mix(in srgb, var(--brand-blue) 50%, transparent)'
      : '1px solid color-mix(in srgb, var(--brand-blue) 40%, transparent)',
    boxShadow: active
      ? '0 6px 16px color-mix(in srgb, var(--brand-blue) 40%, transparent), inset 0 1px 0 rgba(255, 255, 255, 0.15)'
      : '0 4px 12px rgba(0, 0, 0, 0.3), 0 0 0 1px color-mix(in srgb, var(--brand-blue) 30%, transparent)',
    color: '#ffffff',
  },

  // Active press effect
  '&:active': {
    transform: 'translateY(0)',
    boxShadow: active
      ? '0 2px 8px color-mix(in srgb, var(--brand-blue) 20%, transparent), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
      : '0 1px 4px rgba(0, 0, 0, 0.1)',
  },

  // Icon animation
  '& .MuiSvgIcon-root': {
    transition: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)',
    transform: active ? 'scale(1.1)' : 'scale(1)',
    filter: active ? 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.5))' : 'none',
  },

  // Glow effect when active
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 'inherit',
    padding: '2px',
    background: active
      ? 'linear-gradient(135deg, var(--brand-blue), var(--brand-blue-light))'
      : 'transparent',
    WebkitMask:
      'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
    WebkitMaskComposite: 'xor',
    maskComposite: 'exclude',
    opacity: active ? 0.5 : 0,
    transition: 'opacity 300ms ease',
  },
}));
