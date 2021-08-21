import React, { useState, useEffect, useContext, Fragment } from 'react';
import {
  Grid,
  Box,
  FormGroup,
  FormControlLabel,
  Typography,
  Switch,
  Paper,
} from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import {
  TrendingUp as TrendingUpIcon,
  TrendingDown as TrendingDownIcon,
} from '@material-ui/icons';
import axios from 'axios';
import { GlobalDataContext } from '../contexts/GlobalDataContext';

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName='.Mui-focusVisible' disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color:
        theme.palette.mode === 'light'
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22,
    height: 22,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));

const Card = styled(Paper)(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(2, 0),
}));

const GlobalData = () => {
  const { globalData, setGlobalData } = useContext(GlobalDataContext);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    axios
      .get('https://api.coingecko.com/api/v3/global')
      .then((res) => {
        setGlobalData(res.data.data);
      })
      .catch((error) => console.log(error));
    return () => {
      setGlobalData({});
    };
  }, [setGlobalData]);

  let marketCap,
    marketCapPercentage,
    totalVolume,
    marketCapPercentageBTC,
    marketCapPercentageETH,
    cryptocurrencies;
  if (Object.keys(globalData).length > 0) {
    marketCap = Number(globalData.total_market_cap.usd).toLocaleString(
      'en-US',
      {
        maximumFractionDigits: 0,
        style: 'currency',
        currency: 'USD',
      }
    );

    marketCapPercentage = Number(
      globalData.market_cap_change_percentage_24h_usd / 100
    ).toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
      style: 'percent',
    });

    totalVolume = Number(globalData.total_volume.usd).toLocaleString('en-US', {
      maximumFractionDigits: 0,
      style: 'currency',
      currency: 'USD',
    });

    marketCapPercentageBTC = Number(
      globalData.market_cap_percentage.btc / 100
    ).toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
      style: 'percent',
    });

    marketCapPercentageETH = Number(
      globalData.market_cap_percentage.eth / 100
    ).toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
      style: 'percent',
    });

    cryptocurrencies = Number(
      globalData.active_cryptocurrencies
    ).toLocaleString('en-US');
  }

  return (
    <Fragment>
      {Object.keys(globalData).length > 0 && (
        <Fragment>
          <Box>
            <FormGroup row sx={{ mt: 2, mb: 1 }}>
              <Typography variant='h5' sx={{ mt: 1, mr: 2 }}>
                Cryptocurrency Prices by Market Cap
              </Typography>
              <FormControlLabel
                control={
                  <IOSSwitch
                    sx={{ mr: 1 }}
                    onChange={() => setToggle(!toggle)}
                  />
                }
                label='Show Stats'
                sx={{ ml: 0.1, mt: 1 }}
              />
            </FormGroup>
            <Typography>
              The global cryptocurrency market cap today is {marketCap}, a{' '}
              <Typography
                component='span'
                sx={
                  marketCapPercentage < 0
                    ? { color: 'error.light' }
                    : { color: 'success.light' }
                }
              >
                {marketCapPercentage}
              </Typography>{' '}
              change in the last 24 hours. Total cryptocurrency trading volume
              in the last day is at {totalVolume}. Bitcoin dominance is at{' '}
              {marketCapPercentageBTC} and Ethereum dominance is at{' '}
              {marketCapPercentageETH}. CoinGecko API is now tracking{' '}
              {cryptocurrencies} cryptocurrencies.
            </Typography>
          </Box>
          {toggle && (
            <Grid container justifyContent='center' sx={{ gap: 4, mt: 2 }}>
              <Grid item xs={12} md={5} lg>
                <Card>
                  <Typography variant='h5'>
                    <Grid container justifyContent='center' alignItems='center'>
                      <Grid item>{marketCap}</Grid>
                      <Grid item sx={{ ml: 1 }}>
                        {marketCapPercentage < 0 ? (
                          <Typography
                            component='span'
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              color: 'error.light',
                            }}
                          >
                            {marketCapPercentage}
                            <TrendingDownIcon />
                          </Typography>
                        ) : (
                          <Typography
                            component='span'
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              color: 'success.light',
                            }}
                          >
                            {marketCapPercentage}
                            <TrendingUpIcon />
                          </Typography>
                        )}
                      </Grid>
                    </Grid>
                  </Typography>
                  <Typography variant='subtitle1'>
                    Market Capitalization
                  </Typography>
                </Card>
              </Grid>
              <Grid item xs={12} md={5} lg>
                <Card>
                  <Typography variant='h5'>{totalVolume}</Typography>
                  <Typography variant='subtitle1'>
                    24h Trading Volume
                  </Typography>
                </Card>
              </Grid>
              <Grid item xs={12} md={5} lg>
                <Card>
                  <Typography variant='h5'>{marketCapPercentageBTC}</Typography>
                  <Typography variant='subtitle1'>
                    Bitcoin Market Cap Dominance
                  </Typography>
                </Card>
              </Grid>
              <Grid item xs={12} md={5} lg>
                <Card>
                  <Typography variant='h5'>{cryptocurrencies}</Typography>
                  <Typography variant='subtitle1'># of Coins</Typography>
                </Card>
              </Grid>
            </Grid>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

export default GlobalData;
