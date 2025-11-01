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

const INPUT_CLASSES =
  'w-full bg-[var(--bg-tertiary-dark)] text-[var(--brand-blue)] rounded-xl ' +
  'py-2.5 sm:py-3 pl-12 sm:pl-14 pr-4 text-[0.95rem] sm:text-base font-medium ' +
  'placeholder:text-[color-mix(in_srgb,var(--brand-blue)_50%,transparent)] ' +
  'transition-all duration-200 focus:outline-none ' +
  'focus:bg-[color-mix(in_srgb,var(--bg-tertiary-dark)_85%,var(--brand-blue)_15%)] ' +
  'hover:bg-[color-mix(in_srgb,var(--bg-tertiary-dark)_90%,var(--brand-blue)_10%)]';

const DROPDOWN_CLASSES =
  'absolute mt-0.5 w-full overflow-hidden rounded-2xl bg-[var(--bg-dropdown)] ' +
  'backdrop-blur-3xl backdrop-saturate-200 shadow-[var(--shadow-dropdown)] z-50';

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
            className={INPUT_CLASSES}
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
            <ComboboxOptions modal={false} className={DROPDOWN_CLASSES}>
              {filteredCoins.length === 0 ? (
                <EmptyState />
              ) : (
                filteredCoins.map((coin) => (
                  <ComboboxOption
                    key={coin.id}
                    value={coin}
                    className={({ focus }) =>
                      `relative cursor-pointer select-none px-4 py-3 transition-all duration-150 ${
                        focus ? 'bg-white/[0.08]' : 'bg-transparent'
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
