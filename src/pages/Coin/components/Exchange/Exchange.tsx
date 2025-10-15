import { useCallback, useState, useEffect } from 'react';
import {
  SwapVert as SwapVertIcon,
  Calculate as CalculateIcon,
} from '@mui/icons-material';
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
  Transition,
} from '@headlessui/react';
import useFetch from 'hooks/useFetch';
import { IExchange } from 'interfaces';
import { ErrorModal } from 'components';
import { ExchangeProps } from './interface';

const API_KEY = 'CG-Gq8TjhLV8eipyhqmcRtXoZee';

const formatCurrencyRate = (rate: number, currency: string): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency.toUpperCase(),
    minimumFractionDigits: 2,
    maximumFractionDigits: 8,
  }).format(rate);
};

export default function Exchange(props: ExchangeProps) {
  const { id, symbol } = props;

  const [currencyOption, setCurrencyOption] = useState<string>('usd');
  const [cryptoAmount, setCryptoAmount] = useState<string>('');
  const [currencyAmount, setCurrencyAmount] = useState<string>('');
  const [lastEditedField, setLastEditedField] = useState<'crypto' | 'currency'>(
    'crypto'
  );
  const [isLoadingRate, setIsLoadingRate] = useState<boolean>(false);
  const [query, setQuery] = useState<string>('');

  const { data: currencies, error: currenciesError } = useFetch<string[]>(
    `https://api.coingecko.com/api/v3/simple/supported_vs_currencies?x_cg_demo_api_key=${API_KEY}`
  );

  const { data: exchangeRate, error: exchangeRateError } = useFetch<IExchange>(
    `https://api.coingecko.com/api/v3/simple/price?ids=${id}&vs_currencies=${currencyOption}&x_cg_demo_api_key=${API_KEY}`
  );

  const currentRate = exchangeRate?.[id]?.[currencyOption];
  const formattedRate = currentRate
    ? formatCurrencyRate(currentRate, currencyOption)
    : '';

  useEffect(() => {
    setIsLoadingRate(true);
  }, [currencyOption]);

  useEffect(() => {
    if (exchangeRate && exchangeRate[id]?.[currencyOption]) {
      setIsLoadingRate(false);
    }
  }, [exchangeRate, id, currencyOption]);

  useEffect(() => {
    if (!exchangeRate || (!cryptoAmount && !currencyAmount)) return;

    if (lastEditedField === 'crypto' && cryptoAmount) {
      const currencyValue =
        Number(cryptoAmount) * exchangeRate[id]?.[currencyOption];
      setCurrencyAmount(
        isFinite(currencyValue) ? currencyValue.toString() : ''
      );
    } else if (lastEditedField === 'currency' && currencyAmount) {
      const cryptoValue =
        Number(currencyAmount) / exchangeRate[id]?.[currencyOption];
      setCryptoAmount(isFinite(cryptoValue) ? cryptoValue.toString() : '');
    }
  }, [
    exchangeRate,
    currencyOption,
    id,
    lastEditedField,
    cryptoAmount,
    currencyAmount,
  ]);

  const handleChangeAutocomplete = useCallback((value: string | null) => {
    if (value) setCurrencyOption(value);
  }, []);

  useEffect(() => {
    setQuery('');
  }, [currencyOption]);

  const filteredCurrencies = (currencies ?? [])
    .filter((c) => c.startsWith((query ?? currencyOption ?? '').toLowerCase()))
    .slice(0, 5);

  const handleCryptoInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setCryptoAmount(value);
      setLastEditedField('crypto');

      if (value && exchangeRate) {
        const currencyValue =
          Number(value) * exchangeRate[id]?.[currencyOption];
        setCurrencyAmount(
          isFinite(currencyValue) ? currencyValue.toString() : ''
        );
      } else {
        setCurrencyAmount('');
      }
    },
    [exchangeRate, id, currencyOption]
  );

  const handleCurrencyInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setCurrencyAmount(value);
      setLastEditedField('currency');

      if (value && exchangeRate) {
        const cryptoValue = Number(value) / exchangeRate[id]?.[currencyOption];
        setCryptoAmount(isFinite(cryptoValue) ? cryptoValue.toString() : '');
      } else {
        setCryptoAmount('');
      }
    },
    [exchangeRate, id, currencyOption]
  );

  if (currenciesError || exchangeRateError) return <ErrorModal />;

  return (
    <div className='transition-opacity duration-800'>
      <style>{`
        /* hide number input arrows */
        input[type=number]::-webkit-outer-spin-button,
        input[type=number]::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        input[type=number] { -moz-appearance: textfield; }
      `}</style>
      <div className='p-6 rounded-lg bg-[var(--bg-tertiary)]'>
        {/* Header */}
        <div className='flex items-center justify-center mb-4 gap-2'>
          <CalculateIcon
            className='text-[var(--brand-blue)]'
            sx={{
              fontSize: { xs: '1.2rem', sm: '1.5rem' },
            }}
          />
          <h3 className='font-bold text-lg md:text-xl bg-clip-text text-transparent bg-[linear-gradient(135deg,rgb(256,256,256)_20%,var(--brand-blue-light)_90%)]'>
            Exchange Calculator
          </h3>
        </div>

        {/* Currency Input Grid */}
        <div className='flex flex-col items-center justify-center'>
          {/* Crypto Input */}
          <div className='w-full'>
            <div className='flex flex-col gap-3 w-full'>
              <div className='flex items-center gap-3 mb-2'>
                <div className='w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold bg-gradient-to-br from-[var(--brand-blue)] to-[var(--brand-blue-light)] text-white/90'>
                  {symbol.charAt(0).toUpperCase()}
                </div>
                <div className='font-semibold uppercase text-sm text-white/90'>
                  {symbol.toUpperCase()}
                </div>
              </div>

              <div className='px-4 py-3 rounded-[16px] bg-[var(--bg-tertiary-dark)] w-full h-[70px] flex items-center'>
                <input
                  className='w-full text-right text-lg font-medium bg-transparent outline-none text-white/90'
                  type='number'
                  value={cryptoAmount}
                  onChange={handleCryptoInputChange}
                  placeholder='0.00'
                />
              </div>
            </div>
          </div>

          {/* Swap Icon */}
          <div className='mx-auto my-4 w-12 h-12 rounded-full bg-[color-mix(in_srgb,var(--brand-blue)_20%,transparent)] flex items-center justify-center pointer-events-none text-white/90'>
            <SwapVertIcon />
          </div>

          {/* Fiat Currency Input */}
          <div className='w-full'>
            <div className='flex flex-col gap-3 w-full'>
              <div className='flex items-center gap-3 mb-2'>
                <div className='w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold bg-gradient-to-br from-[var(--brand-blue)] to-[var(--brand-blue-light)] text-white/90'>
                  {currencyOption.charAt(0).toUpperCase()}
                </div>
                <div className='w-20'>
                  <Combobox
                    value={currencyOption}
                    onChange={handleChangeAutocomplete}
                  >
                    <div className='relative flex items-center'>
                      <ComboboxInput
                        className='w-full bg-transparent text-sm font-semibold uppercase focus:outline-none pr-6 text-white/90'
                        displayValue={() => currencyOption.toUpperCase()}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                          setQuery(e.target.value);
                        }}
                      />
                      <ComboboxButton className='absolute right-0 mr-1 p-1'>
                        <svg
                          className='h-4 w-4 text-[var(--brand-blue)]'
                          viewBox='0 0 20 20'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M6 8l4 4 4-4'
                            stroke='currentColor'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                      </ComboboxButton>

                      <Transition
                        as='div'
                        leave='transition ease-in duration-100'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'
                      >
                        {filteredCurrencies.length > 0 && (
                          <ComboboxOptions
                            modal={false}
                            className='absolute z-50 left-0 top-full mt-1 max-h-60 w-full overflow-auto rounded-md bg-[var(--bg-tertiary-dark)] py-1 text-sm shadow-lg'
                          >
                            {filteredCurrencies.map((option) => (
                              <ComboboxOption
                                key={option}
                                value={option}
                                className={({ focus }) =>
                                  `cursor-pointer select-none px-4 py-2 text-white/90 font-bold ${
                                    focus
                                      ? 'bg-[color-mix(in_srgb,var(--brand-blue)_10%,transparent)]'
                                      : ''
                                  }`
                                }
                              >
                                {option.toUpperCase()}
                              </ComboboxOption>
                            ))}
                          </ComboboxOptions>
                        )}
                      </Transition>
                    </div>
                  </Combobox>
                </div>
              </div>

              <div className='px-4 py-3 rounded-[16px] bg-[var(--bg-tertiary-dark)] w-full h-[70px] flex items-center'>
                <input
                  className='w-full text-right text-lg font-medium bg-transparent outline-none text-white/90'
                  type='number'
                  value={currencyAmount}
                  onChange={handleCurrencyInputChange}
                  placeholder='0.00'
                />
              </div>
            </div>
          </div>
        </div>

        {/* Exchange Rate Display */}
        <div className='flex items-center justify-center gap-2 p-2 mt-4 rounded-lg bg-[var(--bg-tertiary-dark)] min-h-[48px] text-white/50'>
          {isLoadingRate ? (
            <svg
              className='animate-spin h-4 w-4 text-[var(--brand-blue)]'
              viewBox='0 0 24 24'
            >
              <circle
                className='opacity-25'
                cx='12'
                cy='12'
                r='10'
                stroke='currentColor'
                strokeWidth='4'
                fill='none'
              />
              <path
                className='opacity-75'
                fill='currentColor'
                d='M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z'
              />
            </svg>
          ) : (
            currentRate && (
              <div className='font-semibold text-sm text-[var(--text-secondary)]'>
                1 {symbol.toUpperCase()} = {formattedRate}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
