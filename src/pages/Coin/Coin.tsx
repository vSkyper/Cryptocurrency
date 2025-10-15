import { useParams } from 'react-router-dom';
import {
  Exchange,
  Links,
  PriceCard,
  Sparkline,
  StackData,
  CoinHeader,
  AnimatedSection,
} from './components';
import { ErrorModal, LoadingModal } from 'components';
import { ICoin } from 'interfaces';
import useFetch from 'hooks/useFetch';
import { useEffect, useState } from 'react';

const API_KEY = 'CG-Gq8TjhLV8eipyhqmcRtXoZee';

const ANIMATION_DELAYS = {
  chart: 100,
  priceCard: 200,
  stackData: 300,
  exchange: 400,
  links: 500,
};

export default function Coin() {
  const { id } = useParams();

  const apiUrl = `https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false&x_cg_demo_api_key=${API_KEY}`;

  const { data, error } = useFetch<ICoin>(apiUrl);

  const [animations, setAnimations] = useState({
    chart: false,
    priceCard: false,
    stackData: false,
    exchange: false,
    links: false,
  });

  useEffect(() => {
    if (!data) return;

    const timers = [
      setTimeout(
        () => setAnimations((prev) => ({ ...prev, chart: true })),
        ANIMATION_DELAYS.chart
      ),
      setTimeout(
        () => setAnimations((prev) => ({ ...prev, priceCard: true })),
        ANIMATION_DELAYS.priceCard
      ),
      setTimeout(
        () => setAnimations((prev) => ({ ...prev, stackData: true })),
        ANIMATION_DELAYS.stackData
      ),
      setTimeout(
        () => setAnimations((prev) => ({ ...prev, exchange: true })),
        ANIMATION_DELAYS.exchange
      ),
      setTimeout(
        () => setAnimations((prev) => ({ ...prev, links: true })),
        ANIMATION_DELAYS.links
      ),
    ];

    return () => timers.forEach((timer) => clearTimeout(timer));
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

        {/* Chart & Price Card Row */}
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-2 sm:gap-4 mt-4'>
          <div className='lg:col-span-8'>
            <AnimatedSection show={animations.chart}>
              <Sparkline id={id} />
            </AnimatedSection>
          </div>

          <div className='lg:col-span-4'>
            <AnimatedSection show={animations.priceCard}>
              <PriceCard data={data} />
            </AnimatedSection>
          </div>
        </div>

        {/* Stats, Exchange & Links Row */}
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-2 sm:gap-4 mt-2 sm:mt-4'>
          <div className='lg:col-span-8'>
            <AnimatedSection show={animations.stackData}>
              <StackData marketData={data.market_data} />
            </AnimatedSection>
          </div>

          <div className='lg:col-span-4 flex flex-col gap-2 sm:gap-4'>
            <AnimatedSection show={animations.exchange}>
              <Exchange id={id} symbol={data.symbol} />
            </AnimatedSection>

            <AnimatedSection show={animations.links}>
              <Links data={data} />
            </AnimatedSection>
          </div>
        </div>
      </div>
    </main>
  );
}
