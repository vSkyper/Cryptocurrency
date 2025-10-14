import { useState, useCallback, Fragment } from 'react';
import { useNavigate, NavigateFunction } from 'react-router-dom';
import {
  Combobox,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
  Transition,
} from '@headlessui/react';
import { Search as SearchIcon, ArrowForwardIos } from '@mui/icons-material';
import { CircularProgress } from '@mui/material';
import { ICoinsList } from 'interfaces';
import useFetch from 'hooks/useFetch';
import { ErrorModal } from 'components';

const API_KEY = 'CG-Gq8TjhLV8eipyhqmcRtXoZee';

export default function SearchBar() {
  const [query, setQuery] = useState<string>('');
  const [selectedCoin, setSelectedCoin] = useState<ICoinsList | null>(null);

  const navigate: NavigateFunction = useNavigate();

  const { data, error } = useFetch<ICoinsList[]>(
    `https://api.coingecko.com/api/v3/coins/list?include_platform=false&x_cg_demo_api_key=${API_KEY}`
  );

  const filteredCoins =
    query === ''
      ? []
      : (data || [])
          .filter((coin) =>
            coin.name.toLowerCase().startsWith(query.toLowerCase())
          )
          .slice(0, 8);

  const handleChange = useCallback(
    (coin: ICoinsList | null) => {
      if (!coin) return;
      setSelectedCoin(null);
      setQuery('');
      navigate(`/coins/${coin.id}`);
    },
    [navigate]
  );

  const handleBlur = useCallback(() => {
    // Clear query when input loses focus to hide dropdown
    setTimeout(() => setQuery(''), 100);
  }, []);

  const handleKeyDown = useCallback((event: React.KeyboardEvent) => {
    // Clear query when Escape is pressed to hide dropdown
    if (event.key === 'Escape') {
      setQuery('');
    }
  }, []);

  if (error) return <ErrorModal />;

  return (
    <Combobox value={selectedCoin} onChange={handleChange}>
      <div className='relative w-full'>
        <div className='relative'>
          {/* Search Icon or Loading Spinner */}
          <div className='absolute inset-y-0 left-0 flex items-center pl-4 sm:pl-5 pointer-events-none z-10'>
            {data ? (
              <SearchIcon className='text-[var(--brand-blue)] text-[1.2rem] sm:text-[1.3rem]' />
            ) : (
              <CircularProgress size={18} sx={{ color: 'var(--brand-blue)' }} />
            )}
          </div>

          {/* Input */}
          <ComboboxInput
            className='w-full bg-[var(--bg-tertiary-dark)] text-[var(--brand-blue)] rounded-xl py-2.5 sm:py-3 pl-12 sm:pl-14 pr-4 text-[0.95rem] sm:text-base font-medium placeholder:text-[color-mix(in_srgb,var(--brand-blue)_50%,transparent)] transition-all duration-200 focus:outline-none focus:bg-[color-mix(in_srgb,var(--bg-tertiary-dark)_85%,var(--brand-blue)_15%)] hover:bg-[color-mix(in_srgb,var(--bg-tertiary-dark)_90%,var(--brand-blue)_10%)]'
            placeholder={
              data ? 'Search cryptocurrencies...' : 'Loading coins...'
            }
            displayValue={(coin: ICoinsList | null) =>
              coin ? `${coin.name} (${coin.symbol?.toUpperCase()})` : ''
            }
            onChange={(event) => setQuery(event.target.value)}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
          />
        </div>

        {/* Dropdown - only show when query has text */}
        {query.length > 0 && (
          <Transition
            as={Fragment}
            show={query.length > 0}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <ComboboxOptions
              modal={false}
              className='absolute mt-0.5 w-full overflow-hidden rounded-2xl bg-[var(--bg-dropdown)] backdrop-blur-[40px] backdrop-saturate-[200%] shadow-[var(--shadow-dropdown)] z-50'
            >
              {filteredCoins.length === 0 ? (
                <div className='relative cursor-default select-none py-4 px-4 text-center text-[0.9rem] font-medium text-white/70'>
                  No cryptocurrencies found
                </div>
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
                      <div className='flex items-center justify-between gap-4'>
                        <div className='flex flex-col flex-1 min-w-0'>
                          <span
                            className={`font-semibold text-[0.95rem] leading-tight truncate ${
                              focus ? 'text-white' : 'text-white/90'
                            }`}
                          >
                            {coin.name}
                          </span>
                          <div className='flex items-center gap-2 mt-2.5'>
                            <span className='inline-flex items-center px-2 py-0.5 text-[0.7rem] font-semibold bg-[var(--chip-bg)] text-[var(--brand-blue)] border border-[var(--chip-border)] rounded-full h-5'>
                              {coin.symbol?.toUpperCase()}
                            </span>
                            <span className='text-[0.75rem] text-white/40 truncate flex-1'>
                              {coin.id}
                            </span>
                          </div>
                        </div>
                        <ArrowForwardIos
                          sx={{ fontSize: '0.9rem' }}
                          className={`transition-all duration-200 flex-shrink-0 ${
                            focus
                              ? 'text-[var(--brand-blue)] translate-x-1'
                              : 'text-white/20 translate-x-0'
                          }`}
                        />
                      </div>
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
