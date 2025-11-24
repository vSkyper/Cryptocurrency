import { useState } from 'react';
import { format } from 'date-fns';
import { ButtonComponent, ChartComponent } from './components';
import { InlineLoader } from 'components';
import { ISparkline } from 'interfaces';
import useFetch from 'hooks/useFetch';
import { buttons } from 'constants/coin';
import { SparklineProps } from './interface';
import { API_ENDPOINTS } from 'config/api';

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

  return (
    <>
      {/* Time Period Buttons */}
      <div className='mb-4 sm:mb-6 flex justify-end'>
        <div className='flex gap-1.5 p-1 bg-[#0a0a0f]/60 backdrop-blur-xl backdrop-saturate-150 rounded-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)]'>
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
      <div className='relative w-full rounded-3xl overflow-hidden sm:p-0 bg-transparent h-[250px] sm:h-[350px] md:h-[450px] transition-all duration-500'>
        {/* Loading State */}
        {!data && !error && (
          <div className='absolute inset-0 z-20 flex items-center justify-center bg-transparent'>
            <InlineLoader text='Loading chart...' />
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className='absolute inset-0 z-20 flex flex-col items-center justify-center bg-transparent text-slate-400 gap-2'>
            <p>Chart data unavailable</p>
          </div>
        )}

        {sparkline && !error && (
          <ChartComponent sparkline={sparkline} days={days} />
        )}
      </div>
    </>
  );
}
