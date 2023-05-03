import { Typography, Stack, Divider, Grid, Paper } from '@mui/material';
import { AllInclusiveRounded as AllInclusiveIcon } from '@mui/icons-material';
import { format, formatDistance } from 'date-fns';
import { IMarketData } from '../../../../interfaces';

interface Props {
  marketData: IMarketData;
}

export default function StackData({ marketData }: Props) {

  return (
    <Paper sx={{ p: 2 }}>
      <Stack divider={<Divider orientation='horizontal' />} spacing={2}>
        <Grid container justifyContent='space-between'>
          <Typography>Market Capitalization</Typography>
          <Typography>
            {marketData.market_cap.usd.toLocaleString('en-US', {
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
            {marketData.total_volume.usd.toLocaleString('en-US', {
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
            {(isFinite(marketData.total_volume.usd / marketData.market_cap.usd)
              ? marketData.total_volume.usd / marketData.market_cap.usd
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
            {marketData.low_24h.usd.toLocaleString('en-US', {
              minimumFractionDigits: 0,
              maximumFractionDigits: 8,
              style: 'currency',
              currency: 'USD',
            })}{' '}
            /{' '}
            {marketData.high_24h.usd.toLocaleString('en-US', {
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
            {marketData.market_cap_rank == null
              ? 'N/A'
              : `#${marketData.market_cap_rank}`}
          </Typography>
        </Grid>
        <Grid container justifyContent='space-between'>
          <Typography>Circulating Supply</Typography>
          <Typography>
            {marketData.circulating_supply.toLocaleString('en-US', {
              maximumFractionDigits: 0,
            })}
          </Typography>
        </Grid>
        <Grid container justifyContent='space-between'>
          <Typography>Total Supply</Typography>
          <Typography sx={{ display: 'flex', alignItems: 'center' }}>
            {marketData.total_supply == null ? (
              <AllInclusiveIcon />
            ) : (
              marketData.total_supply.toLocaleString('en-US', {
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
                {marketData.ath.usd.toLocaleString('en-US', {
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 8,
                  style: 'currency',
                  currency: 'USD',
                })}{' '}
                <Typography
                  fontWeight='fontWeightLight'
                  component='span'
                  sx={
                    marketData.ath_change_percentage.usd < 0
                      ? { color: 'error.light' }
                      : { color: 'success.light' }
                  }
                >
                  {(marketData.ath_change_percentage.usd / 100).toLocaleString(
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
                {format(new Date(marketData.ath_date.usd), 'MMM d, y')} (
                {formatDistance(Date.now(), new Date(marketData.ath_date.usd))})
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid container justifyContent='space-between'>
          <Typography>All-Time Low</Typography>
          <Grid item>
            <Grid container direction='column'>
              <Typography align='right'>
                {marketData.atl.usd.toLocaleString('en-US', {
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 8,
                  style: 'currency',
                  currency: 'USD',
                })}{' '}
                <Typography
                  fontWeight='fontWeightLight'
                  component='span'
                  sx={
                    marketData.atl_change_percentage.usd < 0
                      ? { color: 'error.light' }
                      : { color: 'success.light' }
                  }
                >
                  {(marketData.atl_change_percentage.usd / 100).toLocaleString(
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
                {format(new Date(marketData.atl_date.usd), 'MMM d, y')} (
                {formatDistance(Date.now(), new Date(marketData.atl_date.usd))})
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Stack>
    </Paper>
  );
};