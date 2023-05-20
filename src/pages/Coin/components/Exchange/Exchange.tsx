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
} from '@mui/material';
import { SwapHoriz as SwapHorizIcon } from '@mui/icons-material';
import { InputBaseExchange, InputCard } from './styled';
import useFetch from 'hooks/useFetch';
import { IExchange } from 'interfaces';
import { ErrorModal } from 'components';

interface Props {
  id: string;
  symbol: string;
}

export default function Exchange({ id, symbol }: Props) {
  const [currencyOption, setCurrencyOption] = useState<string>('usd');
  const [amount, setAmount] = useState<string>('');
  const [fromCryptoToCurrency, setFromCryptoToCurrency] =
    useState<boolean>(true);

  const { data: currencies, error: currenciesError } = useFetch<string[]>(
    'https://api.coingecko.com/api/v3/simple/supported_vs_currencies'
  );

  const { data: exchangeRate, error: exchangeRateError } = useFetch<IExchange>(
    `https://api.coingecko.com/api/v3/simple/price?ids=${id}&vs_currencies=${currencyOption}`
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

  const handleChange = useCallback(
    (e: React.SyntheticEvent, value: string | null) => {
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
    <Grid
      container
      justifyContent='center'
      alignItems='center'
      direction='column'
    >
      <Grid item>
        <InputCard>
          <Typography>{symbol.toUpperCase()}</Typography>
          <Divider orientation='vertical' sx={{ mx: 2 }} />
          <InputBaseExchange
            type='number'
            value={crypto}
            onChange={(e) => {
              setAmount(e.target.value);
              setFromCryptoToCurrency(true);
            }}
          />
        </InputCard>
      </Grid>
      <SwapHorizIcon fontSize='large' sx={{ m: 1 }} />
      <Grid item>
        <InputCard>
          <Autocomplete
            sx={{ width: 70 }}
            id='currencies-select'
            value={currencyOption}
            options={currencies ?? []}
            filterOptions={filterOptions}
            getOptionLabel={handleOptionLabel}
            disableClearable
            autoComplete
            onChange={handleChange}
            renderInput={handleRenderInput}
            renderOption={handleRenderOption}
          />
          <Divider orientation='vertical' sx={{ mx: 2 }} />
          <InputBaseExchange
            type='number'
            value={currency}
            onChange={(e) => {
              setAmount(e.target.value);
              setFromCryptoToCurrency(false);
            }}
          />
        </InputCard>
      </Grid>
    </Grid>
  );
}
