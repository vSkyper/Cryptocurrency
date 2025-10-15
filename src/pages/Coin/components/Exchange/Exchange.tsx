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
import { ChevronIcon, CurrencyInput, LoadingSpinner } from './components';

const API_KEY = 'CG-Gq8TjhLV8eipyhqmcRtXoZee';
const MAX_DROPDOWN_ITEMS = 5;

const formatCurrencyRate = (rate: number, currency: string): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency.toUpperCase(),
    minimumFractionDigits: 2,
    maximumFractionDigits: 8,
  }).format(rate);
};

const CONTAINER_CLASSES = 'p-6 rounded-lg bg-[var(--bg-tertiary)]';

const TITLE_CLASSES =
  'font-bold text-lg md:text-xl bg-clip-text text-transparent ' +
  'bg-[linear-gradient(135deg,rgb(256,256,256)_20%,var(--brand-blue-light)_90%)]';

const SWAP_ICON_CLASSES =
  'mx-auto my-4 w-10 h-10 rounded-full bg-[color-mix(in_srgb,var(--brand-blue)_20%,transparent)] ' +
  'flex items-center justify-center pointer-events-none text-white/90';

const RATE_DISPLAY_CLASSES =
  'flex items-center justify-center gap-2 p-2 mt-4 rounded-lg ' +
  'bg-[var(--bg-tertiary-dark)] min-h-12 text-white/50';

const COMBOBOX_INPUT_CLASSES =
  'w-full bg-transparent text-sm font-semibold uppercase focus:outline-none pr-6 text-white/90';

const COMBOBOX_OPTIONS_CLASSES =
  'absolute z-50 left-0 top-full mt-1 max-h-60 w-full overflow-auto ' +
  'rounded-md bg-[var(--bg-tertiary-dark)] py-1 text-sm shadow-lg';

const HIDE_SPINNER_STYLES = `
  input[type=number]::-webkit-outer-spin-button,
  input[type=number]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type=number] { -moz-appearance: textfield; }
`;

export default function Exchange({ id, symbol }: ExchangeProps) {
  const [currencyOption, setCurrencyOption] = useState<string>('usd');
  const [cryptoAmount, setCryptoAmount] = useState<string>('');
  const [currencyAmount, setCurrencyAmount] = useState<string>('');
  const [lastEditedField, setLastEditedField] = useState<'crypto' | 'currency'>(
    'crypto'
  );
  const [isLoadingRate, setIsLoadingRate] = useState<boolean>(false);
  const [query, setQuery] = useState<string>('');

  const currenciesUrl = `https://api.coingecko.com/api/v3/simple/supported_vs_currencies?x_cg_demo_api_key=${API_KEY}`;
  const exchangeRateUrl = `https://api.coingecko.com/api/v3/simple/price?ids=${id}&vs_currencies=${currencyOption}&x_cg_demo_api_key=${API_KEY}`;

  const { data: currencies, error: currenciesError } =
    useFetch<string[]>(currenciesUrl);
  const { data: exchangeRate, error: exchangeRateError } =
    useFetch<IExchange>(exchangeRateUrl);

  const currentRate = exchangeRate?.[id]?.[currencyOption];
  const formattedRate = currentRate
    ? formatCurrencyRate(currentRate, currencyOption)
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

  const handleChangeAutocomplete = useCallback((value: string | null) => {
    if (value) setCurrencyOption(value);
  }, []);

  const handleCryptoInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
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
    },
    [exchangeRate, id, currencyOption]
  );

  const handleCurrencyInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
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
    },
    [exchangeRate, id, currencyOption]
  );

  if (currenciesError || exchangeRateError) return <ErrorModal />;

  return (
    <div className='transition-opacity duration-800'>
      <style>{HIDE_SPINNER_STYLES}</style>

      <div className={CONTAINER_CLASSES}>
        {/* Header */}
        <div className='flex items-center justify-center mb-4 gap-2'>
          <CalculateIcon
            className='text-[var(--brand-blue)]'
            sx={{ fontSize: { xs: '1.2rem', sm: '1.5rem' } }}
          />
          <h3 className={TITLE_CLASSES}>Exchange Calculator</h3>
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
          <div className={SWAP_ICON_CLASSES}>
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
                    className={COMBOBOX_INPUT_CLASSES}
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
                        className={COMBOBOX_OPTIONS_CLASSES}
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
        <div className={RATE_DISPLAY_CLASSES}>
          {isLoadingRate ? (
            <LoadingSpinner />
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
