import { Global, Table } from './components';
import useFetch from 'hooks/useFetch';
import { ICoins, IGlobalData } from 'interfaces';
import { ErrorModal, InlineLoader } from 'components';
import { API_ENDPOINTS } from 'config/api';

export default function Home() {
  const { data: globalData, error: globalDataError } = useFetch<IGlobalData>(
    API_ENDPOINTS.global()
  );
  const { data: coins, error: coinsError } = useFetch<ICoins[]>(
    API_ENDPOINTS.coinsMarkets({
      sparkline: true,
      price_change_percentage: '1h,24h,7d',
    })
  );

  const hasError = globalDataError || coinsError;
  const isLoading = !globalData || !coins;

  if (hasError) return <ErrorModal />;

  if (isLoading)
    return (
      <main className='relative w-full min-h-screen flex flex-col'>
        <div className='relative z-1 container mx-auto px-4 sm:px-6 lg:px-8 pb-12 flex-1'>
          {/* Header placeholder */}
          <div className='mb-6'>
            <div className='h-28 sm:h-32 rounded-2xl bg-white/5 animate-pulse' />
          </div>

          {/* Cards & Table placeholders */}
          <div className='grid grid-cols-1 gap-4'>
            <div className='h-36 rounded-2xl bg-white/5 animate-pulse' />
            <div className='h-[520px] rounded-2xl bg-white/5 animate-pulse flex items-center justify-center'>
              <InlineLoader text='Loading table...' />
            </div>
          </div>
        </div>
      </main>
    );

  return (
    <main className='relative w-full min-h-screen flex flex-col'>
      <div className='relative z-1 container mx-auto px-4 sm:px-6 lg:px-8 pb-12 flex-1'>
        <Global globalData={globalData} />
        <Table coins={coins} />
      </div>
    </main>
  );
}
