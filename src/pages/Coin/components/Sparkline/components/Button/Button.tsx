import {
  Button,
} from '@mui/material';

interface Props {
  setDays: React.Dispatch<React.SetStateAction<string>>;
  actualDays: string;
  days: string;
  daysFormatted: string;
  mobileDisappear: boolean;
}

export default function ButtonComponent({ setDays, actualDays, days, daysFormatted, mobileDisappear }: Props) {
  return (
    <Button
      color={actualDays === days ? 'primary' : 'inherit'}
      sx={{ display: { xs: mobileDisappear ? 'none' : 'block', sm: 'block' } }}
      onClick={() => setDays(days)}
    >
      {daysFormatted}
    </Button>
  )
}