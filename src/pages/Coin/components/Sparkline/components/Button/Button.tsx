import { Button } from '@mui/material';
import { useCallback } from 'react';
import { ButtonProps } from './interface';

export default function ButtonComponent(props: ButtonProps) {
  const { days, daysFormatted, setDays, actualDays, mobileDisappear } = props;

  const handleClicked = useCallback(() => {
    setDays(days);
  }, [days, setDays]);

  return (
    <Button
      color={actualDays === days ? 'primary' : 'inherit'}
      variant={actualDays === days ? 'contained' : 'text'}
      size='small'
      sx={{
        display: {
          xs: mobileDisappear ? 'none' : 'inline-flex',
          sm: 'inline-flex',
        },
        mr: 0.5,
        minWidth: 48,
        borderRadius: 999,
        textTransform: 'none',
        px: 1.25,
        transition: 'all 160ms ease',
        boxShadow: (theme) => (actualDays === days ? theme.shadows[2] : 'none'),
        '&:hover': {
          transform: 'translateY(-1px)',
          boxShadow: (theme) =>
            actualDays === days ? theme.shadows[4] : theme.shadows[1],
        },
      }}
      onClick={handleClicked}
    >
      {daysFormatted}
    </Button>
  );
}
