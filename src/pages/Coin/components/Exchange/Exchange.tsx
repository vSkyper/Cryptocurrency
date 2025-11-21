import { useState, useEffect } from 'react';
import { ArrowDownward as ArrowDownwardIcon } from '@mui/icons-material';
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
import { ChevronIcon, CurrencyInput, LoadingSpinner } from './components';
import { API_ENDPOINTS } from 'config/api';
import { formatRateWithSuffix } from 'utils/formatters';

const MAX_DROPDOWN_ITEMS = 5;

export default function Exchange({ id, symbol }: ExchangeProps) {
  const [currencyOption, setCurrencyOption] = useState<string>('usd');
  const [cryptoAmount, setCryptoAmount] = useState<string>('');
  const [currencyAmount, setCurrencyAmount] = useState<string>('');
  const [lastEditedField, setLastEditedField] = useState<'crypto' | 'currency'>(
    'crypto'
  );
  const [isLoadingRate, setIsLoadingRate] = useState<boolean>(false);
  const [query, setQuery] = useState<string>('');

  const { data: currencies, error: currenciesError } = useFetch<string[]>(
    API_ENDPOINTS.supportedCurrencies()
  );
  const { data: exchangeRate, error: exchangeRateError } = useFetch<IExchange>(
    API_ENDPOINTS.exchangeRate(id, currencyOption)
  );

  const currentRate = exchangeRate?.[id]?.[currencyOption];

  const formattedRate = currentRate
    ? formatRateWithSuffix(currentRate, currencyOption)
    : '';

  const filteredCurrencies = (currencies ?? [])
    .filter((c) => c.startsWith((query ?? currencyOption ?? '').toLowerCase()))
    .slice(0, MAX_DROPDOWN_ITEMS);

  // Handle loading state
  useEffect(() => {
    setIsLoadingRate(true);
  }, [currencyOption]);

  useEffect(() => {
    if (exchangeRate && exchangeRate[id]?.[currencyOption]) {
      setIsLoadingRate(false);
    }
  }, [exchangeRate, id, currencyOption]);

  // Sync calculations when exchange rate changes
  useEffect(() => {
    if (!exchangeRate || (!cryptoAmount && !currencyAmount)) return;

    const rate = exchangeRate[id]?.[currencyOption];
    if (!rate) return;

    if (lastEditedField === 'crypto' && cryptoAmount) {
      const currencyValue = Number(cryptoAmount) * rate;
      setCurrencyAmount(
        isFinite(currencyValue) ? currencyValue.toString() : ''
      );
    } else if (lastEditedField === 'currency' && currencyAmount) {
      const cryptoValue = Number(currencyAmount) / rate;
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

  // Reset query when currency changes
  useEffect(() => {
    setQuery('');
  }, [currencyOption]);

  const handleChangeAutocomplete = (value: string | null) => {
    if (value) setCurrencyOption(value);
  };

  const handleCryptoInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCryptoAmount(value);
    setLastEditedField('crypto');

    if (value && exchangeRate) {
      const rate = exchangeRate[id]?.[currencyOption];
      const currencyValue = Number(value) * rate;
      setCurrencyAmount(
        isFinite(currencyValue) ? currencyValue.toString() : ''
      );
    } else {
      setCurrencyAmount('');
    }
  };

  const handleCurrencyInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;
    setCurrencyAmount(value);
    setLastEditedField('currency');

    if (value && exchangeRate) {
      const rate = exchangeRate[id]?.[currencyOption];
      const cryptoValue = Number(value) / rate;
      setCryptoAmount(isFinite(cryptoValue) ? cryptoValue.toString() : '');
    } else {
      setCryptoAmount('');
    }
  };

  if (currenciesError || exchangeRateError) return <ErrorModal />;

  return (
    <div className='relative z-10 p-4 sm:p-5 rounded-3xl bg-[#0a0a0f]/60 backdrop-blur-xl backdrop-saturate-150 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)]'>
      <div>
        {/* Header */}
        <div className='flex items-center justify-between mb-3 sm:mb-5'>
          <h3 className='text-lg sm:text-xl font-black text-white tracking-tighter'>
            Exchange Calculator
          </h3>
        </div>

        {/* Currency Input Grid */}
        <div className='flex flex-col items-center justify-center'>
          {/* Crypto Input */}
          <CurrencyInput
            label={symbol.toUpperCase()}
            symbol={symbol}
            value={cryptoAmount}
            onChange={handleCryptoInputChange}
          />

          {/* Swap Icon */}
          <div className='flex items-center justify-center text-white/20 mx-auto my-1 sm:my-2'>
            <ArrowDownwardIcon />
          </div>

          {/* Fiat Currency Input with Combobox */}
          <CurrencyInput
            label={currencyOption.toUpperCase()}
            symbol={currencyOption}
            value={currencyAmount}
            onChange={handleCurrencyInputChange}
          >
            <div className='w-14 sm:w-16'>
              <Combobox
                value={currencyOption}
                onChange={handleChangeAutocomplete}
              >
                <div className='relative flex items-center'>
                  <ComboboxInput
                    className='w-full bg-transparent text-xs sm:text-sm font-bold uppercase focus:outline-none pr-6 text-white/95 tracking-wide'
                    displayValue={() => currencyOption.toUpperCase()}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setQuery(e.target.value)
                    }
                  />
                  <ComboboxButton className='absolute right-0 p-1'>
                    <ChevronIcon />
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
                        anchor='bottom start'
                        className='z-20 mt-2 max-h-60 w-18 overflow-auto rounded-xl bg-(--bg-dropdown) py-1 sm:py-1.5 text-xs sm:text-sm shadow-(--shadow-dropdown) border border-white/10 backdrop-blur-xl'
                      >
                        {filteredCurrencies.map((option) => (
                          <ComboboxOption
                            key={option}
                            value={option}
                            className={({ focus }) =>
                              `cursor-pointer select-none px-2 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-base text-white/90 font-bold ${
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
          </CurrencyInput>
        </div>

        {/* Exchange Rate Display */}
        <div className='flex items-center justify-center gap-2 mt-3 sm:mt-5 rounded-xl px-3 sm:px-4 py-2 sm:py-2.5 bg-black/20 text-white/60 font-mono text-[0.6rem] sm:text-[0.65rem] font-bold tracking-wide uppercase'>
          {isLoadingRate ? (
            <LoadingSpinner />
          ) : (
            currentRate && (
              <div className='font-semibold text-xs sm:text-sm text-(--text-secondary)'>
                1 {symbol.toUpperCase()} = {formattedRate}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
