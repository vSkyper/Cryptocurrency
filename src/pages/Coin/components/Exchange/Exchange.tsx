import { useCallback, useState, useEffect } from 'react';
import {
  Grid,
  TextField,
  FilterOptionsState,
  createFilterOptions,
  AutocompleteRenderInputParams,
  Fade,
  CircularProgress,
} from '@mui/material';
import {
  SwapVert as SwapVertIcon,
  Calculate as CalculateIcon,
} from '@mui/icons-material';
import {
  InputCard,
  ModernExchangeCard,
  ExchangeHeader,
  SwapButton,
  CurrencySection,
  ExchangeRateDisplay,
  HeaderTitle,
  CurrencyAvatar,
  CurrencyLabelTypography,
  CurrencyLabelBox,
  StyledAutocomplete,
  StyledInputBase,
  RateText,
} from './styled';
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

const defaultFilterOptions = createFilterOptions<string>({
  matchFrom: 'start',
});

export default function Exchange(props: ExchangeProps) {
  const { id, symbol } = props;

  const [currencyOption, setCurrencyOption] = useState<string>('usd');
  const [cryptoAmount, setCryptoAmount] = useState<string>('');
  const [currencyAmount, setCurrencyAmount] = useState<string>('');
  const [lastEditedField, setLastEditedField] = useState<'crypto' | 'currency'>(
    'crypto'
  );
  const [isLoadingRate, setIsLoadingRate] = useState<boolean>(false);

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

  const filterOptions = useCallback(
    (options: string[], state: FilterOptionsState<string>) =>
      defaultFilterOptions(options, state).slice(0, 5),
    []
  );

  const handleOptionLabel = useCallback(
    (option: string) => option.toUpperCase(),
    []
  );

  const handleChangeAutocomplete = useCallback(
    (_: React.SyntheticEvent, value: string | null) => {
      if (value) setCurrencyOption(value);
    },
    []
  );

  const handleRenderInput = useCallback(
    (params: AutocompleteRenderInputParams) => (
      <TextField {...params} variant='standard' />
    ),
    []
  );

  const handleRenderOption = useCallback(
    (props: React.HTMLAttributes<HTMLLIElement>, option: string) => (
      <li {...props}>{option.toUpperCase()}</li>
    ),
    []
  );

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
    <Fade in timeout={800}>
      <ModernExchangeCard>
        {/* Header */}
        <ExchangeHeader>
          <CalculateIcon
            sx={{
              fontSize: { xs: '1.2rem', sm: '1.5rem' },
              color: 'primary.main',
              filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))',
            }}
          />
          <HeaderTitle variant='h6'>Exchange Calculator</HeaderTitle>
        </ExchangeHeader>

        {/* Currency Input Grid */}
        <Grid
          container
          justifyContent='center'
          alignItems='center'
          direction='column'
          spacing={0}
        >
          {/* Crypto Input */}
          <Grid size={12}>
            <CurrencySection>
              <CurrencyLabelBox>
                <CurrencyAvatar>
                  {symbol.charAt(0).toUpperCase()}
                </CurrencyAvatar>
                <CurrencyLabelTypography variant='subtitle2'>
                  {symbol.toUpperCase()}
                </CurrencyLabelTypography>
              </CurrencyLabelBox>
              <InputCard>
                <StyledInputBase
                  type='number'
                  value={cryptoAmount}
                  onChange={handleCryptoInputChange}
                  placeholder='0.00'
                />
              </InputCard>
            </CurrencySection>
          </Grid>

          {/* Swap Icon */}
          <SwapButton>
            <SwapVertIcon />
          </SwapButton>

          {/* Fiat Currency Input */}
          <Grid size={12}>
            <CurrencySection>
              <CurrencyLabelBox sx={{ mb: { xs: 0, sm: 0.5 } }}>
                <CurrencyAvatar>
                  {currencyOption.charAt(0).toUpperCase()}
                </CurrencyAvatar>
                <StyledAutocomplete
                  id='currencies-select'
                  value={currencyOption}
                  options={currencies ?? []}
                  filterOptions={filterOptions}
                  getOptionLabel={handleOptionLabel}
                  disableClearable
                  autoComplete
                  onChange={handleChangeAutocomplete}
                  renderInput={handleRenderInput}
                  renderOption={handleRenderOption}
                />
              </CurrencyLabelBox>
              <InputCard>
                <StyledInputBase
                  type='number'
                  value={currencyAmount}
                  onChange={handleCurrencyInputChange}
                  placeholder='0.00'
                />
              </InputCard>
            </CurrencySection>
          </Grid>
        </Grid>

        {/* Exchange Rate Display */}
        <ExchangeRateDisplay>
          {isLoadingRate ? (
            <CircularProgress size={16} sx={{ color: 'var(--brand-blue)' }} />
          ) : (
            currentRate && (
              <RateText variant='caption'>
                1 {symbol.toUpperCase()} = {formattedRate}
              </RateText>
            )
          )}
        </ExchangeRateDisplay>
      </ModernExchangeCard>
    </Fade>
  );
}
