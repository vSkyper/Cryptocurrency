import React, { useContext } from 'react';
import { Typography, Grid } from '@material-ui/core';
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

const Price = () => {
  const { coin, Card } = useContext(PriceContext);

  return (
    <Grid item xs={12} lg={4}>
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
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Grid container justifyContent='center' sx={{ gap: 3, mt: 3 }}>
            <Grid item xs={5}>
              <Card>
                <Typography variant='h5'>
                  {Number(coin.market_data.low_24h.usd).toLocaleString(
                    'en-US',
                    {
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 8,
                      style: 'currency',
                      currency: 'USD',
                    }
                  )}
                </Typography>
                <Typography variant='subtitle1' fontWeight='fontWeightLight'>
                  Low 24h
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={5}>
              <Card>
                <Typography variant='h5'>
                  {Number(coin.market_data.high_24h.usd).toLocaleString(
                    'en-US',
                    {
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 8,
                      style: 'currency',
                      currency: 'USD',
                    }
                  )}
                </Typography>
                <Typography variant='subtitle1' fontWeight='fontWeightLight'>
                  High 24h
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={5} sm={3} lg={5}>
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
            <Grid item xs={5} sm={3} lg={5}>
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
            <Grid item xs={5} sm={3} lg={5}>
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
            <Grid item xs={5} sm={3} lg={5}>
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
            <Grid item xs={5} sm={3} lg={5}>
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
            <Grid item xs={5} sm={3} lg={5}>
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
