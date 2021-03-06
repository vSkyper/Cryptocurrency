import { useContext } from 'react';
import { Typography, Stack, Divider, Grid, Paper } from '@mui/material';
import { AllInclusiveRounded as AllInclusiveIcon } from '@mui/icons-material';
import { format, formatDistance } from 'date-fns';
import { Context } from '../../Context';

const StackData = () => {
  const { coin } = useContext(Context);

  return (
    <Paper sx={{ p: 2 }}>
      <Stack divider={<Divider orientation='horizontal' />} spacing={2}>
        <Grid container justifyContent='space-between'>
          <Typography>Market Capitalization</Typography>
          <Typography>
            {Number(coin.market_cap.usd).toLocaleString('en-US', {
              minimumFractionDigits: 0,
              maximumFractionDigits: 2,
              style: 'currency',
              currency: 'USD',
            })}
          </Typography>
        </Grid>
        <Grid container justifyContent='space-between'>
          <Typography>24h Trading Volume</Typography>
          <Typography>
            {Number(coin.total_volume.usd).toLocaleString('en-US', {
              minimumFractionDigits: 0,
              maximumFractionDigits: 2,
              style: 'currency',
              currency: 'USD',
            })}
          </Typography>
        </Grid>
        <Grid container justifyContent='space-between'>
          <Typography>Volume / Market Cap</Typography>
          <Typography>
            {(isFinite(Number(coin.total_volume.usd / coin.market_cap.usd))
              ? Number(coin.total_volume.usd / coin.market_cap.usd)
              : 0
            ).toLocaleString('en-US', {
              minimumFractionDigits: 0,
              maximumFractionDigits: 8,
            })}
          </Typography>
        </Grid>
        <Grid container justifyContent='space-between'>
          <Typography>24h Low / 24h High</Typography>
          <Typography>
            {Number(coin.low_24h.usd).toLocaleString('en-US', {
              minimumFractionDigits: 0,
              maximumFractionDigits: 8,
              style: 'currency',
              currency: 'USD',
            })}{' '}
            /{' '}
            {Number(coin.high_24h.usd).toLocaleString('en-US', {
              minimumFractionDigits: 0,
              maximumFractionDigits: 8,
              style: 'currency',
              currency: 'USD',
            })}
          </Typography>
        </Grid>
        <Grid container justifyContent='space-between'>
          <Typography>Market Cap Rank</Typography>
          <Typography>
            {coin.market_cap_rank == null
              ? 'N/A'
              : `#${Number(coin.market_cap_rank)}`}
          </Typography>
        </Grid>
        <Grid container justifyContent='space-between'>
          <Typography>Circulating Supply</Typography>
          <Typography>
            {Number(coin.circulating_supply).toLocaleString('en-US', {
              maximumFractionDigits: 0,
            })}
          </Typography>
        </Grid>
        <Grid container justifyContent='space-between'>
          <Typography>Total Supply</Typography>
          <Typography sx={{ display: 'flex', alignItems: 'center' }}>
            {coin.total_supply == null ? (
              <AllInclusiveIcon />
            ) : (
              Number(coin.total_supply).toLocaleString('en-US', {
                maximumFractionDigits: 0,
              })
            )}
          </Typography>
        </Grid>
        <Grid container justifyContent='space-between'>
          <Typography>All-Time High</Typography>
          <Grid item>
            <Grid container direction='column'>
              <Typography align='right'>
                {Number(coin.ath.usd).toLocaleString('en-US', {
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 8,
                  style: 'currency',
                  currency: 'USD',
                })}{' '}
                <Typography
                  fontWeight='fontWeightLight'
                  component='span'
                  sx={
                    coin.ath_change_percentage.usd < 0
                      ? { color: 'error.light' }
                      : { color: 'success.light' }
                  }
                >
                  {Number(coin.ath_change_percentage.usd / 100).toLocaleString(
                    'en-US',
                    {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                      style: 'percent',
                    }
                  )}
                </Typography>
              </Typography>
              <Typography align='right' fontWeight='fontWeightLight'>
                {format(new Date(coin.ath_date.usd), 'MMM d, y')} (
                {formatDistance(Date.now(), new Date(coin.ath_date.usd))})
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid container justifyContent='space-between'>
          <Typography>All-Time Low</Typography>
          <Grid item>
            <Grid container direction='column'>
              <Typography align='right'>
                {Number(coin.atl.usd).toLocaleString('en-US', {
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 8,
                  style: 'currency',
                  currency: 'USD',
                })}{' '}
                <Typography
                  fontWeight='fontWeightLight'
                  component='span'
                  sx={
                    coin.atl_change_percentage.usd < 0
                      ? { color: 'error.light' }
                      : { color: 'success.light' }
                  }
                >
                  {Number(coin.atl_change_percentage.usd / 100).toLocaleString(
                    'en-US',
                    {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                      style: 'percent',
                    }
                  )}
                </Typography>
              </Typography>
              <Typography align='right' fontWeight='fontWeightLight'>
                {format(new Date(coin.atl_date.usd), 'MMM d, y')} (
                {formatDistance(Date.now(), new Date(coin.atl_date.usd))})
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Stack>
    </Paper>
  );
};

export default StackData;
