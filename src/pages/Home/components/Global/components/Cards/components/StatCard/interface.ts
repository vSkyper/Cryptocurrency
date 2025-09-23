// Type for card configuration
export interface CardConfig {
  key: string;
  value: string;
  label: string;
  color: string;
  percentage?: {
    value: string;
    change: number;
  };
  timeout: number;
}

export interface StatCardProps {
  config: CardConfig;
  toggle: boolean;
  isMobile: boolean;
}
