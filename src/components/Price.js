import React, { useContext } from 'react';
import { Typography, Grid, Box } from '@material-ui/core';
import LinearProgress, {
  linearProgressClasses,
} from '@material-ui/core/LinearProgress';
import { styled } from '@material-ui/core/styles';
import {
  TrendingUpRounded as TrendingUpIcon,
  TrendingDownRounded as TrendingDownIcon,
} from '@material-ui/icons';
import { PriceContext } from '../contexts/PriceContext';

const PriceCard = styled(Typography)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

const Percentage = styled(Typography)(({ theme }) => ({
  marginLeft: 10,
  display: 'flex',
  alignItems: 'center',
  fontWeight: 300,
}));

const StyledLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  marginTop: 20,
  marginBottom: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    background: `linear-gradient(90deg, ${theme.palette.warning.light}, ${theme.palette.success.light})`,
  },
}));

const Price = () => {
  const { coin, Card } = useContext(PriceContext);

  let progressBarCurrent =
    Number(coin.market_data.current_price.usd) -
    Number(coin.market_data.low_24h.usd);
  let progressBarHigh =
    Number(coin.market_data.high_24h.usd) -
    Number(coin.market_data.low_24h.usd);
  let progressBar = 100 * (progressBarCurrent / progressBarHigh)

  if (progressBar > 100){
    progressBar = 100;
  }

  return (
    <Grid item xs={12} lg={5}>
      <Grid container direction='column'>
        <Grid item xs={12}>
          <Card>
            <PriceCard variant='h5'>
              {Number(coin.market_data.current_price.usd).toLocaleString(
                'en-US',
                {
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 8,
                  style: 'currency',
                  currency: 'USD',
                }
              )}
              {coin.market_data.price_change_percentage_24h < 0 ? (
                <Percentage sx={{ color: 'error.light' }}>
                  {Number(
                    coin.market_data.price_change_percentage_24h / 100
                  ).toLocaleString('en-US', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                    style: 'percent',
                  })}
                  <TrendingDownIcon />
                </Percentage>
              ) : (
                <Percentage sx={{ color: 'success.light' }}>
                  {Number(
                    coin.market_data.price_change_percentage_24h / 100
                  ).toLocaleString('en-US', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                    style: 'percent',
                  })}
                  <TrendingUpIcon />
                </Percentage>
              )}
            </PriceCard>
            <Typography variant='subtitle1' fontWeight='fontWeightLight'>
              Price
            </Typography>
            <Box sx={{ width: '90%' }}>
              <StyledLinearProgress variant='determinate' value={progressBar} />
              <Grid container justifyContent='space-between'>
                <Grid item>
                  {Number(coin.market_data.low_24h.usd).toLocaleString(
                    'en-US',
                    {
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 8,
                      style: 'currency',
                      currency: 'USD',
                    }
                  )}
                </Grid>
                <Grid item>24h Range</Grid>
                <Grid item>
                  {Number(coin.market_data.high_24h.usd).toLocaleString(
                    'en-US',
                    {
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 8,
                      style: 'currency',
                      currency: 'USD',
                    }
                  )}
                </Grid>
              </Grid>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Grid container justifyContent='center' spacing={2}>
            <Grid item xs={6} sm={4} lg={6}>
              <Card
                sx={
                  Number(coin.market_data.price_change_percentage_24h) < 0
                    ? { color: 'error.light' }
                    : { color: 'success.light' }
                }
              >
                <Typography variant='h5'>
                  {Number(
                    coin.market_data.price_change_percentage_24h / 100
                  ).toLocaleString('en-US', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                    style: 'percent',
                  })}
                </Typography>
                <Typography variant='subtitle1' fontWeight='fontWeightLight'>
                  Price Change 24h
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={6} sm={4} lg={6}>
              <Card
                sx={
                  Number(coin.market_data.price_change_percentage_7d) < 0
                    ? { color: 'error.light' }
                    : { color: 'success.light' }
                }
              >
                <Typography variant='h5'>
                  {Number(
                    coin.market_data.price_change_percentage_7d / 100
                  ).toLocaleString('en-US', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                    style: 'percent',
                  })}
                </Typography>
                <Typography variant='subtitle1' fontWeight='fontWeightLight'>
                  Price Change 7d
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={6} sm={4} lg={6}>
              <Card
                sx={
                  Number(coin.market_data.price_change_percentage_14d) < 0
                    ? { color: 'error.light' }
                    : { color: 'success.light' }
                }
              >
                <Typography variant='h5'>
                  {Number(
                    coin.market_data.price_change_percentage_14d / 100
                  ).toLocaleString('en-US', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                    style: 'percent',
                  })}
                </Typography>
                <Typography variant='subtitle1' fontWeight='fontWeightLight'>
                  Price Change 14d
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={6} sm={4} lg={6}>
              <Card
                sx={
                  Number(coin.market_data.price_change_percentage_30d) < 0
                    ? { color: 'error.light' }
                    : { color: 'success.light' }
                }
              >
                <Typography variant='h5'>
                  {Number(
                    coin.market_data.price_change_percentage_30d / 100
                  ).toLocaleString('en-US', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                    style: 'percent',
                  })}
                </Typography>
                <Typography variant='subtitle1' fontWeight='fontWeightLight'>
                  Price Change 30d
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={6} sm={4} lg={6}>
              <Card
                sx={
                  Number(coin.market_data.price_change_percentage_60d) < 0
                    ? { color: 'error.light' }
                    : { color: 'success.light' }
                }
              >
                <Typography variant='h5'>
                  {Number(
                    coin.market_data.price_change_percentage_60d / 100
                  ).toLocaleString('en-US', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                    style: 'percent',
                  })}
                </Typography>
                <Typography variant='subtitle1' fontWeight='fontWeightLight'>
                  Price Change 60d
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={6} sm={4} lg={6}>
              <Card
                sx={
                  Number(coin.market_data.price_change_percentage_1y) < 0
                    ? { color: 'error.light' }
                    : { color: 'success.light' }
                }
              >
                <Typography variant='h5'>
                  {Number(
                    coin.market_data.price_change_percentage_1y / 100
                  ).toLocaleString('en-US', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                    style: 'percent',
                  })}
                </Typography>
                <Typography variant='subtitle1' fontWeight='fontWeightLight'>
                  Price Change 1y
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Price;
