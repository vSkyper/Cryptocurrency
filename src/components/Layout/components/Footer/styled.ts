import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Foot = styled(Paper)(({ theme }) => ({
  boxShadow: 'none',
  marginTop: theme.spacing(4),
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(3, 2),
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(18, 18, 18, 0.8)'
      : 'rgba(245, 245, 245, 0.8)',
  borderTop: `1px solid ${theme.palette.divider}`,
  borderRadius: 0,
})) as typeof Paper;
