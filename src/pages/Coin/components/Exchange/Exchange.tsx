import { useCallback, useState, useEffect } from 'react';
import {
  Typography,
  Grid,
  Divider,
  TextField,
  FilterOptionsState,
  createFilterOptions,
  AutocompleteRenderInputParams,
  Autocomplete,
  IconButton,
  Box,
} from '@mui/material';
import { SwapHoriz as SwapHorizIcon } from '@mui/icons-material';
import { InputBaseExchange, InputCard, ModernExchangeCard } from './styled';
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

  // Recalculate when exchange rate or currency option changes
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

  const handleSwap = useCallback(() => {
    const tempCrypto = cryptoAmount;
    const tempCurrency = currencyAmount;
    setCryptoAmount(tempCurrency);
    setCurrencyAmount(tempCrypto);
    setLastEditedField(lastEditedField === 'crypto' ? 'currency' : 'crypto');
  }, [cryptoAmount, currencyAmount, lastEditedField]);

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
    <ModernExchangeCard>
      <Box sx={{ mb: 2 }}>
        <Typography
          variant='h6'
          sx={{
            fontWeight: 700,
            background: (theme) => `linear-gradient(135deg, 
              ${theme.palette.text.primary}, 
              ${theme.palette.primary.main}aa
            )`,
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
            mb: 2,
          }}
        >
          Exchange Calculator
        </Typography>
      </Box>

      <Grid
        container
        justifyContent='center'
        alignItems='center'
        direction='column'
        spacing={2}
      >
        <Grid size={12}>
          <InputCard>
            <Typography
              variant='subtitle2'
              sx={{
                fontWeight: 600,
                color: 'text.primary',
                minWidth: 50,
              }}
            >
              {symbol.toUpperCase()}
            </Typography>
            <Divider orientation='vertical' sx={{ mx: 2, height: 30 }} />
            <InputBaseExchange
              type='number'
              value={cryptoAmount}
              onChange={handleCryptoInputChange}
              placeholder='Enter amount'
              sx={{
                '& input': {
                  fontSize: '1rem',
                  fontWeight: 500,
                  color: 'text.primary',
                },
              }}
            />
          </InputCard>
        </Grid>

        <IconButton
          onClick={handleSwap}
          sx={{
            background: (theme) => `linear-gradient(135deg, 
              ${theme.palette.primary.main}20, 
              ${theme.palette.secondary.main}15
            )`,
            backdropFilter: 'blur(10px)',
            border: (theme) => `1px solid ${theme.palette.divider}40`,
            '&:hover': {
              background: (theme) => `linear-gradient(135deg, 
                ${theme.palette.primary.main}30, 
                ${theme.palette.secondary.main}25
              )`,
              transform: 'rotate(180deg)',
            },
            transition: 'all 300ms ease',
          }}
        >
          <SwapHorizIcon />
        </IconButton>

        <Grid size={12}>
          <InputCard>
            <Autocomplete
              sx={{
                width: 80,
                '& .MuiInput-root': {
                  border: 'none',
                  '&:before': {
                    display: 'none',
                  },
                  '&:after': {
                    display: 'none',
                  },
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
            <Divider orientation='vertical' sx={{ mx: 2, height: 30 }} />
            <InputBaseExchange
              type='number'
              value={currencyAmount}
              onChange={handleCurrencyInputChange}
              placeholder='Enter amount'
              sx={{
                '& input': {
                  fontSize: '1rem',
                  fontWeight: 500,
                  color: 'text.primary',
                },
              }}
            />
          </InputCard>
        </Grid>
      </Grid>
    </ModernExchangeCard>
  );
}
