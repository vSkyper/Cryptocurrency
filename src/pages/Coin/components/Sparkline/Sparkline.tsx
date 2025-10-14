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

export default function Sparkline({ id }: SparklineProps) {
  const [days, setDays] = useState<string>(DEFAULT_DAYS);

  const apiUrl = `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&x_cg_demo_api_key=${API_KEY}`;
  const { data, error } = useFetch<ISparkline>(apiUrl);

  const sparkline = data?.prices ? formatSparklineData(data.prices) : undefined;

  if (error) return <ErrorModal />;

  return (
    <>
      {/* Buttons */}
      <div className='mb-4'>
        <div className='flex justify-end gap-2 flex-wrap'>
          {buttons.map((button) => (
            <div key={button.days}>
              <ButtonComponent
                {...button}
                setDays={setDays}
                actualDays={days}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Chart container */}
      <div className='relative w-full bg-[var(--bg-tertiary)] rounded-xl overflow-hidden p-2 sm:p-3 h-[280px] sm:h-[320px] md:h-[480px]'>
        {/* Loading backdrop */}
        {!data && (
          <div className='absolute inset-0 z-20 flex items-center justify-center bg-transparent'>
            <CircularProgress />
          </div>
        )}

        {sparkline && <ChartComponent sparkline={sparkline} days={days} />}
      </div>
    </>
  );
}
