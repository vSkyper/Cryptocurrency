import { useState } from 'react';
import { format } from 'date-fns';
import { ButtonComponent, ChartComponent } from './components';
import { ErrorModal } from 'components';
import { ISparkline } from 'interfaces';
import useFetch from 'hooks/useFetch';
import { buttons } from 'constants/coin';
import { SparklineProps } from './interface';
import { CircularProgress } from '@mui/material';
import { API_ENDPOINTS } from 'config/api';
import { LOADING, COIN } from 'styles/styles';

const DEFAULT_DAYS = '7';

const formatSparklineData = (prices: number[][]) => {
  return prices.map((priceData) => ({
    date: format(new Date(priceData[0]), 'MMM d y, hh:mm:ss a'),
    value: priceData[1],
  }));
};

export default function Sparkline({ id }: SparklineProps) {
  const [days, setDays] = useState<string>(DEFAULT_DAYS);

  const { data, error } = useFetch<ISparkline>(
    API_ENDPOINTS.coinMarketChart(id, days)
  );

  const sparkline = data?.prices ? formatSparklineData(data.prices) : undefined;

  if (error) return <ErrorModal />;

  return (
    <>
      {/* Time Period Buttons */}
      <div className={COIN.sparkline.buttonWrapper}>
        <div className={COIN.sparkline.buttonGroup}>
          {buttons.map((button) => (
            <ButtonComponent
              key={button.days}
              {...button}
              setDays={setDays}
              actualDays={days}
            />
          ))}
        </div>
      </div>

      {/* Chart Container */}
      <div className={COIN.sparkline.chartContainer}>
        {/* Loading State */}
        {!data && (
          <div className={LOADING.overlay}>
            <CircularProgress />
          </div>
        )}

        {sparkline && <ChartComponent sparkline={sparkline} days={days} />}
      </div>
    </>
  );
}
