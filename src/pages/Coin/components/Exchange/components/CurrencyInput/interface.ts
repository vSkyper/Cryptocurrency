export interface CurrencyInputProps {
  label: string;
  symbol: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  children?: React.ReactNode;
}
