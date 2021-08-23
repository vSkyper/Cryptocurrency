import React, { useEffect, useState, useContext } from 'react';
import {
  Typography,
  Grid,
  Paper,
  InputBase,
  FormControl,
  Select,
  MenuItem,
} from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import { SwapHoriz as SwapHorizIcon } from '@material-ui/icons';
import axios from 'axios';
import { ExchangeContext } from '../contexts/ExchangeContext';

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

const getCoinPrice = async (setExchangeRate, id, currencyOption, source) => {
  axios
    .get(
      `https://api.coingecko.com/api/v3/simple/price?ids=${id}&vs_currencies=${currencyOption}`,
      {
        cancelToken: source.token,
      }
    )
    .then((res) => {
      setExchangeRate(res.data[id][currencyOption]);
    })
    .catch((error) => console.log(error));
};

const Exchange = () => {
  const [currencies, setCurrencies] = useState([]);
  const [currencyOption, setCurrencyOption] = useState('usd');
  const [exchangeRate, setExchangeRate] = useState('');
  const [amount, setAmount] = useState('');
  const [fromCryptoToCurrency, setFromCryptoToCurrency] = useState(true);
  const { id, symbol } = useContext(ExchangeContext);

  useEffect(() => {
    axios
      .get('https://api.coingecko.com/api/v3/simple/supported_vs_currencies')
      .then((res) => {
        setCurrencies(res.data);
      })
      .catch((error) => console.log(error));
    return () => {
      setCurrencies([]);
    };
  }, []);

  useEffect(() => {
    let source = axios.CancelToken.source();
    getCoinPrice(setExchangeRate, id, currencyOption, source);
    const IntervalID = setInterval(() => {
      getCoinPrice(setExchangeRate, id, currencyOption, source);
    }, 5000);
    return () => {
      setExchangeRate('');
      clearInterval(IntervalID);
      source.cancel();
    };
  }, [id, currencyOption]);

  let currency, crypto;
  if (fromCryptoToCurrency) {
    crypto = amount;
    currency = amount * exchangeRate;
    if (!isFinite(currency)) {
      currency = '';
    }
  } else {
    currency = amount;
    crypto = amount / exchangeRate;
    if (!isFinite(crypto)) {
      crypto = '';
    }
  }

  return (
    <Grid
      container
      justifyContent='center'
      alignItems='center'
      direction={{ md: 'row', lg: 'column' }}
    >
      <Grid item>
        <InputCard sx={{ mb: { xs: 0.5, sm: 0 } }}>
          <Typography sx={{ p: 1 }}>{symbol.toUpperCase()}</Typography>
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
        sx={{ display: { xs: 'none', md: 'block' }, m: [1, 1, 1, 1] }}
      />
      <Grid item>
        <InputCard>
          <FormControl variant='standard'>
            {currencies.length > 0 && (
              <Select
                sx={{ m: 1, pl: 1 }}
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
            )}
          </FormControl>
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
