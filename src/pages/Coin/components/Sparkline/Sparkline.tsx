import { useState } from 'react';
import { format } from 'date-fns';
import { ButtonComponent, ChartComponent } from './components';
import { ErrorModal } from 'components';
import { ISparkline } from 'interfaces';
import useFetch from 'hooks/useFetch';
import { buttons } from 'constants/coin';
import { SparklineProps } from './interface';
import { CircularProgress } from '@mui/material';

const API_KEY = 'CG-Gq8TjhLV8eipyhqmcRtXoZee';
const DEFAULT_DAYS = '7';

const formatSparklineData = (prices: number[][]) => {
  return prices.map((priceData) => ({
    date: format(new Date(priceData[0]), 'MMM d y, hh:mm:ss a'),
    value: priceData[1],
  }));
};

const CHART_CONTAINER_CLASSES =
  'relative w-full bg-[var(--bg-tertiary)] rounded-xl overflow-hidden ' +
  'p-2 sm:p-3 h-[280px] sm:h-[320px] md:h-[480px]';

const LOADING_OVERLAY_CLASSES =
  'absolute inset-0 z-20 flex items-center justify-center bg-transparent';

export default function Sparkline({ id }: SparklineProps) {
  const [days, setDays] = useState<string>(DEFAULT_DAYS);

  const apiUrl = `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&x_cg_demo_api_key=${API_KEY}`;
  const { data, error } = useFetch<ISparkline>(apiUrl);

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
          <div className={LOADING_OVERLAY_CLASSES}>
            <CircularProgress />
          </div>
        )}

        {sparkline && <ChartComponent sparkline={sparkline} days={days} />}
      </div>
    </>
  );
}
