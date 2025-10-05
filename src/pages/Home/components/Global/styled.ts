import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const GlobalContainer = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(3),
}));

export const PageTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  fontWeight: 700,
  color: theme.palette.text.primary,
  lineHeight: 1.2,
  fontSize: '1.75rem',
  letterSpacing: '-0.01em',
  [theme.breakpoints.down('md')]: {
    fontSize: '1.6rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.4rem',
  },
}));

export const MobileSwitchContainer = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(3),
  display: 'block',
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
}));
