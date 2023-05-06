import {
  Button,
} from '@mui/material';

interface Props {
  setDays: React.Dispatch<React.SetStateAction<string>>;
  actualDays: string;
  days: string;
  daysFormatted: string;
}

export default function ButtonComponent({ setDays, actualDays, days, daysFormatted }: Props) {
  return (
    <Button
      color={actualDays === days ? 'primary' : 'inherit'}
      onClick={() => setDays(days)}
    >
      {daysFormatted}
    </Button>
  )
}