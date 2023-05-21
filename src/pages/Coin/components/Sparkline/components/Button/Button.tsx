import { Button } from '@mui/material';
import { useCallback } from 'react';

interface Props {
  setDays: React.Dispatch<React.SetStateAction<string>>;
  actualDays: string;
  days: string;
  daysFormatted: string;
  mobileDisappear: boolean;
}

export default function ButtonComponent({
  setDays,
  actualDays,
  days,
  daysFormatted,
  mobileDisappear,
}: Props) {
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
