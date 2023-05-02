import {
  Button,
} from '@mui/material';

interface Props {
  setDays: React.Dispatch<React.SetStateAction<string>>;
  days: string;
  displayDays: string;
  displayDaysFormated: string;
  mobileDisappear: boolean;
}

export default function ButtonComponent({ setDays, days, displayDays, displayDaysFormated, mobileDisappear }: Props) {
  return (
    <Button
      color={days === displayDays ? 'primary' : 'inherit'}
      sx={{ display: { xs: mobileDisappear ? 'none' : 'block', sm: 'block' } }}
      onClick={() => setDays(displayDays)}
    >
      {displayDaysFormated}
    </Button>
  )
}