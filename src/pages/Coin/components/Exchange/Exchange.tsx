import { useState } from 'react';
import { Typography, Grid, Divider, TextField } from '@mui/material';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
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
  const [fromCryptoToCurrency, setFromCryptoToCurrency] = useState<boolean>(true);

  const { data: currencies, error: currenciesError } = useFetch<string[]>(
    'https://api.coingecko.com/api/v3/simple/supported_vs_currencies'
  );

  const { data: exchangeRate, error: exchangeRateError } = useFetch<IExchange>(
    `https://api.coingecko.com/api/v3/simple/price?ids=${id}&vs_currencies=${currencyOption}`
  );

  if (currenciesError || exchangeRateError) return <ErrorModal />

  let currency: string | number = '';
  let crypto: string | number = '';
  if (currencies && exchangeRate) {
    switch (fromCryptoToCurrency) {
      case true:
        crypto = amount;
        currency = Number(amount) * exchangeRate[id]?.[currencyOption];
        !isFinite(currency) && (currency = '');
        break;
      case false:
        currency = amount;
        crypto = Number(amount) / exchangeRate[id]?.[currencyOption];
        !isFinite(crypto) && (crypto = '');
        break;
    }
  }

  const defaultFilterOptions = createFilterOptions({
    matchFrom: 'start',
  });

  const filterOptions = (options: any, state: any) =>
    defaultFilterOptions(options, state).slice(0, 5);

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
            getOptionLabel={(option: any) => option.toUpperCase()}
            disableClearable
            autoComplete
            onChange={(_, value: string) => setCurrencyOption(value)}
            renderInput={(params) => (
              <TextField {...params} variant='standard' />
            )}
            renderOption={(props, option: any) => (
              <li {...props}>{option.toUpperCase()}</li>
            )}
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
};