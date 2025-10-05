import { Box, Chip, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const ModernLinksCard = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  borderRadius: 16,
  background: 'var(--bg-tertiary)',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(1.5),
    borderRadius: 12,
  },
}));

export const HeaderBox = styled(Box)({
  marginBottom: 24,
  paddingBottom: 16,
  borderBottom:
    '1px solid color-mix(in srgb, var(--brand-blue) 20%, transparent)',
  position: 'relative',
});

export const TitleTypography = styled(Typography)({
  fontWeight: 700,
  fontSize: '1.2rem',
  background:
    'linear-gradient(135deg, var(--brand-blue) 0%, var(--brand-blue-light) 70%)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  color: 'transparent',
  textAlign: 'center',
  letterSpacing: '-0.01em',
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: -8,
    left: '50%',
    transform: 'translateX(-50%)',
    width: '60px',
    height: '2px',
    background:
      'linear-gradient(90deg, var(--brand-blue), var(--brand-blue-light))',
    borderRadius: '1px',
  },
});

export const SectionTitle = styled(Typography)({
  color: 'color-mix(in srgb, var(--brand-blue) 80%, transparent)',
  fontWeight: 600,
  fontSize: '0.8rem',
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
  marginBottom: 16,
  textAlign: 'center',
});

export const LinksContainer = styled(Box)({
  display: 'flex',
  flexWrap: 'wrap',
  gap: 8,
  justifyContent: 'center',
});

export const StyledChip = styled(Chip)<{
  component?: React.ElementType;
  href?: string;
  clickable?: boolean;
}>(({ theme }) => ({
  borderRadius: theme.spacing(2),
  fontSize: '0.8rem',
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
    color: 'var(--brand-blue)',
  },
  '& .MuiChip-label': {
    padding: '0 8px',
    fontSize: '0.8rem',
    color: 'var(--brand-blue)',
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

export const PrimaryLinkChip = styled(StyledChip)({
  background:
    'linear-gradient(135deg, color-mix(in srgb, var(--brand-blue) 20%, transparent) 0%, color-mix(in srgb, var(--brand-blue-light) 10%, transparent) 100%)',
  border: '1px solid color-mix(in srgb, var(--brand-blue) 40%, transparent)',
  color: 'var(--brand-blue)',
  fontWeight: 600,
  height: 36,
  paddingLeft: 16,
  paddingRight: 16,
  '&:hover': {
    background:
      'linear-gradient(135deg, color-mix(in srgb, var(--brand-blue) 30%, transparent) 0%, color-mix(in srgb, var(--brand-blue-light) 15%, transparent) 100%)',
    border: '1px solid color-mix(in srgb, var(--brand-blue) 60%, transparent)',
    transform: 'translateY(-2px)',
    boxShadow:
      '0 1px 4px color-mix(in srgb, var(--brand-blue) 30%, transparent)',
  },
});

export const ForumChip = styled(StyledChip)({
  background:
    'linear-gradient(135deg, color-mix(in srgb, var(--brand-blue) 15%, transparent) 0%, color-mix(in srgb, var(--brand-blue-light) 8%, transparent) 100%)',
  border: '1px solid color-mix(in srgb, var(--brand-blue) 30%, transparent)',
  color: 'var(--brand-blue)',
  fontWeight: 500,
  height: 36,
  '&:hover': {
    background:
      'linear-gradient(135deg, color-mix(in srgb, var(--brand-blue) 25%, transparent) 0%, color-mix(in srgb, var(--brand-blue-light) 12%, transparent) 100%)',
    border: '1px solid color-mix(in srgb, var(--brand-blue) 50%, transparent)',
    transform: 'translateY(-2px)',
    boxShadow:
      '0 1px 4px color-mix(in srgb, var(--brand-blue) 20%, transparent)',
  },
});

export const ExplorerChip = styled(StyledChip)({
  background:
    'linear-gradient(135deg, color-mix(in srgb, var(--brand-blue-light) 12%, transparent) 0%, color-mix(in srgb, var(--brand-blue) 6%, transparent) 100%)',
  border:
    '1px solid color-mix(in srgb, var(--brand-blue-light) 25%, transparent)',
  color: 'var(--brand-blue-light)',
  fontSize: '0.75rem',
  height: 32,
  '&:hover': {
    background:
      'linear-gradient(135deg, color-mix(in srgb, var(--brand-blue-light) 20%, transparent) 0%, color-mix(in srgb, var(--brand-blue) 10%, transparent) 100%)',
    border:
      '1px solid color-mix(in srgb, var(--brand-blue-light) 40%, transparent)',
    transform: 'translateY(-1px)',
    boxShadow:
      '0 1px 4px color-mix(in srgb, var(--brand-blue-light) 20%, transparent)',
  },
});

export const RedditChip = styled(StyledChip)({
  background:
    'linear-gradient(135deg, rgba(255, 69, 0, 0.2) 0%, rgba(255, 69, 0, 0.1) 100%)',
  border: '1px solid rgba(255, 69, 0, 0.5)',
  color: '#CC3700',
  fontWeight: 600,
  height: 34,
  paddingLeft: 12,
  paddingRight: 12,
  '& .MuiChip-icon': {
    color: '#FF4500 !important',
  },
  '& .MuiChip-label': {
    color: '#CC3700',
  },
  '&:hover': {
    background:
      'linear-gradient(135deg, rgba(255, 69, 0, 0.3) 0%, rgba(255, 69, 0, 0.15) 100%)',
    border: '1px solid rgba(255, 69, 0, 0.8)',
    transform: 'translateY(-2px)',
    boxShadow: '0 1px 4px rgba(255, 69, 0, 0.5)',
  },
});

export const TwitterChip = styled(StyledChip)({
  background:
    'linear-gradient(135deg, rgba(29, 161, 242, 0.2) 0%, rgba(29, 161, 242, 0.1) 100%)',
  border: '1px solid rgba(29, 161, 242, 0.5)',
  color: '#1B8CD3',
  fontWeight: 600,
  height: 34,
  paddingLeft: 12,
  paddingRight: 12,
  '& .MuiChip-icon': {
    color: '#1DA1F2 !important',
  },
  '& .MuiChip-label': {
    color: '#1B8CD3',
  },
  '&:hover': {
    background:
      'linear-gradient(135deg, rgba(29, 161, 242, 0.3) 0%, rgba(29, 161, 242, 0.15) 100%)',
    border: '1px solid rgba(29, 161, 242, 0.8)',
    transform: 'translateY(-2px)',
    boxShadow: '0 1px 4px rgba(29, 161, 242, 0.5)',
  },
});

export const FacebookChip = styled(StyledChip)({
  background:
    'linear-gradient(135deg, rgba(24, 119, 242, 0.2) 0%, rgba(24, 119, 242, 0.1) 100%)',
  border: '1px solid rgba(24, 119, 242, 0.5)',
  color: '#1565C0',
  fontWeight: 600,
  height: 34,
  paddingLeft: 12,
  paddingRight: 12,
  '& .MuiChip-icon': {
    color: '#1877F2 !important',
  },
  '& .MuiChip-label': {
    color: '#1565C0',
  },
  '&:hover': {
    background:
      'linear-gradient(135deg, rgba(24, 119, 242, 0.3) 0%, rgba(24, 119, 242, 0.15) 100%)',
    border: '1px solid rgba(24, 119, 242, 0.8)',
    transform: 'translateY(-2px)',
    boxShadow: '0 1px 4px rgba(24, 119, 242, 0.5)',
  },
});

export const GitHubChip = styled(StyledChip)({
  background:
    'linear-gradient(135deg, rgba(139, 148, 158, 0.2) 0%, rgba(139, 148, 158, 0.1) 100%)',
  border: '1px solid rgba(139, 148, 158, 0.5)',
  color: '#7D8590',
  fontWeight: 600,
  height: 34,
  paddingLeft: 12,
  paddingRight: 12,
  '& .MuiChip-icon': {
    color: '#8B949E !important',
  },
  '& .MuiChip-label': {
    color: '#7D8590',
  },
  '&:hover': {
    background:
      'linear-gradient(135deg, rgba(139, 148, 158, 0.3) 0%, rgba(139, 148, 158, 0.15) 100%)',
    border: '1px solid rgba(139, 148, 158, 0.8)',
    transform: 'translateY(-2px)',
    boxShadow: '0 1px 4px rgba(139, 148, 158, 0.5)',
  },
});
