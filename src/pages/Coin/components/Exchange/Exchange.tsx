import { useCallback, useState, useEffect } from 'react';
import {
  Typography,
  Grid,
  TextField,
  FilterOptionsState,
  createFilterOptions,
  AutocompleteRenderInputParams,
  Autocomplete,
  Box,
  Fade,
  Avatar,
} from '@mui/material';
import {
  SwapVert as SwapVertIcon,
  Calculate as CalculateIcon,
} from '@mui/icons-material';
import {
  InputBaseExchange,
  InputCard,
  ModernExchangeCard,
  ExchangeHeader,
  AnimatedSwapButton,
  CurrencySection,
  ExchangeRateDisplay,
} from './styled';
import useFetch from 'hooks/useFetch';
import { IExchange } from 'interfaces';
import { ErrorModal } from 'components';
import { ExchangeProps } from './interface';

export default function Exchange(props: ExchangeProps) {
  const { id, symbol } = props;

  const [currencyOption, setCurrencyOption] = useState<string>('usd');
  const [cryptoAmount, setCryptoAmount] = useState<string>('');
  const [currencyAmount, setCurrencyAmount] = useState<string>('');
  const [lastEditedField, setLastEditedField] = useState<'crypto' | 'currency'>(
    'crypto'
  );

  const { data: currencies, error: currenciesError } = useFetch<string[]>(
    'https://api.coingecko.com/api/v3/simple/supported_vs_currencies?x_cg_demo_api_key=CG-Gq8TjhLV8eipyhqmcRtXoZee'
  );

  const { data: exchangeRate, error: exchangeRateError } = useFetch<IExchange>(
    `https://api.coingecko.com/api/v3/simple/price?ids=${id}&vs_currencies=${currencyOption}&x_cg_demo_api_key=CG-Gq8TjhLV8eipyhqmcRtXoZee`
  );

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

  const defaultFilterOptions = createFilterOptions<string>({
    matchFrom: 'start',
  });

  const filterOptions = useCallback(
    (options: string[], state: FilterOptionsState<string>) =>
      defaultFilterOptions(options, state).slice(0, 5),
    [defaultFilterOptions]
  );

  const handleOptionLabel = useCallback(
    (option: string) => option.toUpperCase(),
    []
  );

  const handleChangeAutocomplete = useCallback(
    (_: React.SyntheticEvent, value: string | null) => {
      if (!value) return;
      setCurrencyOption(value);
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

  const currentRate = exchangeRate?.[id]?.[currencyOption];
  const formattedRate = currentRate
    ? new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currencyOption.toUpperCase(),
        minimumFractionDigits: 2,
        maximumFractionDigits: 8,
      }).format(currentRate)
    : '';

  return (
    <Fade in timeout={800}>
      <ModernExchangeCard>
        <ExchangeHeader>
          <CalculateIcon
            sx={{
              fontSize: { xs: '1.2rem', sm: '1.5rem' },
              color: 'primary.main',
              filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))',
            }}
          />
          <Typography
            variant='h6'
            sx={{
              fontWeight: 700,
              fontSize: { xs: '1rem', sm: '1.25rem' },
              background: (theme) => `linear-gradient(135deg, 
                ${theme.palette.text.primary}, 
                ${theme.palette.primary.main}aa
              )`,
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
              letterSpacing: '-0.01em',
            }}
          >
            Exchange Calculator
          </Typography>
        </ExchangeHeader>

        <Grid
          container
          justifyContent='center'
          alignItems='center'
          direction='column'
          spacing={0}
        >
          <Grid size={12}>
            <CurrencySection>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: { xs: 0.5, sm: 1 },
                  mb: { xs: 0.5, sm: 1 },
                }}
              >
                <Avatar
                  sx={{
                    width: { xs: 20, sm: 24 },
                    height: { xs: 20, sm: 24 },
                    background: (theme) => `linear-gradient(135deg, 
                      ${theme.palette.primary.main}, 
                      ${theme.palette.secondary.main}
                    )`,
                    fontSize: { xs: '0.6rem', sm: '0.75rem' },
                    fontWeight: 700,
                  }}
                >
                  {symbol.charAt(0).toUpperCase()}
                </Avatar>
                <Typography
                  variant='subtitle2'
                  sx={{
                    fontWeight: 600,
                    color: 'text.primary',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    fontSize: { xs: '0.75rem', sm: '0.875rem' },
                  }}
                >
                  {symbol.toUpperCase()}
                </Typography>
              </Box>
              <InputCard>
                <InputBaseExchange
                  type='number'
                  value={cryptoAmount}
                  onChange={handleCryptoInputChange}
                  placeholder='0.00'
                  sx={{
                    '& input': {
                      fontSize: { xs: '1rem', sm: '1.1rem' },
                      fontWeight: 500,
                      color: 'text.primary',
                      textAlign: 'right',
                    },
                  }}
                />
              </InputCard>
            </CurrencySection>
          </Grid>

          <AnimatedSwapButton>
            <SwapVertIcon />
          </AnimatedSwapButton>

          <Grid size={12}>
            <CurrencySection>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: { xs: 0.5, sm: 1 },
                  mb: { xs: 0, sm: 0.5 },
                }}
              >
                <Avatar
                  sx={{
                    width: { xs: 20, sm: 24 },
                    height: { xs: 20, sm: 24 },
                    background: (theme) => `linear-gradient(135deg, 
                      ${theme.palette.primary.main}, 
                      ${theme.palette.secondary.main}
                    )`,
                    fontSize: { xs: '0.6rem', sm: '0.75rem' },
                    fontWeight: 700,
                  }}
                >
                  {currencyOption.charAt(0).toUpperCase()}
                </Avatar>
                <Autocomplete
                  sx={{
                    width: { xs: '60px', sm: '70px' },
                    '& .MuiInput-root': {
                      border: 'none',
                      '&:before': { display: 'none' },
                      '&:after': { display: 'none' },
                    },
                    '& .MuiInputBase-input': {
                      fontWeight: 600,
                      fontSize: { xs: '0.8rem', sm: '0.9rem' },
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      paddingRight: '0px !important',
                    },
                    '& .MuiAutocomplete-endAdornment': {
                      right: '4px',
                    },
                    '& .MuiAutocomplete-popupIndicator': {
                      padding: '2px',
                      marginRight: '0px',
                    },
                  }}
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
              </Box>
              <InputCard>
                <InputBaseExchange
                  type='number'
                  value={currencyAmount}
                  onChange={handleCurrencyInputChange}
                  placeholder='0.00'
                  sx={{
                    '& input': {
                      fontSize: { xs: '1rem', sm: '1.1rem' },
                      fontWeight: 500,
                      color: 'text.primary',
                      textAlign: 'right',
                    },
                  }}
                />
              </InputCard>
            </CurrencySection>
          </Grid>
        </Grid>

        {currentRate && (
          <Fade in timeout={1000}>
            <ExchangeRateDisplay>
              <Typography
                variant='caption'
                sx={{
                  fontWeight: 600,
                  color: 'text.secondary',
                  fontSize: { xs: '0.7rem', sm: '0.8rem' },
                }}
              >
                1 {symbol.toUpperCase()} = {formattedRate}
              </Typography>
            </ExchangeRateDisplay>
          </Fade>
        )}
      </ModernExchangeCard>
    </Fade>
  );
}
