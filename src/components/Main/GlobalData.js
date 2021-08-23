import { useState, useContext, Fragment } from 'react';
import {
  Grid,
  Box,
  FormControlLabel,
  Typography,
  Switch,
  Collapse,
  Grow,
} from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import {
  TrendingUpRounded as TrendingUpIcon,
  TrendingDownRounded as TrendingDownIcon,
} from '@material-ui/icons';
import { Context } from '../../Context';
import { Card, Percentage } from '../../styled/StyledComponents';

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

const GlobalData = () => {
  const [toggle, setToggle] = useState(false);
  const { globalData } = useContext(Context);

  let marketCap = Number(globalData.total_market_cap.usd).toLocaleString(
    'en-US',
    {
      maximumFractionDigits: 0,
      style: 'currency',
      currency: 'USD',
    }
  );

  let marketCapText = Number(
    globalData.total_market_cap.usd / 1000000000000
  ).toLocaleString('en-US', {
    maximumFractionDigits: 2,
    style: 'currency',
    currency: 'USD',
  });

  let marketCapPercentage = Number(
    globalData.market_cap_change_percentage_24h_usd / 100
  ).toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    style: 'percent',
  });

  let totalVolume = Number(globalData.total_volume.usd).toLocaleString(
    'en-US',
    {
      maximumFractionDigits: 0,
      style: 'currency',
      currency: 'USD',
    }
  );

  let totalVolumeText = Number(
    globalData.total_volume.usd / 1000000000
  ).toLocaleString('en-US', {
    maximumFractionDigits: 0,
    style: 'currency',
    currency: 'USD',
  });

  let marketCapPercentageBTC = Number(
    globalData.market_cap_percentage.btc / 100
  ).toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    style: 'percent',
  });

  let marketCapPercentageETH = Number(
    globalData.market_cap_percentage.eth / 100
  ).toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    style: 'percent',
  });

  let cryptocurrencies = Number(
    globalData.active_cryptocurrencies
  ).toLocaleString('en-US');

  return (
    <Fragment>
      <Box>
        <Grid container alignItems='center' sx={{ mt: 2, mb: 1 }}>
          <Typography variant='h5'>
            Cryptocurrency Prices by Market Cap
          </Typography>
          <FormControlLabel
            control={
              <IOSSwitch
                checked={toggle}
                sx={{ mr: 1 }}
                onChange={() => setToggle(!toggle)}
              />
            }
            label='Show Stats'
            sx={{ ml: 1.3, display: { xs: 'none', sm: 'block' } }}
          />
        </Grid>
        <Typography fontWeight='fontWeightLight'>
          The global cryptocurrency market cap today is {marketCapText}{' '}
          Trillion, a{' '}
          <Typography
            fontWeight='fontWeightLight'
            component='span'
            sx={
              globalData.market_cap_change_percentage_24h_usd < 0
                ? { color: 'error.light' }
                : { color: 'success.light' }
            }
          >
            {marketCapPercentage}
          </Typography>{' '}
          change in the last 24 hours. Total cryptocurrency trading volume in
          the last day is at {totalVolumeText} Billion. Bitcoin dominance is at{' '}
          {marketCapPercentageBTC} and Ethereum dominance is at{' '}
          {marketCapPercentageETH}. CoinGecko API is now tracking{' '}
          {cryptocurrencies} cryptocurrencies.
        </Typography>
      </Box>
      <FormControlLabel
        control={
          <IOSSwitch
            checked={toggle}
            sx={{ mr: 1 }}
            onChange={() => setToggle(!toggle)}
          />
        }
        label='Show Stats'
        sx={{ ml: 0.1, mt: 2, display: { xs: 'block', sm: 'none' } }}
      />
      <Collapse in={toggle}>
        <Grid container justifyContent='center' spacing={2} sx={{ mt: 0.1 }}>
          <Grow in={toggle}>
            <Grid item xs={12} md={6} lg={3}>
              <Card>
                <Typography
                  variant='h5'
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  {marketCap}
                  {globalData.market_cap_change_percentage_24h_usd < 0 ? (
                    <Percentage sx={{ color: 'error.light' }}>
                      {marketCapPercentage}
                      <TrendingDownIcon />
                    </Percentage>
                  ) : (
                    <Percentage sx={{ color: 'success.light' }}>
                      {marketCapPercentage}
                      <TrendingUpIcon />
                    </Percentage>
                  )}
                </Typography>
                <Typography fontWeight='fontWeightLight'>
                  Market Capitalization
                </Typography>
              </Card>
            </Grid>
          </Grow>
          <Grow
            in={toggle}
            style={{ transformOrigin: '0 0 0' }}
            {...(toggle ? { timeout: 1000 } : {})}
          >
            <Grid item xs={12} md={6} lg={3}>
              <Card>
                <Typography variant='h5'>{totalVolume}</Typography>
                <Typography fontWeight='fontWeightLight'>
                  24h Trading Volume
                </Typography>
              </Card>
            </Grid>
          </Grow>
          <Grow
            in={toggle}
            style={{ transformOrigin: '0 0 0' }}
            {...(toggle ? { timeout: 2000 } : {})}
          >
            <Grid item xs={12} md={6} lg={3}>
              <Card>
                <Typography variant='h5'>{marketCapPercentageBTC}</Typography>
                <Typography fontWeight='fontWeightLight'>
                  Bitcoin Market Cap Dominance
                </Typography>
              </Card>
            </Grid>
          </Grow>
          <Grow
            in={toggle}
            style={{ transformOrigin: '0 0 0' }}
            {...(toggle ? { timeout: 2500 } : {})}
          >
            <Grid item xs={12} md={6} lg={3}>
              <Card>
                <Typography variant='h5'>{cryptocurrencies}</Typography>
                <Typography fontWeight='fontWeightLight'># of Coins</Typography>
              </Card>
            </Grid>
          </Grow>
        </Grid>
      </Collapse>
    </Fragment>
  );
};

export default GlobalData;
