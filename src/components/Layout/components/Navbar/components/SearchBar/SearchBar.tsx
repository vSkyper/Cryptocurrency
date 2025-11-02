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
import { NAVBAR } from 'styles/styles';

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
            className={NAVBAR.searchBar.input}
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
              className={NAVBAR.searchBar.dropdown}
            >
              {filteredCoins.length === 0 ? (
                <EmptyState />
              ) : (
                filteredCoins.map((coin) => (
                  <ComboboxOption
                    key={coin.id}
                    value={coin}
                    className={({ focus }) =>
                      `${NAVBAR.searchBar.optionBase} ${
                        focus
                          ? NAVBAR.searchBar.optionFocused
                          : NAVBAR.searchBar.optionUnfocused
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
