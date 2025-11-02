import { useState, useEffect } from 'react';
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
import { ChevronIcon, CurrencyInput, LoadingSpinner } from './components';
import { API_ENDPOINTS } from 'config/api';
import { formatCurrencyWithOptions } from 'utils/formatters';
import {
  CARD,
  TYPOGRAPHY,
  INPUT,
  DROPDOWN,
  CSS_SNIPPETS,
  COIN,
} from 'styles/styles';

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
    ? formatCurrencyWithOptions(currentRate, currencyOption)
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
    <div className='transition-opacity duration-800'>
      <style>{CSS_SNIPPETS.hideNumberInputSpinners}</style>

      <div className={CARD.base}>
        {/* Header */}
        <div className={COIN.exchange.headerWrapper}>
          <CalculateIcon
            className='text-[var(--brand-blue)]'
            sx={{ fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.5rem' } }}
          />
          <h3 className={TYPOGRAPHY.title}>Exchange Calculator</h3>
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
          <div className={COIN.exchange.swapIcon}>
            <SwapVertIcon />
          </div>

          {/* Fiat Currency Input with Combobox */}
          <CurrencyInput
            label={currencyOption.toUpperCase()}
            symbol={currencyOption}
            value={currencyAmount}
            onChange={handleCurrencyInputChange}
          >
            <div className='w-20'>
              <Combobox
                value={currencyOption}
                onChange={handleChangeAutocomplete}
              >
                <div className='relative flex items-center'>
                  <ComboboxInput
                    className={INPUT.combobox}
                    displayValue={() => currencyOption.toUpperCase()}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setQuery(e.target.value)
                    }
                  />
                  <ComboboxButton className='absolute right-0 mr-1 p-1'>
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
                        className={DROPDOWN.options}
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
          </CurrencyInput>
        </div>

        {/* Exchange Rate Display */}
        <div className={COIN.exchange.rateDisplay}>
          {isLoadingRate ? (
            <LoadingSpinner />
          ) : (
            currentRate && (
              <div className='font-semibold text-xs sm:text-sm text-[var(--text-secondary)]'>
                1 {symbol.toUpperCase()} = {formattedRate}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
