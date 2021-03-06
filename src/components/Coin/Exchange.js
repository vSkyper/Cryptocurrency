import { useState, useContext } from 'react';
import {
  Typography,
  Grid,
  Paper,
  InputBase,
  Divider,
  TextField,
} from '@mui/material';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import { styled } from '@mui/material/styles';
import { SwapHoriz as SwapHorizIcon } from '@mui/icons-material';
import useFetch from '../../useFetch';
import { Context } from '../../Context';

const InputBaseExchange = styled(InputBase)(({ theme }) => ({
  paddingLeft: 1,
  flex: 1,
  '& input[type=number]': {
    MozAppearance: 'textfield',
  },
  '& input[type=number]::-webkit-outer-spin-button': {
    WebkitAppearance: 'none',
    margin: 0,
  },
  '& input[type=number]::-webkit-inner-spin-button': {
    WebkitAppearance: 'none',
    margin: 0,
  },
}));

const InputCard = styled(Paper)(({ theme }) => ({
  paddingLeft: 15,
  paddingRight: 15,
  display: 'flex',
  alignItems: 'center',
  width: 300,
  height: 60,
  [theme.breakpoints.up('lg')]: {
    height: 70,
  },
}));

const Exchange = () => {
  const [currencyOption, setCurrencyOption] = useState('usd');
  const [amount, setAmount] = useState('');
  const [fromCryptoToCurrency, setFromCryptoToCurrency] = useState(true);
  const { id, symbol } = useContext(Context);

  const { data: currencies } = useFetch(
    'https://api.coingecko.com/api/v3/simple/supported_vs_currencies'
  );

  const { data: exchangeRate } = useFetch(
    `https://api.coingecko.com/api/v3/simple/price?ids=${id}&vs_currencies=${currencyOption}`
  );

  let currency, crypto;
  if (fromCryptoToCurrency) {
    crypto = amount;
    currency = amount * exchangeRate?.[id]?.[currencyOption];
    if (!isFinite(currency)) {
      currency = '';
    }
  } else {
    currency = amount;
    crypto = amount / exchangeRate?.[id]?.[currencyOption];
    if (!isFinite(crypto)) {
      crypto = '';
    }
  }

  const defaultFilterOptions = createFilterOptions({
    matchFrom: 'start',
  });

  const filterOptions = (options, state) =>
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
            getOptionLabel={(option) => option.toUpperCase()}
            disableClearable
            autoComplete
            onChange={(e, value) => {
              if (value != null) {
                setCurrencyOption(value);
              }
            }}
            renderInput={(params) => (
              <TextField {...params} variant='standard' />
            )}
            renderOption={(props, option) => (
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

export default Exchange;
