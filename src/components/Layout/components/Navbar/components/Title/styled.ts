import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';

export const TitleContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  [theme.breakpoints.up('sm')]: {
    gap: theme.spacing(1.5),
  },
}));

export const LogoButton = styled(RouterLink)(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  background:
    'linear-gradient(135deg, color-mix(in srgb, var(--brand-blue) 15%, transparent) 0%, color-mix(in srgb, var(--brand-blue) 8%, transparent) 100%)',
  backdropFilter: 'blur(12px)',
  border: '1px solid color-mix(in srgb, var(--brand-blue) 20%, transparent)',
  borderRadius: 8,
  color: 'var(--brand-blue)',
  transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
  padding: theme.spacing(1),
  marginLeft: theme.spacing(1),
  position: 'relative',
  overflow: 'hidden',
  textDecoration: 'none',
  cursor: 'pointer',
  '& .MuiSvgIcon-root': {
    fontSize: '1.1rem',
    filter:
      'drop-shadow(0 2px 4px color-mix(in srgb, var(--brand-blue) 30%, transparent))',
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: '-100%',
    width: '100%',
    height: '100%',
    background:
      'linear-gradient(90deg, transparent, color-mix(in srgb, var(--brand-blue) 20%, transparent), transparent)',
    transition: 'left 600ms cubic-bezier(0.4, 0, 0.2, 1)',
  },
  '&:hover': {
    background:
      'linear-gradient(135deg, color-mix(in srgb, var(--brand-blue) 25%, transparent) 0%, color-mix(in srgb, var(--brand-blue) 15%, transparent) 100%)',
    transform: 'translateY(-2px) scale(1.05)',
    boxShadow:
      '0 8px 25px color-mix(in srgb, var(--brand-blue) 25%, transparent), 0 4px 12px rgba(0,0,0,0.15)',
    border: '1px solid color-mix(in srgb, var(--brand-blue) 40%, transparent)',
    '&::before': {
      left: '100%',
    },
  },
  '&:active': {
    transform: 'translateY(-1px) scale(1.02)',
  },
  [theme.breakpoints.up('sm')]: {
    borderRadius: 12,
    padding: theme.spacing(2),
    marginLeft: 0,
    '& .MuiSvgIcon-root': {
      fontSize: '1rem',
    },
  },
}));

export const DesktopTitle = styled(Typography)(({ theme }) => ({
  display: 'none',
  fontWeight: 700,
  fontSize: '1.1rem',
  letterSpacing: '0.5px',
  [theme.breakpoints.up('sm')]: {
    display: 'block',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.25rem',
  },
}));

export const StyledLink = styled(RouterLink)(() => ({
  background:
    'linear-gradient(135deg, var(--brand-blue) 0%, var(--brand-blue-light) 50%, var(--brand-blue) 100%)',
  backgroundSize: '200% 100%',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  color: 'transparent',
  textDecoration: 'none',
  transition: 'all 400ms cubic-bezier(0.4, 0, 0.2, 1)',
  textShadow:
    '0 2px 4px color-mix(in srgb, var(--brand-blue) 30%, transparent)',
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: -2,
    left: 0,
    width: 0,
    height: '2px',
    background:
      'linear-gradient(90deg, var(--brand-blue), var(--brand-blue-light))',
    borderRadius: '1px',
    transition: 'width 300ms cubic-bezier(0.4, 0, 0.2, 1)',
  },
  '&:hover': {
    backgroundPosition: '100% 0',
    transform: 'translateY(-1px)',
    filter:
      'drop-shadow(0 4px 8px color-mix(in srgb, var(--brand-blue) 40%, transparent))',
    '&::after': {
      width: '100%',
    },
  },
}));

export const MobileTitle = styled(Typography)(({ theme }) => ({
  display: 'block',
  fontWeight: 700,
  fontSize: '0.95rem',
  letterSpacing: '0.5px',
  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
}));

export const MobileLink = styled(RouterLink)(() => ({
  background:
    'linear-gradient(135deg, var(--brand-blue) 0%, var(--brand-blue-light) 100%)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  color: 'transparent',
  textDecoration: 'none',
  transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
    filter:
      'drop-shadow(0 2px 4px color-mix(in srgb, var(--brand-blue) 40%, transparent))',
  },
}));
