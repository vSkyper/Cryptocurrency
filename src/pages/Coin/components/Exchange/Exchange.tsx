import { useCallback, useState } from 'react';
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
  const [amount, setAmount] = useState<string>('');
  const [fromCryptoToCurrency, setFromCryptoToCurrency] =
    useState<boolean>(true);

  const { data: currencies, error: currenciesError } = useFetch<string[]>(
    'https://api.coingecko.com/api/v3/simple/supported_vs_currencies?x_cg_demo_api_key=CG-Gq8TjhLV8eipyhqmcRtXoZee'
  );

  const { data: exchangeRate, error: exchangeRateError } = useFetch<IExchange>(
    `https://api.coingecko.com/api/v3/simple/price?ids=${id}&vs_currencies=${currencyOption}&x_cg_demo_api_key=CG-Gq8TjhLV8eipyhqmcRtXoZee`
  );

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

  const handleChangeInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setAmount(e.target.value);
      setFromCryptoToCurrency(!fromCryptoToCurrency);
    },
    [fromCryptoToCurrency]
  );

  if (currenciesError || exchangeRateError) return <ErrorModal />;

  let currency: string | number = '';
  let crypto: string | number = '';
  if (currencies && exchangeRate) {
    switch (fromCryptoToCurrency) {
      case true:
        crypto = amount;
        currency = Number(amount) * exchangeRate[id]?.[currencyOption];
        if (!isFinite(currency)) currency = '';
        break;
      case false:
        currency = amount;
        crypto = Number(amount) / exchangeRate[id]?.[currencyOption];
        if (!isFinite(crypto)) crypto = '';
        break;
      // No Default
    }
  }

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
              value={crypto}
              onChange={handleChangeInput}
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
              value={currency}
              onChange={handleChangeInput}
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
