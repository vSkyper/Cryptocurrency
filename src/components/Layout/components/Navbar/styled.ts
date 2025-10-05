import { Box, AppBar, Toolbar } from '@mui/material';
import { styled } from '@mui/material/styles';

export const NavContainer = styled(Box)(() => ({
  flexGrow: 1,
}));

export const StyledAppBar = styled(AppBar)(() => ({
  backgroundColor: 'color-mix(in srgb, var(--bg-primary) 30%, transparent)',
  backdropFilter: 'blur(10px)',
  boxShadow: 'none',
  borderBottom: 'none',
}));

export const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  gap: theme.spacing(1),
  padding: theme.spacing(0, 1.5),
  minHeight: 60,
  position: 'relative',
  zIndex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderRadius: 0,
  flexWrap: 'nowrap',
  [theme.breakpoints.up('sm')]: {
    gap: theme.spacing(3),
    padding: theme.spacing(0, 3),
    minHeight: 72,
  },
  [theme.breakpoints.up('md')]: {
    gap: theme.spacing(4),
    padding: theme.spacing(0, 4),
  },
}));

export const LeftSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(0.5),
  flexShrink: 0,
  minWidth: 'auto',
  [theme.breakpoints.up('sm')]: {
    gap: theme.spacing(2),
  },
}));

export const SearchSection = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  minWidth: 0,
  margin: theme.spacing(0, 0.5),
  [theme.breakpoints.up('sm')]: {
    maxWidth: 400,
    minWidth: 200,
    margin: theme.spacing(0, 2),
  },
  [theme.breakpoints.up('md')]: {
    maxWidth: 500,
    margin: theme.spacing(0, 3),
  },
  [theme.breakpoints.up('lg')]: {
    maxWidth: 600,
  },
}));

export const RightSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(0.5),
  flexShrink: 0,
  minWidth: 'auto',
  [theme.breakpoints.up('sm')]: {
    gap: theme.spacing(1.5),
  },
}));

export const ToolbarSpacer = styled(Toolbar)(({ theme }) => ({
  minHeight: 60,
  [theme.breakpoints.up('sm')]: {
    minHeight: 72,
  },
}));
