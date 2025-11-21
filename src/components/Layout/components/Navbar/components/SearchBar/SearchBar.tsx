import { useState, Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Combobox,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
  Transition,
} from '@headlessui/react';
import { ICoinsList } from 'interfaces';
import useFetch from 'hooks/useFetch';
import { ErrorModal } from 'components';
import { CoinOption, EmptyState, SearchIconContainer } from './components';
import { API_ENDPOINTS } from 'config/api';

const MAX_RESULTS = 8;
const BLUR_DELAY = 100;

export default function SearchBar() {
  const [query, setQuery] = useState<string>('');
  const [selectedCoin, setSelectedCoin] = useState<ICoinsList | null>(null);

  const navigate = useNavigate();
  const { data, error } = useFetch<ICoinsList[]>(API_ENDPOINTS.coinsList());

  const filteredCoins =
    query === ''
      ? []
      : (data || [])
          .filter((coin) =>
            coin.name.toLowerCase().startsWith(query.toLowerCase())
          )
          .slice(0, MAX_RESULTS);

  const handleChange = (coin: ICoinsList | null) => {
    if (!coin) return;
    setSelectedCoin(null);
    setQuery('');
    navigate(`/coins/${coin.id}`);
  };

  const handleBlur = () => {
    setTimeout(() => setQuery(''), BLUR_DELAY);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      setQuery('');
    }
  };

  const displayValue = (coin: ICoinsList | null) =>
    coin ? `${coin.name} (${coin.symbol?.toUpperCase()})` : '';

  if (error) return <ErrorModal />;

  const hasQuery = query.length > 0;
  const placeholder = data ? 'Search cryptocurrencies...' : 'Loading coins...';

  return (
    <Combobox value={selectedCoin} onChange={handleChange}>
      <div className='relative w-full'>
        <div className='relative'>
          <SearchIconContainer isLoading={!data} />

          <ComboboxInput
            className='w-full bg-white/5 text-white rounded-lg sm:rounded-xl py-2 sm:py-3 pl-10 sm:pl-16 pr-3 sm:pr-4 text-xs sm:text-base font-medium placeholder:text-white/30 transition-all duration-200 focus:outline-none focus:bg-white/10 focus:ring-1 focus:ring-(--brand-blue)/50 hover:bg-white/10 border border-white/5'
            placeholder={placeholder}
            displayValue={displayValue}
            onChange={(event) => setQuery(event.target.value)}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
          />
        </div>

        {hasQuery && (
          <Transition
            as={Fragment}
            show={hasQuery}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <ComboboxOptions
              modal={false}
              className='absolute mt-2 w-full overflow-hidden rounded-2xl bg-(--bg-dropdown) backdrop-blur-3xl border border-white/10 shadow-(--shadow-dropdown) z-50'
            >
              {filteredCoins.length === 0 ? (
                <EmptyState />
              ) : (
                filteredCoins.map((coin) => (
                  <ComboboxOption
                    key={coin.id}
                    value={coin}
                    className={({ focus }) =>
                      `relative cursor-pointer select-none px-3 sm:px-4 py-2 sm:py-3 transition-all duration-150 border-b border-white/5 last:border-0 ${
                        focus ? 'bg-(--brand-blue)/10' : 'bg-transparent'
                      }`
                    }
                  >
                    {({ focus }) => (
                      <CoinOption coin={coin} isFocused={focus} />
                    )}
                  </ComboboxOption>
                ))
              )}
            </ComboboxOptions>
          </Transition>
        )}
      </div>
    </Combobox>
  );
}
