import { useState, useContext } from 'react';
import {
  Typography,
  Grid,
  Paper,
  InputBase,
  Divider,
  FormControl,
  Select,
  MenuItem,
} from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import { SwapHoriz as SwapHorizIcon } from '@material-ui/icons';
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
      <SwapHorizIcon
        fontSize='large'
        sx={{ m: 1 }}
      />
      <Grid item>
        <InputCard>
          {currencies && (
            <FormControl variant='standard'>
              <Select
                sx={{ pl: 1 }}
                id='currencies-select'
                value={currencyOption}
                onChange={(e) => setCurrencyOption(e.target.value)}
              >
                {currencies.map((currency_opt) => (
                  <MenuItem key={currency_opt} value={currency_opt}>
                    {currency_opt.toUpperCase()}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          )}
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
