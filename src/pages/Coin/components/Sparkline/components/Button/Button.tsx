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
      sx={{ display: { xs: mobileDisappear ? 'none' : 'block', sm: 'block' } }}
      onClick={handleClicked}
    >
      {daysFormatted}
    </Button>
  );
}
