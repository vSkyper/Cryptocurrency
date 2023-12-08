export interface ButtonProps {
  setDays: React.Dispatch<React.SetStateAction<string>>;
  actualDays: string;
  days: string;
  daysFormatted: string;
  mobileDisappear: boolean;
}
