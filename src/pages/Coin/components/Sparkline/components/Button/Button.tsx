import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useCallback } from 'react';
import { ButtonProps } from './interface';

const StyledButton = styled(Button)(({ theme }) => ({
  minWidth: 48,
  borderRadius: theme.spacing(2),
  textTransform: 'none',
  padding: theme.spacing(0.5, 1),
  fontSize: '0.75rem',
  fontWeight: 600,
  transition:
    'transform 200ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 200ms cubic-bezier(0.4, 0, 0.2, 1)',
  border: `1px solid ${theme.palette.divider}40`,
  background: `${theme.palette.background.paper}cc`,
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(0.75, 1.5),
    fontSize: '0.875rem',
  },
  [theme.breakpoints.up('md')]: {
    '&:hover': {
      transform: 'translate3d(0, -2px, 0)',
      boxShadow: '0 6px 20px rgba(0,0,0,0.2)',
      border: `1px solid ${theme.palette.primary.main}60`,
    },
  },
  [theme.breakpoints.down('md')]: {
    transition: 'none',
  },
  '&.active': {
    background: `linear-gradient(135deg, 
      ${theme.palette.primary.main}, 
      ${theme.palette.secondary.main}
    )`,
    color: theme.palette.primary.contrastText,
    border: `1px solid ${theme.palette.primary.main}`,
    boxShadow: `0 4px 15px ${theme.palette.primary.main}40`,
    '&:hover': {
      boxShadow: `0 6px 20px ${theme.palette.primary.main}50`,
    },
  },
}));

export default function ButtonComponent(props: ButtonProps) {
  const { days, daysFormatted, setDays, actualDays, mobileDisappear } = props;

  const handleClicked = useCallback(() => {
    setDays(days);
  }, [days, setDays]);

  const isActive = actualDays === days;

  return (
    <StyledButton
      className={isActive ? 'active' : ''}
      size='small'
      sx={{
        display: {
          xs: mobileDisappear ? 'none' : 'inline-flex',
          sm: 'inline-flex',
        },
      }}
      onClick={handleClicked}
    >
      {daysFormatted}
    </StyledButton>
  );
}
