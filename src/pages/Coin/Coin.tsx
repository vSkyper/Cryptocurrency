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
import { useStaggeredAnimation } from 'hooks/useStaggeredAnimation';
import { API_ENDPOINTS } from 'config/api';
import { LAYOUT, GRID } from 'styles/styles';

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
  if (!data) return <LoadingModal />;

  return (
    <main className={LAYOUT.mainContainer}>
      <div className={LAYOUT.contentContainer}>
        <CoinHeader
          name={data.name}
          symbol={data.symbol}
          image={data.image?.large}
          marketCapRank={data.market_cap_rank}
        />

        {/* Chart & Price Card Row */}
        <div className={`${GRID.responsive12Col} mt-3 sm:mt-4`}>
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
        <div className={`${GRID.responsive12Col} mt-1.5 sm:mt-2 md:mt-4`}>
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
