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
import { ErrorModal, InlineLoader } from 'components';
import { ICoin } from 'interfaces';
import useFetch from 'hooks/useFetch';
import { useStaggeredAnimation } from 'hooks/useStaggeredAnimation';
import { API_ENDPOINTS } from 'config/api';

const ANIMATION_DELAYS = {
  chart: 100,
  priceCard: 200,
  stackData: 300,
  exchange: 400,
  links: 500,
};

export default function Coin() {
  const { id } = useParams();
  const { data, error } = useFetch<ICoin>(
    id ? API_ENDPOINTS.coin(id) : undefined
  );

  const animations = useStaggeredAnimation(ANIMATION_DELAYS, !!data);

  if (!id || error) return <ErrorModal />;

  if (!data)
    return (
      <main className='relative w-full min-h-screen flex flex-col'>
        <div className='relative z-1 container mx-auto px-4 sm:px-6 lg:px-8 pb-12 flex-1'>
          {/* Header skeleton */}
          <div className='mb-6'>
            <div className='h-20 sm:h-24 rounded-2xl bg-white/5 animate-pulse' />
          </div>

          {/* Chart & Price Card placeholders */}
          <div className='grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8 mt-6 sm:mt-8'>
            <div className='lg:col-span-8'>
              <div className='h-56 sm:h-72 rounded-2xl bg-white/5 animate-pulse flex items-center justify-center'>
                <InlineLoader text='Loading chart...' />
              </div>
            </div>

            <div className='lg:col-span-4'>
              <div className='h-40 rounded-2xl bg-white/5 animate-pulse flex items-center justify-center'>
                <InlineLoader text='Loading price...' />
              </div>
            </div>
          </div>

          {/* Stats, Exchange & Links placeholders */}
          <div className='grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8 mt-8 sm:mt-12'>
            <div className='lg:col-span-8'>
              <div className='h-80 rounded-2xl bg-white/5 animate-pulse' />
            </div>

            <div className='lg:col-span-4 flex flex-col gap-1.5 sm:gap-2 md:gap-4'>
              <div className='h-36 rounded-2xl bg-white/5 animate-pulse flex items-center justify-center'>
                <InlineLoader text='Loading exchange...' />
              </div>

              <div className='h-36 rounded-2xl bg-white/5 animate-pulse flex items-center justify-center'>
                <InlineLoader text='Loading links...' />
              </div>
            </div>
          </div>
        </div>
      </main>
    );

  return (
    <main className='relative w-full min-h-screen flex flex-col'>
      <div className='relative z-1 container mx-auto px-4 sm:px-6 lg:px-8 pb-12 flex-1'>
        <CoinHeader
          name={data.name}
          symbol={data.symbol}
          image={data.image?.large}
          marketCapRank={data.market_cap_rank}
        />

        {/* Chart & Price Card Row */}
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8 mt-6 sm:mt-8'>
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
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8 mt-8 sm:mt-12'>
          <div className='lg:col-span-8'>
            <AnimatedSection show={animations.stackData}>
              <StackData marketData={data.market_data} />
            </AnimatedSection>
          </div>

          <div className='lg:col-span-4 flex flex-col gap-1.5 sm:gap-2 md:gap-4'>
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
