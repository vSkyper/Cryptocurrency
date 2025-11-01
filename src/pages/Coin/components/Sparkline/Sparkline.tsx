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
import { CARD, LOADING } from 'styles/styles';

const DEFAULT_DAYS = '7';

const formatSparklineData = (prices: number[][]) => {
  return prices.map((priceData) => ({
    date: format(new Date(priceData[0]), 'MMM d y, hh:mm:ss a'),
    value: priceData[1],
  }));
};

const CHART_CONTAINER_CLASSES = `relative w-full rounded-xl overflow-hidden p-3 sm:p-4 ${CARD.tertiary} h-[280px] sm:h-[320px] md:h-[480px]`;

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
      <div className='mb-4'>
        <div className='flex justify-end gap-2 flex-wrap'>
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
      <div className={CHART_CONTAINER_CLASSES}>
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
