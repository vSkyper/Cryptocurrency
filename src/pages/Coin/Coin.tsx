import { useParams } from 'react-router-dom';
import {
  Exchange,
  Links,
  PriceCard,
  Sparkline,
  StackData,
  CoinHeader,
} from './components';
import { ErrorModal, LoadingModal } from 'components';
import { ICoin } from 'interfaces';
import useFetch from 'hooks/useFetch';
import { useEffect, useState } from 'react';

const API_KEY = 'CG-Gq8TjhLV8eipyhqmcRtXoZee';

export default function Coin() {
  const { id } = useParams();

  const apiUrl = `https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false&x_cg_demo_api_key=${API_KEY}`;
  const { data, error } = useFetch<ICoin>(apiUrl);

  // Animation state
  const [showChart, setShowChart] = useState(false);
  const [showPriceCard, setShowPriceCard] = useState(false);
  const [showStackData, setShowStackData] = useState(false);
  const [showExchange, setShowExchange] = useState(false);
  const [showLinks, setShowLinks] = useState(false);

  useEffect(() => {
    if (data) {
      setTimeout(() => setShowChart(true), 100);
      setTimeout(() => setShowPriceCard(true), 200);
      setTimeout(() => setShowStackData(true), 300);
      setTimeout(() => setShowExchange(true), 400);
      setTimeout(() => setShowLinks(true), 500);
    }
  }, [data]);

  if (!id || error) return <ErrorModal />;
  if (!data) return <LoadingModal />;

  return (
    <main className='relative w-full min-h-screen'>
      <div className='relative z-[1] container mx-auto py-6 sm:py-8 px-4 sm:px-2'>
        <CoinHeader
          name={data.name}
          symbol={data.symbol}
          image={data.image?.large}
          marketCapRank={data.market_cap_rank}
        />

        {/* Chart & Price Card */}
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-2 sm:gap-4 mt-4'>
          <div className='lg:col-span-8'>
            <div
              className={`transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                showChart
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
              }`}
            >
              <Sparkline id={id} />
            </div>
          </div>
          <div className='lg:col-span-4'>
            <div
              className={`transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                showPriceCard
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
              }`}
            >
              <PriceCard data={data} />
            </div>
          </div>
        </div>

        {/* StackData, Exchange, Links */}
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-2 sm:gap-4 mt-2 sm:mt-4'>
          <div className='lg:col-span-8'>
            <div
              className={`transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                showStackData
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
              }`}
            >
              <StackData marketData={data.market_data} />
            </div>
          </div>
          <div className='lg:col-span-4 flex flex-col gap-2 sm:gap-4'>
            <div
              className={`transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                showExchange
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
              }`}
            >
              <Exchange id={id} symbol={data.symbol} />
            </div>
            <div
              className={`transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                showLinks
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
              }`}
            >
              <Links data={data} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
