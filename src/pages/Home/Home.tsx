import { Global, Table } from './components';
import useFetch from 'hooks/useFetch';
import { ICoins, IGlobalData } from 'interfaces';
import { ErrorModal, LoadingModal } from 'components';

const API_KEY = 'CG-Gq8TjhLV8eipyhqmcRtXoZee';

const GLOBAL_API_URL = `https://api.coingecko.com/api/v3/global?x_cg_demo_api_key=${API_KEY}`;

const COINS_API_URL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&x_cg_demo_api_key=${API_KEY}&order=market_cap_desc&per_page=250&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d`;

const MAIN_CLASSES = 'relative w-full min-h-screen';
const CONTAINER_CLASSES =
  'relative z-[1] container mx-auto py-6 sm:py-8 px-4 sm:px-2';

export default function Home() {
  const { data: globalData, error: globalDataError } =
    useFetch<IGlobalData>(GLOBAL_API_URL);
  const { data: coins, error: coinsError } = useFetch<ICoins[]>(COINS_API_URL);

  const hasError = globalDataError || coinsError;
  const isLoading = !globalData || !coins;

  if (hasError) return <ErrorModal />;
  if (isLoading) return <LoadingModal />;

  return (
    <main className={MAIN_CLASSES}>
      <div className={CONTAINER_CLASSES}>
        <Global globalData={globalData} />
        <Table coins={coins} />
      </div>
    </main>
  );
}
