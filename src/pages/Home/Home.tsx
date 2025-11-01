import { Global, Table } from './components';
import useFetch from 'hooks/useFetch';
import { ICoins, IGlobalData } from 'interfaces';
import { ErrorModal, LoadingModal } from 'components';
import { API_ENDPOINTS } from 'config/api';
import { LAYOUT } from 'styles/styles';

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
  if (isLoading) return <LoadingModal />;

  return (
    <main className={LAYOUT.mainContainer}>
      <div className={LAYOUT.contentContainer}>
        <Global globalData={globalData} />
        <Table coins={coins} />
      </div>
    </main>
  );
}
