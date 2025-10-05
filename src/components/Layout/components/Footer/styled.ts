import { Box, Typography, Link } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Foot = styled(Box)(({ theme }) => ({
  boxShadow: 'none',
  marginTop: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(2, 2),
  background: 'color-mix(in srgb, var(--bg-primary) 80%, transparent)',
  borderRadius: 0,
  width: '100%',
  maxWidth: '100%',
  minWidth: '100vw',
  boxSizing: 'border-box',
  position: 'relative',
  left: 0,
  right: 0,
}));

export const FooterContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: theme.spacing(2),
  textAlign: 'center',
  width: '100%',
  maxWidth: 1200,
  padding: theme.spacing(0, 2),
  flexDirection: 'column',
  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row',
    padding: theme.spacing(0, 4),
  },
}));

export const LeftSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(1),
  [theme.breakpoints.up('sm')]: {
    alignItems: 'flex-start',
  },
}));

export const PoweredByText = styled(Typography)(() => ({
  color: 'text.secondary',
  fontSize: '14px',
  fontWeight: 500,
}));

export const ApiLink = styled(Link)(() => ({
  color: 'var(--brand-blue)',
  fontWeight: 600,
  fontSize: '14px',
  textDecoration: 'none',
  transition: 'color 200ms ease',
  '&:hover': {
    color: 'var(--brand-blue-light)',
  },
}));

export const SubtitleText = styled(Typography)(() => ({
  color: 'text.disabled',
  fontSize: '12px',
  fontWeight: 400,
}));

export const BadgeContainer = styled('a')(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  padding: theme.spacing(1.5),
  borderRadius: theme.spacing(2),
  background: 'color-mix(in srgb, var(--brand-blue) 10%, transparent)',
  transition: 'all 200ms ease',
  textDecoration: 'none',
  '&:hover': {
    background: 'color-mix(in srgb, var(--brand-blue) 15%, transparent)',
  },
}));

export const BadgeImage = styled('img')(({ theme }) => ({
  height: 32,
  width: 'auto',
  opacity: 0.9,
  transition: 'opacity 200ms ease',
  '&:hover': {
    opacity: 1,
  },
  [theme.breakpoints.up('sm')]: {
    height: 36,
  },
}));
